import React from 'react';
import { TodoList, TodoForm } from '../components/Todo';
import TodoTitle from '../styled/TodoTitle'




const UpcomingTask =({todos, handleToggle, handleOnchangeCheckbox, handleRemove, errorMessage, submitHandler, currentTodo, handleOnchangeInput})=>{
    return(<>
        <TodoTitle> Upcoming Task</TodoTitle>
   
    {errorMessage && <div className="errorMessage">{errorMessage}</div>}  
 
      <TodoList
              todos={todos}
              handleToggle={handleToggle }
              handleOnchangeCheckbox={handleOnchangeCheckbox}
              handleRemove = {handleRemove}
            />
      <TodoForm
          handleSubmit={ submitHandler }  
          currentTodo={currentTodo}
          handleOnchangeInput={handleOnchangeInput} />
        </>

        )
}

export default  UpcomingTask;