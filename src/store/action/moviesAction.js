import axiosInstance from "../../axiosInstance/axiosInstance";


export default function changeMovies(pages){
    return (dispatch)=>{
        axiosInstance.get(`/movie/popular?page=${pages}`).then((res) => {
            // console.log(res.data.results)
            dispatch({type:'SET_MOVIES' , payload:res.data.results})
        }).catch((err) => {
            console.log(err);
        })
    }
}