
import axios from 'axios';


const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api',
  });

  export const getCategory = async () =>{
     return await axiosClient.get('/grocery-categories?populate=*')
  }

  export const getSliders = async () =>{

   return await axiosClient.get('/sliders?populate=*').then(res => {
     // console.log('test',res)
    return res.data.data
   })
}

export const getCategoryList = async () =>{

   return await axiosClient.get('/grocery-categories?populate=*').then(res => {
   
    return res.data.data
   })
}
   
export const getProducts = async () => {
   return await axiosClient.get('/Products?populate=*').then(res => {
    return res.data.data
   })
}

export const getProductsByCategory = async (category:string) => {
   console.log('category',category)
   return await axiosClient.get('/Products?filters[categories][Name][$in]='+category+'&populate=*').then(res => {
    return res.data.data
   })
}

export const registerUser = async (userName:string,email:string,password:string) => {
   return await axiosClient.post('/auth/local/register',{
      username:userName,
      email:email,
      password:password
   })
}

export const signIn = async (email:string,password:string) => {
   return await axiosClient.post('/auth/local',{
      identifier:email,
      password:password
   })
}


