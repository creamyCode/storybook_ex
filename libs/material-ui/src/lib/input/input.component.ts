import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'test-app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss', '../material.scss']
})
export class InputComponent implements OnInit {
  label: string;
  placeholder: string;
  type: 'text' | 'number';
  required: boolean;
  readonly: boolean;
  errMsgs: string[];
  @Input('tooltip')
  tooltip: string
  @Input('formControl')
  form: FormControl = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
