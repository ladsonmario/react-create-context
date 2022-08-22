import { v4 } from 'uuid';
import { reducerActionType } from '../types/reducerActionType';

export type UserType = {
    id: string;
    name: string;
    age: number;
    contact: number;
}

export const userInitialState: UserType = {
    id: v4(),
    name: '',
    age: 0,
    contact: 0
}

export const userReducer = (state: UserType, action: reducerActionType) => {
    switch(action.type) {
        case 'ADD_USER':
            return {
                ...state,
                name: action.payload.name,
                age: action.payload.age,
                contact: action.payload.contact 
            };
        break;
        case 'EDIT_USER':
            if(action.payload.id) {
                return {
                    ...state,
                    name: action.payload.name,
                    age: action.payload.age,
                    contact: action.payload.contact 
                }; 
            }
        break;        
    }

    return state;
}