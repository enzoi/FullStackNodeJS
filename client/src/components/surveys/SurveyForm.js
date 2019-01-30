import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Label } from 'semantic-ui-react';
import { Formik } from 'formik';
import { Persist } from 'formik-persist';
import * as Yup from 'yup';

const SurveySchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    subject: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    body: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required')
  });

const SurveyForm = (props) => (
    <div>
      <Formik
        initialValues={{ title: '', subject: '', body: '', recipients: '' }}
        validationSchema={SurveySchema}
        validate={values => {
            let errors = {};
            
            const invalidEmails = values.recipients
                .split(',')
                .map(email => email.trim())
                .filter(email => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email) === false);

            if (!values.recipients) {
                errors.emails = 'Required';
            } else if (invalidEmails.length) {
                errors.emails = `Invalid email addresses: ${invalidEmails}`;
            }
            return errors;
        }}

        onSubmit={(values) => {
            props.onSurveySubmit(values);
        }}
        
        render={({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
          /* and other goodies */
        }) => (
            <div>
                <h3>Please provide survey information</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Field>
                        <label>Survey Title</label>
                        <Input
                            placeholder="Campaign Title" 
                            type="title"
                            name="title"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                        />
                        {errors.title && touched.title ? ( 
                            <Label pointing style={{ color: 'red'}}>{errors.title}</Label> 
                        ) : null}
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
                        {errors.subject && touched.subject ? ( 
                            <Label pointing style={{ color: 'red'}}>{errors.subject}</Label> 
                        ) : null}
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
                        {errors.body && touched.body ? ( 
                            <Label pointing style={{ color: 'red'}}>{errors.body}</Label> 
                        ) : null}
                    </Form.Field>

                    <Form.Field>
                        <label>Recipient List</label>
                        <Input
                            placeholder="Recipient List" 
                            type="recipients"
                            name="recipients"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.recipients}
                        />
                        {errors.emails && touched.emails ? ( 
                            <Label pointing style={{ color: 'red'}}>{errors.emails}</Label> 
                        ) : null}
                    </Form.Field>

                    <Link to="/surveys">
                        <Button floated='left' negative>
                            Cancel
                        </Button>
                    </Link>
                    <Button 
                        floated='right' 
                        positive 
                        type="submit"
                    >
                        Next
                    </Button>
                    <Persist name="survey-form" />
                </Form>
            </div>
        )}
      />
    </div>
  );

export default SurveyForm;