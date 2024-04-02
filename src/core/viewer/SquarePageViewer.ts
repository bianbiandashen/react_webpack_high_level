import { Square } from "../Square";

import { IViewer } from "../types";

import $ from "jquery";

export class SquarePageViewer implements IViewer {
  private dom?: JQuery<HTMLElement>;

  show(): void {
    if (!this.dom) {
      this.dom = $("<div></div>")
        .css({
          position: "absolute",
          width: "50px",
          height: "50px",
          backgroundColor: "red",
          border: "1px solid #000",
          boxSizing: "border-box",
        })
        .appendTo($("#root"));
    }

    this.dom.css({
      left: this.square.point.x * 50,
      top: this.square.point.y * 50,
    });
    console.log(this.square.point, this.square.color, "SquareConsoleViewer");
  }
  remove(): void {
    console.log("SquareConsoleViewer");
  }
  constructor(private square: Square) {}
}
