import React from "react";
import { Container } from "components/common";
import contact from "assets/illustrations/contact.svg";
import { Wrapper, Details, Thumbnail } from "./styles";
import ContactForm from "./ContactForm";
import { Button } from "components/common";
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";

export const Contact = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Wrapper as={Container} id="contact">
      <Details>
        <h1>Add to Elixir</h1>
        <h3>Videos that convince. Music that inspires.</h3>
        <Button onClick={handleClickOpen}>Add</Button>
      </Details>
      <Thumbnail>
        <img
          src={contact}
          alt="I’m John and I’m a Backend & Devops engineer!"
        />
      </Thumbnail>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
      >
        <DialogTitle style={{marginBottom: "30px"}}>Add to Elixir</DialogTitle>
        <DialogContent>
        <ContactForm />
        </DialogContent>
      </Dialog>
    </Wrapper>
  );
};
