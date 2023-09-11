import "../style/Revealop.css";
const Revealop = ({ operators }) => {
  return (
    <div className="Reveal_op">
      <div className="operators">
        {operators.map((e) => (
          <div className="icon">
            <img src={e.src}></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Revealop;
