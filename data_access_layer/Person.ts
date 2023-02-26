import { IactionP } from '../action/IPerson';
import { Person } from '../view/person-model';


export class PersonManage implements IactionP {
    



    //lsv : Person[] = new Array<Person>();
    lsv : Person[] = [{id:1, username:"minarezaeei", name:"مینا", family:"22رضایی", message:"مطالب جدید"}];
    lsv1 : Person[] = [{id:2, username:"maryamsabaeei", name:"مریم", family:"صبایی", message:"مطالب جدید۱۲۳۴۵"}];


    add() {
        // let array = [{name:"مینا", family:"رضایی",username:"minarezaeei"}] 
        // this.lsv.push(...this.lsv);
        // let array(...array); //how to add a item into an array
    }

    addAll(){
        this.lsv.push(...this.lsv);
        this.lsv1.push(...this.lsv1);
        let array = [{id:3, username:"maryamsabaeei", name:"مریم", family:"صبایی", message:"مطالب جدید۱۲۳۴۵"}];
        this.lsv1.push(...array);
        this.update();
    }


    update() {
        if(this.lsv.length > 0) {
        let tr: string = "";

        this.lsv.forEach(item => {
            tr += "<tr><td>" + item.id + "</td>";
            tr += "<td>" + item.username + "</td>";
            tr += "<td>" + item.name + "</td>";
            tr += "<td>" + item.family + "</td>";
            tr += "<td>" + item.message + "</td>";
            tr += "<td><button onclick="+"post("+item.id+") class='btn py-0 px-1 btn-warning' data-bs-target='#personModal' data-bs-toggle='modal'>"+ "ویرایش" +"</button>"
            +"<button onclick="+"info("+item.id+") class='btn py-0 px-1 btn-info' data-bs-target='#personInfo' data-bs-toggle='modal'>"+ "نمایش" +"</button>"
            +"</td></tr>";
            
        });
        (document.getElementById("tbody")as any).innerHTML = tr;
        }

        else{
        (document.getElementById("tbody")as any).innerHTML = "";
        }
    }


    findPerson(id: number): Person {
        return this.lsv.find( item => item.id == id );
        
    }
   

    // edit(modal: any) {
        
    // }



}
