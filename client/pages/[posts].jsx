import {getPosts, getSpecificPosts} from "@/lib/posts"
import PostsPage from "@/components/posts/postsPage";
import Layout from "@/layouts/global";

export async function getStaticPaths() {
    const slugs = await getPosts();

    return {
        paths: slugs.map(post => ({
            params: {posts: post.id.toString()}
        })),
        fallback: true
    };
}

export async function getStaticProps({params}) {
    const post = await getSpecificPosts(params.posts);

    return {
        props: {post},
        revalidate: 60,
    };
}

const Posts = ({post}) => {

    const theme = {
        text: '',
        background: 'bg-lime-200',
    }

    return (
        <Layout>
            <div className="flex justify-center min-h-screen">
                <div className="w-full max-w-md">
                    <PostsPage posts={post} theme={theme}/>
                </div>
            </div>
        </Layout>

    );
};

export default Posts;
