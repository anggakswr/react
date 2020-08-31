import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";

// --------------------------------
const initialValues = {
  name: "",
  email: "",
  note: "",
  phones: [""],
};

// --------------------------------
const onSubmit = (values) => {
  console.log(values);
};

// yup validation --------------------------------
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
});

// --------------------------------
export default function SimpleForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnMount
    >
      {(formik) => {
        return (
          <Form>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name">
              {(errorMsg) => <small className="red">{errorMsg}</small>}
            </ErrorMessage>
            <label htmlFor="email">Email</label>
            <Field type="text" id="email" name="email" />
            <ErrorMessage name="email">
              {(errorMsg) => <small className="red">{errorMsg}</small>}
            </ErrorMessage>
            <label htmlFor="note">Note</label>
            <Field as="textarea" type="text" id="note" name="note" />

            <label htmlFor="phones">Phone List</label>
            <FieldArray name="phones">
              {(phonesProps) => {
                const { push, remove, form } = phonesProps;
                const { values } = form;
                const { phones } = values;
                return (
                  <div>
                    {phones.map((phone, i) => (
                      <div key={i}>
                        <Field name={`phones[${i}]`} />
                        {i > 0 && (
                          <button type="button" onClick={() => remove(i)}>
                            -
                          </button>
                        )}
                        <button type="button" onClick={() => push("")}>
                          +
                        </button>
                      </div>
                    ))}
                  </div>
                );
              }}
            </FieldArray>

            <button
              type="submit"
              disabled={
                !((formik.dirty && formik.isValid) || formik.isSubmitting)
              }
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
