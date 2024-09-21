import CookieCount from "./components/CookieCount";
import "./App.css";
import CookieUpgrades from "./components/CookieUpgrades";
import { useEffect, useState } from "react";

export default function App() {
  //const [cookies, setCookies] = useState(100);
  //const [cookiesPerSecond, setCookiesPerSecond] = useState(1);
  //console.log("Cookies:", cookies);

  const [handleIncrease, setHandleIncrease] = useState(() => {
    const savedClick = localStorage.getItem("click");
    return savedClick ? Number(savedClick) : 0;
  });
  //cookies

  const [cookies, setCookies] = useState(() => {
    const savedCookies = localStorage.getItem("cookies");
    return savedCookies ? Number(savedCookies) : 0;
  });
  // cps
  const [cookiesPerSecond, setCookiesPerSecond] = useState(() => {
    const savedCookiesPerSecond = localStorage.getItem("cookiesPerSecond");
    return savedCookiesPerSecond ? Number(savedCookiesPerSecond) : 1;
  });

  useEffect(() => {
    localStorage.setItem("cookies", JSON.stringify(cookies));
    localStorage.setItem("cookiesPerSecond", JSON.stringify(cookiesPerSecond));
    localStorage.setItem("handleIncrease", JSON.stringify(handleIncrease));
  }, [cookies]);

  return (
    <>
      <h1>Cookie Clicker React Edition!</h1>
      <h2>Still Better than what grandma used to make!</h2>
      <h3>CPS = Cookies Per Second!</h3>
      <CookieCount
        cookies={cookies}
        setCookies={setCookies}
        setCookiesPerSecond={setCookiesPerSecond}
        cookiesPerSecond={cookiesPerSecond}
      />
      <h1 className="CPSDisplay">CPS: {cookiesPerSecond}</h1>
      <CookieUpgrades
        cookies={cookies}
        setCookies={setCookies}
        setCookiesPerSecond={setCookiesPerSecond}
      />
    </>
  );
}
