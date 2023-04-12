import { json } from "react-router-dom"


const addToLocal = id =>{
    let shoppingCart = {}

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem('shopping-cart')
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart)
  }

  // add quantity
  const quantity = shoppingCart[id]
  if (quantity) {
    // const newQuantity = quantity + 1
    shoppingCart[id] = quantity
  } else {
    shoppingCart[id] = 1
  }
  localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

const getFromLocal = () => {
    let shoppingCart = {}
  
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
      shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart
  }

export{addToLocal, getFromLocal}