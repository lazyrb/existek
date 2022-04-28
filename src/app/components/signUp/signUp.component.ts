import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    rePassword: new FormControl('', Validators.required),
  })

  constructor(private route: Router) { }

  ngOnInit() {
  }
  
  onSubmit(){
    this.route.navigate([''])
    console.log(this.signUpForm)
  }

}
