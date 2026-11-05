//this component will have a Todo list as a prop
//Then we will map it into several Todo cards

import type { TodosContainerPops } from "./TodoApp"
import TodoCard from "./TodoCard";

export default function TodosContainer({
    todosList, 
    handleTodoCheck,
    handleDeleteTodo,
    handleEditTodo,
}: TodosContainerPops)
{
    return(
    <div>
        {todosList.length > 0 || "Todo List Is Empty"}
        {todosList.map((todo)=>(
            <TodoCard key={todo.id} 
            {...todo}
            handleTodoCheck={handleTodoCheck}
            handleDeleteTodo={handleDeleteTodo}
            handleEditTodo={handleEditTodo}
            />
            ))}
    </div>
    );
}