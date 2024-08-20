import styles from "../styles/Door.module.css";

export default function Door(props) {

  const selected = props.selected ? styles.doorSelected : '';

  return (
    <div className={styles.doorArea}>
      <div className={`${styles.doorCasing} ${selected}`}>
        <div className={styles.door}>
          <div className={styles.doorNumber}>3</div>
          <div className={styles.doorHandle}></div>

        </div>
      </div>
      <div className={styles.doorFloor}></div>
    </div>

  )
}