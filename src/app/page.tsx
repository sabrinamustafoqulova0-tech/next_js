'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useGetTodoQuery } from '../services/todo.api'
import { IUserd } from '../services/todo.type'

export default function Navbar() {
const { data, error, isLoading } = useGetTodoQuery(null)
  return (
    <div>
      {
        data?.map((e:IUserd)=>{
          return(
            <p>{e.name}</p>
          )
        })
      }
    </div>
  )
}