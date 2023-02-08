import { Component } from '@angular/core';
@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation-binding.component.html',
  styleUrls: ['./interpolation-binding.component.css']
})
export class InterpolationComponent {
name="interpolation for property";
num=500;
bind="OneWayBinding";
twobind="TwoWayBinding"
isButton = true;

getDetails(){
  return "interpolation for function"
}

activateButton(){
  this.isButton = false;
}
}
