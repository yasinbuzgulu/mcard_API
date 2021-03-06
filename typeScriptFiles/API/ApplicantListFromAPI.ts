import {IApplicant} from "../interface/IApplicant";

export class ApplicantListFromAPI {

    static getApplicantViaXhr() {
        let xhr = new XMLHttpRequest();
        let applicants: Array<IApplicant> = [];
        xhr.open("GET", 'http://localhost:8080/applicants/', true);
        xhr.onload = (event) => {
            var data = JSON.parse(event.target.response);

            if (Number(event.target.status) >= 200 && Number(event.target.status) < 400) {
                data.forEach((applicant) => {
                    applicants.push({
                        ApplicantName: applicant.ApplicantName,
                        ApplicantSurname: (applicant.ApplicantSurname),
                        ApplicantBirthDate: applicant.ApplicantBirthDate,
                        ApplicantID: Number(applicant.ApplicantID),
                        ApplicantTypeBasedOnAge: applicant.ApplicantTypeBasedOnAge,
                        ApplicantTypeBasedOnEducation: applicant.ApplicantTypeBasedOnEducation
                    });
                });

            } else {
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