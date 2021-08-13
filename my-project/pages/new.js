import { NavBar } from "../components/NavBar";
import { ProductItem } from "../components/productItem";

const products = [
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
];

export default function newPage() {
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-2 h-screen gap-8">
        <div className="bg-pink-100 grid grid-flow-row h-3/4">
          <div className="bg-blue-100">image</div>
          <div className="flex flex-col items-center">
            <h1> NEW AROUND HERE</h1>
            <p>
              A bunch of new styles you’ve never seen before. Maybe introduce
              yourself.
            </p>
            <button> Show details</button>
          </div>
        </div>
        <div className="bg-blue-500 h-3/4">image</div>
      </div>

      <div className="flex flex-col items-center">
        <h1> Find your best fit</h1>
        <div className="flex flex-row gap-14">
          {products.map((product) => (
            <ProductItem id={product.id} img={product.img} />
          ))}
        </div>
      </div>
    </>
  );
}
