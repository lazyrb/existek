import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  onSubmit(){
    this.formService.isFormHidden = true;
    console.log(this.form)
  }
  toSignUp(){
    this.formService.isFormHidden = true;
    this.route.navigate(['sign-up']);
  }
  constructor(public formService: FormService, private route: Router) { }

  ngOnInit() {
  }


}
