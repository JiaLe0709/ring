import { Dock, DockIcon } from "@/components/magicui/dock";
import {HomeIcon} from "lucide-react";

export function Docks () {
    return (
        <>
            <Dock direction="middle">
                <DockIcon>
                    <HomeIcon className="size-6" />
                </DockIcon>
            </Dock>
        </>
    )
}