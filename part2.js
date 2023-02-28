"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAll = exports.update = void 0;
const person_valid_1 = require("./valid/person-valid");
const Person_1 = require("./data_access_layer/Person");
const person_model_1 = require("./view/person-model");
let perM = new Person_1.PersonManage();
let valid = new person_valid_1.PersonValid();
let model = new person_model_1.Person();
let update = () => {
    perM.update();
};
exports.update = update;
let addAll = () => {
    perM.addAll();
};
exports.addAll = addAll;
let status;
let person = (state) => {
    status = state;
    if (state == "add") {
        document.getElementById("personLabel").innerText = "افزودن پست جدید";
    }
    else {
        let person = perM.findPerson(state);
        document.getElementById("personLabel").innerText = `ویرایش ${person === null || person === void 0 ? void 0 : person.name}`;
        document.getElementById("username")["value"] = person.username;
        document.getElementById("name")["value"] = person.name;
        document.getElementById("family")["value"] = person.family;
        document.getElementById("message")["value"] = person.message;
    }
};
let savePerson = () => {
    let ns = document.getElementById("username")["value"];
    let na = document.getElementById("name")["value"];
    let fa = document.getElementById("family")["value"];
    let mes = document.getElementById("message")["value"];
    if (ns != undefined && na != undefined && fa != undefined && mes != undefined) {
        model.username = ns;
        model.name = na;
        model.family = fa;
        model.message = mes;
        if (valid.validData(model)) {
            if (status == "add") {
                perM.add(model);
            }
            else {
                perM.edit(model);
            }
        }
        else {
            alert("خطای اعتبارسنجی");
        }
    }
    else {
        alert("اطلاعات را کامل کنید");
    }
};
//# sourceMappingURL=part2.js.map