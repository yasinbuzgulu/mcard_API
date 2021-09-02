import {Applicant} from "../../Applicant";
import {DataStorage} from "../../DataStorage";
import {ListManager} from "./ListManager";
import {ApplicantControllerAPI} from "../API/ApplicantControllerAPI";
import {Verifications} from "../../Verifications";

/**
 *  * Program başvuran kişinin bilgilerinin oluşturulduğu ve verisaklamaya gönderildiği cardList sınıf
 */
export class ApplicantManager {

    static createApplicantObject() {
        let applicantName = <HTMLInputElement>document.getElementById("applicantNameAttach");
        let applicantSurname = <HTMLInputElement>document.getElementById("applicantSurnameAttach");
        let applicantBirthDate = <HTMLInputElement>document.getElementById("applicantBirthDateAttach");
        Verifications.checkDate(applicantBirthDate);
        let applicantID = <HTMLInputElement>document.getElementById("applicantIDAttach");

        const selectedTypeOfApplicantBasedOnAgeInput = <HTMLInputElement>(document.getElementById("citizenTypeSelection"));
        let typeOfApplicantBasedOnAge;
        switch (Number(selectedTypeOfApplicantBasedOnAgeInput.value)) {
            case 0 : {
                typeOfApplicantBasedOnAge = "Çocuk";
                break;
            }
            case 2 : {
                typeOfApplicantBasedOnAge = "Yaşlı";
                break;
            }
            case 1 : {
                typeOfApplicantBasedOnAge = "Normal";
                break;
            }
        }

        const selectedTypeOfApplicantBasedOnEducationInput = <HTMLInputElement>(document.getElementById("applicatTypeSelection"));
        let typeOfApplicantBasedOnEducation;
        switch (selectedTypeOfApplicantBasedOnEducationInput.value) {
            case "0": {
                typeOfApplicantBasedOnEducation = "Öğrenci";
                break;
            }
            case "1": {
                typeOfApplicantBasedOnEducation = "Sivil";
                break;
            }
            case "2": {
                typeOfApplicantBasedOnEducation = "--";
            }
        }
        if (Verifications.findApplicantToEdit(Number(applicantID.value)) == true) {
            let newApplicant = new Applicant(applicantName.value.toUpperCase(), applicantSurname.value.toUpperCase(),
                applicantBirthDate.value, Number(applicantID.value), typeOfApplicantBasedOnAge, typeOfApplicantBasedOnEducation);
            ApplicantControllerAPI.editApplicantViaAPI(newApplicant, applicantID.value);
        } else {
            //  if(Verifications.checkID(applicantID)){
            if (Verifications.validateID(applicantID)) {
                let newApplicant = new Applicant(applicantName.value.toUpperCase(), applicantSurname.value.toUpperCase(),
                    applicantBirthDate.value, Number(applicantID.value), typeOfApplicantBasedOnAge, typeOfApplicantBasedOnEducation);
                ApplicantControllerAPI.createApplicantViaAPI(newApplicant);

                // DataStorage.applicants.push(newApplicant);
                ListManager.updateUserSelectionList();
                alert("Kullanıcı başarılı bir şekilde listeye eklendi.");
            }
            //}
        }

    }

    static getApplicantNameWithId(id: Number) {
        let result = "";
        DataStorage.applicants.forEach((applicant => {
            if (applicant.ApplicantID === id)
                result = applicant.ApplicantName;
        }))
        return result;
    }

}
