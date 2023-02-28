import { useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { getTodosthunk } from './store/slices/todoList.slice'
import FormTodo from './components/FormTodo'
import CardTodo from './components/CardTodo'

function App() {

 
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.isLoading)

  useEffect(() => {
    dispatch(getTodosthunk())
  }, [])

  return (
    <div className="App">
      {
        isLoading && <div className='loading'><Spinner animation='border' variant='primary' /></div>
      }

      <FormTodo/>
      <CardTodo/>

    </div>
  )
}

export default App
