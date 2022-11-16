const updateDB = (id)=>{
    const shoppingCart = getAddedProduct();
    if(id in shoppingCart){
        shoppingCart[id] += 1
    }else{
        shoppingCart[id] = 1
    }

    localStorage.setItem('my-cart', JSON.stringify(shoppingCart))
}

const removeCartFromDB = (id)=>{
    const shoppingCart = getAddedProduct()
    delete shoppingCart[id]
    localStorage.setItem('my-cart', JSON.stringify(shoppingCart))
};

const getAddedProduct = ()=>{
    let shoppingCart;
    const getShoppingCart = localStorage.getItem('my-cart')
    if(getShoppingCart){
        shoppingCart = JSON.parse(getShoppingCart)
    }else{
        shoppingCart = {}
    }

    return shoppingCart;
}

export { updateDB, getAddedProduct, removeCartFromDB };

