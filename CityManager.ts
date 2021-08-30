import { City } from './City';
import { DataStorage } from './DataStorage';
import { ListManager } from './ListManager';
import { Verifications } from './Verifications';
/**
 * Şehir olanak bilgilerininin alınıp yeni şehir nesnelerinin oluşturulduğu sınıf
 */
export class CityManager {

  static createCityObject() {
    let cityName = <HTMLInputElement>(document.getElementById("cityNameAttach"));
    let opportunityName = <HTMLInputElement>(document.getElementById("opportunityNameAttach"));
    let perYearPrice = <HTMLInputElement>(document.getElementById("perYearPriceAttatch"));
    let topLimitYearValue = <HTMLInputElement>(document.getElementById("topLimitYearValueAttach"));
    let CityOpportunityId = Math.floor(Math.random() * 10000);

    if(Verifications.checkCityOpportunity(cityName,opportunityName)){
    let newCityAndOpportunity = new City(cityName.value.toUpperCase(), opportunityName.value.toUpperCase(), Number(perYearPrice.value), 
    Number(topLimitYearValue.value), Number(CityOpportunityId));    
    DataStorage.cities.push(newCityAndOpportunity);
    ListManager.updateCityOpportunitySelectionList();
    ListManager.updateCitySelectionList();
    alert("Şehir-Olanak başarılı bir şekilde listeye eklendi.");

  }
  }
}