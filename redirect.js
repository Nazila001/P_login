"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const info_valid_1 = require("./valid/info-valid");
let element = document.getElementById("redirect");
element.onclick = () => {
    let userValidation = new info_valid_1.UserAuthentication({
        username: 'a@b.com',
        pass: '12345'
    });
    if (userValidation.validUserE())
        window.location.href = '/index5.html';
    else
        return alert("error");
};
//# sourceMappingURL=redirect.js.map