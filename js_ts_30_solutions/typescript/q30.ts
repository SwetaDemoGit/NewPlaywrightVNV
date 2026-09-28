// Q30. Shape Manager — Combined Challenge
abstract class Shape {
  private static shapeCount: number = 0;

  constructor() {
    Shape.shapeCount++;
  }

  getName(): string {
    return "Shape";
  }

  abstract area(): number;

  static getShapeCount(): number {
    return Shape.shapeCount;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  override getName(): string {
    return "Circle";
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  override getName(): string {
    return "Rectangle";
  }

  area(): number {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [
  new Circle(5),
  new Rectangle(4, 6),
  new Circle(2)
];

for (const shape of shapes) {
  console.log(`${shape.getName()} area = ${shape.area().toFixed(2)}`);
}

console.log("Total shapes created:", Shape.getShapeCount());
