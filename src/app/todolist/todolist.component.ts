import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  elem=
{ 
  description:"Participer a la formation",
  date:new Date(2019,3,10),
  datefin:new Date()
  
}
 
 
  todos=[this.elem,{
    description:"Apprendre Angular",
  date:new Date(2016,3,1),
  datefin:new Date()
  
  }]

  dones=[]
  constructor() { }

  ngOnInit() {
  }

  accomplished(todo){
    let index =this.todos.indexOf(todo)
    this.todos[index].datefin=new Date(2019,9,15);
    this.dones.push(this.todos[index])
    this.todos.splice(index,1)
  }

  delete_todo(todo)
  {
    let index =this.todos.indexOf(todo)
    this.todos.splice(index,1)
  }

  delete_done(done)
  {
    let index =this.dones.indexOf(done)
    this.dones.splice(index,1)
  }
}