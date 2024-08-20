export default class Door {

  #number
  #haveAGift
  #selected
  #opened

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
    return new Door(this.number, this.haveAGift, selected, this.opened);
  }

  toggleSelection() {
    const selected = !this.selected;
    return new Door(this.number, this.haveAGift, selected, this.opened);
  }

  open() {
    const opened = true;
    return new Door(this.number, this.haveAGift, this.selected, opened);
  }

}