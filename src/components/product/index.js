import React from "react";
import Top from "./components/Top";
import YoutubeApi from "./components/YoutubeApi";
import { Grid } from "@material-ui/core";

import "./index.css"

function App({product}) {
  return (
    <>
      <Grid spacing={0}>
        <div style={{ backgroundColor: product.color }}>
          <Top
            image={product.image}
            website={product.website}
            channel={product.channel}
          ></Top>
        </div>
      </Grid>
      <Grid container>
        <Grid item lg={12} className="playerAlign">
          {" "}
          <div className="player">
            <iframe
              width="720"
              height="405"
              className="playerVal"
              src={product.youtube}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
              allowfullscreen
            ></iframe>
          </div>
        </Grid>
      </Grid>
      <YoutubeApi id={product} />
    </>
  );
}

export default App;
