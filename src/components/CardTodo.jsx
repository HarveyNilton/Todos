import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteThunk, putThunk } from '../store/slices/todoList.slice';

const CardTodo = () => {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    console.log(todos);

    return (
        <div>
            {

                todos.map(todo => (
                    <ul key={todo.id}>
                        <li>Title: {todo.title}</li>
                        <li>Description: {todo.description}</li>
                        <li>Is completed: {todo.completed.toString()}</li>
                        <Button variant='primary' onClick={() => dispatch
                            (putThunk(todo.id))}>Update</Button>
                        <Button variant='danger' onClick={() => dispatch
                            (deleteThunk(todo.id))}>Delete</Button>
                    </ul>
                ))

            }
        </div>
    );
};

export default CardTodo;