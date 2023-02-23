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
        <h1 className="header-title">Fake Tweet Builder</h1>
      </header>
      <main>
        <div>
          <Tweet config={config}/>
        </div>
        <div className="config-controls">
          <form>
            test
          </form>
        </div>
      </main>
    </div>
  )
}

export default App
