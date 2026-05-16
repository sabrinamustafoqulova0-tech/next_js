"use server"


import {
 revalidatePath
}
from "next/cache"
import { prisma } from "../../lib/prisma"

export async function
createTask(
 formData: FormData
){

 const title =
 formData.get(
   "title"
 ) as string


 if(
   !title.trim()
 ){

   throw new Error(
    "Введите задачу"
   )

 }


 await prisma.task.create({

   data:{

     title

   }

 })


 revalidatePath("/")

}