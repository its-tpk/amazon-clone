import {useState} from 'react';
import {StarIcon} from '@heroicons/react/solid'; 
import Currency from 'react-currency-formatter'

function Products({ title, price, description, category, image}) {
    const Max_String = 5;
    const Min_String = 1;
    const [ratings] =useState(Math.floor(Math.random() * (Max_String - Min_String + 1 ) + Min_String));
    const [hasprime] = useState(Math.random() < 0.5);

    return (
        <div className="relative  flex flex-col m-4 bg-white z-20 p-10  hover:transform hover:scale-110 hover:transition hover:duration-700">
            <p className=" absolute top-2 right-2 m-5 text-xs italic text-gray-400 overflow-hidden">{category}</p>
            <img className="mt-5 h-44 object-contain" src={image}/>
            <h4 className="font-bold my-3 text-sm line-clamp-2">{title}</h4>

            <div className="flex">
                {Array(ratings).fill().map((_,i)=>(
                    <StarIcon className="h-5 text-yellow-500"/>
                ))}
            </div>

            <p className="my-2 text-xs line-clamp-2">{description}</p>
            <Currency className="mb-5 text-sm" quantity={price} currency="GBP"/>
            {hasprime && (
                <div className="flex items-center space-x-3 ">
            <img src="https://links.papareact.com/fdw" width={50}/>
            <p className="text-xs text-gray-500">Has Prime Delivery</p>
                </div>

            )}
                <button className="text-xs mt-auto button">Add to Basket</button>
        </div>
    )
}

export default Products