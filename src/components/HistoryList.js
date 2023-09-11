import "../style/HistoryList.css";
const HistoryList = ({ data }) => {
  const histories = data;
  console.log(data);
  return (
    <div className="HistoryList">
      {histories.map((history) => (
        <div className="history-preview" key={history.id}>
          <div className="turns-history"> Turns : {history.turns}</div>
          <div className="Date"> Time : {history.Time}</div>
        </div>
      ))}
    </div>
  );
};

export default HistoryList;
