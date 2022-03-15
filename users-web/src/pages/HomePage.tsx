import { ListUsers } from '../components/ListUsers';
import { UserDetail } from '../components/UserDetail';

import '../styles/globalStyles.scss';

export const HomePage = () => {

  return (
    <div className='container'>
      <ListUsers />
      <UserDetail />
    </div>
  )
}
