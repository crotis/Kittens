import dispatcher from "../dispatcher";
/*
Handles all even events where a Kitten is created in the Store
Triggered by components
*/
export function createKitten(text) {
  dispatcher.dispatch({
    type: "CREATE_KITTEN",
    text,
  });
}
