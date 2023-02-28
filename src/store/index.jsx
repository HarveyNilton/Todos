import { configureStore } from '@reduxjs/toolkit'
import  isLoadingslice  from './slices/isLoading.slice'
import todoListslice  from './slices/todoList.slice'
 


export default configureStore({
    reducer: {
        isLoading: isLoadingslice,
        todos: todoListslice
    }
})
