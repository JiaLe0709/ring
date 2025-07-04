import {getSupabase} from "@/lib/supabase";

export async function getPosts() {

    const supabase = getSupabase()
    const {data: posts} = await supabase.from('posts').select()

    return posts
}

export async function getSpecificPosts(id) {

    const supabase = getSupabase()
    const {data: post} = await supabase.from('posts').select().eq('id', id)

    return post
}