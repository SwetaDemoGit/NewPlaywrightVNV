namespace MathUtils {
  export function add(a: number, b: number): number {
    return a + b;
  }

  export function subtract(a: number, b: number): number {
    return a - b;
  }
}

console.log(MathUtils.add(10, 5));
console.log(MathUtils.subtract(10, 5));
