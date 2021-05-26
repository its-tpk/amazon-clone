import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Productdetails from '../components/Productdetails'

export default function Home({products}) {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header/>

      <main className="max-w-7xl mx-auto ">
        <Banner/>
        <Productdetails products={products}/>
      </main>

    </div>
  );
}

 export async function getServerSideProps(context){
 
  const products= await fetch('https://fakestoreapi.com/products').then(res => res.json())
  
  return {
      props:{
          products,
       },
       };
    }