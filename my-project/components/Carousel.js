import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/solid";
import react from "react";
const images = [
  "https://via.placeholder.com/400x600",
  "https://via.placeholder.com/300x300",
  "https://via.placeholder.com/300x400",
  "https://via.placeholder.com/300x300",
  "https://via.placeholder.com/600x600",
];

export const Carousel = () => {
  const [currentImage, setImage] = react.useState(0);

  return (
    <div className="flex-col">
      <div className="relative">
        <img src={images[currentImage]} />
      </div>
      <div className="flex flex-row justify-between">
        <button
          onClick={() => {
            if (currentImage > 0) {
              setImage(currentImage - 1);
            } else {
              setImage(images.length - 1);
            }
          }}
        >
          <ArrowNarrowLeftIcon className="h-5 m-8" />
        </button>
        <button
          onClick={() => {
            if (currentImage < images.length - 1) {
              setImage(currentImage + 1);
            } else {
              setImage(0);
            }
          }}
        >
          <ArrowNarrowRightIcon className="h-5 m-8" />
        </button>
      </div>
    </div>
  );
};
