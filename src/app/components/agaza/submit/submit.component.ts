import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import intlTelInput from 'intl-tel-input';
import { CountryISO, SearchCountryField } from 'ngx-intl-tel-input';
import { AgazaService } from '../agaza.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss'],
})
export class SubmitComponent implements OnInit {
  @ViewChild('phoneInput') phoneInput!: ElementRef | any;
  form!: FormGroup;
  phoneInputSelect: any;
  errorMessage: any = {
    isError: false,
    username: [],
    email: [],
    password: [],
};
objectKeys = Object.keys;
  egazaCategories: any[] = [
    // { name: 'Qran', value: '1' },
    // { name: 'Qran ', value: '2' },
    // { name: 'Qran', value: '3' },
  ];
  selectedCategoryId:any="";
  egazaSubcategories: any[] = [
    // { name: 'Qran Hafs', value: '1' },
    // { name: 'Qran Hafs1', value: '2' },
    // { name: 'Qran Hafs3', value: '3' },
  ];
  selectedSubcategoriesId:any="";
  egazaSheikh: any[] = [
    // { name: 'Sheikh Othman', value: '1' },
    // { name: 'Sheikh Othman1', value: '2' },
    // { name: 'Sheikh Othman3', value: '3' },
  ];
  selectedegazaSheikhId:any="";

  selectedOption: any;

  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  // TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [
    CountryISO.UnitedStates,
    CountryISO.UnitedKingdom,
  ];

  changePreferredCountries() {
    this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }

  constructor(private agazaService: AgazaService,
    private fb: FormBuilder,
    ) {}
  ngOnInit(): void {
    this.getEgazaCategories();
    // this.getEgazaSubcategories();
    // this.getEgazaSheikh();

    this.form = this.fb.group({
      agazaType: ['', Validators.required],
      agazaSubType: new FormControl({value: '', disabled: true}, Validators.required),
      agazaSheikh: new FormControl({value: '', disabled: true}, Validators.required),
      userName:  new FormControl('', Validators.required),
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
      city: ['', Validators.required],
      phone: [{}],
      gender: ['', Validators.required]
    });

  }
  // Getter for easy access to form controls
  get f() {
    return this.form.controls;
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

  getEgazaCategories() {
    this.agazaService.getEgazaCategories().subscribe({
      next: (data) => {
        
        if (data.length > 0) {
          this.egazaCategories = [...data];
        }
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  getEgazaSubcategories() {
    
    this.agazaService.getEgazaSubcategories(this.selectedCategoryId).subscribe({
      next: (data) => {
        this.form.get('agazaSubType')?.enable();

            if (data.length > 0) {
          this.egazaSubcategories = [...data];

        

        }
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  getEgazaSheikh() {
    
    this.agazaService.getEgazaSheikh(this.selectedSubcategoriesId).subscribe({
      next: (data) => {
        // Check if the control is currently enabled
        // const agazaSheikhControl:any = this.form.get('agazaSheikh');

        // if (agazaSheikhControl.enabled) {
        //   // If enabled, disable it
        //   agazaSheikhControl.disable();
        // } else {
        //   // If disabled, enable it
        //   agazaSheikhControl.enable();
        // }

        this.form.get('agazaSheikh')?.enable();
        if (data.length > 0) {
          this.egazaSheikh = [...data];
        }
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  submitForm() {
    // Check if the form is valid
    
    this.markAllAsTouched(this.form);

    if (this.form.valid) {
      // Form is valid, proceed with form submission
      this.agazaService.EgazaRequest(this.form.value).subscribe({
        next: (data) => {
          
          this.form.reset();
        },
        error: (error) => {
          console.error('There was an error!', error);

          this.handleError(error.errors)
        },
      });

      console.log(this.form.value);
    } else {
      // Form is invalid, mark all fields as touched to display validation errors
      // this.form.markAllAsTouched();
      
    }
  }

  markAllAsTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markAllAsTouched(control);
      }
    });
  }



  // Function to mark all form controls as touched
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  egazaCategoriesChange(){
    
    this.egazaSubcategories=[];
    this.egazaSheikh=[];
    this.selectedSubcategoriesId="";
    this.form.get('agazaSheikh')?.disable();

    this.getEgazaSubcategories();
  }

  egazaSubcategoriesChange(){
    this.egazaSheikh=[];
    this.selectedegazaSheikhId="";

    this.getEgazaSheikh();

  }

  private handleError(error: any) {
    if (error.error && error.error) {
        // Initialize errorMessage as an empty object
        this.errorMessage = {
            isError: true,
        };

        // this.messageService.add({
        //     severity: 'error',
        //     summary: 'Error',
        //     detail: `${value}`,
        // });
        // Iterate over the entries of error.error
        for (const [key, value] of Object.entries(error.error)) {
            console.log(`${key}: ${value}`);
            this.errorMessage[key] = value ? value : [];
        }

        
    }

    
   

}

resetErrorMessage() {
  this.errorMessage = {
      isError: false,
      username: [],
      email: [],
      password: [],
  };
}

  
}
