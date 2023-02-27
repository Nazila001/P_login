"use strict";
exports.__esModule = true;
exports.addAll = exports.update = void 0;
// var Person_1 = require("./data_access_layer/Person");
var perM = new PersonManage();
var update = function () {
    perM.update();
};
exports.update = update;
var addAll = function () {
    perM.addAll();
};
exports.addAll = addAll;
var post = function (state) {
    if (state == "add") {
        document.getElementById("personLabel").innerText = "افزودن پست جدید";
    }
    else {
        document.getElementById("personLabel").innerText = "\u0648\u06CC\u0631\u0627\u06CC\u0634 ".concat(state);
    }
};
// let post = (state : any ) => {
//     if (state == "add") {
//         (document.getElementById("personLabel")as any).innerText = "افزودن پست جدید";
//     }
//     else{
//         let person = new PersonManage.findPerson(state);
//         (document.getElementById("personLabel")as any).innerText =   `ویرایش ${person.name}`;
//         (document.getElementById("username")as any)["value"] = person.username;
//         (document.getElementById("name")as any)["value"] = person.name;
//         (document.getElementById("family")as any)["value"] = person.family;
//         (document.getElementById("message")as any)["value"] = person.message;
//     }
// }
