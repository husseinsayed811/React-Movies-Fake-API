import axios from 'axios'

const axiosInstance= axios.create({ 
    baseURL:"https://api.themoviedb.org/3",  
    params:{
        'api_key':"49b3ba1c5463144c8eed5bdcdc23ad60"
    }
})

export default axiosInstance