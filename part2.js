"use strict";
exports.__esModule = true;
var Person_1 = require("./data_access_layer/Person");
{
    var perM_1 = new Person_1.PersonManage();
    var update = function () {
        perM_1.update();
    };
    var addAll = function () {
        perM_1.addAll();
    };
    var post = function (state) {
        if (state == "add") {
            document.getElementById("personLabel").innerText = "افزودن پست";
        }
        else {
            document.getElementById("personLabel").innerText = "\u0648\u06CC\u0631\u0627\u06CC\u0634 ".concat(state);
        }
    };
}
