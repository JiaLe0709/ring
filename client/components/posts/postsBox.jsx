import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import {PhotoProvider, PhotoView} from "react-photo-view";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";
import {ImageIcon, MapPinned, Gem, FolderHeart} from "lucide-react";
import 'react-photo-view/dist/react-photo-view.css';
/*import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input";*/

const PostsBox = ({posts, theme, isGoldVersion}) => {

    return (
        <>
            {posts.map((i, id) => (
                <div key={id}>
                    <Card className="w-full" key={id}>
                        <CardContent>
                            <Carousel className="w-full">
                                <CarouselContent>
                                    <PhotoProvider>
                                        {i.image.map((img, id) => (
                                            <CarouselItem key={id}>
                                                <PhotoView
                                                    src={
                                                        isGoldVersion ?
                                                            "_next/image?url=" +
                                                            encodeURIComponent(img.hd) +
                                                            "&w=1080&q=100"
                                                            :
                                                            "_next/image?url=" +
                                                            encodeURIComponent(img.url) +
                                                            "&w=1080&q=100"
                                                    }
                                                >
                                                    <div>
                                                        <Image
                                                            quality={isGoldVersion ? 100 : 80}
                                                            src={isGoldVersion ? img.hd : img.url}
                                                            alt={`Image ${id}`}
                                                            className="aspect-video w-full rounded-2xl object-cover"
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
                                    {isGoldVersion && (
                                        <Badge
                                            className={`${theme.background} ${theme.text} font-bold text-[12.5px] inline-flex items-center gap-1`}>
                                            <Gem/>
                                            HD
                                        </Badge>
                                    )}
                                </div>
                            </CardTitle>
                            <CardDescription className={'flex gap-2 overflow-x-auto'}>
                                <div className="">
                                    {/*isGoldVersion && (
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <button>
                                                    <Badge
                                                        className={`${theme.background} ${theme.text} h-6 mr-2 font-bold text-[12.5px] inline-flex items-center gap-1`}>
                                                        <FolderHeart/>
                                                    </Badge>
                                                </button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-md">
                                                <DialogHeader>
                                                    <DialogTitle>Sources of images</DialogTitle>
                                                    <DialogDescription>
                                                        Link of images used in this post.
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <div className="flex items-center gap-2">
                                                    <div className="space-y-2 flex-1 gap-2">
                                                    {i.image.map((img, id) => (
                                                        <div key={id}>
                                                            <Input
                                                                id={id}
                                                                defaultValue={img.hd}
                                                                readOnly
                                                            />
                                                        </div>
                                                    ))}
                                                    </div>
                                                </div>
                                                <DialogFooter className="sm:justify-start">
                                                    <DialogClose asChild>
                                                    </DialogClose>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>
                                    )*/}
                                    {i.location && (
                                        <a
                                            target="_blank"
                                            href={`https://www.google.com/maps?q=${encodeURIComponent(i.location)}`}
                                            rel="noopener noreferrer"
                                        >
                                            <Badge
                                                className={`${theme.background} ${theme.text} font-bold text-[12.5px] inline-flex items-center gap-1`}>
                                                <MapPinned/>
                                                {i.location}
                                            </Badge>
                                        </a>
                                    )}
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