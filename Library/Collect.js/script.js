function collectArray() {
    const collection = collect([1, 2, 3, 4, 5]);
    const multipliedCollection = collection.map(item => item * 2).filter(item => item > 5);
    console.log(multipliedCollection.toArray()); // Outputs: [6, 8, 10]
  }
  