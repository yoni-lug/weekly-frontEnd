import aviv from './productPhotos/aviv.jpg'
import pineappleImage from './productPhotos/pineapple.jpg'
import artishokImage from "./productPhotos/artishok.jpg"


// function  productListArray (){
    
//     const a= "yoni Lugassy";
    const productsList = [ 
        {
          _id:"1",
          productHeader :"ארטישוק במבצע" ,
          productDescription:"גויבות ב 30 שקל לכמות של 4 קילו, מחיר בשופרסל דיל 120 שקל קילו",
          productImage:artishokImage,
          vendor: "משק חקלאי הגויבות",
          // the cost in shekel
          price: "30 שח",
          
          // the type of order- package, units, several units
          units: "ארגז 10 יחידות כ 3 קילו",
          

        },
        { 
          _id:"2",
          productHeader :"אננס כמו בתיאלנד" ,
          productDescription:"אננס טרי מהמשק , 10 חתיכות במחיר 100 שח",
          productImage:pineappleImage,
          vendor: " משק מעגלים ",
           // the cost in shekel
           price: 30,
           // the type of order- package, units, several units
           units: "12 יחידות ( משקל כ 4 קילו)",
        },
        { 
          _id:"3",
          productHeader :"אננס כמו בתיאלנד" ,
          productDescription:"אננס טרי מהמשק , 10 חתיכות במחיר 100 שח",
          productImage:pineappleImage,
          vendor: " משק מעגלים ",
           // the cost in shekel
           price: 30,
           // the type of order- package, units, several units
           units: "12 יחידות ( משקל כ 4 קילו)",
           
        },
        { 
          _id:"4",
          productHeader :"אננס כמו בתיאלנד" ,
          productDescription:"אננס טרי מהמשק , 10 חתיכות במחיר 100 שח",
          productImage:pineappleImage,
          vendor: " משק מעגלים ",
           // the cost in shekel
           price: 30,
           // the type of order- package, units, several units
           units: "12 יחידות ( משקל כ 4 קילו)",
           
        },
        { 
          _id:"5",
          productHeader :"אביבוש המתוק" ,
          productDescription:"אביב לוגסי המתוק המקסים החכם והנסיך",
          productImage:aviv,
          vendor: " אבא ",
           // the cost in shekel
           price: "יהלום",
           // the type of order- package, units, several units
           units: "אחד ומיוחד"
        }
      ]
    // return (productList)
        
        
 
    

    // }
    export {productsList}