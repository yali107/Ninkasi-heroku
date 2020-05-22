import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ModelsService {
  // apiPath = 'http://localhost:8866/'; // dev
  apiPath = 'https://ninkasi-rest-api.herokuapp.com/'; // prod

  beerlistUri: string = this.apiPath + 'api/beerlist';
  cbBeerRecUri: string = this.apiPath + 'api/cbbeerrec';
  cbBeerKeywordsUri: string = this.apiPath + 'api/cbbeerkws';
  cfBeerRecUri: string = this.apiPath + 'api/cfbeerrec';

  constructor(
    private http: HttpClient
  ) { }

  getBeerList() {
    return this.http.get(this.beerlistUri);
  }

  getContentBasedBeers(inputBeer: string) {
    const payload = { 'beer_selected': inputBeer};
    return this.http.post(this.cbBeerRecUri, payload);
  }

  getBeerKeywords(inputBeer: string) {
    const payload = { 'beer_selected': inputBeer};
    return this.http.post(this.cbBeerKeywordsUri, payload);
  }

  getCollabFilterBeers(inputBeerPrefs) {
    const payload = {
      'user_selection': inputBeerPrefs['userSelections']
    };
    return this.http.post(this.cfBeerRecUri, payload);
  }
}
