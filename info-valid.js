"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthentication = void 0;
class UserAuthentication {
    constructor(user) {
        this.username = user.username;
        this.pass = user.pass;
    }
    nameValid(name) {
        if (name != undefined && name.length >= 3)
            return true;
        else
            return false;
    }
    familyValid(family) {
        if (family != undefined && family.length >= 4)
            return true;
        else
            return false;
    }
    passValid(pass) {
        if (pass != undefined && pass.length > 3)
            return true;
        else
            return false;
    }
    userValid(user) {
        if (user != undefined && user.length > 3)
            return true;
        else
            return false;
    }
    validUserE() {
        return (this.userValid(this.username) && this.passValid(this.pass));
    }
}
exports.UserAuthentication = UserAuthentication;
//# sourceMappingURL=info-valid.js.map