import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { dataRoutes } from "../data.routes"
import { Menu } from "lucide-react"

export function Navbar_mobile() {
    return (
        <Sheet>
            <SheetTrigger><Menu className="w-10 h-10 text-white"/></SheetTrigger>
            <SheetContent className="bg-black">
                <SheetHeader>
                        <ul className="w-full h-[100vh] flex flex-col items-center justify-center gap-y-14">
                            {
                                dataRoutes.map(({ url: path, title: component }, index) => (
                                    <li className="capitalize hover:bg-slate-400 text-2xl  text-white font-serif " key={index}>
                                        <a href={path}>{component}</a>      
                                    </li>
                                ))
                            }
                        </ul>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    )
}