import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {
  @Input() item:String='';
  @Output() crossOffItem = new EventEmitter();
  constructor() { }

  deleteNewItem(complete:boolean) {
    this.crossOffItem.emit(complete);
  }
  ngOnInit(): void {
  }

}
