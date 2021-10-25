import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryInfo } from 'src/app/interfaces/interfaces';
import { DataService } from '../../../services/data.service';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.scss']
})
export class ModalUserComponent implements OnInit {

  @Input() user: any;

  userForm!: FormGroup;

  listLanguages = ['Español', 'Inglés', 'Frances', 'Alemán', 'Italiano', 'Portugues'];

  dataCountries: CountryInfo[] = [];

  countrySelected!: CountryInfo;

  constructor(
    private fb: FormBuilder,
    private _dataService: DataService,
    private modelRef: NzModalRef
  ) { 
    this.initForm();
    // this.validateData();
    this.loadCountries();
  }

  ngOnInit(): void {
    this.userForm.patchValue(this.user);
    if(this.user.country){
      this.countryInfo(this.user.country);
    }

  }

  initForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      language: [, Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      country: ['', Validators.required],
      countryCode: [{ value:'', disabled: true}, Validators.required],
      countryCodeName: [{ value:'', disabled: true}, Validators.required]
    });
  }

  validateData() {
    if(this.user){
      
    }
  }

  async onSubmit(event: Event) {
    // Prevent default action
    event.preventDefault();
    // Stop propagating
    event.stopPropagation();
    // Get form data
    const formData = {
      id: this.user._id,
      ...this.userForm.value,
      currency: {
        ...this.currencyCode()
      }
    };
    const response = await this._dataService.editUser(formData);
    if(response.status){
      this.modelRef.destroy();
    }
  }

  async loadCountries() {
    this.dataCountries = await this._dataService.getDataCountries();
  }


  async countryInfo(event: string){
    const response = await this._dataService.getInfoCountry(event);
    this.countrySelected = response[0];
  }


  coutryCode(){
    return `${this.countrySelected.idd.root}${this.countrySelected.idd.suffixes[0]}`
  }

  currencyCode(){
    const { name, symbol } = Object.values(this.countrySelected.currencies)[0];
    const currencyData = {
      code: Object.keys(this.countrySelected.currencies)[0],
      name,
      symbol
    }
    return currencyData

  }
}
