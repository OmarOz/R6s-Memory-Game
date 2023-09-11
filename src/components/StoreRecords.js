import axios from "axios";
import { useEffect } from "react";
const StoreRecords = ({ Win, date, turns }) => {
  const time = `${date.getHours()}:${date.getMinutes()}`;
  const history = { turns: turns, Time: time };
  useEffect(
    (e) => {
      if (Win === true) {
        // fetch("http://localhost:8000/History", {
        //   method: "POST",
        //   headers: { "content-Type": "application/json" },
        //   body: JSON.stringify(history),
        // }).then(() => console.log("record added"));
        axios.post(
          "https://omaroz.github.io/memory-game-history-api/History.json",
          history
        );
        console.log("fitched");
        console.log("win: ", Win);
      }
    },
    [Win]
  );

  return <div className="StoreRecourds"></div>;
};

export default StoreRecords;
