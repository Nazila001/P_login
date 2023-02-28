import { Person } from '../view/person-model';

export interface IactionP {
    
    add(model:any):any;
    edit(model:any):any;
    addAll():any;
    update():any;
    findPerson (id:number) : Person | undefined ;

}