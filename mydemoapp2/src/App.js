import {useEffect, useState} from 'react'

function App() {

  let [users, setUsers] = useState([])
  useEffect(() => {
    fetch('http://3.6.94.188:81/users').then((res) => res.json()).then(data => {
      console.log(data)
      setUsers(data.users)
    })
  }, [])

  return (
    <div>
      {users.map((user)=><div>
        
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>)}
    </div>
  );
}

export default App;
