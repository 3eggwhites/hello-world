import { PasswordResetValidator } from "./../common/validator/password-reset-validator";
import { Validators, FormBuilder } from "@angular/forms";
import { Component } from "@angular/core";

@Component({
  selector: "password-reset",
  templateUrl: "./password-reset.component.html",
  styleUrls: ["./password-reset.component.css"]
})
export class PasswordResetComponent {
  constructor(private formBuilder: FormBuilder) {}

  resetForm = this.formBuilder.group({
    oldPassword: ["", Validators.required], //+asyncVAlidator for old password check
    resetGroup: this.formBuilder.group(
      {
        newPassword: ["", Validators.required],
        confirmPassword: ["", Validators.required]
      },
      { validator: PasswordResetValidator.mtachNewPasswords }
    )
  });

  changePassword() {
    console.log(this.resetForm);
  }

  get oldPassword(){
    return this.resetForm.get('oldPassword');
  }

  get newPassword(){
    return this.resetForm.get('resetGroup.newPassword');
  }

  get confirmPassword(){
    return this.resetForm.get('resetGroup.confirmPassword');
  }

  get resetGroup(){
    return this.resetForm.get('resetGroup');
  }

}
