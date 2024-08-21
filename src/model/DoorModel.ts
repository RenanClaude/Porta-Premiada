export default class DoorModel {

  #number: number
  #haveAGift: boolean
  #selected: boolean
  #opened: boolean

  constructor(number, haveAGift = false, selected = false, opened = false) {
    this.#number = number;
    this.#haveAGift = haveAGift;
    this.#selected = selected;
    this.#opened = opened;
  }

  get number() {
    return this.#number;
  }

  get haveAGift() {
    return this.#haveAGift;
  }

  get selected() {
    return this.#selected;
  }

  get opened() {
    return this.#opened;
  }

  deselect() {
    const selected = false;
    return new DoorModel(this.number, this.haveAGift, selected, this.opened);
  }

  toggleSelection() {
    const selected = !this.selected;
    return new DoorModel(this.number, this.haveAGift, selected, this.opened);
  }

  open() {
    const opened = true;
    return new DoorModel(this.number, this.haveAGift, this.selected, opened);
  }

}