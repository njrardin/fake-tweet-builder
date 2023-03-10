import { useState } from "react";
import "./App.css";
import Tweet from "@njrardin/react-fake-tweet";
import TweetConfigForm from "./components/TweetConfigForm";
import TweetConfig from "@njrardin/react-fake-tweet/dist/types/TweetConfig";

function formatDate() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

const defaultConfig: TweetConfig = {
  user: {
    nickname: "twitter",
    avatar: "../public/twitter-logo.svg",
    name: "Twitter",
    verified: true,
    locked: false,
  },
  display: "default",
  text: "This is a fake tweet.",
  image: "",
  date: formatDate(),
  app: "Twitter for iPhone",
  retweets: 32000,
  quotedTweets: 100,
  likes: 12700,
};

function App() {
  const [config, setConfig] = useState(defaultConfig);

  function onFormUpdate(newConfig: TweetConfig) {
    setConfig(newConfig);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header-title">Fake Tweet Builder</h1>
      </header>
      <main>
        <div className="tweet-container">
          <Tweet config={config} />
        </div>
        <div className="config-controls">
          <TweetConfigForm onUpdate={onFormUpdate} initialConfig={config} />
        </div>
      </main>
    </div>
  );
}

export default App;
