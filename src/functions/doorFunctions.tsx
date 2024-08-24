import DoorModel from "@/model/DoorModel";

export function createDoors(quantity: number, doorThatHoldsAGift: number): DoorModel[] {
  return Array.from({ length: quantity }, (value, index) => {
    const number = index + 1;
    const haveAGift = number === doorThatHoldsAGift;
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
    }
  })
}