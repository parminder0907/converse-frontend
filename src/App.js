import { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Chatbox from './components/Chatbox';
import Pusher from 'pusher-js'

import axios from './axios';
import { loginFunc, logoutFunc } from './firebase'

function App() {
  const [user, setUser] = useState(null)
  const [ allMessages, setAllMessages ] = useState([])

  useEffect(() => {
    axios.get("/messages/sync").then((res) => {
      // console.log(res.data)
      setAllMessages(res.data)
    })
  }, [])

  useEffect(() => {
    var pusher = new Pusher('72dfdda813b264f2cfe1', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      setAllMessages([ ...allMessages, data ])
    });

    //Clean up
    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }

  }, [allMessages])

  return (
    <div className="App">
      <button onClick={async ()=>{
        const result = await loginFunc()
        setUser(result)
      }}>SIGN IN WITH GOOGLE</button>
      <button onClick={()=>{
        logoutFunc()
        setUser(null)
      }}>LOGOUT</button>

      { user ?
      <div className="AppContainer">
        <Sidebar user={user}/>
        <Chatbox messages={allMessages}/>
      </div> :  
        <div className="AppContainer">
          Login
        </div> 
      }   
    </div>
  );
}

export default App;
