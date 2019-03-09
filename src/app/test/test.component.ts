import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  title="formalab";
  imgUrl="../../assets/images/logo.png";
  value=2;
  isActive=true;
  entrepriseName="issat";
  
  constructor() { }

  ngOnInit() {
  }

  myFunction()
  {
    console.log(this.entrepriseName)
  }
}
