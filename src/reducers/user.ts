import { v4 } from 'uuid';
import { reducerActionType } from '../types/reducerActionType';

export type UserType = {
    id: string;
    name: string;
    age: number;
    contact: number;
    email: string;
}

export const userInitialState: UserType[] = [];

export const userReducer = (state: UserType[], action: reducerActionType) => {
    switch(action.type) {
        case 'ADD_USER':
            if(action.payload.name && action.payload.age && action.payload.contact && action.payload.email) {
                const cloneState = [...state];
                cloneState.push({
                    id: v4(),
                    name: action.payload.name,
                    age: action.payload.age,
                    contact: action.payload.contact,
                    email: action.payload.email
                });
                return cloneState;
            }            
        break;
        case 'EDIT_USER':
            if(action.payload.id) {
                return {
                    ...state,
                    name: action.payload.name,
                    age: action.payload.age,
                    contact: action.payload.contact,
                    email: action.payload.email
                }; 
            }
        break;  
        case 'DEL_USER':
            if(action.payload.id) {
                let cloneState = [...state];
                cloneState.filter(item => item.id !== action.payload.id);
                return cloneState;
            }
        break;
    }

    return state;
}