{
  // Problem 1:

  function formatString(input: string, toUpper: boolean = true): string {

    return toUpper ? input.toUpperCase() : input.toLowerCase();

  }

  console.log(formatString("Hello")); // Output: "HELLO"
  formatString("Hello", true); // Output: "HELLO"
  console.log(formatString("Hello", false)); // Output: "hello"

  console.log(formatString('Tanvir can do it', false))


  ///probpem-2

  type Item = {
    title: string;
    rating: number;
  };

  function filterByRating(items: Item[]): Item[] {
    return items.filter(item => item.rating >= 4);
  };


  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];

  console.log(filterByRating(books))









  
}
