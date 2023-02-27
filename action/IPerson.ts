import { Person } from '../view/person-model';

export interface IactionP {
    
    add():any;
    addAll():any;
    update():any;
    findPerson (id:number) : Person ;
    // findPerson (id:number) : Person | undefined;
    // edit(modal: any);
}
