import Door from "@/components/Door";
import Gift from "@/components/Gift";
import DoorModel from "../model/DoorModel";

export default function Home() {
  const door1 = new DoorModel(1, false, true);
  const door2 = new DoorModel(2);

  return (
    <div style={{ display: "flex" }}>
      {/* <Gift /> */}
      <Door door={door1} />
      <Door door={door2} />
    </div>
  );
}
