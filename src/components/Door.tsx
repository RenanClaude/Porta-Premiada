import DoorModel from "../model/DoorModel";
import styles from "../styles/Door.module.css";

interface DoorProps {
  door: DoorModel
}

export default function Door(props: DoorProps) {
  const { door } = props;

  const selected = door?.selected ? styles.doorSelected : '';

  return (
    <div className={styles.doorArea}>
      <div className={`${styles.doorCasing} ${selected}`}>
        <div className={styles.door}>
          <div className={styles.doorNumber}>{door?.number}</div>
          <div className={styles.doorHandle}></div>

        </div>
      </div>
      <div className={styles.doorFloor}></div>
    </div>

  )
}