/**
 * Başvuran kişi sınıfına erişmek için kullanılan interface
 */
export interface IApplicant {
  ApplicantName : string;
  ApplicantSurname : string;
  ApplicantBirthDate : string;
  ApplicantID : number;
  ApplicantTypeBasedOnAge : string;
  ApplicantTypeBasedOnEducation : string;

}