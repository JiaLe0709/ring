import Layout from "@/layouts/global";
import Image from "next/image";
import { getPosts } from "@/lib/posts";
import PostsBox from "@/components/posts/postsBox";
//import {useRouter} from "next/router";

export async function getStaticProps() {
    const posts = await getPosts();

    return {
        props: {
            posts
        },
        revalidate: 10,
    };
}

const Home = ({ posts }) => {

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
                    </div>
                    <PostsBox posts={posts} theme={theme} />
                </div>
            </div>
        </Layout>
    )
}

export default Home;