import React from 'react';
import {AppBar, Button, TextField} from "@material-ui/core";
import {Formik, Form} from 'formik'

interface Values {
    Vorname: string;
    Nachname: string;
    email: string;
    Passwort: string;
}

interface Props {
    onSubmit: (values: Values) => void;
}

export const LoginForm: React.FC<Props> = ({onSubmit}) => {
    return (
      <Formik initialValues={{Vorname: '', Nachname: '', email: '', Passwort: ''}} onSubmit={(values) => {
          onSubmit(values);
      }}>
          {({ values, handleChange, handleBlur }) => (
              <Form>
                  <AppBar>SignUp</AppBar>
                  <br/>
                  <br/>
                  <div>
                      <TextField
                          placeholder="Vorname"
                        name="Vorname"
                        value={values.Vorname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                  </div>
                  <div>
                      <TextField
                          placeholder="Nachname"
                          name="Nachname"
                          value={values.Nachname}
                          onChange={handleChange}
                          onBlur={handleBlur}
                      />
                  </div>
                  <div>
                      <TextField
                          placeholder="Email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                      />
                  </div>
                  <div>
                      <TextField
                          placeholder="Passwort"
                          name="Passwort"
                          value={values.Passwort}
                          onChange={handleChange}
                          onBlur={handleBlur}
                      />
                  </div>
                  <Button type="submit">submit</Button>
                  <pre>{JSON.stringify(values, null, 2)}</pre>
              </Form>
          )}
      </Formik>
    );

};

export default LoginForm;
