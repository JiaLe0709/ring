import Layout from "@/layouts/global";
import Image from "next/image";
import React from "react";
import {useRouter} from "next/router";
import {Button} from "@/components/ui/button";
import {HomeIcon} from "lucide-react";

const NotFound = () => {

    const router = useRouter();

    return (
        <Layout>

            <div className="flex justify-center min-h-screen">
                <div className="w-full max-w-md items-center ">
                    <div className={'mt-24 justify-center md:items-center text-center'}>
                        <h1 className={'text-center text-4xl font-bold text-t-golden'}>
                            Page Not Found !
                        </h1>
                        <br/>
                        <Image
                            alt="ring"
                            src="/sad.png"
                            className="mx-auto"
                            width={250}
                            height={250}
                        />
                        <br/>

                        <h1 className="text-center text-xl font-bold text-t-golden">
                            {"Oops ! It's nothing on this page !"}
                        </h1>
                        <br/>
                        <Button
                            className={'bg-lime-200 cursor-pointer hover:bg-lime-300 font-bold inline-flex'}
                            onClick={() => {
                                router.push('/')
                            }}>
                            <HomeIcon className={'w-5 h-5'}/>
                            {"Back to Home"}
                        </Button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default NotFound;