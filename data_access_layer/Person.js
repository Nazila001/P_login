"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonManage = void 0;
class PersonManage {
    constructor() {
        this.lsv = new Array();
    }
    add(model) {
        if (this.lsv.length == 0) {
            model.id == 1;
        }
        else {
            let last = this.lsv[this.lsv.length - 1];
            model.id = last.id + 1;
        }
        this.lsv.push(model);
        this.update();
    }
    edit(model) {
        let index = this.lsv.findIndex(item => item.id == model.id);
        if (index != -1) {
            this.lsv.splice(index, 1, model);
        }
        this.update();
    }
    addAll() {
        this.lsv.push(...this.lsv);
        this.update();
    }
    update() {
        if (this.lsv.length > 0) {
            let tr = "";
            this.lsv.forEach(item => {
                tr += "<tr><td>" + item.id + "</td>";
                tr += "<td>" + item.username + "</td>";
                tr += "<td>" + item.name + "</td>";
                tr += "<td>" + item.family + "</td>";
                tr += "<td>" + item.message + "</td>";
                tr += "<td><button onclick=" + "person(" + item.id + ") class='btn py-0 px-1 btn btn-primary' data-bs-target='#personModal' data-bs-toggle='modal'>" + "ویرایش" + "</button>"
                    + "<button onclick=" + "info(" + item.id + ") class='btn py-0 px-1 btn-info' data-bs-target='#personInfo' data-bs-toggle='modal'>" + "نمایش" + "</button>"
                    + "<button onclick=" + "deletePerson(" + item.id + ") class='btn py-0 px-1 btn-danger' data-bs-target='#personInfo' data-bs-toggle='modal'>" + "حذف" + "</button>"
                    + "</td></tr>";
            });
            document.getElementById("tbody").innerHTML = tr;
        }
        else {
            document.getElementById("tbody").innerHTML = "";
        }
    }
    findPerson(id) {
        var _a;
        return (_a = this.lsv) === null || _a === void 0 ? void 0 : _a.find(item => item.id == id);
    }
    deletePerson(id) {
        let index = this.lsv.findIndex(item => item.id);
        this.lsv.splice(index, 1);
        this.update();
    }
}
exports.PersonManage = PersonManage;
//# sourceMappingURL=Person.js.map