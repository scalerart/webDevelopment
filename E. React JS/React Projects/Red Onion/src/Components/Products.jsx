import { useContext } from "react";
import { ProductContext } from "../Context/ProductsContext";
import ProductCart from "./ProductCart";

const Products = () => {
    const { all_product } = useContext(ProductContext);

    return (
        <div>
            {
                all_product?.map(product => {
                    console.log(product.image);
                    <div>
                        <img src={product.image} alt="" />
                    </div>
                })
            }
        </div>
    );
};

export default Products;