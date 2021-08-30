import { Applicant } from "../../Applicant";
import { City } from "../../City";
/**
 * Karta tanımlamak için Kartla ilgili bilgileri ifade eden arayüzümüz
 */
export interface ICard {
  CardIdentitty : number;
  CardPrice : number;
  CardExpiryDate : Date;
  User : string;
  City : string;
  Opportunity : string;
}