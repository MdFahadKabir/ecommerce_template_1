import React from "react";
import ProductDetails from "../../_component/ProductDetails";

const ProductViewPage = ({ params }) => {
  console.log(params.slug)
  return (
    <div>

      <ProductDetails product_id={params.slug}></ProductDetails>
    </div>
  );
};

export default ProductViewPage;
