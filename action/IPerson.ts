import { Person } from '../view/person-model';

export interface IactionP {
    update();
    add();
    addAll();
    findPerson(id:number) : Person;
    // edit(modal: any);
}
