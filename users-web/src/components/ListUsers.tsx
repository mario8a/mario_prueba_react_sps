import { useContext, useEffect } from 'react'
import { UserContext } from '../context/UsersContext';

import '../styles/listUsersStyles.scss';
import { CardItem } from './CardItem';

export const ListUsers = () => {
  const { users ,getUsers, getUserDetail } = useContext(UserContext)

  useEffect(() => {
    getUsers();
  }, [])
  

  return (
    <div className='list__container'>
      {
        users.map(user => (
          <CardItem key={user.id} user={user} getUserDetail={getUserDetail} />
        ))
      }
    </div>
  )
}
