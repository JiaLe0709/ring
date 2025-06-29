import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import {PhotoProvider, PhotoView} from "react-photo-view";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";
import {ImageIcon, MapPinned, ArrowRight} from "lucide-react";
import {useRouter} from "next/router";
import Autoplay from "embla-carousel-autoplay"
import 'react-photo-view/dist/react-photo-view.css';

const PostsBox = ({posts, theme, order}) => {

    // order = true: New to Old
    const router = useRouter();

    return (
        <>
            {posts && posts
                .sort((a, b) => order === 'desc' ? (new Date(b.date) - new Date(a.date)) : (new Date(a.date) - new Date(b.date)))
                .filter(
                    (i) => i.image.length > 0
                )
                .map((i, id) => (
                    <div key={id}>
                        <Card className="w-full">
                            <CardContent>
                                <Carousel
                                    className="w-full"
                                    plugins={[
                                        Autoplay({
                                            delay: 2300,
                                        }),
                                    ]}>
                                    <CarouselContent>
                                        <PhotoProvider>
                                            {i.image.map((img, id) => (
                                                <CarouselItem key={id}>
                                                    <PhotoView
                                                        src={
                                                            "_next/image?url=" +
                                                            encodeURIComponent(`${process.env.NEXT_PUBLIC_SOURCES_URL}/${img.sources}/${img.item}`) +
                                                            "&w=1080&q=100"
                                                        }
                                                    >
                                                        <div>
                                                            <Image
                                                                quality={100}
                                                                src={`${process.env.NEXT_PUBLIC_SOURCES_URL}/${img.sources}/${img.item}`}
                                                                alt={`Image ${id + 1}`}
                                                                className="aspect-video w-full rounded-xl object-cover"
                                                                width={250}
                                                                height={200}
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
                                <CardTitle className={'flex gap-2 items-center'}>
                                    <p className={'text-xl'}>{i.date}</p>
                                    <div>
                                        <Badge
                                            className={`${theme.background} mr-2 ${theme.text} h-5 font-bold text-[12.5px] inline-flex items-center gap-1`}>
                                            <ImageIcon/>
                                            {i.image.length} image{(i.image.length > 1) && 's'}
                                        </Badge>
                                    </div>
                                </CardTitle>
                                <CardDescription className={'flex gap-2 overflow-x-auto justify-between'}>
                                    <div className="">
                                        {i.location && (
                                            <a
                                                target="_blank"
                                                href={`https://www.google.com/maps?q=${encodeURIComponent(i.location)}`}
                                                rel="noopener noreferrer"
                                            >
                                                <Badge
                                                    className={`${theme.background} ${theme.text} font-bold text-[12.5px] inline-flex items-center gap-1`}>
                                                    <MapPinned className={'w-5 h-5'}/>
                                                    {i.location}
                                                </Badge>
                                            </a>
                                        )}
                                    </div>
                                    <div onClick={() => {
                                        router.push(`/${i.id}`)
                                    }}>
                                        <ArrowRight className={'w-5 h-5 cursor-pointer'}/>
                                    </div>
                                </CardDescription>
                            </CardHeader>
                        </Card>
                        <br/>
                    </div>
                ))}
        </>
    )
}

export default PostsBox