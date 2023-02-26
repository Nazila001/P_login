"use strict";
exports.__esModule = true;
var info_valid_1 = require("./valid/info-valid");
var element = document.getElementById("redirect");
element.onclick = function () {
    var userValidation = new info_valid_1.UserAuthentication({
        username: 'a@b.com',
        pass: '12345'
    });
    if (userValidation.validUserE())
        window.location.href = '/index5.html';
    else
        return alert("error");
    // else return "Error"
};
