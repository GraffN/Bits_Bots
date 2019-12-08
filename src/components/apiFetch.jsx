import React, { useState, useEffect } from "react";
import Search from "./search";
import { Spinner, Accordion, Card, ProgressBar, Carousel } from 'react-bootstrap';

export default function CharacterList(){

    useEffect(() => {
        
        fetch("https://rawg-video-games-database.p.rapidapi.com/games", {
        method: "GET",
        headers: headers,
        
    })
    .then(response => response.json())
    .then(json => {
        console.log(json.results)
        setGenres(json.results) 
        setFilteredGames(json.results)   
    })
    .catch(error => console.log(error))
    .finally(() => setLoading(false));
    }, [])

    
    
    const [genres, setGenres] = useState([]);
    const [filteredGames, setFilteredGames] = useState([]);
    const [cartItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const headers = {
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": "f1f6bf4f35msh6bce51834ab65fep1142d8jsne932f1fff042"
    }
    
    const screenshotStyle = {
        width: '100%',
        height: '200px'
    }
   
    console.log(cartItem)

    
    
    let cartIndex = 0;
    let myCartItems = [];
    const setLocalItem = event => {
        
        let game = JSON.parse(event.target.value)
        game.index = cartIndex;
        console.log(game)
        let itemsInCart = JSON.parse(localStorage.getItem('cart'));
        if (itemsInCart) {
            myCartItems = itemsInCart;
        }
        myCartItems.push(game);
        console.log('cartItems', myCartItems);


        localStorage.setItem('cart',JSON.stringify(myCartItems))
        cartIndex++;

    }

    const filterGenres = function(e) {
    // Let's get the value the user typed in and make it lower case:
    const searchValue = e.target.value.toLowerCase();

    // create a new array from the characters array
    const filteredArray = genres.filter(function(char) {
        // make each name lowercase so we can check it properly with the search value
        const lowerCaseName = char.name.toLowerCase();

        // check if the character name begins with the search value
        if (lowerCaseName.match(searchValue)) {
            // if it does, return true
            // this will add it to the new filtered array
            return true;
        }
        return false;
    });
    // set filtered characters to the new array
    setFilteredGames(filteredArray);
};


    if(loading){
        return   <Spinner className='spinner' animation="border" variant="dark" />

    }
     return (
        <>
            <div className='storeWrapper' >
                <Search className='search' handleSearch={filterGenres} />
                    {filteredGames.map( games => (
                        <Accordion className='accordion'>
                            <Card key={games.id}>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    <>
                                    <img className='accordion__image' src={games.background_image} alt={games.name}></img>
                                    {games.name}
                                    <div>
                                        more
                                        <p>More</p>

                                    </div>

                                    </>
                                    
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0" className='accordion__collapse'>
                                <Card.Body>
                                    <div className='accordion__dropinfo'>
                                        <p>Avaliable on:</p>
                                            {games.platforms.map( platforms => (
                                            <li>{platforms.platform.name}</li>
                                        
                                            ))}
                                    </div>

                                    <div className='accordion__dropinfo'>
                                        <p>Genres:</p>
                                        {games.genres.map( genres =>(
                                            <li>{genres.name}</li>
                                        ))}
                                    </div>
                                    
                                    <div className='accordion__button'>
                                        <button value={JSON.stringify(games)} onClick={setLocalItem}>add to cart</button> 
                                    </div>
                                    <div>
                                        {games.ratings.map( listRating => (
                                            <div>
                                                <ProgressBar label={listRating.title} variant="success" now={listRating.percent} />
                                            </div>
                                        ))}
                                    </div>

                                    <Carousel>
                                        
                                            {games.short_screenshots.map( screenshots =>(
                                                <Carousel.Item>
                                                    <img style={screenshotStyle} alt={screenshots.id} src={screenshots.image}></img>
                                                </Carousel.Item>
                                            ))}
                                    </Carousel>
                                        
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        
                        
                    ))}       
            </div>
        </>
    );
}
