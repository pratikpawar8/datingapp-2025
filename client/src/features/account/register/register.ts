import { Component, inject, input, output, Output } from '@angular/core';
import { RegisterCreds, User } from '../../../types/user';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../../core/services/account-service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  protected creds = {} as RegisterCreds
  protected CancelRegister = output<boolean>()
  private accountsService = inject(AccountService)
  register() {
    this.accountsService.register(this.creds).subscribe(
      {
        next: response => {
          console.log(response);
          this.cancel();
        },
        error: error => console.log(error)
      }
    )
  }
  cancel() {
    this.CancelRegister.emit(false);
  }

}
