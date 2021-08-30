import { DataStorage } from "./DataStorage";
import { ListManager } from "./ListManager";
import { IApplicant } from "./typeScriptFiles/interface/IApplicant";


export class TableManager {

 static editUserTable (userList, i) {
                let applicantNameEdit = <HTMLInputElement>(  document.getElementById("applicantNameAttach")  );
                applicantNameEdit.defaultValue = DataStorage.applicants[i].ApplicantName.toString();
                let applicantSurnameEdit = <HTMLInputElement>(  document.getElementById("applicantSurnameAttach")  );
                applicantSurnameEdit.defaultValue = DataStorage.applicants[i].ApplicantSurname.toString(); 
        
                let applicantIdEdit = <HTMLInputElement>(  document.getElementById("applicantIDAttach")  );
                applicantIdEdit.defaultValue = DataStorage.applicants[i].ApplicantID.toString(); 

                document.getElementById('applicantBirthDateAttach').value = DataStorage.applicants[i].ApplicantBirthDate.substring(0, 10);

                if(DataStorage.applicants[i].ApplicantTypeBasedOnAge=="Çocuk") {
                        document.getElementById("citizenTypeSelection").value = '0'
                }
                else if (DataStorage.applicants[i].ApplicantTypeBasedOnAge=="Normal") {
                        document.getElementById("citizenTypeSelection").value = '1';
                }
                else if (DataStorage.applicants[i].ApplicantTypeBasedOnAge=="Yaşlı") {
                        document.getElementById("citizenTypeSelection").value = '2';
                }

                if(DataStorage.applicants[i].ApplicantTypeBasedOnEducation=="Öğrenci") {
                        document.getElementById("applicatTypeSelection").value = '0';
                }
                else if (DataStorage.applicants[i].ApplicantTypeBasedOnEducation=="Sivil") {
                        document.getElementById("applicatTypeSelection").value = '1';
                }
                else  {
                        document.getElementById("applicatTypeSelection").value = '2';
                }
        

                DataStorage.applicants = DataStorage.applicants.filter (applicant => applicant.ApplicantName != userList[i].ApplicantName);
                ListManager.refreshUserTable();
        }

 static editCityTable (cityList, i) {
                let cityNameEdit = <HTMLInputElement>(  document.getElementById("cityNameAttach")  );
                cityNameEdit.defaultValue = DataStorage.cities[i].CityName.toString();
                let opportunityNameEdit = <HTMLInputElement>(  document.getElementById("opportunityNameAttach")  );
                opportunityNameEdit.defaultValue = DataStorage.cities[i].OpportunityName.toString(); 
                let perYearPriceEdit = <HTMLInputElement>(  document.getElementById("perYearPriceAttatch")  );
                perYearPriceEdit.value = DataStorage.cities[i].PerYearPrice.toString(); 
                let topLimitYearValueEdit = <HTMLInputElement>(  document.getElementById("topLimitYearValueAttach")  );
                topLimitYearValueEdit.defaultValue = DataStorage.cities[i].TopLimitYearValue.toString(); 

                DataStorage.cities = DataStorage.cities.filter (cityOpportunity => (cityOpportunity.CityName+cityOpportunity.OpportunityName) != (cityList[i].CityName+cityList[i].OpportunityName));
                ListManager.refreshCityOpportunityTable();
        }

 static editCardTable(cardList, i) {
                let id =cardList[i].applicant.toString();
                let myApplicantId = (id.slice(id.length - 11));
                document.getElementById("myUserSelect").value = myApplicantId;
                document.getElementById("myCityOpportunitySelect").value = cardList[i].city[0];
                let cardPriceValueEdit = <HTMLInputElement>(  document.getElementById("cardPriceAttach")  );
                cardPriceValueEdit.defaultValue = cardList[i]._price.toString(); 
                
                DataStorage.cards = DataStorage.cards.filter (card => (card.CardIdentitty) != (cardList[i].CardIdentitty));
                ListManager.refreshCardTable();

        }

 static resetUserPage() {
                let applicantNameEdit = <HTMLInputElement>(  document.getElementById("applicantNameAttach")  );
                applicantNameEdit.defaultValue = "";
                let applicantSurnameEdit = <HTMLInputElement>(  document.getElementById("applicantSurnameAttach")  );
                applicantSurnameEdit.defaultValue = ""; 
                let applicantSBirthDateEdit = <HTMLInputElement>(  document.getElementById("applicantBirthDateAttach")  );
                applicantSBirthDateEdit.value =""; 
                let applicantIdEdit = <HTMLInputElement>(  document.getElementById("applicantIDAttach")  );
                applicantIdEdit.defaultValue = ""; 
                document.getElementById('userForm').reset() as HTMLFormElement;

        }

 static resetCityPage() {
                let cityNameEdit = <HTMLInputElement>(  document.getElementById("cityNameAttach")  );
                cityNameEdit.defaultValue = "";
                let opportunityNameEdit = <HTMLInputElement>(  document.getElementById("opportunityNameAttach")  );
                opportunityNameEdit.defaultValue = ""; 
                let perYearPriceEdit = <HTMLInputElement>(  document.getElementById("perYearPriceAttatch")  );
                perYearPriceEdit.value = ""; 
                let topLimitYearValueEdit = <HTMLInputElement>(  document.getElementById("topLimitYearValueAttach")  );
                topLimitYearValueEdit.defaultValue = ""; 
                document.getElementById('cityForm').reset() as HTMLFormElement;

         }

 static resetCardPage() {
                let cardPriceEdit = <HTMLInputElement> (document.getElementById("cardPriceAttach"));
                cardPriceEdit.defaultValue = '';
                let userSelectionEdit = <HTMLInputElement> (document.getElementById("myUserSelect"));
                userSelectionEdit.value="0";
                let citySelectionEdit = <HTMLInputElement> (document.getElementById("myCityOpportunitySelect"));
                citySelectionEdit.value="0";
                document.getElementById('cardForm').reset() as HTMLFormElement;

        }

}