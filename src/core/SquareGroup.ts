import { Square } from "./Square";
import { Point, Shape } from "./types";

export class SquareGroup {
  /** 记录数组 */
  private _square: readonly Square[];
  constructor(private _shape: Shape, private _centerPoint: Point, private _color: string) {
    let array: Square[] = []
    this._shape.forEach(p => { 
      const sq = new Square();
      sq.color = this._color;
      sq.point = {
        x: this._centerPoint.x + p.x,
        y: this._centerPoint.y + p.y
      }
      array.push(sq);

    })
  }
  this._square = array;
  /** 形状取决于什么 */

}
