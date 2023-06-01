import { ResponseApi } from "@/kernel/types";
import { AllPeopleDto } from "../entities/AllPeopleDto";
import { UseCase } from "@/kernel/contacts";
import { PeopleRepository } from "./ports/people.repository";

export class getAllPeopleInteractor implements UseCase<number,ResponseApi<AllPeopleDto>>{
    //constructor del interactor
    constructor (private readonly peopleRepository: PeopleRepository){}
    //execute es el metodo que se va a ejecutar cuando se llame a la clase
    execute (page?: number | undefined) : Promise <ResponseApi<AllPeopleDto>>{
        if(!page){
            page = 1;
        }
        return this.peopleRepository.getAllPeople(page);
    }

}