import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';
import { Button, Container } from 'semantic-ui-react';

const Dashboard = () => {
    return (
        <Container>
            <SurveyList />
            <Link to="/surveys/new">
                <Button floated='right' circular icon="add" negative />
            </Link>
        </Container>
    );
};

export default Dashboard;
