import "../style/SingleCard.css";

const SingleCard = ({ card, handleChoice, flipped, disable }) => {
  const handleClick = () => {
    if (!disable) {
      handleChoice(card);
    }
  };
  return (
    <div className="SingleCard">
      <div className={flipped ? "flipped" : "notFlipped"}>
        <div className="card" key={card.id}>
          <img className="front" src={card.src} alt="front" />
          <img
            className="back"
            onClick={handleClick}
            src="/r6s operators/cover.png"
            alt="front"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
