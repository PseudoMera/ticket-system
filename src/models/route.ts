import React from 'react';

export type Route = {
    path: string;
    exact: boolean;
    component: any;
};