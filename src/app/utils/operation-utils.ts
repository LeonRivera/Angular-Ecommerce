import { AbstractRepository } from "../services/abstract-repository";

export class OperationUtils {
    delete<TypeModel,TypeService extends AbstractRepository<TypeModel>>(service:TypeService, id:number, nameModel:string):void{
        service.deleteById(id);
    }
}
