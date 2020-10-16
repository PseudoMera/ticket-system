export type Ticket = {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
    status: string;
}

export type DropDownItems = {
    status: string;
    value: string;
}