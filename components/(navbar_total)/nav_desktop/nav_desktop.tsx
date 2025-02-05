import { dataRoutes } from "../data.routes"

export function Navbar_desktop() {
    return ( 
        <ul className="w-full h-full flex flex-row items-center justify-end gap-x-10">
            {
                dataRoutes.map(({ url: path, title: component }, index) => (
                    <li className="hover:text-slate-400  text-white font-serif " key={index}>
                        <a href={path}>{component}</a>      
                    </li>
                ))
            }
        </ul>
    )
}