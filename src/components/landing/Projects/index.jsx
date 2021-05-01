import React, { useContext } from "react";
import { ThemeContext } from "providers/ThemeProvider";
import products from "../../../data/data";
import { Grid, Card } from "@material-ui/core";
import Product from "../../product/index";
import "./index.css";

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        id="projects"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: "40px !important",
          padding: "250px",
          backgroundColor: "#f3f4f9",
          marginTop: "50px",
        }}
      >
        <Grid
          style={{ marginTop: "30px" }}
          container
          justify="center"
          spacing={3}
        >
          {products.map((product) => (
            <Grid key={product.name} item lg={4}>
              <a href={"/product/"+product.name.replace(/\s/g, '').toLowerCase()} className="card-link">
                <Card
                  elevation={5}
                  style={{
                    height: "250px",
                    width: "250px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: product.color,
                    borderRadius: "20px",
                  }}
                >
                  <img
                    style={{
                      marginBottom: "0px",
                      width: "60%",
                    }}
                    src={product.image}
                  />
                </Card>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "20px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "30px",
                        marginRight: "10px",
                        marginBottom: "10px",
                      }}
                    >
                      {product.emoji}
                    </span>
                    <h3 style={{ color: "#57585A", marginBottom: "10px" }}>
                      {" "}
                      {product.name}
                    </h3>
                  </div>
                  <div>
                    <p style={{ color: "grey" }}>{product.description}</p>
                  </div>
                </div>
              </a>
            </Grid>
          ))}
        </Grid>
      </div>
      <Product product={products[0]} />
    </>
  );
};
