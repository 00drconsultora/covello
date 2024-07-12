import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
})
export class ContactFormComponent {
  contactForm: FormGroup;
  successMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient){
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{10,}$/)]],
      email: ['', [Validators.required, Validators.email]]
    })
  }
  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted!', this.contactForm.value);
    } else {
      console.log('Form Not Valid');
    }
    if(this.validate_mail(this.contactForm.get('email')?.value)){
      let data = {
        name: this.contactForm.get('name')?.value,
        email: this.contactForm.get('email')?.value,
        phone: this.contactForm.get('phone')?.value,
        cellphone: this.contactForm.get('phone')?.value,
             }

      this.http.post('assets/sendContact.php', data)
      .subscribe({
        next: () => {
          this.successMessage = 'Success';
        },
        error: () => {
          this.successMessage = 'Ha ocurrido un error, por favor intente nuevamente.';
        }
      });
    } else {
      this.successMessage = "El email ingresado es inválido.";
    }
  }

  validate_mail(mail: string): boolean{
    var filter = /[\w-\.]{1,}@([\w-]{1,}\.)*([\w-]{1,}\.)[\w-]{2,4}/;
    return filter.test(mail)
  }
}