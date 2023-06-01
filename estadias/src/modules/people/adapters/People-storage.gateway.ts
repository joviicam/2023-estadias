import { ResponseApi } from "@/kernel/types";
import { AllPeopleDto } from "../entities/AllPeopleDto";
import api from '@/config/http-client.gateway'
import { PeopleRepository } from "../uses-cases/ports/people.repository";

export class PeopleStorageGateway implements PeopleRepository{
    //llamadas al webservice

    //si se pone await la funcion debe ser async
    async getAllPeople(page: number): Promise<ResponseApi<AllPeopleDto>> {
        const response = await api.doGet(`/users?page=${page}`);
        return {
            status : response.status,
            entity :  response.data //data ya es un array de un json de personas
        } as ResponseApi<AllPeopleDto>;
    }

}