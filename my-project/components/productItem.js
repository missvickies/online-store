export const ProductItem = ({ id, img, title }) => {
  return (
    <>
      <div className="flex flex-col lg:w-64 break-all">
        <img src={img} />
        <p>{title}</p>
        <button> Quick View</button>
      </div>
    </>
  );
};
