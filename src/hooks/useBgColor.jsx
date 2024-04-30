import { useRouter } from "next/router";
import { useEffect } from "react";


export default function useBgColor() {

const router=useRouter();
useEffect(()=>{
  document.body.style.backgroundColor=
  router.pathname==='/'?"skyblue":"pink";
  return()=>{
    document.body.style.backgroundColor='';
  }

},[router.pathname])

}

