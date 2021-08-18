import { NavBar } from "../../components/NavBar";

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=9&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "d42578c075mshd085efad4aa21e3p12c67ajsn0c24c0da9233",
        "x-rapidapi-host": "asos2.p.rapidapi.com",
      },
    }
  );
  const data = await res.json();

  console.log(data);

  // map data to an array of path objects with params (id)
  const paths = data.products.map((product) => {
    return {
      params: { id: product.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    "https://asos2.p.rapidapi.com/products/v3/detail?id=" +
      id +
      "&lang=en-US&store=US&sizeSchema=US&currency=USD",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "d42578c075mshd085efad4aa21e3p12c67ajsn0c24c0da9233",
        "x-rapidapi-host": "asos2.p.rapidapi.com",
      },
    }
  );
  const data = await res.json();
  console.log("product detail " + data);

  return {
    props: { product: data },
  };
};

const productDetails = ({ product }) => {
  return (
    <>
      <NavBar />
      <div className="flex content-center justify-evenly flex-wrap">
        <img src={"https://" + product.media.images[1].url} />
        <div>
          <h1>{product.imageUrl}</h1>
          <h1>{product.name}</h1>
          <h1>{product.brandName}</h1>
          <div dangerouslySetInnerHTML={{ __html: product.description }} />
          {product.sizeGuide ? (
            <a href={"https://" + product.sizeGuide}>Size Guide </a>
          ) : null}
          {product.isInStock ? <p>In Stock</p> : null}
          {product.variants.map((variant) => variant.brandSize)}
        </div>
      </div>
    </>
  );
};

export default productDetails;
