export interface ICell{
    x: string;
    y: string;
    status: ECellStatus;
}

export enum ECellStatus{
    Empty,
    Active,
    Killed
}