import { NavBar } from "../components/NavBar";
import { ProductItem } from "../components/productItem";

const productList = [
  {
    id: 0,
    name: "Gladstone Cardigan",
    brand: "tna",
    img: "https://via.placeholder.com/350x400",
    details: "sometingfdsfa fdf saf d fsfsfsfsdfa f dsfsa",
    materials: "100% cotton",
    price: 88,
  },
  {
    id: 1,
    name: "Karelis Tank",
    brand: "tna",
    img: "https://via.placeholder.com/350x400",
    details: "sometingfdsfa fdf saf d fsfsfsfsdfa f dsfsa",
    materials: "100% cotton",
    price: 25,
  },
  {
    id: 2,
    name: "Polar Shirt Jacket",
    brand: "tna",
    img: "https://via.placeholder.com/350x400",
    details: "sometingfdsfa fdf saf d fsfsfsfsdfa f dsfsa",
    materials: "100% cotton",
    price: 28,
  },
  {
    id: 2,
    name: "Polar Shirt Jacket",
    brand: "tna",
    img: "https://via.placeholder.com/350x400",
    details: "sometingfdsfa fdf saf d fsfsfsfsdfa f dsfsa",
    materials: "100% cotton",
    price: 28,
  },
  {
    id: 2,
    name: "Polar Shirt Jacket",
    brand: "tna",
    img: "https://via.placeholder.com/350x400",
    details: "sometingfdsfa fdf saf d fsfsfsfsdfa f dsfsa",
    materials: "100% cotton",
    price: 28,
  },
  {
    id: 2,
    name: "Polar Shirt Jacket",
    brand: "tna",
    img: "https://via.placeholder.com/350x400",
    details: "sometingfdsfa fdf saf d fsfsfsfsdfa f dsfsa",
    materials: "100% cotton",
    price: 28,
  },
  {
    id: 2,
    name: "Polar Shirt Jacket",
    brand: "tna",
    img: "https://via.placeholder.com/350x400",
    details: "sometingfdsfa fdf saf d fsfsfsfsdfa f dsfsa",
    materials: "100% cotton",
    price: 28,
  },
  {
    id: 2,
    name: "Polar Shirt Jacket",
    brand: "tna",
    img: "https://via.placeholder.com/350x400",
    details: "sometingfdsfa fdf saf d fsfsfsfsdfa f dsfsa",
    materials: "100% cotton",
    price: 28,
  },
  {
    id: 2,
    name: "Polar Shirt Jacket",
    brand: "tna",
    img: "https://via.placeholder.com/350x400",
    details: "sometingfdsfa fdf saf d fsfsfsfsdfa f dsfsa",
    materials: "100% cotton",
    price: 28,
  },
];

export default function products() {
  return (
    <>
      <NavBar />

      <div className="flex flex-col items-center">
        <h1> Products</h1>
        <div className="flex flex-row gap-14 flex-wrap justify-evenly">
          {productList.map((product) => (
            <ProductItem id={product.id} img={product.img} />
          ))}
        </div>
      </div>
    </>
  );
}
