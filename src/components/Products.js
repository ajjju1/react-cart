import React,{useState, useEffect} from 'react'
import Product from './Product'
// import Cart from '../page/Cart'
// import { cartContext } from '../Cartcontext'

const Products = () => {
    // const {name} = useContext(cartContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://ecom-rest-apis.herokuapp.com/api/products')
        .then(response => {
            // console.log(response);
            return response.json();
        }).then((data) =>{
            // console.log(data);
            setProducts(data);
    });
}, []);

    return (
        <div className="container mx-auto pb-24">
            <h1 className="text-lg font-bold my-8">Products </h1>
            <div className="grid grid-cols-5 my-8 gap-24">
               {
                    products.map((curr) =>{
                        return <Product product={curr} key={curr._id}/>
                    })
               }
            </div>
        </div>
    )
}

export default Products
