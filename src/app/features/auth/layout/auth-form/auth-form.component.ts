import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  @Input() formFields: string[] = [];
  @Input() redirectMessage: string = '';
  @Input() buttonMessage: string = '';
  @Output() formResult = new EventEmitter<string>()

  form: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createFormControls();
    console.log(this.formFields);
    
  }
  createFormControls(): void {

    this.formFields.forEach(field => {
      this.form.addControl(field, this.formBuilder.control(''));
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.formResult.emit(this.form.value);
      console.log(this.form.value);
    }
  }
}
