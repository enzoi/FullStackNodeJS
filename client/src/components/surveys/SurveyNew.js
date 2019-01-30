import React from 'react';
import { connect } from 'react-redux';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import { Container } from 'semantic-ui-react';

class SurveyNew extends React.Component {
    state = {
        showFormReview: false,
        formValues: { title: '', subject: '', body: '', recipients: '' }
    }

    componentWillUnmount() {
        localStorage.clear();
    }

    renderContent() {
        if (this.state.showFormReview) {
            return <SurveyFormReview 
                onCancel={() => this.setState({ showFormReview: false})}
                formValues={this.state.formValues}
            />;
        } 

        return (
            <SurveyForm 
                onSurveySubmit={(values) => this.setState({ showFormReview: true, formValues: values })}
            />
        );
    }

    render() {
        return (
            <Container>
                {this.renderContent()}
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return { formValues: state.formValues }
}

export default connect(mapStateToProps)(SurveyNew);