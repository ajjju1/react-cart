import React,{useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch,Route } from 'react-router-dom'
import Home from './page/Home';
import About from './page/About';
import Navigation from './components/Navigation';
import ProductsPage from './page/ProductsPage';
import Cart from './page/Cart';
import SingleProduct from './page/SingleProduct';
import { cartContext } from './Cartcontext';
import { getCart, storeCart } from './helper';

const App = () => {
    const [cart, setCart] = useState({});
    //fetch form local storage
    useEffect(() => {
        // const cart = window.localStorage.getItem('cart');
        // const cart = getCart()
        getCart().then(cart => {
            setCart(JSON.parse(cart))
        })
        
        // console.log(JSON.parse(cart));
    }, [])

    useEffect(() => {
        // window.localStorage.setItem('cart', JSON.stringify(cart));
        storeCart(JSON.stringify(cart));
    }, [cart])
    return (
        <>
           <Router>
              <cartContext.Provider value={{cart : cart, setCart}}>
                <Navigation />
                <Switch>
                        <Route path="/" component={Home} exact ></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/products" component={ProductsPage} exact></Route>
                        <Route path="/products/:_id" component={SingleProduct} exact></Route>
                        <Route path="/cart" component={Cart}></Route>
                </Switch>
              </cartContext.Provider>
           </Router>
        </>
    )
}

export default App
