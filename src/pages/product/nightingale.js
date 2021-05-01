import React from "react";
import products from "../../data/data";
import Product from "../../components/product/index";
import { Layout } from "components/common";
import { render } from "react-dom";

export default () => (
    <Layout>
      <Product product={products[13]} />
    </Layout>
);
