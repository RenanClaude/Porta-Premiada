import Door from "@/components/Door";
import { createDoors, updateDoors } from "@/functions/doorFunctions";
import { useState } from "react";
import styles from "../styles/game.module.css";
import Link from "next/link";

export default function Game() {
  const [doors, setDoors] = useState(createDoors(5, 2))

  function renderDoors() {
    return doors.map((door => {
      return <Door value={door} onChange={newDoor => setDoors(updateDoors(doors, newDoor))} key={door.number} />

    }))
  }

  return (
    <div id={styles.game}>
      <div className={styles.doors}>
        {renderDoors()}
        {/* onChange={newDoor => setDoor1(newDoor)}: A prop onChange recebe uma função que, quando chamada, atualiza o estado de door1 com uma nova instância de DoorModel (passada como newDoor). 
      onChange={newDoor => setDoor1(newDoor)}: Aqui, onChange é uma prop que recebe uma função anônima. Essa função é definida como (newDoor) => setDoor1(newDoor), onde newDoor é o argumento que será passado pela função changeSelection em Door.tsx. */}
      </div>
      <div className={styles.buttons}>
        <Link href="/">
        <button>Reiniciar jogo</button>
        </Link>
      </div>
    </div>
  );
}
