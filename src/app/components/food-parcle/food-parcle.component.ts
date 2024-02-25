import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import intlTelInput from 'intl-tel-input';
import { CountryISO, SearchCountryField } from 'ngx-intl-tel-input';
import { FoodParcleService } from './FoodParcle.service';

@Component({
  selector: 'app-food-parcle',
  templateUrl: './food-parcle.component.html',
  styleUrls: ['./food-parcle.component.scss']
})
export class FoodParcleComponent implements OnInit {
  @ViewChild('phoneInput') phoneInput!: ElementRef | any;
  // form!: FormGroup;
  additionalMeals: any[] = []; // Array to store additional meal fields

  phoneInputSelect: any;

  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  // TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [
    CountryISO.UnitedStates,
    CountryISO.UnitedKingdom,
  ];
  selectedButton:any="DonateFood"

  // meals: any[] = [{selectedMeals:"",count:""}];
  mealOptions: any[] = [
    {id:1,name:'Meal1'},
    {id:2,name:'Meal2'},
    {id:3,name:'Meal3'},
  ]; // Example meal options

  newMealDetails: any = ''; // Declare variable to store meal details

  // counts: any[] = [];
  // KindFoodMeals:any[]=[]
  constructor(
    private fb: FormBuilder,
    private FoodParcleService:FoodParcleService
  ){

  }

  formDonateFood:any={
    userName:'',
    phone1:'',
    phone2:'',
    location:'',
    meals:  [{selectedMeals:"",count:""}],
    comment:'',

  }
  formNeedFood:any={
    userName:'',
    phone1:'',
    phone2:'',
   
  }

  ngOnInit(): void {
    // this.form = this.fb.group({
    //   userName: ['', Validators.required],
    //   phone1: ['', Validators.required],
    //   phone2: ['', Validators.required],
    //   location: ['', Validators.required],
    //   KindFood: ['', Validators.required],
    //   CountMeals: ['', Validators.required],
    //   comments: ['']
    // });
  }
  changePreferredCountries() {
    this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }
  submitFormNeedFood(){

  }
  submitFormDonateFood() {
    // Check if the form is valid
    
    if (this.isFormValid()) {
      // All required fields are filled, proceed with submission
      // this.FoodParcleService.foodParcleRequest(this.formDonateFood).subscribe({
      //   next: (data:any) => {
          
      //     // this.formDonateFood.reset();
      //   },
      //   error: (error:any) => {
      //     console.error('There was an error!', error);

      //   },
      // }); 
     } else {
      // Some required fields are empty, display an error message or take appropriate action
      console.log('Please fill in all required fields.');
  }
      

    //   console.log(this.form.value);
    // } else {
    //   // Form is invalid, mark all fields as touched to display validation errors
    //   // this.form.markAllAsTouched();
      
    // }
  }

  isFormValid(): boolean {
    // Check if all required fields are filled
    return !!this.formDonateFood.userName && !!this.formDonateFood.phone1 && !!this.formDonateFood.phone2 && !!this.formDonateFood.Location && !!this.formDonateFood.DateDonate && !!this.formDonateFood.meals && this.formDonateFood.meals.every((item:any) => !!item.selectedMeals && !!item.count);
}

  markAllAsTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markAllAsTouched(control);
      }
    });
  }


  selectButton(buttonName: string): void {
    this.selectedButton = buttonName;
  }

  addNewMeal(): void {
    // this.meals.push({});
  }

  addOtherMeal(): void {
    // this.counts.push({});
    this.formDonateFood.meals.push({selectedMeals:"",count:""})
  }

  handleSave(){
    
    this.mealOptions.push({id:this.mealOptions.length,name:this.newMealDetails},)
    this.newMealDetails='';
  }
}
