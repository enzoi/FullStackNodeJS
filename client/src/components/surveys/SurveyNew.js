import React from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import { Container } from 'semantic-ui-react';

class SurveyNew extends React.Component {
    state = {
        showFormReview: false
    }

    renderContent() {
        if (this.state.showFormReview) {
            return <SurveyFormReview 
                onCancel={() => this.setState({ showFormReview: false})}
            />;
        } 

        return (
            <SurveyForm 
                onSurveySubmit={() => this.setState({ showFormReview: true })}
            />
        );
    }

    render() {
        return (
            <Container>
                <h3>Please provide survey information</h3>
                {this.renderContent()}
            </Container>
        );
    }
}

export default SurveyNew;