//Aqui se define la estructura de la tabla persona que se va a usar en el webservice
export type PeopleDto = {
    id : number;
    email : string;
    first_name : string;
    last_name : string;
    avatar : string;
}