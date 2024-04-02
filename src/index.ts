import { Square } from "./core/Square";
import { IViewer } from "./core/types";

/** 契约 */

/** 给方方做个小方块 */
class SquareConsoleViewer implements IViewer {
  constructor(private square: Square) {}
  show(): void {
    console.log(this.square.point, this.square.color, "SquareConsoleViewer");
  }
  remove(): void {
    console.log("SquareConsoleViewer");
  }
}

const sq = new Square({ x: 0, y: 0 }, "red");

sq.viewer = new SquareConsoleViewer(sq);

sq.point = { x: 10, y: 10 };

sq.point = { x: 10, y: 12 };
