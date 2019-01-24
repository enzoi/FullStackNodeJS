import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'semantic-ui-react';
import { Formik } from 'formik';

const SurveyForm = () => (
    <div>
      <Formik
        initialValues={{ title: '', subject: '', body: '', emails: '' }}
        validate={values => {
            let errors = {};

            if (!values.email) {
                errors.email = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }
            return errors;
        }}

        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Field>
                <label>Survey Title</label>
                <Input
                    placeholder="Campaign Title" 
                    className="validate"
                    type="title"
                    name="title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                />
                {errors.title && touched.title && errors.title}
            </Form.Field>
                    
            <Form.Field>
                <label>Subject Line</label>
                <Input
                    placeholder="Subject Line" 
                    type="subject"
                    name="subject"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.subject}
                />
                {errors.subject && touched.subject && errors.subject}
            </Form.Field>
                    
            <Form.Field>
                <label>Email Body Title</label>
                <Input
                    placeholder="Email Body" 
                    type="body"
                    name="body"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.body}
                />
                {errors.body && touched.body && errors.body}
            </Form.Field>

            <Form.Field>
                <label>Recipient List</label>
                <Input
                    placeholder="Recipient List" 
                    type="emails"
                    name="emails"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.emails}
                />
                {errors.emails && touched.emails && errors.emails}
            </Form.Field>

            <Link to="/surveys">
                <Button floated='left' negative>
                    Cancel
                </Button>
            </Link>
            <Button floated='right' positive type="submit" disabled={isSubmitting}>
                Next
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );

export default SurveyForm;