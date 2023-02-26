"use strict";
exports.__esModule = true;
exports.UserAuthentication = void 0;
var UserAuthentication = /** @class */ (function () {
    function UserAuthentication(user) {
        this.username = user.username;
        this.pass = user.pass;
    }
    UserAuthentication.prototype.nameValid = function (name) {
        if (name != undefined && name.length >= 3)
            return true;
        else
            return false;
    };
    UserAuthentication.prototype.familyValid = function (family) {
        if (family != undefined && family.length >= 4)
            return true;
        else
            return false;
    };
    UserAuthentication.prototype.passValid = function (pass) {
        if (pass != undefined && pass.length > 3)
            return true;
        else
            return false;
    };
    UserAuthentication.prototype.userValid = function (user) {
        if (user != undefined && user.length > 3)
            return true;
        else
            return false;
    };
    UserAuthentication.prototype.validUserE = function () {
        return (this.userValid(this.username) && this.passValid(this.pass));
    };
    return UserAuthentication;
}());
exports.UserAuthentication = UserAuthentication;
// private nameValid (name:string) {
//     if (name !=undefined && name.length>=3 )
//     return true
//     else return false
// }
// private familyValid (family:string) {
//     if (family !=undefined && family.length>=4 )
//         return true
//     else return false
// }
// private passValid (pass:string) {
//     if (pass != undefined && pass.length>3 )
//         return true
//     else return false
// }
// valid(user:UserModel) : boolean{
//     return (this.nameValid(user.name) && this.familyValid(user.family) && this.passValid(user.pass))
// }
// validation(user:UserModel) :  {
//     if (this.nameValid(user.name) && this.passValid(user.pass)) {
//         let validUser : number = 1
//         let invalidUser : number = 0
//         return validUser
//     return invalidUser
//     }
// }
