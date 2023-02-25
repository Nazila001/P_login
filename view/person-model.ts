export class Person{
    username: string;
    name : string;
    family : string;
    pass? : string;
    message : string;
}

export interface IactionP {
    update();
    add();
    addAll();
    // findPerson(id:number) : IactionP;
    edit(modal);
}
