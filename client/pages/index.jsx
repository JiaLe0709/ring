import Layout from "@/layouts/global";
import Image from "next/image";
import {getPosts} from "@/lib/posts";
import PostsBox from "@/components/posts/postsBox";
import {CalendarArrowUp, CalendarArrowDown, Infinity} from "lucide-react";
import {useState} from "react";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip"
import React from 'react';
import {FloatButton} from 'antd';
import prisma from '@/lib/prisma'

export async function getStaticProps() {

    const selected_db_method = process.env.DB_METHOD;

    async function getPostsSources() {
        switch (selected_db_method) {
            case 'supabase':
                return getPosts();
            case 'postgres':
                return prisma.posts.findMany();
        }
    }

    const posts = await getPostsSources();

    return {
        props: {
            posts: JSON.parse(JSON.stringify(posts))
        },
        revalidate: 10,
    };
}

const Home = ({posts}) => {

    // Ascending Order: Old to New
    // Default: New to Old, (b - a) > 0 (Descending), Arrow UP
    const [order, setOrder] = useState('desc');
    const [carousel, setCarousel] = useState(false);

    const theme = {
        text: '',
        background: 'bg-lime-200',
    }

    //const router = useRouter();

    return (
        <Layout>
            <div className="flex justify-center min-h-screen">
                <div className="w-full max-w-md">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-t-green font-bold text-2xl flex items-center">
                            <Image
                                alt="ring"
                                src="/favicon.ico"
                                className="mr-2 w-6 h-6"
                                width={100}
                                height={100}
                            />
                            Ring
                        </h1>
                        <div className={'flex gap-3'}>
                            <button
                                onClick={() => {
                                    setCarousel(!carousel)
                                }}
                                className={`${carousel && 'text-lime-300 fill-lime-300'} cursor-pointer`}
                            >
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Infinity className={'w-5 h-5'}/>
                                    </TooltipTrigger>
                                    <TooltipContent className={'bg-lime-200 fill-lime-200'}>
                                        <p>Carousel: {carousel ? 'Enabled' : 'Disabled'}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </button>
                            <button
                                onClick={() => {
                                    setOrder((order === 'desc') ? 'asc' : 'desc')
                                }}
                                className={'text-lime-200 cursor-pointer'}
                            >
                                {order === 'desc' ?
                                    (
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <CalendarArrowUp className={'w-5 h-5'}/>
                                            </TooltipTrigger>
                                            <TooltipContent className={'bg-lime-200 fill-lime-200'}>
                                                <p>Current: New to Old</p>
                                            </TooltipContent>
                                        </Tooltip>

                                    ) :
                                    (
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <CalendarArrowDown className={'w-5 h-5'}/>
                                            </TooltipTrigger>
                                            <TooltipContent className={'bg-lime-200 fill-lime-200'}>
                                                <p>Current: Old to New</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    )
                                }
                            </button>
                        </div>
                    </div>
                    <PostsBox posts={posts} theme={theme} order={order} carousel={carousel}/>
                </div>
            </div>
            <FloatButton.BackTop/>
        </Layout>
    )
}

export default Home;