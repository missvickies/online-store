export const ProductItem = ({ id, img }) => {
  return (
    <>
      <div className="flex flex-col ">
        <img src={img} />
        <button> Quick View</button>
      </div>
    </>
  );
};
