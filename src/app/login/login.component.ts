import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:String='';
  email:String='';
  password:String='';

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  submit(){
    if(this.email=='pallavi@gmail.com'){
      this.route.navigate(['/welcome',this.username]);
    }
  }
}
