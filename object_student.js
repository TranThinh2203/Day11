let products = [
  { id: 1, name: "Laptop", price: 1500 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Tablet", price: 600 }
];

const getProductById = (id) => products.find((p) => p.id === id);
const getTotalPrice = () => products.reduce((total, p) => total + p.price, 0);

products.push({ id: 4, name: "Headphone", price: 200 });

console.log("Sản phẩm có id = 2:", getProductById(2));
console.log("Tổng giá tất cả sản phẩm:", getTotalPrice());

const expensiveProducts = products
  .filter((p) => p.price > 700)
  .map((p) => p.name);

console.log("Sản phẩm có giá > 700:", expensiveProducts);
