import { prisma } from "@/db";

export async function getTodos(){
    return await prisma.todo.findMany();
}

export async function updateTodo(id : string, complete : boolean){
    await prisma.todo.update({
        where : {
             id 
        },
        data :{
            complete
        }
    })
}