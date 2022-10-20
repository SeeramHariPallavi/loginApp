import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  user_name:String='';
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.user_name=this.route.snapshot.params['name'];
  }

}
