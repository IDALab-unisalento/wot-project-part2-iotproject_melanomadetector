import {User} from './user';

export interface Readings{
    id: number;
    image: Blob;
    highestPredictionClass: string;
    highestPredictionScore: number;
    risk: number;
    user: User;
}
