import { DataStorage } from "../../DataStorage";
import { IApplicant } from "../interface/IApplicant";


export class ApplicantControllerAPI {
/**
 * 
 * @param IApplicant 	*	Verilen parametre objesini HTTP POST metodu ile gönderen metod
 */
    static createApplicantViaAPI (IApplicant) {
        let xmlRequest = new XMLHttpRequest();
        xmlRequest.open("POST", 'http://localhost:8080/applicants/', false);
        
		xmlRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		xmlRequest.send(IApplicant);
		window.location.reload();
		if (!Number(event.target.status) >= 200 && Number(event.target.status) < 400)
			console.log('error');
		DataStorage.createApplicantlist();
    }

    /**
	*	Verilen IApplicant objesini HTTP PUT metodu ile düzenleyen sınıf, 
	*/
	static editApplicantViaAPI(IApplicant, applicantID)
	{
		let xmlRequest = new XMLHttpRequest();
		xmlRequest.open("PUT", 'http://localhost:8080/applicants/'+applicantID);
		xmlRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		xmlRequest.send(IApplicant);
		window.location.reload();
		if (!Number(event.target.status) >= 200 && Number(event.target.status) < 400)
			console.log('error');
		DataStorage.createApplicantlist();
	}

	/**
	* Verilen applicantID ile uygun IApplicant nesnesini silmek için HTTP DELETE metodunu çalıştırır.
	*/
	static deleteApplicantViaAPI(applicantID)
	{
		let xhr = new XMLHttpRequest();
		xhr.open("DELETE", 'http://localhost:8080/applicants/'+applicantID);
		xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		xhr.send();
		window.location.reload();
		if (!Number(event.target.status) >= 200 && Number(event.target.status) < 400)
			console.log('error');
		DataStorage.createApplicantlist();
	}
	


}