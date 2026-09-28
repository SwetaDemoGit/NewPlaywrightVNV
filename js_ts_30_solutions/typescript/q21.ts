// Q21. Shape Area
interface Shape {
  area(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  area(): number {
    return this.width * this.height;
  }
}

class Square implements Shape {
  constructor(private side: number) {}

  area(): number {
    return this.side * this.side;
  }
}

const shapes: Shape[] = [
  new Circle(5),
  new Rectangle(4, 6),
  new Square(3)
];

for (const shape of shapes) {
  console.log(shape.area());
}
