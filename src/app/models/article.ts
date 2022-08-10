import { MaritalStatus } from "./marital-status";

export interface Article {
    id: number;
    title: string;
    body: string;
    author: string;
    marital_status_id: number;
    maritalStatus?: MaritalStatus;
}

export interface CreateArticleDto {
    title: string;
    body: string;
    author: string;
    marital_status_id: number;
}