import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { postThunk } from '../store/slices/todoList.slice';

const FormTodo = () => {

    const { handleSubmit, register, reset } = useForm()

    const empyDatos = { 'title': '', 'description': '', 'completed': '' }

    const dispatch = useDispatch()

   
    const submit = (data) => {
        dispatch(postThunk(data))
       
    }

 

    return (
        <div>
            <h2>Anotar las Tareas</h2>
            <Form onSubmit={handleSubmit(submit)}>
                <Form.Group className='mb-3' controlId='title'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type='text' required {...register('title')} />
                </Form.Group>
                <Form.Group className='mb-3' controlId='description'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control as='textarea' required {...register('description')} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="completed">
                    <Form.Check type="checkbox" label="Is completed" {...register('completed')} />
                </Form.Group>
                <Button variant='primary ' type='submit'>Submit</Button>
            </Form>

        </div>
    );
};

export default FormTodo;