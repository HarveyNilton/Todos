import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';


export const todoListslice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        setTodos: (state, action) => {
            const todos = action.payload
            return todos
        }
    }
})

export const getTodosthunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    axios.get('http://localhost:3010/api/v1/todos')
        .then((res) => dispatch(setTodos(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const postThunk = (data) => (dispatch) => {
    dispatch(setIsLoading(true));
    axios.post('http://localhost:3010/api/v1/todos',data)
        .then(() => dispatch(getTodosthunk()))
        .finally(() => dispatch(setIsLoading(false)));
}

export const putThunk = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    axios.put(`http://localhost:3010/api/v1/todos/${id}/`)
        .then(() => dispatch(getTodosthunk()))
        .finally(() => dispatch(setIsLoading(false)));
}

export const deleteThunk = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    axios.delete(`http://localhost:3010/api/v1/todos/${id}/`)
        .then(() => dispatch(getTodosthunk()))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setTodos } = todoListslice.actions;

export default todoListslice.reducer;
