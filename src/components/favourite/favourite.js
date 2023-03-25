import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import removemovise from '../../store/action/removmovise';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Favourite = () => {
    const favMovies = useSelector(state => state.favourites.favourtmovise)

    const dispatch = useDispatch()

    const urlToImage = "http://image.tmdb.org/t/p/w500/"

    function handelremove(ind, item) {
        favMovies.splice(ind, 1)
        dispatch(removemovise(favMovies))
        item.isfav = false
        console.log(item);
    }


    return (
        <div className='row'>
            {favMovies.map((item, index) =>
                <Card key={index} style={{ width: '18rem', height: '310px', margin: '20px' }} >

                    <Card.Img variant="top" src={`${urlToImage}/${item.backdrop_path} `} style={{ width: 260 }} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            Release at : {item.release_date}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link onClick={() => handelremove(index, item)} > <i class="fa-solid fa-trash-can" style={{ marginLeft: 110 }}></i> </Link>
                    </Card.Footer>
                </Card>
            )}
        </div>
    );
}


export default Favourite;
