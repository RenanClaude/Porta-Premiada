import Confetti from "@/components/Confetti";
import Door from "@/components/Door";
import { createDoors, updateDoors } from "@/functions/doorFunctions";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import styles from "../../../styles/Game.module.css";

export default function Game() {
  const [doors, setDoors] = useState([]);
  const [valid, setValid] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const childRef = useRef<{ handleClick: () => void }>(null);

  const router = useRouter();

  useEffect(() => {
    const quantity = Number(router.query.doors);
    const doorGift = +router.query.hasAGift;

    const quantityValidation = quantity >= 3 && quantity <= 16;
    const doorGiftValidation = doorGift >= 1 && doorGift <= quantity;

    setValid(quantityValidation && doorGiftValidation);

  }, [router.query]);

  useEffect(() => {
    const quantity = Number(router.query.doors);
    const doorGift = +router.query.hasAGift;
    setDoors(createDoors(quantity, doorGift))
  }, [router.query]);

  function renderDoors() {
    return doors.map((door => {
      return <Door value={door} onChange={newDoor => setDoors(updateDoors(doors, newDoor))} key={door.number} />

    }))
  }

  useEffect(() => {
    const showingThePresent = doors.some((door) => door.opened && door.haveAGift)
    showingThePresent && callChildFunction();
  }, [doors]);

  const callChildFunction = () => {
    // Chamando a função do filho a partir do pai
    if (childRef.current) {
      childRef.current.handleClick();
    }
  };

  useEffect(() => {
    // Configura um temporizador para definir o estado como verdadeiro após 1 segundo
    const timer = setTimeout(() => {
      setShowWarning(true);
    }, 500);

    // Limpa o temporizador quando o componente for desmontado
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id={styles.game}>
      <Confetti ref={childRef} />

      <div className={styles.doors}>
        {valid ? renderDoors() : showWarning && <h1>A quantidade de portas deve estar entre 3 e 16, e a porta com o presente deve estar dentro da quantidade de portas!</h1>}
      </div>
      <div className={styles.buttons}>
        <Link href="/">
          <button>Reiniciar jogo</button>
        </Link>
      </div>
    </div>
  );
}
