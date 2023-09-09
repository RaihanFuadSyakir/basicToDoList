import Link from 'next/link'
import React from 'react'
import { getTodos, updateTodo} from '@/lib/utils'
import { TodoItem } from '@/components/TodoItem';

export async function toggleTodo(id : string, complete : boolean){
  "use server"
  await updateTodo(id,complete);
}
export default async function Home() {
  const todos = await getTodos();
  return (
    <>
      <header className='flex justify-between items-center mb-4'>
        <h1 className='text-2x1'>Todos</h1>
        <Link 
        className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'
        href="/new">New</Link>
      </header>
      <ul className='pl-4'>
        {todos.map(todo =>{
          return <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo}/>
        })}
      </ul>
    </>
  )
}
