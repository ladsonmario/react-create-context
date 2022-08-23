import { v4 } from 'uuid';
import { reducerActionType } from '../types/reducerActionType';

export type UserType = {
    id: string;
    name: string;
    age: number;
    contact: number;    
}

export const userInitialState: UserType[] = [];

export const userReducer = (state: UserType[], action: reducerActionType) => {
    switch(action.type) {
        case 'ADD_USER':
            if(action.payload.name && action.payload.age && action.payload.contact) {
                const cloneState = [...state];
                cloneState.push({
                    id: v4(),
                    name: action.payload.name,
                    age: action.payload.age,
                    contact: action.payload.contact                    
                });                
                return cloneState;
            }            
        break;
        case 'EDIT_USER':
            if(action.payload.id) {
                let cloneState = [...state];

                const index = cloneState.findIndex(item => item.id === action.payload.id);

                if(index !== -1) {
                    cloneState[index].name = action.payload.name;
                    cloneState[index].age = action.payload.age;
                    cloneState[index].contact = action.payload.contact; 
                }

                return cloneState;
            }                 
        break;  
        case 'DEL_USER':
            if(action.payload.id) {
                let cloneState = [...state];
                const newState = cloneState.filter(item => item.id !== action.payload.id);
                return newState;
            }
        break;
    }

    return state;
}