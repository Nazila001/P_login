
import { UserModel } from './view/user-model';
import { UserAuthentication } from './valid/info-valid';



{
    let element = (document.getElementById("redirect")as any);
    element.onclick = ()=>{
        let userValidation  = new UserAuthentication({
            username : 'a@b.com',
            pass : '12345'
        });
        if (userValidation.validUserE())
            window.location.href = '/index5.html';
        else return alert("error")
            // else return "Error"

    }
}


