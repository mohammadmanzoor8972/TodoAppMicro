import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components";

const TodoInputLayout = styled.div`
display:flex;
justify-content:space-between;
input{
    width:90%;
    margin-right:10px;
}
`
export const TodoForm = props => { 
    return(
        <form onSubmit={props.handleSubmit}>
            <TodoInputLayout>
            <input focus="true" type="text" value={props.currentTodo} onChange={props.handleOnchangeInput} />
            <button>Add</button>
            </TodoInputLayout>
          </form>
    )
}

TodoForm.propTypes = {
    currentTodo: PropTypes.string.isRequired,
    handleOnchangeInput: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}