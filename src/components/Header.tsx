import Image from "next/image"
import Link from "next/link";
import { ShoppingCart, User, Search } from 'lucide-react';

export default function Header() {
    return (
        <header className="flex justify-between items-center py-5 px-12 bg-[#101f37]"> 
            <Link href={'/'}>
                <Image src="/logo.png" alt="logo" width={60} height={0} className="cursor-pointer" />
            </Link>
            <nav>
                <ul className="flex space-x-5">
                    <li>
                        <Link href='/'>
                            <ShoppingCart color="#fff" size={24} />
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            <User color="#fff" size={24} />
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <Search color="#fff" size={24} />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}