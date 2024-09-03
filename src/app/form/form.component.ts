import {Component, ElementRef, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ChildForm1Component} from "./child-form-1/child-form-1.component";
import {ChildForm2Component} from "./child-form-2/child-form-2.component";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ChildForm1Component,
    ChildForm2Component
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

  /**
   * with passing parent form
   * */
  ngOnInit() {
    this.parentForm = this.fb.group({
      companyName: ['', Validators.required],
      natureOfBusiness: ['', Validators.required],
    });
  }


  /**
   * with passing specific form group
   * */
  // ngOnInit() {
  //   this.parentForm = this.fb.group({
  //     companyName: ['', Validators.required],
  //     natureOfBusiness: ['', Validators.required],
  //     contact: this.fb.group({
  //       firstName: ['', Validators.required],
  //       lastName: ['', Validators.required],
  //     })
  //   });
  // }
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
