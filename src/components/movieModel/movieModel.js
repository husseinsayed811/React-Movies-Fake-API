import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom'
import { useDispatch} from 'react-redux';
import addmovise from '../../store/action/action';

function MoviesModel(props) {

    const { item } = props
    const dispatch = useDispatch()



    function handladdmovise(item) {
        dispatch(
            addmovise(item)
        )
    }
    
    return (
        <CardGroup>
            <Card>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} style={{ height: 300 }} />

                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <button className='btn btn-success' style={{marginLeft:100}}><Link to={`/movie/${item.id}`} style={{ textDecoration: "none", color: 'white' }}>Details</Link> </button>
                    <button className='btn btn-success' style={{marginLeft:85}} onClick={handladdmovise(item)}>Add To Fav.</button>

                </Card.Footer>
            </Card>
        </CardGroup>
    );
}

export default MoviesModel;




