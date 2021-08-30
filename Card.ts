import { Applicant } from './Applicant';
import { City } from "./City";
import { ICard } from "./typeScriptFiles/interface/ICard";

/**
 * Programda tanımlı kartların ID, fiyat, son kullanım tarihi, kullanıcının ve şehir-olanağın tanımlandığı sınıf
 */
export class Card implements ICard {
  private _identity: number;
  private _price: number;
  private _expiryDate: string;
  private city:string ;
  private applicant:string;
  private opportunity: string;

  constructor(identity: number, price:number, expiryDate: string, applicant:string, city:string, opportunity:string){
    this._identity = identity;
    this._price = price;
    this._expiryDate = expiryDate;
    this.applicant = applicant;
    this.city = city;
    this.opportunity = opportunity;

  }
  User: string;
  City: string;
  Opportunity: string;
  CardIdentitty: number;
  CardPrice: number;
  CardExpiryDate: Date;


  get Identity() {
    return this._identity;
  }
  set Identitty(identity) {
    this._identity = identity;
  }

  get Price() {
    return this._price;
  }
  set Price(price) {
    this._price = price;
  }

  get ExpiryDate() {
    return this._expiryDate;
  }
  set ExpiryDate(expiryDate) {
    this._expiryDate = expiryDate;
  }


}