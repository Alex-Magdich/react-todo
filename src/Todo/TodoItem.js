import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from "../context"

const styles = {
    li: {
        display:'flex',
        justifyContent: 'space-between',
        alignItems:'center',
        padding: '.5rem 1rem',
        border:'1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem',
        transition:'.3s'
    }
}

function TodoItem({todo , index, onChange}){
    const {removeTodo} = useContext(Context)
    const classes = []
    if(todo.completed){
        classes.push('done')
    }
    return (
        <li style={styles.li} className={classes.join(' ')}>
            <span>
                <input 
                    type="checkbox" 
                    onChange={()=> onChange(todo.id)} 
                    checked={todo.completed}
                />
            </span>
            <strong style={{margin: "0 0.5rem"}}>
                {index+1}
            </strong>
            <span style={{flexGrow:1}}>
                {todo.title}
            </span>
            <button onClick={removeTodo.bind(null,todo.id)}>&times;</button>
        </li>
    )
}
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}
export default TodoItem