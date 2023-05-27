import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private builder: FormBuilder,private toastr:ToastrService) { }

  registerForm = this.builder.group({
    id: this.builder.control('',Validators.compose([Validators.required,Validators.minLength(3)])),
    name: this.builder.control('',Validators.required),
    password: this.builder.control('',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9]{6,10}$')])),
    email: this.builder.control('',Validators.compose([Validators.required,Validators.email])),
    gender: this.builder.control('male'),
    role: this.builder.control(''),
    isactive:this.builder.control(false)

  });

  proceedregister() {
    if(this.registerForm.valid){
      console.log(this.registerForm.value);

    } 
    else{
      this.toastr.warning('Please fill all the fields');
    }
  }
}
