//USE TWO USE STATE - 1.ORDERS 2. Page 
//in submit change the Page then useeffect  .
// in the use effect change the SetOrder and activate the IsSbmit to show the corret window

import React from 'react';
import {useState,useEffect} from 'react';

import axios from 'axios';

import ShoppingCart from './ShoppingCart';
import { productsList } from './productListArray';
import ProductsGridUi from './ProductsGridUi';



function GridUi(){

      const [products,setProducts] = useState (productsList)
      const [count,setCount] = useState (0)
      const [orders,setOrders] = useState ([]);
      const [isSubmitted,setIsSubmitted] =useState(false) 

     
     //PRESENT IN MOUNTING
     useEffect (function(){
       setIsSubmitted (false)
     },[])

     //PRESNT AFTER SUBMIT BUTTON -> ACTIVATE IN THE HANDLE SUBMIT
      useEffect( function(){
        if (count){
          whatToShow() 
          console.log ("order 0 quanatity is: "+ orders[0].quantity)
        }
          setCount (count+1)    
      }
      , [orders])

      // to show the grid layout of the products or the shopping cart
      function whatToShow(){
        setIsSubmitted (!isSubmitted)   
      }

      //functions read the data from the data base
      //NEED TO CHANGE IT LATER TO READ THE WEEKLY PRODUCT on MOUNT - ONLY ONE TIME WHEN 1ST RENDER
      useEffect( function(){
        axios.get('/findVendorProducts')
        .then(
          function (response) {
          // handle success
          // console.log(response.data);
        })
        .catch(function (error) {
          // handle error
            console.log(error);
          })
      } 
      , [])

      // let products=productsList

      const [quantities, setQuantities] = useState ( products)
      
  //HANDLE REMOVING ORDER FROM THE SHOPPING CART - FROM "ShoppingCart"
      // function removeOrder (id){
      //   console.log ("order is removed")
      //   console.log ("id is : "+id)
      //   let postRemoveOrders= orders.filter (function (order){
      //     return (id !== order._id)
      //   })
      //   console.log(postRemoveOrders)
      //     setOrders (postRemoveOrders)
      // }

//HANDLE SUBMIT PRODUCT TO THE SHOPPING CART - FROM "ProductGridUi"
      function handleSubmit (event){
        event.preventDefault();  
        const id = event.target.id;
        let isOrderExist =orders.some(function(order){
          return (order._id===id)
        })
        console.log (isOrderExist)
       

        //HANDLE NEW ORDER - Product not exist in the previous orders
       
          const orderArray=products.filter( function (product){
            return (id===product._id)
          })
          // const newOrder=orderArray[0];
          const newOrder= "1";
          // newOrder.quantity = 
          
          if (!isOrderExist) {
            console.log ("the process is done")
            setOrders (function(prevOrders){
              return(
              [...prevOrders,newOrder]
            )
          })
          
        }
        //HANDLE exist ORDER - Product Exist
        
        //********************************* */
        // if (isOrderExist) {
        //   let index=orders.findIndex (function (order){
        //    return (id===order._id)
        //   })
        //   console.log ("orders are :")
        //   console.log (orders)
        //   console.log (newOrder)
        //   const preQuantity = parseFloat (orders[index].quantity)
        //   console.log ("preQnt is : " +preQuantity)
        //   const newQunatity = parseFloat (newOrder.quantity)
        //   let totalQnt = preQuantity + newQunatity
        //   console.log ("totoal quant is : " +totalQnt)
        //   const updateOrders= [...orders]
        //   updateOrders[index].quantity = totalQnt
        //   console.log ("update Orders")
        //   console.log (updateOrders)
        //   setOrders (updateOrders)
        // }
         
      }

// HANDLE QUANTITY CHNAGE - IN ProductsGridUi      
       function handleQntChange(event){
         const qnt=event.target.value;
         const id= event.target.id;
        const index =products.findIndex(function (product){
          return (
             product._id===id
          )
        })
        if (orders.length) {
          console.log ("oreder quantity when changing the number is :" + orders[0].quantity +' '+ products[0].quantity)
          }
        products.map (function(product,index){
          if (product._id===id) {
           const updateProducts = [...products]
           updateProducts[index].quantity=qnt
          //  product.quantity=qnt;
          setProducts(updateProducts)
          }
          
          return(null)
        })
        if (orders.length) {
        console.log ("oreder quantity when changing the number is :" + orders[0].quantity +' '+ products[0].quantity)
        }
      }



      return (
        <div>
         {!isSubmitted && <ProductsGridUi 
            productsList = {products}
            handleSubmit = {handleSubmit}
            handleQntChange = {handleQntChange}
             />}
        <div >
         {isSubmitted && <ShoppingCart shoppingCart={orders} 
        // removeOrder={removeOrder} 
         continueShopping={{whatToShow}} />}
        </div> 
         {/* {isSubmitted && <Redirect to={{
           pathname:"/shoppingCart",
           state:{name:"Hila" ,Fname:"Lugassy"},
           fun: function what(){
             console.log ("yehonatan")
             return (null)
           }
           }}/>} */}
      </div>
      );
    }

export default GridUi