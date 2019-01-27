import React from 'react';
import { Button } from 'semantic-ui-react';

const SurveyFormReview = ({ onCancel }) => {
    return (
        <div>
            <h5>Please confirm the survey form</h5>
            <Button 
                color='yellow'
                onClick={onCancel}
                floated='left'
            >
                Back
            </Button>
        </div>
    );
}

export default SurveyFormReview;
