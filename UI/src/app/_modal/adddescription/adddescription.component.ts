import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-adddescription',
  templateUrl: './adddescription.component.html',
  styleUrls: ['./adddescription.component.scss']
})
export class AdddescriptionComponent implements OnInit {
  taskDescription: string;
  @Input() contentValue: any;
  constructor() { }

  ngOnInit() {
  }
  updateTaskDescription(value: string) {
    this.taskDescription = value;
  }
}
