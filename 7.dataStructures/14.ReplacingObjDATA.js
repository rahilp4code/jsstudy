const build = [
  {
    id: 1,
    name: "The Potato Masher",
    summary: "Ultra-budget PC for browsing, streaming, and light gaming.",
    price: 32000,
    currency: "INR",
  },
  {
    id: 1,
    name: "The Potato Masher",
    summary: "Ultra-budget PC for browsing, streaming, and light gaming.",
    price: 32000,
    currency: "INR",
  },
];

const update = {
  price: 35000,
};

const updated = { ...build[0], ...update };
console.log(updated);
