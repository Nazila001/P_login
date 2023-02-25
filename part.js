"use strict";
exports.__esModule = true;
// var Person_1 = require("./data_access_layer/Person");
// var person_valid_1 = require("./valid/person-valid");
// var person_model_1 = require("./view/person-model");
{
    var perM_1 = new PersonManage();
    var valid = new PersonValid();
    var model_1 = new Person();
    var update = function () {
        update();
    };
    var addAll = function () {
        addAll();
    };
    var status_1;
    var person = function (state) {
        status_1 = state;
        if (state == "add") {
            document.getElementById("personLabel").innerTEXT = "افزودن شخص";
        }
        // else {
        //     let person = perM.findPerson(state);
        //     (document.getElementById("personLabel")as any).innerTEXT = `ویرایش ${person.name}`;
        //     (document.getElementById("username") as any)['valid'] = person.username;
        //     (document.getElementById("family") as any)['valid'] = person.family;
        //     (document.getElementById("name") as any)['valid'] = person.name;
        // }
    };
    var savePerson = function () {
        var un = document.getElementById("username")['value'];
        var fa = document.getElementById("name")['value'];
        var na = document.getElementById("name")['value'];
        if (na != undefined && fa != undefined && un != undefined) {
            model_1 = new person_model_1.Person();
            model_1.username = un;
            model_1.name = na;
            model_1.family = fa;
            // if (valid.validData(model)) {
            //     if (status == "add")
            // }
        }
    };
    // let info = (id) => {
    //     let person = perM.findPerson(id);
    //     (document.getElementById("personLblInfo")as any).innerTEXT = `نمایش اطلاعات ${person.name}`;
    //     (document.getElementById("infoName") as any).innerTEXT = person.username;
    //     (document.getElementById("infoFamily") as any).innerTEXT = person.family;
    //     (document.getElementById("infoPost") as any).innerTEXT = person.name;
    // }
}
