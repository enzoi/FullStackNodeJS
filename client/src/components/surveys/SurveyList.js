import React from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import { Card, CardContent } from 'semantic-ui-react'; 

class SurveyList extends React.Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        return this.props.surveys.map(survey => {
            console.log(survey);
            return (
                <Card key={survey._id}>
                    <Card.Content>
                        <Card.Header>{survey.subject}</Card.Header>
                    </Card.Content>
                    <Card.Content>
                        <Card.Description>
                            {survey.body}
                        </Card.Description>
                        <Card.Meta>Yes: {survey.yes} No: {survey.no}</Card.Meta>  
                    </Card.Content>
                    <Card.Content>                      
                        <Card.Description>
                            Set on: {new Date(survey.dateSent).toLocaleDateString()}
                        </Card.Description>
                        <Card.Description>
                            Last Responded: {new Date(survey.lastResponded).toLocaleDateString()}
                        </Card.Description>
                    </Card.Content>
                </Card>
            );
        })
    }

    render() {
        return (
            <Card.Group>
                {this.renderSurveys()}
            </Card.Group>
        );
    }
}

function mapStateToProps(state) {
    return { surveys: state.surveys }
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
