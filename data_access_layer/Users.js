"use strict";
exports.__esModule = true;
exports.UserManage = void 0;
var alert_1 = require("../common/alert");
var info_valid_1 = require("../valid/info-valid");
var UserManage = /** @class */ (function () {
    function UserManage() {
        this.listOfUser = new Array(); //a list to save user
    }
    UserManage.prototype.add = function (user) {
        if (new info_valid_1.UserValid().valid(user)) {
            this.listOfUser.push(user);
            new alert_1.Alert().message('با موفقیت ثبت شد');
        }
        else
            new alert_1.Alert().message('خطا در ثبت اطلاعات');
    };
    UserManage.prototype.edit = function () {
        throw new Error("Method not implemented.");
    };
    UserManage.prototype.read = function () {
        return this.listOfUser;
    };
    return UserManage;
}());
exports.UserManage = UserManage;
