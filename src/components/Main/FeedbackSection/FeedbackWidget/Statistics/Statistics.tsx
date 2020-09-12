import React from 'react';
import { Stats, SummaryStats, ConcreteStats } from './Statistics.sc';
import { Reactions } from '../_shared/Reactions';

export type StatisticsProps = Reactions & {
    total: number;
    positivePercentage: string;
};

export const Statistics: React.FC<StatisticsProps> = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <Stats>
            <ConcreteStats>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
            </ConcreteStats>

            <SummaryStats>
                <li>Total: {total}</li>
                <li>Positive feedback: {positivePercentage}</li>
            </SummaryStats>
        </Stats>
    );
};
