import Card from "@/components/Card";
import NumericImput from "@/components/NumericInput";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Form.module.css";

export default function Form() {
  const [doorsQuantity, setDoorsQuantity] = useState(3);
  const [doorThatHoldsAGift, setdoorThatHoldsAGift] = useState(2);



  return (
    <div className={styles.form}>

      <div>
        <Card bgcolor="#c0392c">
          <h1 className={styles.text}>Monty Hall</h1>
        </Card>
        <Card>
          <NumericImput text="Quantidade de portas?" value={doorsQuantity} onChange={newQuantity => setDoorsQuantity(newQuantity)} />
        </Card>
      </div>

      <div>
        <Card>
        <NumericImput text="Qual porta tem o presente?" value={doorThatHoldsAGift} onChange={holdsAGift => setdoorThatHoldsAGift(holdsAGift)} />

        </Card>
        <Card bgcolor="#28a085">
          <Link href={`/game/${doorsQuantity}/${doorThatHoldsAGift}`} className={styles.link}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}
