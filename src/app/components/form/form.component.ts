import { Component, EventEmitter, Output } from '@angular/core';
import { Card } from 'src/app/interfaces/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
@Output() cardObjectEmitter:EventEmitter<Card> = new EventEmitter()
  public CardObject:Card = {
    userName:"",
    date:"",
    file:"",
    content:""
  }


  public submit():void{
let card = new Card(this.CardObject.userName,this.CardObject.date,this.CardObject.file,this.CardObject.content);
this.cardObjectEmitter.emit(card)

  }


  public uploadPicture(event:Event | any):void{
    let file = event.target.files[0];
    let fileReader = new FileReader();
    
    fileReader.readAsDataURL(file)

    fileReader.onload = () => {
      this.CardObject.file = fileReader.result
    }

  }
}

