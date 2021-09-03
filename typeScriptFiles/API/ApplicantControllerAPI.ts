import { DataStorage } from "../../DataStorage";
import { IApplicant } from "../interface/IApplicant";
import {Applicant} from "../../Applicant";


export class ApplicantControllerAPI {
/**
 *
 * @param IApplicant 	*	Verilen parametre objesini HTTP POST metodu ile gönderen metod
 */
    static createApplicantViaAPI (IApplicant) {
        let xmlRequest = new XMLHttpRequest();
        xmlRequest.open("POST", 'http://localhost:8080/applicants/', false);
		xmlRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		xmlRequest.send(JSON.stringify(IApplicant));
		//window.location.reload();
		if (!Number(event.target.status) >= 200 && Number(event.target.status) < 400)
			console.log('error');
		//DataStorage.createApplicantlist();
    }

    /**
	*	Verilen IApplicant objesini HTTP PUT metodu ile düzenleyen sınıf,
	*/
	static editApplicantViaAPI(myApplicant, applicantID)
	{
		var url = 'http://localhost:8080/applicants/'+applicantID;

		var data = {ApplicantName: myApplicant.ApplicantName,
						ApplicantSurname: myApplicant.ApplicantSurname,
						ApplicantBirthDate : myApplicant.ApplicantBirthDate,
						ApplicantTypeBasedOnAge :myApplicant.ApplicantTypeBasedOnAge,
						ApplicantTypeBasedOnEducation : myApplicant.ApplicantTypeBasedOnEducation}
		var json = JSON.stringify(data);

		var xhr = new XMLHttpRequest();
		xhr.open("PUT", url, true);
		xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
		xhr.onload = function () {
			var applicants = JSON.parse(xhr.responseText);
			if (xhr.readyState == 4 && xhr.status == 200) {
				console.table(applicants);
			} else {
				console.error(applicants);
			}
		}
		xhr.send(json);
	}

	/**
	* Verilen applicantID ile uygun IApplicant nesnesini silmek için HTTP DELETE metodunu çalıştırır.
	*/
	static deleteApplicantViaAPI(applicantID)
	{

		let xhr = new XMLHttpRequest();
		xhr.open("DELETE", 'http://localhost:8080/applicants/'+(applicantID));
		xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		xhr.send();
		//window.location.reload();
		if (!Number(event.target.status) >= 200 && Number(event.target.status) < 400)
			console.log('error');
		//DataStorage.createApplicantlist();
	}



}