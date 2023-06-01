import { Entity } from '../../../kernel/types';

//Esta clase es para definir el tipo de dato que va a tener la entidad Person BEAN 
//Usamos el tipo Entity que definimos en el archivo types.ts
export type Person = Entity<number> & {
    name : string;
    job : string;
    createAt? : Date; //? significa que es opcional
}