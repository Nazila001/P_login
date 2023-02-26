export class Person{
    id? : number;
    username: string;
    name : string;
    family : string;
    pass? : string;
    message : string;
}

export interface    IactionP {
    update();
    add();
    addAll();
    // findPerson(id:number) : Person;
}
