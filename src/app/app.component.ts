import { Component, OnInit } from '@angular/core';
import { NgOption } from '@ng-select/ng-select';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface Option {
  CODE: string;
  DESCRIPTION: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  form: FormGroup;

  sampleOption: Option = {
    CODE: 'SGP',
    DESCRIPTION: 'Singaporean'
  };

  ages: NgOption[] = [
    {value: '<18', label: 'Under 18'},
    {value: '18', label: '18'},
    {value: '>18', label: 'More than 18'},
    {
      value: this.sampleOption, label: 'Singaporean'
    },
  ];

  countries = [
    { id: 1, nested: { countryId: 'L', name: 'Lithuania' } },
    { id: 2, nested: { countryId: 'U', name: 'USA' } },
    { id: 3, nested: { countryId: 'A', name: 'Australia' } }
  ];

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      age: this.fb.group({
        CODE: [],
        DESCRIPTION: []
      }),
      selectedCountryId: []
    });
  }

  patchForm() {
    this.form.patchValue({
      age: {
        CODE: 'SGP',
        DESCRIPTION: 'Singaporean'
      },
      selectedCountryId: { countryId: 'A', name: 'Australia' }
    });
  }

  showConfirm() {
    console.log('showConfirm');
    this.form.patchValue({
      age: {
        DESCRIPTION: 'Singapore'
      }
    })
  }

  compareFn(option1: Option, option2: Option): boolean {
    console.log('option1', option1);
    console.log('option2', option2);
    return option1 && option2 ? option1.CODE === option2.CODE : option1 === option2;
  }

  getNgSelectLabel(): string {
    return 'hello world';
  }

}
