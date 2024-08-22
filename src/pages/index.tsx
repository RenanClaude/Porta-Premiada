import Door from "@/components/Door";
import { createDoors, updateDoors } from "@/functions/doorFunctions";
import { useState } from "react";
import DoorModel from "../model/DoorModel";

export default function Home() {
  const [doors, setDoors] = useState(createDoors(3, 2))

  function renderDoors() {
    return doors.map((door => {
      return <Door value={door} onChange={newDoor => setDoors(updateDoors(doors, newDoor))} key={door.number} />

    }))
  }

  return (
    <div style={{ display: "flex" }}>
      {renderDoors()}
      {/* onChange={newDoor => setDoor1(newDoor)}: A prop onChange recebe uma função que, quando chamada, atualiza o estado de door1 com uma nova instância de DoorModel (passada como newDoor). 
      onChange={newDoor => setDoor1(newDoor)}: Aqui, onChange é uma prop que recebe uma função anônima. Essa função é definida como (newDoor) => setDoor1(newDoor), onde newDoor é o argumento que será passado pela função changeSelection em Door.tsx. */}
    </div>
  );
}
