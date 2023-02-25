export class LocalStorage <DKey, DValue> {

    constructor(public key:DKey , public value : DValue){}

    add() {}

    get(){}

}
    
let person1 = new LocalStorage <string, string>('مریم', 'ساده');
let person2 = new LocalStorage <string, string>('مینا', 'شاهد');
let person3 = new LocalStorage <string, string>('فریبا', 'سالاری');
