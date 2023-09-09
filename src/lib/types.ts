export type Todo = {
    id : string,
    title : string,
    complete : boolean
    toggleTodo : (id : string, complete : boolean) => void
}