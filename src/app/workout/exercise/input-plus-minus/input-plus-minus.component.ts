import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-plus-minus',
  templateUrl: './input-plus-minus.component.html',
  styleUrls: ['./input-plus-minus.component.scss']
})
export class InputPlusMinusComponent implements OnInit {
  @Input() value: number;

  @Output() valueChanged = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {
    if (this.value < 0) {
      this.value = null;
    }
    this.valueChanged.emit(this.value);
  }

  increment() {
    this.value++;
    this.valueChanged.emit(this.value);
  }

  decrement() {
    this.value--;
    this.valueChanged.emit(this.value);
  }

  onValueChange(value: number) {
    this.valueChanged.emit(value);
  }
}
