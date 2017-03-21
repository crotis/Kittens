import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class KittenStore extends EventEmitter {
  constructor() {
    super()
    this.kitten = []
  }

  getAll() {
    return this.kitten;
  }

  createKitten(path) {
    this.kitten.push({
      text,
    })
    this.emit("change");
  }

  handleActions(action) {
    console.log("KittenStore recieved actions", action);
  }
}

const kittenStore = new KittenStore;
dispatcher.register(kittenStore.handleActions.bind(kittenStore));
window.dispatcher = dispatcher;

export default kittenStore;
