import Image from 'next/image'
import {SearchIcon, ShoppingCartIcon, MenuIcon} from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/client';
import {useRouter} from 'next/router'
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';


function Header() {
    const [ session, loading ] = useSession();
    const router = useRouter();
    const items = useSelector(selectItems);
    
    const backtohome = () =>{
        router.push("/");
    }

    const gotocheckout = () =>{
        router.push("/checkout");
    }

    return (
        <header>
            {/* top header */}
            <div className="flex item-center bg-gray-500 p-1 flex-grow py-2">
                {/* image */}
                <div className="mt-2 mr-2 flex item-center flex-grow sm:flex-grow-0 text-white">
                <Image src="https://links.papareact.com/f90" width={130}
                height={30}
                objectFit="contain" className="cursor-pointer" onClick={backtohome}/>
                </div>

                {/* search */}
                <div className="hidden sm:flex bg-yellow-400 hover:bg-yellow-500 items-center h-10 rounded-md flex-grow cursor-pointer ">
                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text"/>
                    <SearchIcon 
                    className=" h-12 p-4 "/>
                </div>
                <div className="flex items-center space-x-6 mx-4 text-xs text-white whitespace-nowrap">
                    <div className="link" onClick={!session ? signIn : signOut}>
                        <p>{session ? `Hello, ${session.user.name}` : 'Sign In'}</p>
                        <p className="font-extrabold md:text-sm">Account</p>
                    </div>
                    <div className="link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>
                    <div className="link relative flex items-center" onClick={gotocheckout}>
                        <span className="absolute -top-1.5 right-0 md:-top-1 md:right-7 rounded-full bg-yellow-300  p-0.5 text-black font-bold">{items.length}</span>
                        <ShoppingCartIcon className="h-8"/>
                        <p  className="hidden md:flex font-extrabold md:text-sm mt-4">Cart</p>
                    </div>
                </div>
            </div>

            {/* bottom header */}
            <div className="px-5 flex items-center bg-gray-400 text-white h-10">
                <div className="link flex items-center font-bold">
                <MenuIcon className="h-8"/>
                    All</div>
                <div className="link menu">Best Sellers</div>
                <div className="link menu">Mobiles</div>
                <div className="link menu ">Prime</div>
                <div className="link menu">Fashion</div>
                <div className="link  menu">New Releases</div>
                <div className="link  menu">Electronics</div>
                <div className="link hidden md:inline  menu">Customer Services</div>
                <div className="link hidden md:inline menu ">Today's Deals</div>
                <div className="link hidden md:inline  menu">Amazon Pay</div>
            </div>
        </header>
    )
}

export default Header
