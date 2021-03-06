export enum ACTION { IncrementCounter, DecrementCounter, AddCounter, RemoveLastCounter }

export interface ICounterAction {
    type: ACTION;
    counterId?: number;
}

export function incrementCounter(counterId: number): ICounterAction {
    return { type: ACTION.IncrementCounter, counterId };
}

export function decrementCounter(counterId: number): ICounterAction {
    return { type: ACTION.DecrementCounter, counterId };
}

export function addCounter(): ICounterAction {
    return { type: ACTION.AddCounter };
}

export function deleteLastCounter(): ICounterAction {
    return { type: ACTION.RemoveLastCounter }
}