import Layout from "@/layouts/global";
import Image from "next/image";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { MapPinned, ImageIcon } from "lucide-react";
import { getPosts } from "@/lib/posts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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

                    {posts && (
                        <div>
                            {posts.map((i, idx) => (
                                <div key={idx}>
                                    <Card className="w-full" key={idx}>
                                        <CardContent>
                                            <Carousel className="w-full">
                                                <CarouselContent>
                                                    <PhotoProvider>
                                                        {i.image.map((img, imgIdx) => (
                                                            <CarouselItem key={imgIdx}>
                                                                <PhotoView
                                                                    src={
                                                                        "_next/image?url=" +
                                                                        encodeURIComponent(img.url) +
                                                                        "&w=1080&q=100"
                                                                    }
                                                                >
                                                                    <div>
                                                                        <Image
                                                                            quality={100}
                                                                            src={img.url}
                                                                            alt={`Image ${imgIdx}`}
                                                                            className="aspect-video w-full rounded-2xl object-cover"
                                                                            width={250}
                                                                            height={200}
                                                                            priority={false}
                                                                        />
                                                                    </div>
                                                                </PhotoView>
                                                            </CarouselItem>
                                                        ))}
                                                    </PhotoProvider>
                                                </CarouselContent>
                                            </Carousel>
                                        </CardContent>
                                        <CardHeader>
                                            <CardTitle><p className={'text-xl'}>{i.date}</p></CardTitle>
                                            <CardDescription className={'flex gap-2 overflow-x-auto'}>
                                                <div className="">
                                                    {i.location && (
                                                        <a
                                                            target="_blank"
                                                            href={`https://www.google.com/maps?q=${encodeURIComponent(i.location)}`}
                                                            rel="noopener noreferrer"
                                                        >
                                                            <Badge className="bg-lime-200 font-bold text-[12.5px] inline-flex items-center gap-1">
                                                                <MapPinned />
                                                                {i.location}
                                                            </Badge>
                                                        </a>
                                                    )}
                                                </div>
                                                <div>
                                                    <Badge className="bg-lime-200 font-bold text-[12.5px] inline-flex items-center gap-1">
                                                        <ImageIcon />
                                                        {i.image.length} images
                                                    </Badge>
                                                </div>
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                    <br />
                                </div>
                            ))}
                        </div>

                    )}
                </div>
            </div>
        </Layout>
    )
}

export default Home;