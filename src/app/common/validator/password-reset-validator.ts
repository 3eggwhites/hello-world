import { ValidationErrors, AbstractControl } from "@angular/forms";

export class PasswordResetValidator {
  static mtachNewPasswords(control: AbstractControl): ValidationErrors | null {
     if(!(control.get('newPassword') === control.get('confirmPassword'))){
         return {noMatch: true};
     }else{
         return null;
     }
  }
}
