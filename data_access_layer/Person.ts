import { IPerson } from "../action/IPerson";
import { Person } from "../view/person-model";

export class PersonManage implements IPerson {
    
    //lsv : Person[] = new Array<Person>();
    lsv : Person[] = [{name:"مینا", family:"رضایی",username:"minarezaeei", message:"مطالب جدید"}]
    add() {
        //let array = [{name:"مینا", family:"رضایی",username:"minarezaeei"}] 
        //this.lsv.push(...array);
        this.lsv.push(...this.lsv); //how to add a item into an array
    }


    update() {
         if(this.lsv.length>0){
            let tr : string;
            this.lsv.forEach(item=>{
                tr += "<tr><td>" + item.name + "</td>";
                tr += "<td>" + item.family + "</td>";
                tr += "<td>" + item.message + "</td>";
                tr += "<td><button onclick="+"post('edit') class='btn py-0 px-1 btn-warning' data-bs-target='#personModal' data-bs-toggle='modal'>"+ "ویرایش" +"</button>"
                +"<button onclick="+"info("+item.username+") class='btn py-0 px-1 btn-info' data-bs-target='#personInfo' data-bs-toggle='modal'>"+ "نمایش" +"</button>"
                +"</td></tr>";
                (document.getElementById(".tbody")as any).innerHTML = tr;
            });

         }

         else{
            (document.getElementById(".tbody")as any).innerHTML = "";
         }
    }

    findPerson(id: number) {
        
    }

    edit(modal: any) {
        
    }



}
