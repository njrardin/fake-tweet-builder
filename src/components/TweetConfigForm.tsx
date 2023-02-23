import * as React from "react";
import TweetConfig from "@njrardin/react-fake-tweet/dist/types/TweetConfig";

export interface TweetConfigFormProps {
  onUpdate(config: TweetConfig): void 
  initialConfig: TweetConfig
}

/**
 * Input form for https://github.com/njrardin/react-fake-tweet
 */
function TweetConfigForm({ onUpdate, initialConfig }: TweetConfigFormProps) {
  // State variables for Tweet config form values
  const [userName, setUserName] = React.useState(initialConfig.user.name);
  const [userNickname, setUserNickname] = React.useState(initialConfig.user.nickname);
  const [userAvatar, setUserAvatar] = React.useState(initialConfig.user.avatar);
  const [userIsVerified, setUserIsVerified] = React.useState(initialConfig.user.verified);
  const [userIsPrivate, setUserIsPrivate] = React.useState(initialConfig.user.locked);
  const [tweetContent, setTweetContent] = React.useState(initialConfig.text);
  const [tweetImage, setTweetImage] = React.useState(initialConfig.image);
  const [numRetweets, setNumRetweets] = React.useState(initialConfig.retweets);
  const [numQuoteTweets, setNumQuoteTweets] = React.useState(initialConfig.quotedTweets);
  const [numLikes, setNumLikes] = React.useState(initialConfig.likes);
  const [date, setDate] = React.useState(initialConfig.date);
  const [app, setApp] = React.useState(initialConfig.app);

  // passes a updated TweetConfig to the onUpdate
  React.useEffect(() => {
    onUpdate({
      user: {
        name: userName,
        nickname: userNickname,
        avatar: userAvatar,
        verified: userIsVerified,
        locked: userIsPrivate,
      },
      text: tweetContent,
      image: tweetImage,
      retweets: numRetweets,
      quotedTweets: numQuoteTweets,
      likes: numLikes,
      date,
      app,
      display: "default",
    });
  }, [
    userName,
    userNickname,
    userAvatar,
    userIsVerified,
    userIsPrivate,
    tweetContent,
    tweetImage,
    numRetweets,
    numQuoteTweets,
    numLikes,
    date,
    app,
  ]);


  return (
    <form>
      <fieldset>
        <legend>User</legend>
        {/* name */}
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        {/* nickname */}
        <label>
          Nickname:
          <input type="text" name="nickname" value={userNickname} onChange={(e) => setUserNickname(e.target.value)} />
        </label>
        {/* avatar */}
        {/* isVerifiedAccount */}
        <label>
          Verified:
          <input type="checkbox" name="isVerifiedAccount" checked={userIsVerified} onChange={(e) => setUserIsVerified(e.target.checked)} />
        </label>
        {/* isPrivateAccount */}
        <label>
          Private:
          <input type="checkbox" name="isPrivateAccount" checked={userIsPrivate} onChange={(e) => setUserIsPrivate(e.target.checked)} />
        </label>
      </fieldset>
      <fieldset>
        <legend>Tweet Content</legend>
        {/* tweetContent */}
        <label>
          Content:
          <textarea name="tweetContent" value={tweetContent} onChange={(e) => setTweetContent(e.target.value)} />
        </label>
        {/* tweetImage */}
      </fieldset>
      <fieldset>
        <legend>Engagement</legend>
        {/* ENGAGEMENT STATS */}
        {/* numRetweets */}
        <label>
          Retweets:
          <input type="number" name="numRetweets" value={numRetweets} onChange={(e) => setNumRetweets(parseInt(e.target.value))} />
        </label>
        {/* numQuoteTweets */}
        <label>
          Quote Tweets:
          <input type="number" name="numQuoteTweets" value={numQuoteTweets} onChange={(e) => setNumQuoteTweets(parseInt(e.target.value))} />
        </label>
        {/* numLikes */}
        <label>
          Likes:
          <input type="number" name="numLikes" value={numLikes} onChange={(e) => setNumLikes(parseInt(e.target.value))} />
        </label>
      </fieldset>
      <fieldset>
        <legend>Metadata</legend>
        {/* METADATA */}
        {/* date */}
        <label>
          Date:
          <input type="text" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        {/* app */}
        <label>
          App:
          <input type="text" name="app" value={app} onChange={(e) => setApp(e.target.value)} />
        </label>
      </fieldset>
    </form>
  );
}

export default TweetConfigForm;
