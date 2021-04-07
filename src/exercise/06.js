// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   onSubmitUsername(event.target.elements.userName.value);
  // }

  // return (
  //   <form htmlFor="userName" onSubmit={handleSubmit} >
  //     <div>
  //       <label>Username:</label>
  //       <input type="text" id="userName" />
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // )

  //Extra 1 
//   const inputElement = React.useRef(null);
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSubmitUsername(inputElement.current.value);
//   }

//   return (
//     <form htmlFor="userName" onSubmit={handleSubmit} >
//       <div>
//         <label>Username:</label>
//         <input ref={inputElement}  type="text" id="userName" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

  // Extra 2
  // const inputElement = React.useRef(null);
  // const [error, setError] = React.useState(null)

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   onSubmitUsername(inputElement.current.value);
  // }

  // const handleChange = (event) => {
  //   const {value} = event.target;
  //   const isValid = value === value.toLowerCase();
  //   setError(!isValid ? "Username must be lower case" : null) 
  // }

  // return (
  //   <form htmlFor="userName" onSubmit={handleSubmit} >
  //     <div>
  //       <label>Username:</label>
  //       <input ref={inputElement}  type="text" id="userName" onChange={handleChange} />
  //     </div>
  //     {error ? <p role="alert">Username must be lower case</p> : null}
  //     <button type="submit" disabled={ !!error }>Submit</button>
  //   </form>
  // )

    // Extra 3
    const inputElement = React.useRef(null);
    const [userName, setUserName] = React.useState("")
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmitUsername(userName);
    }
  
    const handleChange = (event) => {
      const { value } = event.target;
      const valueLowerCased = value.toLowerCase();
      setUserName(valueLowerCased) 
    }
  
    return (
      <form htmlFor="userName" onSubmit={handleSubmit} >
        <div>
          <label>Username:</label>
          <input ref={inputElement}  type="text" id="userName" onChange={handleChange} value={userName} />
        </div>
        <button type="submit" >Submit</button>
      </form>
    )
  }

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
