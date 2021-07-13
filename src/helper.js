export const getCart = () =>{
    return new Promise((resolve, reject) =>{
        const cart = window.localStorage.getItem('cart');
        resolve(cart);
    })
    
}

export const storeCart = (cart) =>{
    console.log(cart);
    window.localStorage.setItem('cart', cart)
}