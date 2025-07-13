import { useState } from 'react';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';
import UserList from './components/UserList';
import styles from '../styles/App.module.css'; // Ruta corregida

function App() {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([
    { id: 1, name: "Usuario 1" },
    { id: 2, name: "Usuario 2" },
  ]);
  const [currentUser, setCurrentUser] = useState(users[0]);

  const addMessage = (text) => {
    const newMessage = {
      id: Date.now(),
      text,
      user: currentUser,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className={styles.app}>
      <h1>Chat App 💬</h1>
      <div className={styles.chatContainer}>
        <UserList users={users} currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <div className={styles.chat}>
          <MessageList messages={messages} />
          <MessageInput addMessage={addMessage} />
        </div>
      </div>
    </div>
  );
}

export default App;