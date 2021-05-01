import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import elixir from 'assets/illustrations/elixir.png';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1 style={{fontFamily: "system-ui"}}>Elixir</h1>
          <h4>View. Create. Inspire.</h4>
          <Button as={AnchorLink} href="#projects">
            Get Started
          </Button>
        </Details>
        <Thumbnail>
          <img src={elixir} alt="Elixir"/>
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
