
import { PersonValid } from './valid/person-valid';
import { PersonManage } from './data_access_layer/Person';
import { Person } from './view/person-model';


    let perM : PersonManage = new PersonManage();
    let valid : PersonValid = new PersonValid();
    let model : Person = new Person();

    export let update = () => {
        perM.update();
    } 

    export let addAll = () =>{
        perM.addAll();
    }

    let status : any;
    let person = (state : any ) => {
        status = state; 
        if (state == "add") {
            (document.getElementById("personLabel")as any).innerText = "افزودن پست جدید";
        }
        else{
            let person = perM.findPerson(state); 
            (document.getElementById("personLabel")as any).innerText =   `ویرایش ${person?.name}`;
            (document.getElementById("username")as any)["value"] = person.username;
            (document.getElementById("name")as any)["value"] = person.name;
            (document.getElementById("family")as any)["value"] = person.family;
            (document.getElementById("message")as any)["value"] = person.message;

        }
    }

    let savePerson = () => {
        let ns = (document.getElementById("username")as any)["value"];
        let na = (document.getElementById("name")as any)["value"];
        let fa = (document.getElementById("family")as any)["value"];
        let mes = (document.getElementById("message")as any)["value"];
        if (ns != undefined &&  na != undefined && fa != undefined && mes != undefined ){
            model.username = ns;
            model.name = na;
            model.family = fa;
            model.message = mes;
            if(valid.validData(model)){
                if(status == "add"){
                    perM.add(model);
                }
                else{
                    perM.edit(model);   
                }
            }
            else {
                alert("خطای اعتبارسنجی")
            }
        }
        else {
            alert("اطلاعات را کامل کنید")
        }
    }



    // let post = (state : any ) => {
    //     if (state == "add") {
    //         (document.getElementById("personLabel")as any).innerText = "افزودن پست جدید";
    //     }
    //     else{
    //         (document.getElementById("personLabel")as any).innerText =   `ویرایش ${state}`;
    //     }
    // }
