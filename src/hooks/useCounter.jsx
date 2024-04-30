import { useState } from "react"

export default function useCounter(){
    const[number,setNumber]=useState(1)
    const [array,setArray]=useState([])
    const handleAdd=()=>{
      setNumber(number+1)
      setArray((prevArray)=>{
        const newArray=[...prevArray,number]
        return newArray;
      })
    }
  return{number,array,handleAdd}
  }
  