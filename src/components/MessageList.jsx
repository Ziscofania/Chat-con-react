import styles from '../styles/MessageList.module.css';

function MessageList({ messages }) {
  return (
    <div className={styles.messageList}>
      {messages.map((message) => (
        <div key={message.id} className={styles.message}>
          <strong>{message.user.name}</strong>: {message.text}
          <span className={styles.timestamp}>{message.timestamp}</span>
        </div>
      ))}
    </div>
  );
}

export default MessageList;