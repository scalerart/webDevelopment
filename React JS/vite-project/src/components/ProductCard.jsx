function ProductCard({ products, addToCart }) {
  return (
    <>
      <div className=" p-6  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-4 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-5 shadow-sm hover:shadow-md rounded-2xl hover:-translate-y-1 transition-all ease-in-out delay-200"
          >
            <div className="h-50 rounded-xl bg-gray-200 flex items-center justify-center hover:shadow-md">
              image
            </div>
            <h2 className="my-2 text-xl font-semibold">{product.title}</h2>
            <div className="flex justify-between my-1">
              <p>${product.price}</p>
              <p>Rating 4.5</p>
            </div>
            <button
              onClick={() => addToCart(product)}
              className="flex-1 w-full mt-2 py-2 text-white bg-orange-400 hover:bg-orange-500 rounded-md cursor-pointer transition-all ease-in-out duration-300"
            >
              Add To Card
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductCard;
