import { ValidationErrors, AbstractControl, FormGroup, FormControl } from "@angular/forms";
import { resolve } from 'url';

export class PasswordResetValidator {
  static mtachNewPasswords(control: AbstractControl): ValidationErrors | null {
    let newPassword: string = control.get("newPassword").value;
    let confirmPassword: string = control.get("confirmPassword").value;
    if (!(confirmPassword === "")) {
      if (newPassword === confirmPassword) {
        return { match: true };
      } else {
        return { match: false };
      }
    }else{
        return { match: true };
    }
  }

  static checkOldPassword(control: AbstractControl): Promise <ValidationErrors | null> {
      console.log(control);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(control.value === 'password'){
                resolve({oldMatch: true});
            }else{
                resolve({oldMatch: false}); 
            }
        }, 2000)
    });
  }

}
