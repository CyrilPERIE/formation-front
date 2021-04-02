import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instruction-form',
  templateUrl: './instruction-form.component.html',
  styleUrls: ['./instruction-form.component.scss']
})
export class InstructionFormComponent implements OnInit {

  id: number;
  message: String;
  textBUtton: '+';
  
  constructor() { }

  ngOnInit(): void {
  }

}
