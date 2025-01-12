
import axios from 'axios';


const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api',
  });

  export const getCategory = async () =>{
     return await axiosClient.get('/grocery-categories?populate=*')
  }

  export const getSliders = async () =>{
   return await axiosClient.get('/sliders?populate=*').then(res => res.data.data)
}

