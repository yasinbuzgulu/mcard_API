import { City } from "./City";
import { IApplicant } from "./typeScriptFiles/interface/IApplicant";

/**
 * Program başvuran kişinin bilgilerinin saklandığı sınıf
 */

export class Applicant implements IApplicant {
  private _applicantName: string;
  private _applicantSurname: string;
  private _applicantBirthDate: string;
  private _applicantID: number;
  private _typeOfApplicantBasedOnAge: string;
  private _typeOfApplicantBasedOnEducation: string;

  constructor(applicantName: string, applicantSurname: string, applicantBirthDate: string, applicantID: number,
     typeOfApplicantBasedOnAge: string, typeOfApplicantBasedOnEducation: string) {
        this._applicantName = applicantName;
        this._applicantSurname = applicantSurname;
        this._applicantBirthDate = applicantBirthDate;
        this._applicantID = applicantID;
        this._typeOfApplicantBasedOnAge = typeOfApplicantBasedOnAge;
        this._typeOfApplicantBasedOnEducation = typeOfApplicantBasedOnEducation;
  }

    get ApplicantName() {
      return this._applicantName;
    }
    set ApplicantName(applicantName : string){
      this._applicantName = applicantName;
    }

    get ApplicantSurname() {
      return this._applicantSurname;
    }
    set ApplicantSurname(applicantSurname : string){
      this._applicantSurname = applicantSurname;
    }
  
    get ApplicantBirthDate() {
      return this._applicantBirthDate;
    }
    set ApplicantBirthDate(applicantBirthDate : string){
      this._applicantBirthDate = applicantBirthDate;
    }

    get ApplicantID() {
      return this._applicantID;
    }
    set ApplicantID(applicantID : number){
      this._applicantID = applicantID;
    }

    get ApplicantTypeBasedOnAge() {
      return this._typeOfApplicantBasedOnAge;
    }
    set ApplicantTypeBasedOnAge(applicantTypeBasedOnAge : string){
      this._typeOfApplicantBasedOnAge = applicantTypeBasedOnAge;
    }

    get ApplicantTypeBasedOnEducation() {
      return this._typeOfApplicantBasedOnEducation;
    }
    set ApplicantTypeBasedOnEducation(applicantTypeBasedOnEducation : string){
      this._typeOfApplicantBasedOnEducation = applicantTypeBasedOnEducation;
    }  
}

