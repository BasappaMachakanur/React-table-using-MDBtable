import {createContext, useEffect, useState} from 'react'
import Axios from 'axios'

export let Datacontext=createContext();
const ContextApi = ({children}) => {
let [data , setdata]=useState([]);
useEffect(()=>{
Axios.get("https://dev.ylytic.com/ylytic/test").then(a=>setdata(a.data.comments))
},[])

  return (
     <Datacontext.Provider value={data}>
        {children}
     </Datacontext.Provider>
  )
}

export default ContextApi