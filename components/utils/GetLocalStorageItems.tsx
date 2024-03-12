import Card from "../UI/Card";
import { useState, useEffect } from "react";

export default function GetLocalStorageItems() {
  const [card, setCards] = useState([]);

  useEffect(() => {
    const entries = Object.entries(localStorage);
    const newCards = entries.map((subArray, index) => (
      <Card key={index} title={subArray[0]} url={subArray[1]} />
    ));
    setCards(newCards);
  }, []);

  return <div>{card}</div>;
}
