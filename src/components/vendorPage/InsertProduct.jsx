import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


import CheckBoxZones from './CheckBoxZones';
import UploadImage from "./UploadImage"
import axios from "axios";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
    flexGrow: 1,
    margin: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
    
}}));

export default function InsertProduct() {
  const classes = useStyles();

  const history = useHistory();
  const routeChange = () =>{ 
    let path = `/vendorProductList`; 
    history.push(path);
  }

  const [newProduct, setNewProduct]= useState ({
    productHeader:"",
    productDescription:"",
    productCost:"",
    productPackage:"",
    deliveryArea:""

  })

  const [image,setImage] =useState ({
    state: false,
    preview: "", 
    raw: ""
  });

  function imagePreview (imageData){
    console.log("it is work");
    console.log (imageData)
    setImage ({
        state:true,
        preview: URL.createObjectURL(imageData),
        raw: imageData
    });

    

  }

  function handleChange (event){
    const value=event.target.value
    const name=event.target.name
    setNewProduct ({
      ...newProduct, 
      [name]: value
    })
  }
  function placesToDeliver(delivery){
    console.log ("the function is working")
    console.log (delivery)
    let name="deliveryArea"
  // console.log ("place edliver")
  //   console.log (newProduct)
    setNewProduct ({
      ...newProduct,
      [name]:delivery
    })
  }

  function handleSubmit (event){
    event.preventDefault()
    axios.post('/newProduct',newProduct)
      .then(function (response) {
      // handle success
      console.log(response.data);
      })
      .catch(function (error) {
     // handle error
      console.log(error);
      })

    console.log (event.target)

    routeChange(); // USING THE USE HISTORY TO ROUTE CHANGE

    
    
    
  
    
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <h2>הוספת מוצר</h2>
          <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
            <TextField 
                id="standard-basic" 
                label="כותרת מוצר"
                placeholder="כותרת המוצר"
                fullWidth
                variant="outlined"
                onChange= {handleChange}
                name= "productHeader"
                value={newProduct.productHeader}
            />

            <TextField
                id="standard-multiline-static"
                label="תיאור המוצר"
                placeholder="תיאור המוצר"
                multiline
                rows={4}
                fullWidth
                variant="outlined"
                name= "productDescription"
                onChange= {handleChange}
                value={newProduct.productDescription}

               
            />
             <TextField 
                id="standard-basic" 
                label="מחיר"
                placeholder="מחיר"
                fullWidth
                variant="outlined"    
                name= "productCost"
                onChange= {handleChange}
                value= {newProduct.productCost}

            />
             <TextField 
                id="standard-basic" 
                fullWidth
                variant="outlined"
                placeholder="  300 גרם.ג  ציין כמוות ומארז לדוגמא: מארז תותים גדול במשקל מוערך של"    
                name="productPackage"
                onChange= {handleChange}
                value={newProduct.productPackage}
            />
              <CheckBoxZones delivery={placesToDeliver} />
              <UploadImage style={{margin:"100px"}} imageData={imagePreview}/>

              {/* <h1>{newProduct.productHeader}</h1>
              <h1>{newProduct.productDescription}</h1>
              <h1>{newProduct.productCost}</h1>
              <h1>{newProduct.productPackage}</h1> */}
              
              <Button 
                type="submit"
                 size= "large" 
                 variant="contained" 
                 color="primary"> Primary
              </Button>
            </form>

            
            

        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>preview</Paper>
          {/* <img src={image.preview} alt="dummy" width="300" height="300" /> */}
          {image.state && <img height = "300"src={image.preview}></img>}
        </Grid>
      </Grid>
    </div>
  );
}