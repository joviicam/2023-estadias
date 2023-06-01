import { getAllPeopleInteractor } from "../uses-cases/get-all-people-interactor";
import { PeopleRepository } from "../uses-cases/ports/people.repository";
import { PeopleStorageGateway } from "./People-storage.gateway";

export class PeopleController{
    getAllPeople(page: number){
        try{
            const repository: PeopleRepository = new PeopleStorageGateway();
            const interactor : getAllPeopleInteractor = new getAllPeopleInteractor(repository);

        }catch(error){
            
        }
    }
}