import React,{useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
const SingleProduct = () => {
    const [product, setProduct] = useState({});
    const params = useParams();
    const history = useHistory();
    console.log(history);
    console.log(params);
    console.log(params._id);

    useEffect(() => {
        fetch(`https://ecom-rest-apis.herokuapp.com/api/products/${params._id}`)
        .then(res => res.json())
        .then(product => {
            // console.log(product);
            setProduct(product);
        });
    }, [params._id])
    return (
        <div className="container mx-auto mt-12">
            <button className="mb-12 font-bold" onClick = {() =>{ history.goBack() }}>Back</button>
            <div className="flex">
                <img src={product.image} alt="pizza" />
                <div className="ml-16 flex flex-col justify-center">
                    <h1 className="text-xl font-bold">{product.name}</h1>
                    <div className="text-md">{product.size}</div>
                    <div className="font-bold mt-2">₹ {product.price}</div>
                    <button className="bg-yellow-500 py-1 rounded-full px-8 font-bold mt-4">Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
