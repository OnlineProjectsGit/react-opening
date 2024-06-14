import React, {useState} from "react"

const users = [
    { name: "Michael", age: 24, email: "Michael@email.com" },
    { name: "Michaela", age: 35, email: "Michaela@email.com" },
    { name: "Michaelason", age: 46, email: "Michaelason@email.com" }
  ]

function Users() {

    const [userName, setUserName] = useState(users[1].name)

    const updateUser = () => {
        let newNum = Math.floor(Math.random() * 3)
        let newName = users[newNum].name
        setUserName(prev => prev = newName)
      }

    return (
        <div>
          <p>{userName}</p>
          <button onClick={updateUser}>Click Me!</button>
        </div>
    )
}

export default Users