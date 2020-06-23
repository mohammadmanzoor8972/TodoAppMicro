import React from 'react';
import { TodoList } from '../components/Todo';
import TodoTitle from '../styled/TodoTitle'

const CompletedTask =({todos})=>{
    return(<><TodoTitle>Completed Task</TodoTitle>
    <TodoList
            todos={todos}/>
    </>)
}

export default  CompletedTask;