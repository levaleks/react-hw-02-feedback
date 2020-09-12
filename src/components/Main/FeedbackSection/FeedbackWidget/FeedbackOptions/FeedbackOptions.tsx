import React, { useCallback } from 'react';
import { Item, List, Options, Option } from './FeedbackOptions.sc';
import { Reactions } from '../_shared/Reactions';

export type FeedbackOption = {
    icon: string;
    id: keyof Reactions;
    displayName: string;
};

export type FeedbackOptionsProps = {
    options: FeedbackOption[];
    onLeaveFeedback: (optionId: keyof Reactions) => void;
};

export const FeedbackOptions: React.FC<FeedbackOptionsProps> = ({ options, onLeaveFeedback }) => {
    const handleVote = useCallback(
        ({ currentTarget }) => {
            onLeaveFeedback(currentTarget.getAttribute('data-id'));
        },
        [onLeaveFeedback],
    );

    return (
        <Options>
            <List>
                {options.map(({ icon, id, displayName }) => {
                    return (
                        <Item key={id}>
                            <Option type="button" onClick={handleVote} data-id={id}>
                                <span role="img" aria-label={displayName}>
                                    {icon}
                                </span>
                                <p>{displayName}</p>
                            </Option>
                        </Item>
                    );
                })}
            </List>
        </Options>
    );
};
