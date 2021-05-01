import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="tunes" style={{paddingLeft:"20px"}} >
    <iframe src="https://open.spotify.com/embed/playlist/5SMjI3BRUfxfOPpmun0p7s" width="100%" height="700" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
  
  );
};
