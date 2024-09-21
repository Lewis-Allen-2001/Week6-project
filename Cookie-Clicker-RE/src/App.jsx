import CookieCount from "./components/CookieCount";
import CookieUpgrades from "./components/CookieUpgrades";
import Footer from "./components/Footer";
import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  //const [cookies, setCookies] = useState(100);
  //const [cookiesPerSecond, setCookiesPerSecond] = useState(1);
  //console.log("Cookies:", cookies);

  //LOCAL STORAGE Shoutout to Michelle for the help!
  const [handleIncrease, setHandleIncrease] = useState(() => {
    const savedClick = localStorage.getItem("click");
    return savedClick ? Number(savedClick) : 0;
  });

  const [cookies, setCookies] = useState(() => {
    const savedCookies = localStorage.getItem("cookies");
    return savedCookies ? Number(savedCookies) : 0;
  });

  const [cookiesPerSecond, setCookiesPerSecond] = useState(() => {
    const savedCookiesPerSecond = localStorage.getItem("cookiesPerSecond");
    return savedCookiesPerSecond ? Number(savedCookiesPerSecond) : 1;
  });

  useEffect(() => {
    localStorage.setItem("cookies", JSON.stringify(cookies));
    localStorage.setItem("cookiesPerSecond", JSON.stringify(cookiesPerSecond));
    localStorage.setItem("handleIncrease", JSON.stringify(handleIncrease));
  }, [cookies, cookiesPerSecond, handleIncrease, setHandleIncrease]);

  return (
    <>
      <img className="Logo" src="./cookielogo.png" />
      <h1>React Edition!</h1>
      <h2>Still Better Than What Grandma Used To Make!</h2>
      <h3>CPS = Cookies Per Second!</h3>
      <audio
        src="./SuperMario64WaterThemeDireDireDocks.mp3"
        muted
        autoPlay
        controls
      ></audio>
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
      <Footer />
    </>
  );
}
