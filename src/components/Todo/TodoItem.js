import React from 'react'
import PropTypes from 'prop-types'
import { partial } from '../../lib/utils';

export const TodoItem = props => { 
    const hangleToggle = props.handleToggle && partial(props.handleToggle, props.id)
    const handleRemove = props.handleRemove && partial(props.handleRemove, props.id)

    return (
      <React.Fragment> 
         {props.handleToggle && <li>
            <label htmlFor={props.id}>
                <input type="checkbox" id={props.id}
                    checked={props.isComplete}
                    onChange={hangleToggle}   
                    
                />
                {props.name}
            </label> 
            <a href="#" title="Remove Todo" onClick={handleRemove}>x</a>    
         </li> }
         {!props.handleToggle &&  props.isComplete && <li>{props.name}</li>}
             </React.Fragment> 

    )
}

TodoItem.propTypes = {
    id: PropTypes.number.isRequired,
    isComplete: PropTypes.bool,
    name: PropTypes.string.isRequired
}