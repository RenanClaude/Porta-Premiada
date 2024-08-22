import DoorModel from "../model/DoorModel";
import styles from "../styles/Door.module.css";
import Gift from "../components/Gift"

interface DoorProps {
  value: DoorModel,
  onChange: (newDoor: DoorModel) => void
  // onChange é uma propriedade criada com o valor de uma função anonima que é passada de pai (index.tsx) pra filho (Door) via props. Então essa função é chamada no componente filho em changeSelection. 
}

export default function Door(props: DoorProps) {
  const door = props.value;

  const selected = door?.selected && !door.opened ? styles.doorSelected : '';

  const changeSelection = e => props.onChange(door.toggleSelection());
  // props.onChange(...): Após inverter o valor de selected, o novo objeto DoorModel é passado como argumento para a função onChange, que foi recebida como uma prop pelo componente Door.
  // props.onChange(...): A nova instância de DoorModel retornada por toggleSelection() é passada como argumento para props.onChange.
  // Isso ocorre porque a função changeSelection foi configurada para passar o resultado da chamada door.toggleSelection() (a nova instância de DoorModel) para a função onChange. Essa função onChange foi passada como uma prop para o componente Door, e é responsável por lidar com a mudança de estado no componente pai (Home).
  // O changeSelection é chamado, executando props.onChange(door.toggleSelection()).
  // A função passada como onChange em index.tsx é chamada com a nova instância de DoorModel, alterando o estado do componente pai (index.tsx).

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
      {/* onClick={changeSelection}: Quando o elemento div é clicado, a função changeSelection é executada. Como vimos acima, isso inverte o estado de seleção da porta e chama a função onChange com a nova instância de DoorModel. */}

      <div className={`${styles.doorCasing} ${selected}`}>
        {door.closed ? renderDoor() : 
        door.haveAGift ? <Gift /> : false }
      </div>

      <div className={styles.doorFloor}></div>
    </div>

  )
}