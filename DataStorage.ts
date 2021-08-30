import { ApplicantListFromAPI } from './typeScriptFiles/API/ApplicantListFromAPI';
import { CardListFromAPI } from './typeScriptFiles/API/CardListFromAPI';
import { CityListFromAPI } from './typeScriptFiles/API/CityListFromAPI';
import { IApplicant } from './typeScriptFiles/interface/IApplicant';
import { ICard } from './typeScriptFiles/interface/ICard';
import { ICity } from './typeScriptFiles/interface/ICity';

export class DataStorage {
  /**
   * Programa kayıt olunan tüm verilerin tutulduğu sınıf
   */
static cities:  Array<ICity> = new Array();
static applicants: Array<IApplicant> = new Array();
static cards: Array<ICard> = new Array();

/**
 * Default olarak programa basılan Şehir-olanak bilgileri
 */

static createCityList() {
this.cities = CityListFromAPI.getCityViaXhr();
 /*
  this.cities.push(
      {
        CityName: "ISTANBUL",
        OpportunityName: "OTOPARK",
        PerYearPrice: 225,
        TopLimitYearValue: 1,
        CityOpportunityId: 1
      },
      {
        CityName: "ISTANBUL",
        OpportunityName: "KUTUPHANE",
        PerYearPrice: 400,
        TopLimitYearValue: 3,
        CityOpportunityId :2
      },
      {
        CityName: "ISTANBUL",
        OpportunityName: "TIYATRO",
        PerYearPrice: 400,
        TopLimitYearValue: 3,
        CityOpportunityId:3
      },
      {
        CityName: "ANKARA",
        OpportunityName: "KUTUPHANE",
        PerYearPrice: 300,
        TopLimitYearValue: 4,
        CityOpportunityId:4
      },  {
        CityName: "BURSA",
        OpportunityName: "KUTUPHANE",
        PerYearPrice: 250,
        TopLimitYearValue: 5,
        CityOpportunityId:5
      },  {
        CityName: "ADANA",
        OpportunityName: "KUTUPHANE",
        PerYearPrice: 200,
        TopLimitYearValue: 5,
        CityOpportunityId:6
      },  {
        CityName: "IZMIR",
        OpportunityName: "KUTUPHANE",
        PerYearPrice: 300,
        TopLimitYearValue: 4,
        CityOpportunityId:7
      });
*/
    return this.cities;
    
  }

/**
 * Default olarak programa basılan kullanıcı bilgileri
 */
  static createApplicantlist() {
   this.applicants = ApplicantListFromAPI.getApplicantViaXhr();
   /* this.applicants.push(
      {
        ApplicantName :"YASIN",
        ApplicantSurname: "BUZGULU",
        ApplicantBirthDate: "1997-09-05",
        ApplicantID: 53452312702,
        ApplicantTypeBasedOnAge: "Normal",
        ApplicantTypeBasedOnEducation:  "Öğrenci"
      });
      */
      return this.applicants;
  }

  static createCardList () {
    this.cards = CardListFromAPI.getCardViaXhr();
  }
}



