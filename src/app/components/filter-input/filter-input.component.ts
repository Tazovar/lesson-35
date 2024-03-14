import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-input',
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.css']
})
export class FilterInputComponent {
  searchName!:string
  @Output() searchEmitter:EventEmitter<string> = new EventEmitter();



  public filterr():void{
    this.searchEmitter.emit(this.searchName)
  }


}
