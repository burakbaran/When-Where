
export interface Card {
    id: number;
    createDate: Date;
    doneDate?: Date;
    label: string;
    priority: string; // "URGENT" | "MID" | "LOW"
    detail: string;
}

export enum CardBackground{
    SUCCESS = "success",
    DANGER= "danger",
    WARNING= "warning"
}