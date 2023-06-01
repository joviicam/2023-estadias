import { ResponseApi } from "@/kernel/types";
import { AllPeopleDto } from "../../entities/AllPeopleDto";

export interface PeopleRepository{
    getAllPeople(page: number) : Promise<ResponseApi<AllPeopleDto>> 
    //argumentos y lo que devuelve

}
//interfaz que define los metodos que debe implementar el repositorio de personas
