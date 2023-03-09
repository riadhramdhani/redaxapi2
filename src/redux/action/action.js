import { GET_DATA } from "../actiontype/actiontype"
import axios from "axios"

export const get_data=()=>async(dispatch)=>{
    try {
        const res=await axios.get("http://192.168.2.252:3333/api/getallpost")
        dispatch({type:GET_DATA,payload:res.data})
    } catch (error) {
        console.log(error)
    }
}
export const add_data=(post)=>async(dispatch)=>{
    try {
        const res=await axios.post("http://192.168.2.252:3333/api/createnewpost",post)
        dispatch(dispatch(get_data()))
    } catch (error) {
        console.log(error)
    }
}
export const edit_data=(id,data)=>async(dispatch)=>{
    try {
        const res=await axios.put("http://192.168.2.252:3333/api/updatepost/"+id,data)
        dispatch(dispatch(get_data()))
    } catch (error) {
        console.log(error)
    }
}
export const delete_data=(id)=>async(dispatch)=>{
    try {
        const res=await axios.delete("http://192.168.2.252:3333/api/deletepost/"+id)
        dispatch(dispatch(get_data()))
    } catch (error) {
        console.log(error)
    }
}