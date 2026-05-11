'use client'

import { useGetTodoByIdQuery } from "@/src/services/todo.api"
import { useParams } from "next/navigation"

const Page = () => {
  const { getbyid } = useParams()
console.log(getbyid);

  const {data, isLoading, error} =useGetTodoByIdQuery(getbyid as string)
  if (isLoading) return <h1>Loading...</h1>

  if (error) return <h1>Error</h1>

  return (
    <div>
      <h1>{data?.name}</h1>
      <img src={data?.img} alt="" />
      <p>{data?.about}</p>
      <p>{data?.job}</p>
    </div>
  )
}

export default Page