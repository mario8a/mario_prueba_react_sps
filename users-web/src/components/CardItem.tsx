import { UsersDetail } from '../interfaces/usersInterface';

interface Props {
  user: UsersDetail,
  getUserDetail: (id: number) => Promise<void>
}

export const CardItem = ({user, getUserDetail}: Props) => {
  return (
    <div className='item__container' key={user.id} onClick={() => getUserDetail(user.id) }>
      <div>
        <img src={user.avatar} alt={user.first_name} />
      </div>
      <div>
        <p>{user.first_name} {user.last_name}</p>
      </div>
    </div>
  )
}
