import Layout from "@/layouts/global";
import Image from "next/image";
import {useRouter} from "next/router";
import PostsBox from "@/components/posts/postsBox";
import {getPosts} from "@/lib/posts";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {Leaf} from "lucide-react";

export async function getStaticProps() {

    const posts = await getPosts();

    return {
        props: {
            posts
        },
        revalidate: 10,
    };
}

const Gold = ({ posts }) => {

    const router = useRouter();

    const theme = {
        text: 'text-t-d-golden',
        background: 'bg-amber-200',
    }

    return (
        <>
            <Layout>
                <div className="flex justify-center min-h-screen">
                    <div className="w-full max-w-md">
                        <div className="flex justify-between items-center mb-8">
                            <h1 className="text-t-golden font-bold text-2xl flex items-center">
                                <Image
                                    alt="ring"
                                    src="/ring-g.png"
                                    className="mr-2 w-6 h-6"
                                    width={100}
                                    height={100}
                                />
                                Ring
                            </h1>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <button onClick={() => { router.push('/') }}>
                                        <Leaf className={'w-5 h-5 text-lime-300 cursor-pointer'}/>
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent className={'bg-lime-200 fill-lime-200'}>
                                    <p>View Standard Version</p>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                        <PostsBox theme={theme} posts={posts} isGoldVersion={true}/>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Gold;