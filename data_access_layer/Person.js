"use strict";
exports.__esModule = true;
exports.PersonManage = void 0;
var PersonManage = /** @class */ (function () {
    function PersonManage() {
        //lsv : Person[] = new Array<Person>();
        this.lsv = [{ name: "مینا", family: "رضایی", username: "minarezaeei", message: "مطالب جدید" }];
    }
    PersonManage.prototype.add = function () {
        var _a;
        //let array = [{name:"مینا", family:"رضایی",username:"minarezaeei"}] 
        //this.lsv.push(...array);
        (_a = this.lsv).push.apply(_a, this.lsv); //how to add a item into an array
    };
    PersonManage.prototype.update = function () {
        if (this.lsv.length > 0) {
            var tr_1;
            this.lsv.forEach(function (item) {
                tr_1 += "<tr><td>" + item.name + "</td>";
                tr_1 += "<td>" + item.family + "</td>";
                tr_1 += "<td>" + item.message + "</td>";
                tr_1 += "<td><button onclick=" + "post('edit') class='btn py-0 px-1 btn-warning' data-bs-target='#personModal' data-bs-toggle='modal'>" + "ویرایش" + "</button>"
                    + "<button onclick=" + "info(" + item.username + ") class='btn py-0 px-1 btn-info' data-bs-target='#personInfo' data-bs-toggle='modal'>" + "نمایش" + "</button>"
                    + "</td></tr>";
                document.getElementById(".tbody").innerHTML = tr_1;
            });
        }
        else {
            document.getElementById(".tbody").innerHTML = "";
        }
    };
    PersonManage.prototype.findPerson = function (id) {
    };
    PersonManage.prototype.edit = function (modal) {
    };
    return PersonManage;
}());
exports.PersonManage = PersonManage;
