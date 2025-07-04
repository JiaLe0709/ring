import {getPosts, getSpecificPosts} from "@/lib/posts"
import PostsPage from "@/components/posts/postsPage";
import Layout from "@/layouts/global";
import prisma from '@/lib/prisma'

export async function getStaticPaths() {

    const selected_db_method = process.env.DB_METHOD;

    async function getPostsSlug() {
        switch (selected_db_method) {
            case 'supabase':
                return getPosts();
            case 'postgres':
                return prisma.posts.findMany();
        }
    }

    const slugs = await getPostsSlug();

    return {
        paths: slugs.map(post => ({
            params: {posts: post.id.toString()}
        })),
        fallback: true
    };
}

export async function getStaticProps({params}) {

    const selected_db_method = process.env.DB_METHOD;

    async function getPostsData(params) {
        switch (selected_db_method) {
            case 'supabase':
                return getSpecificPosts(params);
            case 'postgres':
                return prisma.posts.findUnique({
                    where: {
                        id: parseInt(params)
                    }
                });
        }
    }

    const post = await getPostsData(params.posts);

    return {
        props: {
            post: (selected_db_method === 'postgres') ? JSON.parse(JSON.stringify([post])) : post
        },
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
