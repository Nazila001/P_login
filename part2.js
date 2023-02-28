"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePerson = exports.info = exports.savePerson = exports.addAll = exports.update = void 0;
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
        model = new person_model_1.Person();
        model.username = ns;
        model.name = na;
        model.family = fa;
        model.message = mes;
        if (valid.validData(model)) {
            if (status == "add") {
                perM.add(model);
            }
            else {
                model.id = status;
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
exports.savePerson = savePerson;
let info = (id) => {
    let person = perM.findPerson(id);
    document.getElementById("personLblInfo").innerText = `نمایش اطلاعات ${person === null || person === void 0 ? void 0 : person.name}`;
    document.getElementById("infoUser").innerText = person.username;
    document.getElementById("infoName").innerText = person.name;
    document.getElementById("infoFamily").innerText = person.family;
    document.getElementById("infoPost").innerText = person.message;
    document.getElementById("infoId").innerText = person.id.toString();
};
exports.info = info;
let deletePerson = (id) => {
    perM.deletePerson(id);
    alert("حذف با موفقیت انجام شد");
};
exports.deletePerson = deletePerson;
//# sourceMappingURL=part2.js.map