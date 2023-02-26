"use strict";
exports.__esModule = true;
// var Person_1 = require("./data_access_layer/Person");
// var person_valid_1 = require("./valid/person-valid");
// var person_model_1 = require("./view/person-model");
var perM = new PersonManage();
var valid = new PersonValid();
var model = new Person();
var update = function () {
    perM.update();
};
var addAll = function () {
    perM.addAll();
};
var post = function (state) {
    if (state == "add") {
        document.getElementById("personLabel").innererTEXT = "افزودن پست";
    }
    else {
        document.getElementById("personLabel").innererTEXT = "\u0648\u06CC\u0631\u0627\u06CC\u0634 ".concat(state);
    }
};
var status;
var person = function (state) {
    status = state;
    if (state == "add") {
        document.getElementById("personLabel").innerTEXT = "افزودن شخص";
    }
};
var savePerson = function () {
    var un = document.getElementById("username")['value'];
    var fa = document.getElementById("name")['value'];
    var na = document.getElementById("name")['value'];
    if (na != undefined && fa != undefined && un != undefined) {
        model = new person_model_1.Person();
        model.username = un;
        model.name = na;
        model.family = fa;
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
