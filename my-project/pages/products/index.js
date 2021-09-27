import { NavBar } from "../../components/NavBar";
import { ProductItem } from "../../components/productItem";
import Link from "next/link";
import React, { Component } from "react";

export default class products extends React.Component {
  state = {
    error: null,
    loading: true,
    productList: [],
    categories: [],
    gender: [],
    filter: [],
  };

  async componentDidMount() {
    await fetch(
      "https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=9&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
           
          "x-rapidapi-host": "asos2.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then(
        (result) => {
          this.setState({
            loading: false,
            productList: result,
          });
          console.log(result.products);
        },
        (error) => {
          this.setState({
            loading: true,
            error,
          });
        }
      );

    await fetch(
      "https://asos2.p.rapidapi.com/categories/list?country=US&lang=en-US",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "d42578c075mshd085efad4aa21e3p12c67ajsn0c24c0da9233",
          "x-rapidapi-host": "asos2.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then(
        (result) => {
          const brands = result.brands.map((brand) => ({
            category: brand.content.title,
            brandTitles: brand.children.map((elem) => elem.content.title),
          }));

          const gender = result.navigation.map(
            (gender) => gender.content.title
          );

          const filterMen = result.navigation[0].children
            .find((children) => children.content.title == "Categories")
            .children.map((elem) => ({
              category: elem.content.title,
              links: elem.children.map((elem) => ({
                category: elem.content.title,
                cid: elem.link.categoryId,
              })),
            }));

          this.setState({
            loading: false,
            categories: brands,
            gender: gender,
            filter: filterMen,
          });

          console.log(brands[0].brandTitles);
          console.log(filterMen);
        },
        (error) => {
          this.setState({
            loading: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, loading, productList, categories, gender, filter } =
      this.state;
    return (
      <div>
        <NavBar />
        <div className="flex flex-col items-center">
          <h1> Products</h1>
          <div className="flex flex-row">
            <div className="w-1/3">
              {gender.map((elem) => (
                <button>{elem}</button>
              ))}
              {}
              {filter.map((elem) => (
                <div>
                  <h1>{elem.category} </h1>
                  {/* <p>{elem.links.category}</p> */}
                  {/* <p>{elem.links.categoryId}</p> */}
                  {/* {elem.brandTitles.map((brand) => (
                    <p>{brand}</p>
                  ))} */}
                  {/* {filterMen.map((cat) => (
                    <p> {cat}</p>
                  ))} */}
                </div>
              ))}
            </div>

            <div className="flex flex-row gap-4 flex-wrap justify-evenly">
              {this.state.loading ? (
                <div>
                  <p>loading...</p>
                </div>
              ) : (
                productList.products.map((product) => (
                  <Link href={"/products/" + product.id} key={product.id}>
                    <a>
                      <ProductItem
                        id={product.id}
                        img={"https://" + product.imageUrl}
                        title={product.name}
                        key={product.id}
                      />
                    </a>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
