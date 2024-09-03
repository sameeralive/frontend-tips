import {Component, Input} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-child-form-2',
  standalone: true,
    imports: [
        ReactiveFormsModule
    ],
  templateUrl: './child-form-2.component.html',
  styleUrl: './child-form-2.component.scss'
})
export class ChildForm2Component {

  @Input() cFormGroup: any;



}
