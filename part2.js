"use strict";
exports.__esModule = true;
var Person_1 = require("./data_access_layer/Person");
// import { Person } from "./view/person-model";
// let perM : PersonManage = new PersonManage();
var update = function () {
    new Person_1.PersonManage().update();
};
var addAll = function () {
    new Person_1.PersonManage().addAll();
};
var post = function (state) {
    if (state == "add") {
        document.getElementById("personLabel").innerText = "افزودن پست جدید";
    }
    else {
        document.getElementById("personLabel").innerText = "\u0648\u06CC\u0631\u0627\u06CC\u0634 ".concat(state);
    }
};
