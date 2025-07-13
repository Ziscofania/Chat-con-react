import styles from '../styles/UserList.module.css';

function UserList({ users, currentUser, setCurrentUser }) {
  return (
    <div className={styles.userList}>
      <h3>Usuarios</h3>
      {users.map((user) => (
        <div
          key={user.id}
          className={`${styles.user} ${currentUser.id === user.id ? styles.active : ''}`}
          onClick={() => setCurrentUser(user)}
        >
          {user.name}
        </div>
      ))}
    </div>
  );
}

export default UserList;