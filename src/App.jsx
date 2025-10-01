import { useState } from 'react' // it will look in node_modules
import { ChatMessages } from './Components/ChatMessages'
import { ChatInput } from './Components/ChatInput'

import './App.css'

function App() {

  const [chatMessages, setChatMessages] = useState(
    [
      {
        message: 'Hello Chatbot',
        sender: 'user',
        id: '1'
      },
      {
        message: 'Hello!How can I help you?',
        sender: 'robot',
        id: '2'
      },
      {
        message: 'can you get me todays date?',
        sender: 'user',
        id: '3'
      },
      {
        message: 'Today is September 27',
        sender: 'robot',
        id: '4'
      },
    ]
  )
  //const [chatMessages,setChatMessages] = array;
  //const chatMessages =  array[0];
  //const setChatMessages = array[1];


  return (
    <div className="app-container">

      <ChatMessages
        chatMessages={chatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />

    </div>
  )
}

export default App
