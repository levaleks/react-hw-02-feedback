import React from 'react';
import { FeedbackSection } from '../Main/FeedbackSection';
import { Main, MainHeading } from '../Main';

export const App: React.FC = () => {
    return (
        <Main>
            <MainHeading>Homework 02 – Ex. 01</MainHeading>
            <FeedbackSection />
        </Main>
    );
};
