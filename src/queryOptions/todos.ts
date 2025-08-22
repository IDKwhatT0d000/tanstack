import { queryOptions } from "@tanstack/react-query";


  const getTodos=async(page:number=1):Promise<Todo>=>{
    const response= await fetch(`https://jsonplaceholder.typicode.com/todos/${page}`);
    return await response.json();
  }

export function todos(page:number,on:boolean){
    return queryOptions({
    queryKey:['todos',page],
    queryFn : ()=>getTodos(page),
    enabled: on,
    staleTime:60000
    })  
}

export type Todo={
  userId: number,
  id: number,
  title: string,
  completed: boolean
}