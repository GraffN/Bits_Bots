import React, { useState } from "react";
import { Form, Button, Col } from 'react-bootstrap';



export default function Cart(){
    
    const moreProducts = localStorage.getItem('cart')
    console.log(JSON.parse(moreProducts));
    const selectedProducts = JSON.parse(localStorage.getItem("cart"));
    const [allProducts, setAllProducts] = useState(JSON.parse(localStorage.getItem('cart')));
    console.log(selectedProducts);
   
    const style = {
        width:'50px',
        height:'50px'
    }
    
    const removeItemFromCart = event => {
        console.log(event.target.value);
        let newList = selectedProducts.filter(x => x.index !== parseInt(event.target.value));
        let productIndex = 0;
        for (let product of newList) {
            product.index = productIndex;
            productIndex++;
        }
        localStorage.setItem("cart", JSON.stringify(newList));
        setAllProducts(newList);
    };

    if(localStorage.length <= 0){
        return(
            <p className='emptyCart'>No items in cart</p>
        )
    }else{
     return (
        <>
        <h1 className='checkout__title'>Checkout</h1>
        <div className='checkout'>
            <div className='checkout__cart'>
                <p className='cartitem__title cartitem__title--wraptitle'>Your cart</p>
                {allProducts.map( game => (
                    <>
                    <div className='cartitem'>
                        <Button variant='danger' className='cartitem__removebtn' value={game.index} onClick={removeItemFromCart}>Remove</Button>
                        <img className='cartitem__image' style={style} src={game.background_image} alt={game.name}></img>
                        <p className='cartitem__title'>{game.name}</p>
                    </div>
                    
                    
                    </>
                ))}


            </div>
            <div className='checkout__form'>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Form.Row>

                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Send order
                </Button>
                </Form>
            </div>
        </div>
   
        </>
    );
    }                 
   
}
