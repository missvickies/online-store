import Head from "next/head";
import { Post } from "../components/post";
import { NavBar } from "../components/NavBar";
import { Carousel } from "../components/Carousel";

const blogPosts = [
  {
    id: 1,
    title: "title",
    img: "https://via.placeholder.com/250x150",
    summary: "sometingfdsfa fdf saf d fsfsfsfsdfa f dsfsa",
    date: "",
  },
  {
    id: 2,
    title: "title fdsafd",
    img: "https://via.placeholder.com/250x200",
    summary: "sometingfdsfa fdf saf d fsfsfsfsdfa f dsfsa",
    date: "",
  },
  {
    id: 3,
    title: "title adsfdsaf",
    img: "https://via.placeholder.com/250",
    summary: "sometingfdsfa fdf saf d fsfsfsfsdfa f dsfsa",
    date: "",
  },
  {
    id: 4,
    title: "",
    img: "https://via.placeholder.com/250",
    summary: "",
    date: "",
  },
];

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <div className=" h-screen w-screen overflow-hidden">
        <div className="flex flex-row justify-evenly h-screen overflow-hidden">
          <div className=" h-100 overflow-scroll">
            {blogPosts.map((post) => (
              <Post
                key={post.id}
                id={post.id}
                title={post.title}
                summary={post.summary}
                img={post.img}
              />
            ))}
          </div>

          <Carousel />

          <div className=" mt-20">
            <p> New Collection</p>
            <h1 className=""> Summer Apparel</h1>
            <div className=" border-b-4 w-16"></div>
            <br></br>
            <h2>Quality that never goes out of style</h2>
            <Post
              id={blogPosts[3].id}
              title={blogPosts[3].title}
              summary={blogPosts[3].summary}
              img={blogPosts[3].img}
            />
          </div>
        </div>
      </div>
    </>
  );
}
