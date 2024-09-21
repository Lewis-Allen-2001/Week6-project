import { useEffect } from "react";
export default function CookieCount({ cookiesPerSecond, setCookies, cookies }) {
  //cookies going up by 1 with setInterval
  useEffect(() => {
    const myInterval = setInterval(() => {
      setCookies((cookies) => cookies + cookiesPerSecond);
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  }, [cookiesPerSecond, setCookies]);

  //cookies increase with each click
  function handleIncrease() {
    setCookies((cookies) => cookies + 1);
  }

  //audio on click function
  let audio = new Audio("./CookieMonsterEatingCookie.mp3");
  function audioOnClick() {
    audio.play();
  }

  function handleClick() {
    handleIncrease();
    audioOnClick();
  }

  return (
    <div>
      <img
        className="Clicker"
        src="./CookieMonster.jpg"
        onClick={handleClick}
        alt="The CookieMonster!"
      />
      <h1 className="cookieDisplay">Cookies: {cookies}</h1>
    </div>
  );
}
