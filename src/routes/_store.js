import {writable, get} from "svelte/store";

export class Tab {
  constructor() {
    this.tabIndex = writable(0);
  }
}
export const t = new Tab();
