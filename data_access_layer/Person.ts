import { IactionP } from '../action/IPerson';
import { Person } from '../view/person-model';


export class PersonManage implements IactionP {
    

    //lsv : Person[] = new Array<Person>();
    lsv : Person[] = [{id:1, username:"minarezaeei", name:"مینا", family:"22رضایی", message:"مطالب جدید"}];
    lsv1 : Person[] = [{id:2, username:"maryamsabaeei", name:"مریم", family:"صبایی", message:"مطالب جدید۱۲۳۴۵"}];


    add() {
        //  let array1 = [{name:"مینا", family:"رضایی",username:"minarezaeei"}] 
        //  this.array1.push(...this.array1);
    }

    addAll(){
        this.lsv1.push(...this.lsv1);
        this.update();
    }


    update() {
        if(this.lsv1.length > 0) {
        let tr: string = "";

        this.lsv1.forEach(item => {
            tr += "<tr><td>" + item.id + "</td>";
            tr += "<td>" + item.username + "</td>";
            tr += "<td>" + item.name + "</td>";
            tr += "<td>" + item.family + "</td>";
            tr += "<td>" + item.message + "</td>";
            tr += "<td><button onclick="+"post("+item.id+") class='btn py-0 px-1 btn btn-primary' data-bs-target='#personModal' data-bs-toggle='modal'>"+ "ویرایش" +"</button>"
            +"<button onclick="+"info("+item.id+") class='btn py-0 px-1 btn-info' data-bs-target='#personInfo' data-bs-toggle='modal'>"+ "نمایش" +"</button>"
            +"<button onclick=" + "delete(" + item.id + ") class='btn py-0 px-1 btn-danger' data-bs-target='#personInfo' data-bs-toggle='modal'>" + "حذف" + "</button>" 
            +"</td></tr>";
            
        });
        (document.getElementById("tbody")as any).innerHTML = tr;
        }

        else{
        (document.getElementById("tbody")as any).innerHTML = "";
        }
    }


    // findPerson(username:string): Person {
    //     return this.lsv.find( item => item.username == username );
        
    // }
   

    edit(modal: any) {
        
    }



}
