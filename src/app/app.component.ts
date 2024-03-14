import { Component, OnInit } from '@angular/core';
import { Card } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{
public cardsArray:Card[] | any = this.test();

ngOnInit(): void {
}


test(){
  return JSON.parse(localStorage.getItem('Card') || '[]') 
}

public cardObjectEmitterSubscriber(event:Card):void{
  this.cardsArray.push(event);
  localStorage.setItem('Card',JSON.stringify(this.cardsArray))
  
}


public searchEmitterSubscirber(event:string):void{

  let filter = this.cardsArray.filter((x:any) => {
    return x.userName.toLowerCase().includes(event.toLowerCase());
  })

  if(event){
    this.cardsArray = filter
  }else {
    this.cardsArray = this.test()
  }
}

}
