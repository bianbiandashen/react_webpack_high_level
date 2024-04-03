import { Square } from "./core/Square";
import { IViewer } from "./core/types";
import { SquarePageViewer } from "./core/viewer/SquarePageViewer";
import $ from "jquery";

/** 契约 */
/** 给方方做个小方块 */
const sq = new Square({ x: 0, y: 0 }, "red");

sq.point = { x: 0, y: 0 };
sq.viewer = new SquarePageViewer(sq, $("#root"));

$("#btn-down").on("click", () => {
  sq.point = { x: sq.point?.x, y: sq.point?.y + 1 };
});

$("#btn-remove").on("click", () => {
  sq.viewer?.remove();
});
$("#btn-add").on("click", () => {
  const sq = new Square({ x: 0, y: 0 }, "red");
  sq.viewer = new SquarePageViewer(sq, $("#root"));
});
