import { useContext } from 'react';
import { UserContext } from '../context/UsersContext';

import '../styles/cardDetailStyles.scss';

export const UserDetail = () => {

  const { currentUser } = useContext(UserContext);

  return (
    <>
      {
       currentUser && (
        <div className="cardDetail">
          <img className='image-card' src={currentUser.avatar} alt={currentUser.first_name} />
          <h1> {currentUser.first_name} {currentUser.last_name} </h1>
          <p className="title"> Email {currentUser.email} </p>
        </div>
       )
      }
    </>
  )
}
