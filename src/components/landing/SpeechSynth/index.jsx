import React from "react";
import { Container } from "components/common";
import contact from "assets/illustrations/contact.svg";
import { Wrapper, Details, Thumbnail } from "./styles";
import { Button } from "components/common";
import { Dialog, DialogContent, DialogTitle,TextField } from "@material-ui/core";

export const SpeechSynth = () => {
    const [open, setOpen] = React.useState(false);
  
    return (
      <Wrapper as={Container} id="voiceover">
        <Details>
          <h1>Want Voiceover for your videos?</h1>
          <h3>Add text and click download to get the Voiceover</h3>
          <a target="_blank" href="https://translate.google.com/translate_tts?ie=UTF-8&q=Introducing+Elixir&tl=en&client=tw-ob">
          <Button >Download</Button>
          </a>
        </Details>
        <Thumbnail>
        <TextField
          id="outlined-multiline-static"
          label="VoiceOver"
          multiline
        
          rows="10"
          defaultValue=""
          style={{ 
            marginLeft: "10px",
            marginRight: "10px",
            width:"500px",
          }}
          margin="normal"
          variant="outlined"
        />
          {/* <img
            src={contact}
            alt="I’m John and I’m a Backend & Devops engineer!"
          /> */}
        </Thumbnail>
      </Wrapper>
    );
  };
  