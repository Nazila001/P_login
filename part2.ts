import { PersonManage } from "./data_access_layer/Person";
// import { Person } from "./view/person-model";


// let perM : PersonManage = new PersonManage();

    let update = () => {
        new PersonManage().update();
    } 

    let addAll = () =>{
        new PersonManage().addAll();
    }

    let post = (state : any ) => {
        if (state == "add") {
            (document.getElementById("personLabel")as any).innerText = "افزودن پست";
        }
        else{
            (document.getElementById("personLabel")as any).innerText =   `ویرایش ${state}`;
        }
    }
