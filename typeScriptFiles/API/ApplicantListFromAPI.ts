import { IApplicant } from "../interface/IApplicant";

export class ApplicantListFromAPI {

    static getApplicantViaXhr() {
        let xhr = new XMLHttpRequest();
        let applicants :Array<IApplicant> = new Array();
        xhr.open("GET", 'http://localhost:8080/applicants/');

        xhr.onload = (event) => {
			var data = JSON.parse(event.target.response);
			if (Number(event.target.status) >= 200 && Number(event.target.status) < 400)
			{
				data._embedded.cities.forEach((applicant) => {
					applicants.push({ 
  
                        ApplicantName: applicant.applicantName,
                        ApplicantSurname: applicant.applicantSurname,
                        ApplicantBirthDate: applicant.applicantBirthDate,
                        ApplicantID: Number(applicant.applicantID),
                        ApplicantTypeBasedOnAge: (applicant.applicantTypeBasedOnAge),
                        ApplicantTypeBasedOnEducation: (applicant.applicantTypeBasedOnEducation)
      				});
				});
			}
			else {
				console.log('error');
			  }
		};
        xhr.onerror = (err) => {
			console.log('[Error]', err);
		  }
		  // Send XHR request
		  xhr.send();
		  return applicants;
    }
}