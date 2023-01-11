
export interface Card {
    createDate: Date;
    doneDate: Date;
    label: string;
    priority: "URGENT" | "MID" | "LOW";
    detail: string;
}