import React, { useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeContext } from "providers/ThemeProvider";
import { Container } from "components/common";
import Star from "components/common/Icons/Star";
import Fork from "components/common/Icons/Fork";
import { Wrapper } from "./styles";
import products from "../../../data/data";
import { Grid, Card, CardContent, Paper } from "@material-ui/core";

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  return (
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
          <Grid item lg={4}>
            <a href="https://google.com">
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
            </a>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
