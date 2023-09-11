import axios from "axios";
import { useEffect, useState } from "react";
import HistoryList from "../components/HistoryList";
const ShowHistory = () => {
  const [Data, setData] = useState(null);
  const [isFetched, setFetched] = useState(false);
  useEffect((e) => {
    async function getHistory() {
      const response = await axios.get(
        "https://omaroz.github.io/memory-game-history-api/History.json"
      );
      console.log(response);
      setData(response.data.History);
      setFetched(true);
      console.log("its data: ", Data);
    }
    getHistory();
  }, []);
  return (
    <div className="ShowHistory">{Data && <HistoryList data={Data} />}</div>
  );
};

export default ShowHistory;
