import { Component, Input} from '@angular/core';


@Component({
  selector: 'custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.scss']
})
export class CustomCounterComponent{

  counter = 0;

  @Input()
  increment!: number;

  onAdd() {
    this.counter+= this.increment;
  }

  onRemove() {
    this.counter-= this.increment;
  }
}
