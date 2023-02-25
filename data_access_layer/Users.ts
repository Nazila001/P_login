// import { Alert } from "../common/alert";
// import { UserAuthentication } from "../valid/info-valid";
// import { UserModel } from "../view/user-model";

// export interface IUser{
//     add(user:UserModel)
//     // edit()
//     // read()
// }

// export class UserManage implements IUser {
//     listOfUser: UserModel[] = new Array<UserModel>(); //a list to save user

//     add(user: UserModel) {
//         if (new UserAuthentication().valid(user)){
//             this.listOfUser.push(user)
//             new Alert().message('با موفقیت ثبت شد');
//         }
//         else 
//             new Alert().message('خطا در ثبت اطلاعات');
//     }
//     edit() {
//         throw new Error("Method not implemented.");
//     }
//     read() {
//         return this.listOfUser;
//     }

// }

