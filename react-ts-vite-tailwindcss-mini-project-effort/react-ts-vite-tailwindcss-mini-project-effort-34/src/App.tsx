import React,{ useEffect, useState } from 'react'
import './App.css'
import Services from './pages/Services'
import axios from 'axios'

function App() {

  const [userId, setUserId] = useState(1)
  const [id, setId] = useState(1)
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

//   useEffect(() => {
//  const fetchData = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   const data = await res.json()
//   console.log(data);
  
//  }

//  fetchData()
//   }, [])

  const handleSubmit = async(e) => {
e.preventDefault()

await submitPost()
  }

  const submitPost = () => {
   axios.post('https://jsonplaceholder.typicode.com/posts', {
    id: 1,
    userId: 1,
      title: title,
      body: body
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" name='title' onChange={(e) => setTitle(e.target.value)} />
      <input type="text" name='body' onChange={(e) => setBody(e.target.value)} />

      <button type='submit'>Submit</button>
    </form>
     <Services/>
    </>
  )
}

export default App
