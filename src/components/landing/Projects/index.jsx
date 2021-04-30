import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container} from 'components/common';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import { Wrapper} from './styles';
import products from '../../../data/data'
import {Grid, Card, CardContent} from '@material-ui/core';

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper as={Container} id="projects">
      <h2>Products</h2>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={3}>
          <Card>
              <img style={{"marginBottom": "0px", "height": "255px"}} src={product.image} />
          </Card>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};
