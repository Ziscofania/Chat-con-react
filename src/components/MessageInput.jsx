import { useState } from 'react';
import styles from "../styles/MessageInput.module.css";

function MessageInput({ addMessage }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addMessage(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.messageInput}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe un mensaje..."
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default MessageInput;