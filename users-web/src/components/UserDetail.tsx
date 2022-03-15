import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../context/UsersContext';

export const UserDetail = () => {

  const { currentUser } = useContext(UserContext);

  return (
    <>
      {
       currentUser && <div> <h1> {currentUser.email} </h1> </div>
      }
    </>
  )
}
