import { useState } from 'react'
import classes from './NewPost.module.css'

function NewPost(){
  const [enteredBody,setEnteredBody] = useState('')
  function changeBodyHandler(event){
    // console.log(event.target.value)
    setEnteredBody(event.target.value);
  }
  return(
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
      </p>
      <p>{enteredBody}</p>
      <p>
        <label htmlFor="name">Your Name</label>
        <textarea type="text" id="name" required/>
      </p>
    </form>
  )
}
export default NewPost