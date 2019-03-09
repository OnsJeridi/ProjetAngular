import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-pipes',
  templateUrl: './test-pipes.component.html',
  styleUrls: ['./test-pipes.component.css']
})
export class TestPipesComponent implements OnInit {
  todos=[{
    description:"Terminer la formation MEAN ",
    rating:4.9745,
    price:150.90,
    date:new Date(2016,3,1)
  },
  {
    description:"Terminer  ",
    rating:4.95,
    price:120.90,
    date:new Date(2016,5,28)
  }

]
  constructor() { }

  ngOnInit() {
  }
  
  remove(todo)
  {
    let index=this.todos.indexOf(todo)
    this.todos.splice(index,2);
  }

}
