import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CountryInfo } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }


  getUsers(): Promise<Array<any>> {
    return this.http.get<Array<any>>(
      `${environment.host}users`
    ).toPromise();
  }

  getUser(id: number): Promise<any> {
    return this.http.get<any>(
      `${environment.host}users/${id}`
    ).toPromise();
  }

  editUser(dataUser: any): Promise<any> {
    return this.http.put<any>(
      `${environment.host}users/${dataUser.id}`,
      dataUser
    ).toPromise();
  }

  getDataCountries(): Promise<CountryInfo[]> {
    return this.http.get<CountryInfo[]>('https://restcountries.com/v3.1/all?fields=name').toPromise();
  }

  getInfoCountry(name: string): Promise<CountryInfo[]> {
    return this.http.get<CountryInfo[]>(`https://restcountries.com/v3.1/name/${name}?fields=currencies,idd,cca2`).toPromise();
  }
}
