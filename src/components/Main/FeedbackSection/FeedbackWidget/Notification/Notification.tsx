import React from 'react';
import { Wrapper } from './Notification.sc';

export type NotificationProps = {
    message: string;
};

export const Notification: React.FC<NotificationProps> = ({ message }) => {
    return <Wrapper>{message}</Wrapper>;
};
