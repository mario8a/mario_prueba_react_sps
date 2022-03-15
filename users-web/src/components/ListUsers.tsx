import { useContext, useEffect } from 'react'
import { UserContext } from '../context/UsersContext';

export const ListUsers = () => {
  const { users ,getUsers, getUserDetail } = useContext(UserContext)

  useEffect(() => {
    getUsers();
  }, [])
  

  return (
    <div>
      {
        users.map(user => (
          <div key={user.id} onClick={() => getUserDetail(user.id) }>
            <img src={user.avatar} alt={user.first_name} />
            <p>{user.first_name} {user.last_name}</p>
          </div>
        ))
      }
    </div>
  )
}
