import Door from "@/components/Door";
import { useState } from "react";
import DoorModel from "../model/DoorModel";

export default function Home() {
  const [door1, setDoor1] = useState(new DoorModel(1));
  return (
    <div style={{ display: "flex" }}>
      <Door value={door1} onChange={newDoor => setDoor1(newDoor)} />
      {/* onChange={newDoor => setDoor1(newDoor)}: A prop onChange recebe uma função que, quando chamada, atualiza o estado de door1 com uma nova instância de DoorModel (passada como newDoor). 
      onChange={newDoor => setDoor1(newDoor)}: Aqui, onChange é uma prop que recebe uma função anônima. Essa função é definida como (newDoor) => setDoor1(newDoor), onde newDoor é o argumento que será passado pela função changeSelection em Door.tsx. */}
    </div>
  );
}
