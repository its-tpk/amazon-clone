import { StarIcon } from "@heroicons/react/solid"
import Image from "next/image"
import { useEffect, useState } from "react"
import Currency from 'react-currency-formatter'
import { useDispatch, useSelector } from "react-redux";
import { updatequantity, removeFromBasket, setTotalPrice} from '../slices/basketSlice'
import { X, XIcon } from '@heroicons/react/outline'

function CheckoutProduct({ id,title, price, description, category, image, ratings, hasprime, quantity}) {

    quantity++;
    const dispatch = useDispatch();
    const [quantityup, setquantityup] = useState(quantity)
    
    const increasequantity = ()=>{
        setquantityup(quantityup + 1);
        const product = {id,quatity: quantityup + 1};
        dispatch(updatequantity(product));
    }
    
    const decreasequantity = ()=>{
        setquantityup(quantityup-1);
        if(quantityup>1){
            const product = {id,quatity: quantityup - 1};
            dispatch(updatequantity(product));
        }
        else{
            const product = {id,quatity: quantityup - 1};
            dispatch(removeFromBasket(product));
        }
    }

    useEffect(() => {
        const priceToSet={id, totalprice: quantityup * price}
       dispatch(setTotalPrice(priceToSet))
    }, [quantityup])

    return (
        <div className={`grid grid-cols-5 ${quantity===0 && "hidden"}`}>
            <Image src={image} width={200} height={200} objectFit="contain"/>
            <div className="col-span-3 flex flex-col px-5">
                <h1 className="font-bold text-sm ">{title}</h1>
                <div className="flex pt-2">
                {Array(ratings).fill().map((_,i)=>(
                  <StarIcon className="h-5 text-yellow-500"/>  
                  ))}
                  </div>
                <p className="text-xs pt-2 line-clamp-3">{description}</p>
                <p className="pt-3 text-gray-500">{`${quantityup} * `}<Currency quantity={price} currency="GBP"/>{` = `} 
                <Currency quantity={price * (quantityup)} currency="GBP"/>
                </p>
                {hasprime && (
                <div className="flex items-center space-x-3 ">
            <img src="https://links.papareact.com/fdw" width={50}/>
            <p className="text-xs text-gray-500">Has Prime Delivery</p>
                </div>

            )}
            </div>
            <div className="flex flex-col items-center justify-center pb-5 ">
                <div className="flex pb-2">
                <button className=" button text-xs" onClick={increasequantity}>+</button>
                <p className="px-4  sm:px-8 md:px-9">{quantityup}</p>
                <button className=" button text-xs justify-self-end self-end" onClick={decreasequantity}>-</button>
                </div>
                <button className=" button text-xs">Remove From Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
