"use strict";
exports.__esModule = true;
exports.PersonManage = void 0;
var PersonManage = /** @class */ (function () {
    function PersonManage() {
        //lsv : Person[] = new Array<Person>();
        this.lsv = [{ id: 1, username: "minarezaeei", name: "مینا", family: "22رضایی", message: "مطالب جدید" }];
        this.lsv1 = [{ id: 2, username: "maryamsabaeei", name: "مریم", family: "صبایی", message: "مطالب جدید۱۲۳۴۵" }];
    }
    PersonManage.prototype.add = function () {
        //  let array1 = [{name:"مینا", family:"رضایی",username:"minarezaeei"}] 
        //  this.array1.push(...this.array1);
    };
    PersonManage.prototype.addAll = function () {
        var _a;
        (_a = this.lsv1).push.apply(_a, this.lsv1);
        this.update();
    };
    PersonManage.prototype.update = function () {
        if (this.lsv1.length > 0) {
            var tr_1 = "";
            this.lsv1.forEach(function (item) {
                tr_1 += "<tr><td>" + item.id + "</td>";
                tr_1 += "<td>" + item.username + "</td>";
                tr_1 += "<td>" + item.name + "</td>";
                tr_1 += "<td>" + item.family + "</td>";
                tr_1 += "<td>" + item.message + "</td>";
                tr_1 += "<td><button onclick=" + "post(" + item.id + ") class='btn py-0 px-1 btn btn-primary' data-bs-target='#personModal' data-bs-toggle='modal'>" + "ویرایش" + "</button>"
                    + "<button onclick=" + "info(" + item.id + ") class='btn py-0 px-1 btn-info' data-bs-target='#personInfo' data-bs-toggle='modal'>" + "نمایش" + "</button>"
                    + "<button onclick=" + "delete(" + item.id + ") class='btn py-0 px-1 btn-danger' data-bs-target='#personInfo' data-bs-toggle='modal'>" + "حذف" + "</button>"
                    + "</td></tr>";
            });
            document.getElementById("tbody").innerHTML = tr_1;
        }
        else {
            document.getElementById("tbody").innerHTML = "";
        }
    };
    // findPerson(username:string): Person {
    //     return this.lsv.find( item => item.username == username );
    // }
    PersonManage.prototype.edit = function (modal) {
    };
    return PersonManage;
}());
exports.PersonManage = PersonManage;
