import React from "react";
import axios from "axios";
import { Formik, Form, FastField, ErrorMessage } from "formik";
import Recaptcha from "react-google-recaptcha";
import * as Yup from "yup";
import { Button, Input } from "components/common";
import { Error, Center, InputField } from "./styles";
import { TextField, Autocomplete } from "@material-ui/core";

export default () => (
    <Formik
      initialValues={{
        name: "",
        website: "",
        youtube: "",
        recaptcha: "",
        success: false,
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("Full name field is required"),
        website: Yup.string()
          .url("Invalid URL")
          .required("Product Website is required."),
        youtube: Yup.string()
          .url("Invalid URL")
          .required("Product Video YouTube Link is required."),
        recaptcha: Yup.string().required("Robots are not welcome yet!"),
      })}
      onSubmit={async (
        { name, website, youtube },
        { setSubmitting, resetForm, setFieldValue }
      ) => {
        try {
          await axios({
            method: "POST",
            url: `${process.env.GATSBY_PORTFOLIO_FORMIK_ENDPOINT}`,
            headers: {
              "Content-Type": "application/json",
            },
            data: JSON.stringify({
              name,
              website,
              youtube,
            }),
          });
          setSubmitting(false);
          setFieldValue("success", true);
          setTimeout(() => resetForm(), 6000);
        } catch (err) {
          setSubmitting(false);
          setFieldValue("success", false);
          alert("Something went wrong, please try again!"); // eslint-disable-line
        }
      }}
    >
      {({ values, touched, errors, setFieldValue, isSubmitting }) => (
        <Form>
          <InputField>
            <Input
              as={FastField}
              type="text"
              name="name"
              component="input"
              aria-label="name"
              placeholder="Product Name*"
              error={touched.name && errors.name}
            />
            <ErrorMessage component={Error} name="name" />
          </InputField>
          <InputField>
            <Input
              id="website"
              aria-label="website"
              component="input"
              as={FastField}
              type="url"
              name="website"
              placeholder="Website*"
              error={touched.website && errors.website}
            />
            <ErrorMessage component={Error} name="website" />
          </InputField>
          <InputField>
            <Input
              id="youtube"
              aria-label="youtube"
              component="input"
              as={FastField}
              type="url"
              name="youtube"
              placeholder="YouTube Video Link*"
              error={touched.youtube && errors.youtube}
            />
            <ErrorMessage component={Error} name="youtube" />
          </InputField>
          {values.name && values.website && values.youtube && (
            <InputField>
              <FastField
                component={Recaptcha}
                sitekey={process.env.GATSBY_PORTFOLIO_RECAPTCHA_KEY}
                name="recaptcha"
                onChange={(value) => setFieldValue("recaptcha", value)}
              />
              <ErrorMessage component={Error} name="recaptcha" />
            </InputField>
          )}
          {values.success && (
            <InputField>
              <Center>
                <h4>
                  Thank you for making Elixir better. Your product video will be listed shortly!
                </h4>
              </Center>
            </InputField>
          )}
          <Center style={{ marginTop: "50px" }}>
            <Button secondary type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Center>
        </Form>
      )}
    </Formik>
  );
