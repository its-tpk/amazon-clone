import Products from "./Products"

function Productdetails({products}) {
    return (
        <div className=" grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-gradient-to-r from-gray-500 to-trasparent md:-mt-48 ">
            {products.slice(0,4).map(({id, title, price, description, category, image}) => (
                <Products key={id} title={title} price={price} description={description} category={category} image={image}/>
            ))}

            <img className="md:col-span-full my-5" src="https://links.papareact.com/dyz" alt=""/>

            <div className="md:col-span-2  hover:transform hover:scale-95 hover:transition hover:duration-700">
            {products.slice(4,5).map(({id, title, price, description, category, image}) => (
                <Products key={id} title={title} price={price} description={description} category={category} image={image}/>
            ))}
            </div>
            {products.slice(5,products.length).map(({id, title, price, description, category, image}) => (
                <Products key={id} title={title} price={price} description={description} category={category} image={image}/>
            ))}
        </div>
    )
}

export default Productdetails

