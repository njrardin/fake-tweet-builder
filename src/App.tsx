import { useState } from 'react'
import './App.css'
import Tweet from '@njrardin/react-fake-tweet'

function App() {
  const [count, setCount] = useState(0)

  const config = {
    user: {
      nickname: "twitter",
      avatar: "../public/vite.svg",
      name: "Twitter",
      verified: true,
      locked: false
    },
    display: "default",
    text: "This is a fake tweet.",
    image: "",
    date: "3:32 PM · Feb 14, 1997",
    app: "Twitter for iPhone",
    retweets: 32000,
    quotedTweets: 100,
    likes: 12700
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fake Tweet Builder</h1>
      </header>
      <main>
        <div className="Sidebar">
          <form>
            test
          </form>
        </div>
        <div>
          <Tweet config={config}/>
        </div>
      </main>
    </div>
  )
}

export default App
