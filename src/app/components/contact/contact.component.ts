import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import intlTelInput from 'intl-tel-input';
import {
  CountryISO,
  SearchCountryField,
} from "ngx-intl-tel-input";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('phoneInput') phoneInput!: ElementRef|any;
  phoneInputSelect: any;
  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [
    CountryISO.UnitedStates,
    CountryISO.UnitedKingdom
  ];

  changePreferredCountries() {
    this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }

  constructor(){}


ArrayValue:any;
  ShowFormData(form:any){
    this.ArrayValue=form.value;
    console.log(this.ArrayValue);

    this.userForm.reset({})
  }

  


  userForm = new FormGroup({
    Name: new FormControl(null||'', [
      Validators.minLength(3),
      Validators.maxLength(10),
      Validators.pattern(/^[A-Z]/),
      Validators.required,
    ]),
    email: new FormControl(null||'', [Validators.required, Validators.email]),
    City: new FormControl(null ||'', [Validators.required]),
    Number: new FormControl(null||''),
    Gender:new FormControl(null||''),
    textArea:new FormControl(null||'')
  });



  ngOnInit(): void {


  }


  ngAfterViewInit() {
    this.initPhoneInput();
  }

  initPhoneInput() {
    
    this.phoneInputSelect = intlTelInput(this.phoneInput, {

      // options if needed
    });

    console.log(this.phoneInputSelect);
    console.log(this.phoneInput);

  }

  getSelectedCountryData() {
    const countryData = this.phoneInputSelect.getSelectedCountryData();
    console.log(countryData);
  }

}
