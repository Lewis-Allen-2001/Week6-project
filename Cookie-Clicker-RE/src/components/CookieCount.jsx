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
  }, [cookiesPerSecond]);

  //cookies increase with each click
  function handleIncrease() {
    setCookies((cookies) => cookies + 1);
  }

  return (
    <div>
      <img
        src="./src/assets/Big-Cookie.png"
        onClick={handleIncrease}
        alt="Big cookie"
      />
      <h1 className="cookieDisplay">Cookies: {cookies}</h1>
    </div>
  );
}
