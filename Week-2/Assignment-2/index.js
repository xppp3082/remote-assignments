var goods = {
  size: 3,
  products: [
    {
      name: "Product 1",
      price: 100,
    },
    {
      name: "Product 2",
      price: 700,
    },
    {
      name: "Product 3",
      price: 250,
    },
  ],
};
function avg(data) {
  let products = data.products;
  let output =
    products.reduce((acc, product) => (acc += product.price), 0) /
    products.length;
  return output;
}

console.log(avg(goods));
