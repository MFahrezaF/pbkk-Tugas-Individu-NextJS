'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation';


const menus = [
    {
        label: "Home",
        url: "/",
    },
    {
        label: "About",
        url: "/about",
    },
    {
        label: "Posts",
        url: "/posts",
    },
    {
        label: "Contact",
        url: "/contact",
    },
];
const Sidebar = () => {
    const pathName = usePathname();
    return (
        <div className="w-[18%] bg-gray-800 h-full flex justify-center p-4 py-10">
            <ul>
                <li className="mb-10 text-white font-bold text-xl">My Blog</li>
                {menus.map((menu, index) => (
                    <li key={index} className={`my-6 ${pathName==menu.url?'text-yellow-400 font-bold':'text-white'}`}
                    >
                        <Link href={menu.url}>{menu.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Sidebar;
