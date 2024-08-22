import DoorModel from "@/model/DoorModel";

export function createDoors(quantity: number, selected: number): DoorModel[] {
  return Array.from({ length: quantity }, (value, index) => {
    const number = index + 1;
    const haveAGift = number === selected;
    return new DoorModel(number, haveAGift);
  })
}

export function updateDoors(doors: DoorModel[], modifiedDoor: DoorModel) {
  return doors.map((door) => {

    const doorToBeModified = door.number === modifiedDoor.number;

    if (doorToBeModified) {
      return modifiedDoor;
    } else {
      return modifiedDoor.opened ? door : door.deselect();
      // modifiedDoor é uma porta que acabou de ser modificada ou com a seleção ou com a abertura da porta. Se foi com a abertura, ela estará aberta, portanto não foi selecionada, portanto não deve ser desselecionada a porta que está atualmente selecionada, então é retornada door como já está, normalmente.
    }
  })
}