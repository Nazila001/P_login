"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAll = exports.update = void 0;
// const Person_1 = require("./data_access_layer/Person");
let perM = new PersonManage();
let update = () => {
    perM.update();
};
exports.update = update;
let addAll = () => {
    perM.addAll();
};
exports.addAll = addAll;
let person = (state) => {
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
//# sourceMappingURL=part2.js.map