export declare type Message = {
    id: string;
    messages: ConcreteMessage[];
}

export declare type ConcreteMessage = {
    role: string;
    content: string;
    created_at: string | number | Date | null;
}
