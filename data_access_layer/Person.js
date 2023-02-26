"use strict";
exports.__esModule = true;
exports.PersonManage = void 0;
var PersonManage = /** @class */ (function () {
    function PersonManage() {
        //lsv : Person[] = new Array<Person>();
        this.lsv = [{ username: "minarezaeei", name: "مینا", family: "22رضایی", message: "مطالب جدید" }];
        this.lsv1 = [{ username: "maryamsabaeei", name: "مریم", family: "صبایی", message: "مطالب جدید۱۲۳۴۵" }];
    }
    PersonManage.prototype.add = function () {
        // let array = [{name:"مینا", family:"رضایی",username:"minarezaeei"}] 
        // this.lsv.push(...this.lsv);
        // let array(...array); //how to add a item into an array
    };
    PersonManage.prototype.addAll = function () {
        var _a, _b, _c;
        (_a = this.lsv).push.apply(_a, this.lsv);
        (_b = this.lsv1).push.apply(_b, this.lsv1);
        var array = [{ id: 1, username: "maryamsabaeei", name: "مریم", family: "صبایی", message: "مطالب جدید۱۲۳۴۵" }];
        (_c = this.lsv1).push.apply(_c, array);
        this.update();
    };
    PersonManage.prototype.update = function () {
        if (this.lsv.length > 0) {
            var tr_1 = "";
            this.lsv.forEach(function (item) {
                tr_1 += "<tr><td>" + item.username + "</td>";
                tr_1 += "<td>" + item.name + "</td>";
                tr_1 += "<td>" + item.family + "</td>";
                tr_1 += "<td>" + item.message + "</td>";
                tr_1 += "<td><button onclick=" + "post(" + item.username + ") class='btn py-0 px-1 btn-warning' data-bs-target='#personModal' data-bs-toggle='modal'>" + "ویرایش" + "</button>"
                    + "<button onclick=" + "info(" + item.username + ") class='btn py-0 px-1 btn-info' data-bs-target='#personInfo' data-bs-toggle='modal'>" + "نمایش" + "</button>"
                    + "</td></tr>";
            });
            document.getElementById("tbody").innerHTML = tr_1;
        }
        else {
            document.getElementById("tbody").innerHTML = "";
        }
    };
    PersonManage.prototype.edit = function (modal) {
    };
    return PersonManage;
}());
exports.PersonManage = PersonManage;
