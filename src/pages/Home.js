import { useEffect, useState } from "react";
import "../style/App.css";
import SingleCard from "../components/SingleCard";
import useFetch from "../components/useFetch";
import StoreRecords from "../components/StoreRecords";
import Revealop from "../components/Revealop";

const cardImages = [
  { src: "/r6s operators/dokkaebi.png", match: false },
  { src: "/r6s operators/ela.png", match: false },
  { src: "/r6s operators/castle.png", match: false },
  { src: "/r6s operators/lion.png", match: false },
  { src: "/r6s operators/fuze.png", match: false },
  { src: "/r6s operators/caveira.png", match: false },
  { src: "/r6s operators/ace.png", match: false },
  { src: "/r6s operators/alibi.png", match: false },
  { src: "/r6s operators/amaru.png", match: false },
  { src: "/r6s operators/aruni.png", match: false },
  { src: "/r6s operators/ash.png", match: false },
  { src: "/r6s operators/azami.png", match: false },
  { src: "/r6s operators/bandit.png", match: false },
  { src: "/r6s operators/blackbeard.png", match: false },
  { src: "/r6s operators/blitz.png", match: false },
  { src: "/r6s operators/buck.png", match: false },
  { src: "/r6s operators/capitao.png", match: false },
  { src: "/r6s operators/clash.png", match: false },
  { src: "/r6s operators/doc.png", match: false },
  { src: "/r6s operators/echo.png", match: false },
  { src: "/r6s operators/finka.png", match: false },
  { src: "/r6s operators/frost.png", match: false },
  { src: "/r6s operators/glaz.png", match: false },
  { src: "/r6s operators/goyo.png", match: false },
  { src: "/r6s operators/gridlock.png", match: false },
  { src: "/r6s operators/grim.png", match: false },
  { src: "/r6s operators/hibana.png", match: false },
  { src: "/r6s operators/iana.png", match: false },
  { src: "/r6s operators/iq.png", match: false },
  { src: "/r6s operators/jackal.png", match: false },
  { src: "/r6s operators/jager.png", match: false },
  { src: "/r6s operators/kaid.png", match: false },
  { src: "/r6s operators/kali.png", match: false },
  { src: "/r6s operators/kapkan.png", match: false },
  { src: "/r6s operators/lesion.png", match: false },
  { src: "/r6s operators/maestro.png", match: false },
  { src: "/r6s operators/maverick.png", match: false },
  { src: "/r6s operators/melusi.png", match: false },
  { src: "/r6s operators/mira.png", match: false },
  { src: "/r6s operators/montagne.png", match: false },
  { src: "/r6s operators/mozzie.png", match: false },
  { src: "/r6s operators/mute.png", match: false },
  { src: "/r6s operators/nokk.png", match: false },
  { src: "/r6s operators/nomad.png", match: false },
  { src: "/r6s operators/osa.png", match: false },
  { src: "/r6s operators/pulse.png", match: false },
  { src: "/r6s operators/rook.png", match: false },
  { src: "/r6s operators/sens.png", match: false },
  { src: "/r6s operators/sledge.png", match: false },
  { src: "/r6s operators/smoke.png", match: false },
  { src: "/r6s operators/solis.png", match: false },
  { src: "/r6s operators/tachanka.png", match: false },
  { src: "/r6s operators/thatcher.png", match: false },
  { src: "/r6s operators/thermite.png", match: false },
  { src: "/r6s operators/thorn.png", match: false },
  { src: "/r6s operators/thunderbird.png", match: false },
  { src: "/r6s operators/twitch.png", match: false },
  { src: "/r6s operators/valkyrie.png", match: false },
  { src: "/r6s operators/vigil.png", match: false },
  { src: "/r6s operators/wamai.png", match: false },
  { src: "/r6s operators/warden.png", match: false },
  { src: "/r6s operators/ying.png", match: false },
  { src: "/r6s operators/zero.png", match: false },
  { src: "/r6s operators/zofia.png", match: false },
];

function App({ history }) {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(1);
  const [date, setDate] = useState(null);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  const [disable, setDisable] = useState(false);
  const [result, setResult] = useState([]);
  const [win, setWin] = useState(false);
  const [operators_icons, setOperators] = useState([]);
  const [Data, setData] = useState(null);
  const [memoryTime, setMemoryTime] = useState(true);

  const { data, loading, error } = useFetch(
    "https://omaroz.github.io/memory-game-history-api/History.json"
  );

  setTimeout(() => {
    setMemoryTime(false);
  }, 1500);

  const random_operators = () => {
    const random_cards = [...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    const card_arr = random_cards.slice(0, 6);
    setOperators(card_arr);
    console.log("ard_arr", card_arr);

    shuffleCards(card_arr);
    setMemoryTime(true);
  };

  const shuffleCards = (operators_cards) => {
    const shuffleCards = [...operators_cards, ...operators_cards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffleCards);
    setTurns(0);
    setWin(false);
    setResult([]);
    setData(null);
    console.log(cards, turns);
  };

  const handleChoice = (card) => {
    firstChoice ? setSecondChoice(card) : setFirstChoice(card);
    setTurns((prevTurns) => ++prevTurns);
    console.log("turns: ", turns);
  };
  useEffect(() => {
    if (firstChoice && secondChoice) {
      setDisable(true);
      if (firstChoice.src === secondChoice.src) {
        result.push({ ...firstChoice, match: true });
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === firstChoice.src) {
              return { ...card, match: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 800);
      }
      if (result.length == 6) {
        setWin(true);
      }
    }
  }, [secondChoice]);

  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);

    setDisable(false);
    setWin(false);
  };

  const isWin = () => {
    setData(data);
    setDate(new Date());
    console.log(date);

    console.log(result);
  };

  useEffect(() => {
    random_operators();
  }, []);
  useEffect(() => {
    if (win === true) {
      isWin();
    }
  }, [win]);

  return (
    <div className="App">
      <button onClick={random_operators} className="newGame">
        {" "}
        New Game{" "}
      </button>
      {operators_icons && <Revealop operators={operators_icons} />}

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            card={card}
            key={card.id}
            handleChoice={handleChoice}
            disable={disable}
            flipped={
              memoryTime ||
              card === firstChoice ||
              card === secondChoice ||
              card.match
            }
          />
        ))}
      </div>

      {!win && <p className="turns">turns: {turns}</p>}
      {win && <p className="win">you win</p>}
      {/* {date && win && <StoreRecords Win={win} date={date} turns={turns} />} */}
    </div>
  );
}

export default App;
