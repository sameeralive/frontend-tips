import {Component, ElementRef, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ChildForm1Component} from "./child-form-1/child-form-1.component";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ChildForm1Component
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit{
  parentForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private el: ElementRef,
  ){}


  ngOnInit() {
    this.parentForm = this.fb.group({
      companyName: ['', Validators.required],
      natureOfBusiness: ['', Validators.required],
    });
  }

  submitData() {
    if (!this.parentForm.valid) {
      this.parentForm.markAllAsTouched();
      this.scrollToFirstInvalidControl(this.el);
      console.log('Validation Error');
    } else {
      console.log('success', this.parentForm.value);
    }
  }

  scrollToFirstInvalidControl(el: any) {
    const firstInvalidControl: HTMLElement = el.nativeElement.querySelector(
      "form .ng-invalid"
    );
    firstInvalidControl.focus(); //without smooth behavior
  }

}
