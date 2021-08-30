import { Applicant } from './Applicant';
import { Card } from './Card';
import { DataStorage } from './DataStorage';
import { Verifications } from './Verifications';
/**
 * Kart bilgilerinin derlenip yeni kart nesnelerinin oluşturulduğu sınıf
 */
export class CardManager {

  static createCardObject() {
    let cardIdendity = Math.floor(Math.random() * 100000000);
    let cardPrice = <HTMLInputElement> document.getElementById("cardPriceAttach");

    let todayDate = new Date();
    let year = todayDate.getFullYear();
    let month = todayDate.getMonth();
    let day = todayDate.getDate();
    let addedExpiryDateYear = 4;
    let expiryDateValue = new Date(year + addedExpiryDateYear, month, day);
    let expiryDate = (expiryDateValue.toDateString());
    
    const userSelector :HTMLElement = document.getElementById("myUserSelect");
    let selectedUserID = userSelector.options[userSelector.selectedIndex].value;
    const resultUser = DataStorage.applicants.filter(item => item.ApplicantID == selectedUserID);


    const citySelector :HTMLElement = document.getElementById("myCityOpportunitySelect");
    let selectedCityName = citySelector.options[citySelector.selectedIndex].value;
    let resultCity = DataStorage.cities.filter(item => item.CityName == selectedCityName);
   
    let checkedUser : any = [];
    for(let i =0; i<resultUser.length; i++){
      checkedUser.push(resultUser[i].ApplicantName.toUpperCase() +" " + resultUser[i].ApplicantSurname.toUpperCase() + " " + resultUser[i].ApplicantID);
      var myApplicant = resultUser[i].ApplicantID;
      var typeCitizen = resultUser[i].ApplicantTypeBasedOnAge;
      var typeApplicant = resultUser[i].ApplicantTypeBasedOnEducation;
    }

    let checkedCity : any = [];
    for(let i =0; i<resultCity.length; i++){
      checkedCity.push(resultCity[i].CityName.toUpperCase());
    }

    const opportunitySelector : HTMLElement = document.getElementById("checkBoxList");
    let element = <HTMLInputElement> document.getElementById("checkBoxList");  
    if (element.checked) {  }

    var inputElems = document.getElementsByTagName("input");
    let checkedOpportunity: any =[]; 
    for (var i=0; i<inputElems.length; i++) {       
       if (inputElems[i].type == "checkbox" && inputElems[i].checked == true){

         checkedOpportunity.push( inputElems[i].value );
        }
    }
    let result  = 0 ;
    for(let i = 0; i<DataStorage.cities.length; i++){
      if(checkedCity[0]==DataStorage.cities[i].CityName) {
        for(let j = 0; j<checkedOpportunity.length; j++){
          if(checkedOpportunity[j]==DataStorage.cities[i].OpportunityName) {
              result = result + DataStorage.cities[i].PerYearPrice * DataStorage.cities[i].TopLimitYearValue ;
          }
        }
      }
    }
    if(typeCitizen == "Çocuk" || typeCitizen == "Yaşlı") {
      var finalPrice = 0;
    } else {
      if(typeApplicant == "Öğrenci") {
        finalPrice = (result+Number(cardPrice.value))  - ((result+Number(cardPrice.value))/5);
      }
    }
    if (Verifications.checkCardExistence(myApplicant,checkedCity,DataStorage.cards,cardIdendity)) {
        let newCard = new Card (Number(cardIdendity), Number(cardPrice.value), expiryDate, checkedUser,checkedCity , checkedOpportunity ); 
        DataStorage.cards.push(newCard);
        alert("Normal ücret ; \n" +" Kart Ücreti :" + Number(cardPrice.value) +"  Toplam Olanak Fiyatı :"  + result +"\n Ödenecek tutar : " + finalPrice );
     }
  }
}
