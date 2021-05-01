import React, { useContext,useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';
import "./index.css"

export const Skills = () => {
  const { theme } = useContext(ThemeContext);


  return (
    <>
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Details theme={theme}>
          <center><h1>Recommended Tunes</h1></center>
          <center>
          <p>
          Let the music take you away.
          </p>
          </center>

        </Details>
      </SkillsWrapper>
    </Wrapper>
    <div  style={{backgroundColor: "rgb(243, 244, 249)"}}>      
      <div  id="tunes" style={{paddingLeft:"20px",display:"flex",justifyContent:"center"}} >
      <iframe className="playerVal" id="myFrame" src="https://open.spotify.com/embed/playlist/5SMjI3BRUfxfOPpmun0p7s" width="95%" height="700" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    </div>  
    </>
  );
};
