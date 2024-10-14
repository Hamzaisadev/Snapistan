import Link from "next/link";

import logo from '../../assets/Snapistan.png'
import Image from "next/image";
import UserButton from "@/components/ui/userbutton";
import SearchField from "@/components/ui/SearchField";

export default function Navbar(){
    return <header className="sticky top-0 bg-card z-10 shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-5 px-5 py-3">
            <Link href='/' className="text-2xl font-bold text-primary">
            <Image src={logo} alt="logo" className="h-12 w-48">
            </Image>
            </Link>
            <SearchField />
            <UserButton className="sm:ms-auto"/>
        </div>
    </header>
}