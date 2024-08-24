import DoorModel from "../model/DoorModel";
import styles from "../styles/Door.module.css";
import Gift from "./Gift"

interface DoorProps {
  value: DoorModel,
  onChange: (newDoor: DoorModel) => void
}

export default function Door(props: DoorProps) {
  const door = props.value;

  const selected = door?.selected && !door.opened ? styles.doorSelected : '';

  const changeSelection = e => props.onChange(door.toggleSelection());

  const open = e => {
    e.stopPropagation();
    props.onChange(door.open());
  }

  function renderDoor() {
    return (
        <div className={styles.door}>
          <div className={styles.doorNumber}>{door?.number}</div>
          <div className={styles.doorHandle} onClick={open}></div>

        </div>
    )
  }

  return (
    <div className={styles.doorArea} onClick={changeSelection}>

      <div className={`${styles.doorCasing} ${selected}`}>
        {door.closed ? renderDoor() : 
        door.haveAGift ? <Gift /> : false }
      </div>

      <div className={styles.doorFloor}></div>
    </div>

  )
}