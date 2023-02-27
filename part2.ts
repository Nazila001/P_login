
import { PersonManage } from './data_access_layer/Person';


    let perM : PersonManage = new PersonManage();

    export let update = () => {
        perM.update();
    } 

    export let addAll = () =>{
        perM.addAll();
    }



    let person = (state : any ) => {
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



    // let post = (state : any ) => {
    //     if (state == "add") {
    //         (document.getElementById("personLabel")as any).innerText = "افزودن پست جدید";
    //     }
    //     else{
    //         (document.getElementById("personLabel")as any).innerText =   `ویرایش ${state}`;
    //     }
    // }
