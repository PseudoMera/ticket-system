import React from 'react';
import { User } from '../models/';

export type UserContextType = {
    data: User | undefined;
    update(): void;
    ready: boolean;
};

const UserContext =  React.createContext<UserContextType>({
    data: undefined,
    update: async() => {},
    ready: false
});

export default UserContext;