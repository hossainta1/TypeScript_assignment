{
  // Problem 1:

  function formatString(input: string, toUpper: boolean = true): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
  }

  console.log(formatString("Hello")); // Output: "HELLO"
  formatString("Hello", true); // Output: "HELLO"
  console.log(formatString("Hello", false)); // Output: "hello"

  console.log(formatString("Tanvir can do it", false));

  ///probpem-2

  type Item = {
    title: string;
    rating: number;
  };

  function filterByRating(items: Item[]): Item[] {
    return items.filter((item) => item.rating >= 4);
  }

  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
  ];

  console.log(filterByRating(books));

  //// problem-3

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return ([] as T[]).concat(...arrays);
  }


/// problem-4
 
class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

// Car Class (Extends Vehicle)
class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel(): string {
    return `Model: ${this.model}`;
  }
}


// problem-5
function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length; 
  } else {
    return value * 2;
  }
}

// problem-6





 














}
