import {CardBackground} from "../types/Card.types";

export const cardPriorityConverter = (priority: string) => {
    return (priority === "URGENT" && CardBackground.DANGER) ||
        (priority === "MID" && CardBackground.WARNING) ||
        CardBackground.SUCCESS
}