import React, { useEffect, useState } from 'react'

export default function Timer() {
    const[time,setTime]=useState('')
    useEffect(()=>{

        const clear=
        setInterval(()=>{
        const now= new Date();
        const hour=now.getHours();
        const min=now.getMinutes();
        const sec=now.getSeconds()
        setTime( `${hour}時${min}分${sec}秒`)
        

},1000)

return ()=>{
    clearInterval(clear)
}

    },[])
   
  return (
    <div>
ただいまの時刻：{time}
    </div>
  )
}
