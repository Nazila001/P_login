import { IactionP } from '../action/IPerson';
import { Person } from '../view/person-model';


export class PersonManage implements IactionP {

    //lsv : Person[] = new Array<Person>();
    lsv : Person[] = [{id:1, username:"minarezaeei", name:"مینا", family:"رضایی", message:"سوال در مورد سفارش گذاری"}];
    lsv1 : Person[] = [{id:2, username:"maryamsabaeei", name:"مریم", family:"صبایی", message:" درخواست خرید مجدد کالا"}];
    lsv2 : Person[] = [{id:3, username:"sabazahedi", name:"صبا", family:"زاهدی", message:" درخواست لعو خرید کالا"}];
    lsv3 : Person[] = [{id:4, username:"reyhaneshoja", name:"ریحانه", family:"شجاع", message:" درخواست بازگشت کالا"}];
    lsv4 : Person[] = [{id:5, username:"raanakian", name:"رعنا", family:"کیان", message:"سوال در مورد بازگشت کالا"}];
    

    add(model: any) {
        this.lsv.push(model);
        this.update();
    }


    edit(model: any) {
        let index = this.lsv.findIndex(model)
        if (index != -1)
            this.lsv.splice(index,1,model);
    }


    addAll(){
        this.lsv4.push(...this.lsv4);
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
            tr += "<td><button onclick=" + "person(" + item.id + ") class='btn py-0 px-1 btn btn-primary' data-bs-target='#personModal' data-bs-toggle='modal'>"+ "ویرایش" +"</button>"
                +"<button onclick="+"info(" + item.id + ") class='btn py-0 px-1 btn-info' data-bs-target='#personInfo' data-bs-toggle='modal'>"+ "نمایش" +"</button>"
                +"<button onclick=" + "deleteP(" + item.id + ") class='btn py-0 px-1 btn-danger' data-bs-target='#personInfo' data-bs-toggle='modal'>" + "حذف" + "</button>" 
                +"</td></tr>";
            
        });
        (document.getElementById("tbody")as any).innerHTML = tr;
        }

        else{
        (document.getElementById("tbody")as any).innerHTML = "";
        }
    }


    findPerson(id:number): Person | undefined {
      return  this.lsv?.find(item =>item.id == id);
    }


}
