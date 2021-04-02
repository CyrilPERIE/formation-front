import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.scss']
})
export class IngredientFormComponent implements OnInit {

  @Input()
  toto = {
    "index": 0,
    "name": "",
    "quantity": "",
    "unit": "",
    "textButton": "+"
  }
  constructor() { }

  ngOnInit(): void {
  }

  switchTextButton() {
    this.toto.textButton = this.toto.textButton == "+" ? "-": "+";
  }


}
