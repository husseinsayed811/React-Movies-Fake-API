import Card from 'react-bootstrap/Card';

import React, { useEffect, useState } from 'react';

// import axiosInstance from '../../axiosInstance/axiosInstance';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import addmovise from '../../store/action/addmovies';
import changeMovies from '../../store/action/moviesAction';

const Movies = () => {

    // const [movie, setmovie] = useState([]);
    const [icon] = useState("fa-regular fa-heart");
    const favMovies = useSelector(state => state.favourites.favourtmovise)

    const [page, setpage] = useState(1)
    const urlToImage = "http://image.tmdb.org/t/p/w500/"


    // useEffect(() => {

    //     axiosInstance.get(`/movie/popular?page=${page}`).then((res) => {
    //         // console.log((res.data.results))
    //         setmovie(res.data.results)

    //     }).catch((err) => {
    //         console.log(err);
    //     })

    // }, [page])


    const myMovies = useSelector((state) => state.movies.movies)
    const dispatchMovies = useDispatch()


    useEffect(() => {
        dispatchMovies(changeMovies(page))
    }, [dispatchMovies, page]);



    const dispatch = useDispatch()

    function handlAddMovise(item) {
        
        if (!favMovies.includes(item)) {
            dispatch(addmovise(item))
            item.isfav = true
        } else {
            item.isfav = false
        }
    }



    return (
        <div className='row'>
            {myMovies.map((items) => {
                return (
                    <Card key={items.id} style={{ width: '18rem', height: '330px', margin: '20px' }} >
                        <Card.Img variant="top" src={`${urlToImage}/${items.backdrop_path} `} style={{ width: 260, height: 200 }} />
                        <Card.Body>
                            <Card.Title>{items.title}</Card.Title>
                            <Card.Text>
                                Release at : {items.release_date}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <div style={{ display: "flex" }}>
                                <div className='col-10'>    <Link variant="primary" to={`/movie/${items.id}`} style={{ textDecoration: "none" }} >Detils</Link></div>
                                <div style={{ marginLeft: 20 }}><Link onClick={() => handlAddMovise(items)} ><i id={items.id} className={favMovies.some(item => item.id === items.id) ? 'fa-solid fa-heart' : icon}></i> </Link></div>
                            </div>
                        </Card.Footer>
                    </Card>
                )
            })}
            <div style={{ display: "flex", marginTop: "20px", marginBottom: 10 }}>

                <button className='btn btn-secondary' disabled={page === 1} onClick={() => { setpage(page - 1) }}>Prev Page</button>
                <button className='btn btn-secondary' onClick={() => { setpage(page + 1) }} style={{ marginLeft: "1100px" }}>Next Page</button>
            </div>
        </div>
    );
}

export default Movies;
