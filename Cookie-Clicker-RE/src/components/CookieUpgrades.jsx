import { useState, useEffect } from "react";

export default function CookieUpgrade({
  cookies,
  setCookies,
  setCookiesPerSecond,
}) {
  const [upgradeArray, setUpgrades] = useState([]);

  // Fetch upgrades from API
  useEffect(() => {
    async function fetchCookieUpgrades() {
      try {
        const res = await fetch(
          "https://cookie-upgrade-api.vercel.app/api/upgrades"
        );
        const upgrades = await res.json();
        setUpgrades(upgrades);
        console.log("Fetched upgrades:", upgrades);
      } catch (error) {
        console.error("Error fetching upgrades:", error);
      }
    }
    fetchCookieUpgrades();
  }, []);

  //handles upgrades
  const handleBuyUpgrade = (upgrade) => {
    console.log("Attempting to buy:", upgrade);
    console.log("Current cookies:", cookies);

    if (cookies >= upgrade.cost) {
      setCookies((prevCookies) => {
        const newCookieCount = prevCookies - upgrade.cost;
        console.log(`New cookies count after purchase: ${newCookieCount}`);
        return newCookieCount;
      });
      setCookiesPerSecond((prevCPS) => {
        const newCPS = prevCPS + upgrade.increase;
        console.log(`New CPS after upgrade: ${newCPS}`);
        return newCPS;
      });

      console.log("Upgrade purchased:", upgrade);
    } else {
      console.log("Not enough cookies to buy this upgrade.");
    }
  };

  return (
    <div className="upgrade-container">
      {upgradeArray.map((upgrade) => (
        <div className="upgrade-item" key={upgrade.id}>
          <h2>{upgrade.name}</h2>
          <h2>Cost: {upgrade.cost}</h2>
          <h2>Increases CPS by: {upgrade.increase}</h2>
          <button
            onClick={() => handleBuyUpgrade(upgrade)}
            disabled={cookies < upgrade.cost}
          >
            Buy
          </button>
        </div>
      ))}
    </div>
  );
}
