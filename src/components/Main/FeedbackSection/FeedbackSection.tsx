import React from 'react';
import { FeedbackWidget } from './FeedbackWidget';
import { MainSection, MainSectionContent, MainSectionHeading } from '../Main.sc';

export const FeedbackSection: React.FC = () => {
    return (
        <MainSection>
            <MainSectionHeading>Feedback Widget</MainSectionHeading>

            <MainSectionContent bg="lightslategray">
                <FeedbackWidget />
            </MainSectionContent>
        </MainSection>
    );
};
