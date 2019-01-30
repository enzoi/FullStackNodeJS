import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Form, Input, Button } from 'semantic-ui-react';
import { submitSurvey } from '../../actions';

const SurveyFormReview = ({ onCancel, submitSurvey, formValues, history }) => {
    return (
        <div>
            <h3>Please confirm the survey form</h3>
            <Form>
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
                        value={formValues.recipients}
                    />
                </Form.Field>

                <Button 
                    color='yellow'
                    onClick={onCancel}
                    floated='left'
                >
                    Back
                </Button>
                <Button 
                        floated='right'
                        negative
                        onClick={() => submitSurvey(formValues, history)}
                    >
                        Submit
                    </Button>
            </Form>
        </div>
    );
}

export default connect(null, { submitSurvey })(withRouter(SurveyFormReview));
