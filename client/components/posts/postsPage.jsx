import {PhotoProvider, PhotoView} from "react-photo-view";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";
import {ImageIcon, MapPinned, X, Send} from "lucide-react";
import {useRouter} from "next/router";
import 'react-photo-view/dist/react-photo-view.css';

const PostsPage = ({posts, theme}) => {

    const router = useRouter();

    return (
        <>
            {posts && 
                posts.map((i, id) => (
                    <div key={id}>
                        <div className="flex justify-between items-center mb-1 mt-3">
                            <h1 className="text-t-green font-bold text-2xl flex items-center">
                                <Image
                                    alt="Icon"
                                    src="/Letter.png"
                                    className="mr-2 w-8 h-8"
                                    width={100}
                                    height={100}
                                />
                                {i.date}
                            </h1>
                            <div className={'flex gap-3 items-center'}>
                                <Send
                                    onClick={() => {
                                        const shareData = {
                                            title: i.date,
                                            text: 'Image on '+ i.date,
                                            url: window.location.href,
                                        };
                                        navigator.share(shareData);
                                    }}
                                    className={'text-cyan-400 w-5 h-5 cursor-pointer '}
                                />
                                <X className={'text-red-400 w-6 h-6 cursor-pointer '} onClick={() => { router.push('/') }}/>
                            </div>
                        </div>
                        <div className={'flex gap-1 mt-1 mb-5'}>
                            <div>
                                <Badge
                                    className={`${theme.background} mr-2 ${theme.text} h-6 font-bold text-[12.5px] inline-flex items-center gap-1`}>
                                    <ImageIcon/>
                                    {i.image.length} image{(i.image.length > 1) && 's'}
                                </Badge>
                            </div>
                            <div>
                                {i.location && (
                                    <a
                                        target="_blank"
                                        href={`https://www.google.com/maps?q=${encodeURIComponent(i.location)}`}
                                        rel="noopener noreferrer"
                                    >
                                        <Badge
                                            className={`${theme.background} ${theme.text} h-6 font-bold text-[12.5px] inline-flex items-center gap-1`}>
                                            <MapPinned/>
                                            {i.location}
                                        </Badge>
                                    </a>
                                )}
                            </div>
                        </div>
                        {/*<hr className="h-2/3 rounded-sm my-4 bg-lime-300"/>*/}
                        <PhotoProvider>
                            {i.image.map((img, id) => (
                                <div key={id}>
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
                                    <br/>
                                </div>
                            ))}
                        </PhotoProvider>
                    </div>
                ))}
        </>
    )
}

export default PostsPage