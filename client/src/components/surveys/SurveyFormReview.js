import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'semantic-ui-react';

const SurveyFormReview = ({ onCancel, onSubmit, formValues }) => {
    return (
        <div>
            <h3>Please confirm the survey form</h3>
            <Form onSubmit={onSubmit}>
                <Form.Field>
                    <label>Survey Title</label>
                    <Input
                        value={formValues.title}
                    />
                </Form.Field>
                        
                <Form.Field>
                    <label>Subject Line</label>
                    <Input
                        value={formValues.subject}
                    />
                </Form.Field>
                        
                <Form.Field>
                    <label>Email Body Title</label>
                    <Input
                        value={formValues.body}
                    />
                </Form.Field>

                <Form.Field>
                    <label>Recipient List</label>
                    <Input
                        value={formValues.emails}
                    />
                </Form.Field>

                <Button 
                    color='yellow'
                    onClick={onCancel}
                    floated='left'
                >
                    Back
                </Button>
                <Link to="/surveys">
                    <Button 
                        floated='right'
                        negative
                    >
                        Submit
                    </Button>
                </Link>
            </Form>
        </div>
    );
}

export default SurveyFormReview;
