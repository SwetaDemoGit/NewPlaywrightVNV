// Q28. Transport Fare
abstract class Transport {
  constructor(protected distance: number) {}

  abstract calculateFare(): number;
}

class Bus extends Transport {
  calculateFare(): number {
    return this.distance * 2;
  }
}

class Train extends Transport {
  calculateFare(): number {
    return this.distance * 1.5;
  }
}

class Taxi extends Transport {
  calculateFare(): number {
    const baseFare = 50;
    return baseFare + this.distance * 12;
  }
}

const transports: Transport[] = [
  new Bus(10),
  new Train(10),
  new Taxi(10)
];

for (const transport of transports) {
  console.log(transport.calculateFare());
}
