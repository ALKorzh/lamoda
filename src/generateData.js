import Chance from 'chance';

const chance = new Chance();

export function generateProducts(count = 50) {
  return Array.from({ length: count }, () => {
    const randomImageIndex = chance.integer({ min: 1, max: 10 });
    return {
      id: chance.guid(),
      name: chance.word(),
      description: chance.sentence({ words: 5 }),
      color: chance.pickone(['red', 'blue', 'green', 'yellow', 'black']),
      category: chance.pickone(['electronics', 'clothing', 'books', 'sports', 'home', 'toys']),
      price: chance.integer({ min: 10, max: 9999 }),
      rating: Number(chance.floating({ min: 0, max: 5 }).toFixed(1)),
      imageUrl: `../public/images/1.jpg`,
    };
  });
}
