import { DataStorage } from "./DataStorage";
import { ListManager } from "./ListManager";


export class Verifications {

  static checkText(text) {
  }

  static checkID(idNumber?,cardId?) {
    let helper = 0;
      for(let i = 0; i<DataStorage.applicants.length; i++) {
        if(idNumber.value == DataStorage.applicants[i].ApplicantID){
          let confirmDelete = confirm ("Girelen Id'ye (" + idNumber.value+ ") sahip kayıtlı bir kullanıcı var.\n Üzerine yazmak istediğinize emin misiniz? \n Dikkat, Bu işlem geri alınamaz!");
          if (confirmDelete) {
          let b = DataStorage.applicants.filter(function (e) {
            return e.value === idNumber.value;
        });
          DataStorage.applicants.splice(DataStorage.applicants.findIndex(e => e.value === idNumber.value),1);
          return true;
        }else {helper =1; return false;}
      }
    }
    if(helper==0) {return true;}
    else {return false;}
  }

  static validateID(tcNumber) { 
    let myId = tcNumber;
    tcNumber = (tcNumber.value).toString();
    
    // T.C. identity number 11 haneli olmalı
    if (myId.value.length != 11)
     { alert("Kimlik numrasını " + myId.value.length+" hane girdiniz. \n Lütfen kimlik numaranızı 11 hane giriniz"); return false; }
    
    const digits = tcNumber.split('');
    // son 2 hane (10. and 11.) validasyon için tutulur
    const d10 = Number(digits[9]);
    const d11 = Number(digits[10]);

    // ilk 10 hane toplanır/ tek haneler toplanır / çift haneler toplanır
    let sumOf10 = 0;
    let evens = 0;
    let odds = 0;
    
    digits.forEach((digitNumber, index) => {
      digitNumber = Number(digitNumber);
        if (index < 10) sumOf10 += digitNumber;
        if (index < 9) {
            if ((index + 1) % 2 === 0) {
                evens += digitNumber;
            } else {
                odds += digitNumber;
            }
        }
    });
    
    // ilk 10 hane toplamının mod 10 nu 11. haneyi vermelidir.
    if (sumOf10 % 10 != d11) 
    {alert("Girilen kimlik numarası hatalıdır! \n Lütfen tekrar giriniz");
   return false; }
    
    // tek haneler tplamının 7 katından çift haneler çıkarılınca elde edilen değerin mod 10 nu 10. haneyi vermelidir
    if (((odds * 7) - (evens)) % 10 != d10)
    {alert("Girilen kimlik numarası hatalıdır! \n Lütfen tekrar giriniz");
    return false; }
    
    return true;
   }

  static checkDate(inputDate) {
    let today = new Date().toLocaleDateString()
    var todayDate = Date.parse(today);
    var enteredDate = Date.parse(inputDate);
    if (todayDate < enteredDate) {
    alert ("Error!");inputDate
}
  }

  static checkCityOpportunity(city,opportunity) {
        let helper = 0;
    let cityLast = city.value.toUpperCase();
    let opportunityLast = opportunity.value.toUpperCase();
      for(let i = 0; i<DataStorage.cities.length; i++) {
        if(cityLast == DataStorage.cities[i].CityName){
          let confirmDelete = confirm ("Girelen  (" + cityLast + "  ve " + opportunityLast+ ") için mevcut bir kayıt var.\n Üzerine yazmak istediğinize emin misiniz? \n Dikkat, Bu işlem geri alınamaz!");
          if (confirmDelete) {
            DataStorage.cities = DataStorage.cities.filter (cityOpportunity => (cityOpportunity.CityName+cityOpportunity.OpportunityName) != (DataStorage.cities[i].CityName+DataStorage.cities[i].OpportunityName));
          return true;
        }else {helper =1; return false;}
      }
    }
    if(helper==0) {return true;}
    else {return false;}
  }

  static checkCardExistence(myApplicant, mycity, cardList,idNumber) {
                  let controller = 0;
                for(let i = 0; i<cardList.length; i++) {
                  let id =cardList[i].applicant.toString();
                  let myApplicantId = (id.slice(id.length - 11));
                  if(myApplicant.toString() == myApplicantId) {
                    if(mycity == cardList[i].city.toString()) {
                      let confirmDelete = confirm ("Seçilen " + myApplicant+ " kullanıcısı için " + mycity + " şehri  adına daha önce kart oluşturulmuştur.\n Üzerine yazmak istediğinize emin misiniz? \n Dikkat, Bu işlem geri alınamaz!");
                      if (confirmDelete) {
                        var ele_rem1 = cardList.splice(i, 1);
                        return true;
                      } else {controller =1; return false;}
                    }
                  }

                }
                if(controller==0) {return true;}
                else {return false;}

          }

}