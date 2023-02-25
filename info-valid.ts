import { UserModel } from "../view/user-model"

export class UserAuthentication {

    username:string;
    pass:string;
    name:string;
    family:string;

        constructor(user:UserModel){
        this.username = user.username;
        this.pass = user.pass;
    }
    private nameValid (name:string) {
        if (name !=undefined && name.length>=3 )
        return true
        else return false
    }

    private familyValid (family:string) {
        if (family !=undefined && family.length>=4 )
            return true
        else return false
    }

    private passValid (pass:string) {
        if (pass != undefined && pass.length>3 )
            return true
        else return false
    }

    private userValid (user:string) {
        if (user != undefined && user.length>3 )
            return true
        else return false
    }

    validUserE() : boolean{
        return (this.userValid(this.username) && this.passValid(this.pass));
    }
}

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
