import { Square } from "../Square";

import { IViewer } from "../types";

import { PageConfig } from "./PageConfig";

import $ from "jquery";

export class SquarePageViewer implements IViewer {
  private dom?: JQuery<HTMLElement>;

  private isRemove: boolean = false;
  show(): void {
    if (this.isRemove) {
      return;
    }
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
        .appendTo("#root");
    }

    this.dom.css({
      left: this.square.point.x * PageConfig.height,
      top: this.square.point.y * PageConfig.width,
      backgroundColor: this.square.color,
    });
    console.log(this.square.point, this.square.color, "SquareConsoleViewer");
  }
  remove(): void {
    if (!this.isRemove) {
      this.dom?.remove();
      this.isRemove = true;
    }
  }

  constructor(private square: Square, container: JQuery<HTMLElement>) {}
}
