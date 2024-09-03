import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-child-form-1',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './child-form-1.component.html',
  styleUrl: './child-form-1.component.scss'
})
export class ChildForm1Component implements OnInit{

  @Input() parentForm: any;
  contactForm!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    })

    // this.parentForm.addControl('contact', this.contactForm);
    this.parentForm = MergeControls(this.parentForm, this.contactForm);
  }

}


export function MergeControls(parentForm: FormGroup, formToMerge: FormGroup) {
  Object.keys(formToMerge.controls).forEach((key) => {
    // Check if the control already exists in the parent form
    if (!parentForm.contains(key)) {
      // Add control to parent form
      parentForm.addControl(key, formToMerge.controls[key]);
    }
  });
  return parentForm;
}
