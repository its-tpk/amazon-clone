import Image from "next/image"
import { useSelector } from "react-redux"
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header"
import {selectItems, selectTotal, selectTotalItems} from '../slices/basketSlice'
import Currency from 'react-currency-formatter'
import { useSession } from "next-auth/client";
import Head from "next/head";

function checkout() {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const totalItems = useSelector(selectTotalItems);
    const [session] = useSession();

    

    return (
        <div className="bg-gray-200">
             <Head>
        <title>Amazon 2.0 | checkout </title>
        </Head>
            <Header/>
            <main className="lg:flex">
                <div className="max-w-6xl mx-auto">
                    <Image src="https://links.papareact.com/ikj" alt=""
                    width={1020} height={250} objectFit="contain" />
                <div className="flex flex-col bg-white p-5  space-y-10">
                    <h1 className="text-3xl border-b pb-4"> {items.length ? ' Your Shopping Basket' : 'Your Basket seems void...'}</h1>
                    {items.map((item)=>(
                            <CheckoutProduct key={item.id} id={item.id} title={item.title} price={item.price} description={item.description} category={item.category} image={item.image}
                            ratings={item.ratings}
                            hasprime={item.hasprime}
                            quantity={item.quantity}
                            />
                    )
                    )
                    }
                </div>
                </div>
                <div className={` flex flex-col bg-white m-3 ${items.length && "p-5"} font-semibold`}>
                   {items.length > 0 && (
                       <>
                       <h2 className="whitespace-nowrap">
                           Subtotal ({totalItems} items) : {" "}
                            <Currency quantity={total} currency="GBP"/>
                       </h2>
                   <button disabled={!session} className={`button text-sm mt-3 ${!session && "from-gray-300 to-gray-500 border border-gray-300 cursor-not-allowed"
                }`}>{session ? "Proceed to Checkout" : "Sign in to Checkout"}</button>
                </>
                )} 
                </div>
            </main>
        </div>
    )
}

export default checkout
