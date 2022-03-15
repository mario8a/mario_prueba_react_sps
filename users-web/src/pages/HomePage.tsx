import { ListUsers } from '../components/ListUsers';
import { UserDetail } from '../components/UserDetail';

export const HomePage = () => {

  return (
    <div>
      <ListUsers />
      <UserDetail />
    </div>
  )
}
