//Aqui se crea una estructura simple que va a regir a todas las entidades de la base de datos

export type Entity<Tidentifier extends number | string>={ //Aqui se define el tipo Entity que va a ser usado por todas las entidades de la base de datos
    id? :  Tidentifier
}

//Aqui se define el tipo ResponseApi que va a ser usado por todos los repositorios para devolver la respuesta del webservice
export type ResponseApi<T> = {
    status : number;
    result : boolean;
    message? : string;
    entities? : T[];//T es un tipo generico que va a ser reemplazado por el tipo de dato que se le pase al usar la interfaz
    entity? : T;
}