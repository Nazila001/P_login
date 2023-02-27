"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonManage = void 0;
class PersonManage {
    constructor() {
        this.lsv = [{ id: 1, username: "minarezaeei", name: "مینا", family: "رضایی", message: "سوال در مورد سفارش گذاری" }];
        this.lsv1 = [{ id: 2, username: "maryamsabaeei", name: "مریم", family: "صبایی", message: " درخواست خرید مجدد کالا" }];
        this.lsv2 = [{ id: 3, username: "sabazahedi", name: "صبا", family: "زاهدی", message: " درخواست لعو خرید کالا" }];
        this.lsv3 = [{ id: 4, username: "reyhaneshoja", name: "ریحانه", family: "شجاع", message: " درخواست بازگشت کالا" }];
        this.lsv4 = [{ id: 5, username: "raanakian", name: "رعنا", family: "کیان", message: "سوال در مورد بازگشت کالا" }];
    }
    add() {
        let array1 = [{ id: 2, username: "raanakian", name: "رعنا", family: "کیان", message: "سوال در مورد بازگشت کالا" }];
        array1.push(...array1);
    }
    addAll() {
        this.lsv4.push(...this.lsv4);
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
                    + "<button onclick=" + "deleteP(" + item.id + ") class='btn py-0 px-1 btn-danger' data-bs-target='#personInfo' data-bs-toggle='modal'>" + "حذف" + "</button>"
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
    edit(modal) {
    }
}
exports.PersonManage = PersonManage;
//# sourceMappingURL=Person.js.map