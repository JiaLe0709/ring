import supabase from "@/lib/supabase";

export async function getPosts() {

    /**
     * Fetch posts from supabase
     * (Last Update: 2025-06-13)
     */

    const { data: posts } = await supabase.from('posts').select()

    return posts
}

export async function getSpecificPosts (id) {

    /**
     * Fetch post from supabase based on id
     * (Last Update: 2025-06-13)
     */

    const { data: post } = await supabase.from('posts').select().eq('id', id)

    return post
}