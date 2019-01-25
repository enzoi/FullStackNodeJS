import React from 'react';
import SurveyForm from './SurveyForm';
import { Container } from 'semantic-ui-react';

class SurveyNew extends React.Component {
    render() {
        return (
            <Container>
                <h3>Please provide survey information</h3>
                <SurveyForm />
            </Container>
        );
    }
}

export default SurveyNew;