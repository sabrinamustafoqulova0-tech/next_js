'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useDeleteTodoMutation, useGettodoByNameQuery } from './services/todo.api'
import { IUsers } from './services/todo.type'

export default function Navbar() {
  const { data, error, isLoading } = useGettodoByNameQuery(null)
  const[deleteUser, { data:data2, error:error2, isLoading:isLoading2  }] = useDeleteTodoMutation()
  
  return (
   <div>
    {isLoading?(<p>Loading...</p>):
    (
      data?.map((e:IUsers)=>{
      return(
        <>
        <p>{e.name}</p>
        <button onClick={()=>deleteUser(e.id)}>Delete</button>
        </>
        
      )
    })
  )
    }
   </div>
  )
}