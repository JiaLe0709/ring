import Layout from "@/layouts/global";
import Image from "next/image";
import {PhotoProvider, PhotoView} from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import {Badge} from "@/components/ui/badge"
import {MapPinned} from "lucide-react";
import {getPosts} from "@/lib/posts";

export async function getStaticProps() {

    const posts = await getPosts()

    //console.log(posts)

    return {
        props: {
            posts
        }
    }
}

const Home = ({posts}) => {

    return (
        <Layout>
            <div className="flex flex-col items-center ">
                <div className="max-w-md">
                    <div className={'flex'}>
                        <h1 className={'text-t-green font-bold text-2xl'}>
                            <Image alt={"ring"} src={'/favicon.ico'} className={'mr-2 inline-block'} width={20}
                                   height={20}/>
                            Ring
                        </h1>
                    </div>
                    {posts && (
                        <div>
                            {posts.map((i, key) => (
                                <div key={key}>
                                    <h1 className={'text-c-green font-bold text-xl'}>{i.date}</h1>
                                    <p className={''}>
                                        {i.location && (
                                            <a target={'_blank'}
                                               href={`https://www.google.com/maps?q=${encodeURIComponent(i.location)}`}>
                                                    <Badge className={'bg-lime-200 font-bold text-[12.5px]'}>
                                                    <MapPinned/>
                                                    {i.location}
                                                </Badge>
                                            </a>
                                        )}
                                    </p>
                                    <Carousel className="w-full">
                                        <CarouselContent>
                                            <PhotoProvider>
                                                {i.image.map((img, key) => (
                                                    <PhotoView key={key}
                                                               src={'_next/image?url=' + encodeURIComponent(img.url) + '&w=1080&q=100'}>
                                                        <CarouselItem key={key}>
                                                            <div>
                                                                <Image
                                                                    quality={100}
                                                                    src={img.url}
                                                                    alt={key}
                                                                    className=" aspect-video w-full rounded-2xl  object-cover"
                                                                    width={250}
                                                                    height={200}
                                                                />
                                                            </div>
                                                        </CarouselItem>
                                                    </PhotoView>
                                                ))}
                                            </PhotoProvider>
                                        </CarouselContent>
                                    </Carousel>
                                    <p className={'text-lime-200'}>{posts[key].image.length} images.</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    )
}

export default Home