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
    <div className="h-screen overflow-hidden">
      <NavBar></NavBar>
      <div className="flex flex-row justify-evenly h-screen overflow-hidden">
        <div className="bg-pink-100 h-100 overflow-scroll">
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

        <div className="bg-pink-100">
          <Carousel />
        </div>
        <div className="bg-pink-100">
          <h1 className="m-20"> Summer Apparel</h1>
          <br></br>
          <Post
            id={blogPosts[3].id}
            title={blogPosts[3].title}
            summary={blogPosts[3].summary}
            img={blogPosts[3].img}
          />
        </div>
      </div>
    </div>
  );
}
