'use client'

import { usePathname } from 'next/navigation'
import { useGetTodoQuery } from '../services/api'

export default function Navbar() {
const { data, error, isLoading } = useGetTodoQuery(null)
console.log(data);

  return (
   <div>
    {isLoading?"":data?.map((e)=>{
      return(
        <p>{e.name}</p>
      )
    })}
   </div>
  )
}