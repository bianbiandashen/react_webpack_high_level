import { Point, IViewer } from "./types";

/** 小方块 */
export class Square {
  // private _point: Point;
  // private _color: string | undefined;
  private _viewer?: IViewer;

  public get viewer(): IViewer | undefined {
    return this._viewer;
  }

  public set viewer(value: IViewer | undefined) {
    this._viewer = value;
    if (value) {
      this._viewer?.show();
    }
  }

  public get point(): Point {
    return this._point;
  }

  public set point(value: Point) {
    this._point = value;
    if (this._viewer) {
      this._viewer.show();
    }
  }

  public get color() {
    return this._color;
  }
  // Parameter properties declare and initialize _point and _color
  public constructor(private _point: Point, private _color: string) {}

  // public constructor(point: Point, color: string) {
  //   this._point = point;
  //   this._color = color; // Now `_color` is initialized
  // }
}
