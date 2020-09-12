import React, { useCallback, useMemo, useState } from 'react';
import { Feedback } from './FeedbackWidget.sc';
import { FeedbackOption, FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';
import { Reactions } from './_shared/Reactions';

export const FeedbackWidget: React.FC = () => {
    const [feedback, setFeedback] = useState<Reactions>({ good: 0, neutral: 0, bad: 0 });

    const countTotalFeedback = useCallback((fb: Reactions): number => Object.values(fb).reduce((a, v) => a + v, 0), []);

    const total = countTotalFeedback(feedback);

    const countPositiveFeedbackPercentage = useCallback(
        (fb: Reactions): string =>
            `${Math.round((100 / Object.values(fb).reduce((a, v) => a + v, 0)) * fb.good) || 0}%`,
        [],
    );

    const positivePercentage = countPositiveFeedbackPercentage(feedback);

    const options = useMemo<FeedbackOption[]>(
        () => [
            {
                icon: '👍',
                id: 'good',
                displayName: 'Good',
            },
            {
                icon: '😐',
                id: 'neutral',
                displayName: 'Neutral',
            },
            {
                icon: '🤬',
                id: 'bad',
                displayName: 'Bad',
            },
        ],
        [],
    );

    const handleLeaveFeedback = useCallback(
        (optionId: keyof Reactions) => {
            setFeedback({
                ...feedback,
                [optionId]: feedback[optionId] + 1,
            });
        },
        [feedback, setFeedback],
    );

    return (
        <Feedback>
            <FeedbackOptions options={options} onLeaveFeedback={handleLeaveFeedback} />

            {total ? (
                <Statistics
                    good={feedback.good}
                    neutral={feedback.neutral}
                    bad={feedback.bad}
                    total={total}
                    positivePercentage={positivePercentage}
                />
            ) : (
                <Notification message="No feedback given" />
            )}
        </Feedback>
    );
};
