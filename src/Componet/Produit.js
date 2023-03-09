import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { get_data } from '../redux/action/action'
import Produitcart from './Produitcart'

function Produit() {
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(get_data())
      
    }, [dispatch])
    const data=useSelector((state)=>state.data)
    console.log("data",data)
    
  return (
    <div>
        {data.map((el)=><Produitcart  el={el} key={el.id} />)}
    </div>
  )
}

export default Produit