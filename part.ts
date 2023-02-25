import { PersonManage } from "./data_access_layer/Person"
import { PersonValid } from "./valid/person-valid";
import { Person } from "./view/person-model";

{   
    let perM : PersonManage = new PersonManage();
    let valid : PersonValid = new PersonValid();
    let model : Person = new Person();


    
    let update = () => {
        perM.update();
    } 

    let addAll = () =>{
        perM.addAll();
    }


    let status : any ;
    let person = (state: any) => {
        status = state;
        if (state == "add") {
            (document.getElementById("personLabel")as any).innerTEXT = "افزودن شخص";    
        }
        // else {
        //     let person = perM.findPerson(state);
        //     (document.getElementById("personLabel")as any).innerTEXT = `ویرایش ${person.name}`;
        //     (document.getElementById("username") as any)['valid'] = person.username;
        //     (document.getElementById("family") as any)['valid'] = person.family;
        //     (document.getElementById("name") as any)['valid'] = person.name;
        // }
    }


    let savePerson = () => { 
        let  un= (document.getElementById("username")as any)['value'];
        let fa = (document.getElementById("name")as any)['value'];
        let na = (document.getElementById("name")as any)['value'];
        if (na != undefined && fa != undefined && un != undefined){
            model = new Person();
            model.username = un;
            model.name = na;
            model.family = fa;
            // if (valid.validData(model)) {
            //     if (status == "add")
            // }

        }
    }

    // let info = (id) => {
    //     let person = perM.findPerson(id);
    //     (document.getElementById("personLblInfo")as any).innerTEXT = `نمایش اطلاعات ${person.name}`;
    //     (document.getElementById("infoName") as any).innerTEXT = person.username;
    //     (document.getElementById("infoFamily") as any).innerTEXT = person.family;
    //     (document.getElementById("infoPost") as any).innerTEXT = person.name;
    // }
}

