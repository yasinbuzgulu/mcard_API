import { DataStorage } from './DataStorage';
import { TableManager } from './TableManager';
export class ListManager {
/**
 * Yeni Kart kaydında kaydedilen kullanıcıların listelendiği kısım
 */
  static createUserSelectList(myUser) {
    let selectList = document.createElement("select");
    selectList.id = "myUserSelect";
    selectList.innerHTML = `<option value="none" selected disabled hidden required> Lütfen Kullanıcı Seçiniz`;
    myUser.appendChild(selectList);
    for (let i = 0; i < DataStorage.applicants.length; i++) {
      let option = document.createElement("option");
      option.value = DataStorage.applicants[i].ApplicantID.toString();
      option.text = DataStorage.applicants[i].ApplicantName +" "+ DataStorage.applicants[i].ApplicantID;
      selectList.appendChild(option);
    }
  }
  /**
   * Yeni kullanıcı eklendikçe, yeni kart kaydındaki kullanıcı selection listesini güncelleyen kısım
   */
  static updateUserSelectionList() {
    let myUserSelectBox = document.getElementById("userField");
    myUserSelectBox.innerHTML = '';
    ListManager.createUserSelectList(myUserSelectBox);
  }
/**
 * Yeni Kart kaydında şehir selection listesinin hazırlandığı kısım
 */
  static createCityOpportunitySelectList(myCityOpportunity) {
    let selectListCity = document.createElement("select");
    selectListCity.id = "myCityOpportunitySelect";
    selectListCity.innerHTML = `<option value="none" selected disabled hidden required>Lütfen Şehir-Olanak Seçiniz`;
    selectListCity.onchange = function(evt){
    var value = evt.target.value;
    ListManager.createCitySelectList(myCityOpportunity,value);
                };
    myCityOpportunity.appendChild(selectListCity);
    let city: string[] = [];
    for(let i = 0; i < DataStorage.cities.length; i++) {
      city.push(DataStorage.cities[i].CityName);
    }
    city = city.filter((element, i) => i === city.indexOf(element));

    for (let i = 0; i < city.length; i++) {
      let option = document.createElement("option");
      option.value = city[i] ;
      option.text = city[i] ;
      selectListCity.appendChild(option);
    }
  }
/**
 * Yeni Kart kaydında şehir seçimine bağlı olarak olanakların checkbox lara koyulduğu kısım 
 */
    static createCitySelectList(myCitySelectBox,citiesName?) {
    const checkBoxList = document.getElementById("checkBoxList");
    checkBoxList.innerHTML = "";
    const myCityOpportunitySelect : HTMLInputElement  = document.getElementById("myCityOpportunitySelect") as HTMLInputElement;
    var selectedCitiesName = myCityOpportunitySelect.options[myCityOpportunitySelect.selectedIndex].value; 
    const citiesList = DataStorage.cities.filter(item => item.CityName == citiesName);

    for (let i = 0; i < citiesList.length; i++) {

      let selectListCity = document.createElement("input");
      selectListCity.type = "checkbox";
      selectListCity.id = "inputSelectOpportunity" + i.toString();
      selectListCity.name = "selectOpportunity";
      selectListCity.value = citiesList[i].OpportunityName.toString();
      var label = document.createElement('label');
      label.htmlFor = "inputSelectOpportunity" + i.toString();
      label.appendChild(document.createTextNode(citiesList[i].OpportunityName));
      checkBoxList.appendChild(selectListCity);
      checkBoxList.appendChild(label);
    }
  }
/**
 * Şehir Selectiın List için Ekleme, Düzenleme ve silmelere işlemelerine bağlı değişikliklerin güncellendiği kısım
 */
  static updateCityOpportunitySelectionList() {
    let myCityOpportunitySelectBox = document.getElementById("cityOpportunityField");
    myCityOpportunitySelectBox.innerHTML = '';
    ListManager.createCityOpportunitySelectList(myCityOpportunitySelectBox);
  }
  /**
   *  olanak checkboxları için Ekleme, Düzenleme ve silmelere işlemelerine bağlı değişikliklerin güncellendiği kısım
   */
  static updateCitySelectionList() {
    let myCityOpportunitySelectBox = document.getElementById("checkBoxList");
    myCityOpportunitySelectBox.innerHTML = '';
    ListManager.createCitySelectList(myCityOpportunitySelectBox);
  }

/**
 * Kayıtlı kullanıcılar için listeleme ve tablo oluşturan kısım
 */
  static createUserList(userList) {
    let userTable = document.getElementById("userTableId");
    userTable.innerHTML = "";
    let table = document.createElement("table");
    let t1body = document.createElement("tbody");
    table.id = "userTableReferedId";
    table.innerHTML = `<thead>
                              <tr>
                              <th>İsim</th>
                              <th>Soyisim</th>
                              <th>Doğum Tarihi (YYYY-MM-DD)</th>
                              <th>Kimlik Numarası</th>
                              <th>Yaşa Göre Tip</th>
                              <th>Eğitime Göre Tip</th>
                              <th>Sil</th>
                              <th>Düzenle</th>
                              </tr>
				    			    </thead>`;
    userTable.appendChild(table);
    for(let i = 0; i<userList.length; i++) {
      let row = document.createElement("tr");
      let cell = document.createElement("td");
      let cellText = document.createTextNode(userList[i].ApplicantName);
      cell.appendChild(cellText);
      row.appendChild(cell);

      cell = document.createElement("td");
      cellText = document.createTextNode(userList[i].ApplicantSurname);
      cell.appendChild(cellText);
      row.appendChild(cell);

      cell = document.createElement("td");
      cellText = document.createTextNode(userList[i].ApplicantBirthDate);
      cell.appendChild(cellText);
      row.appendChild(cell);

      cell = document.createElement("td");
      cellText = document.createTextNode(userList[i].ApplicantID);
      cell.appendChild(cellText);

      row.appendChild(cell);
      cell = document.createElement("td");
      cellText = document.createTextNode(userList[i].ApplicantTypeBasedOnAge);
      cell.appendChild(cellText);

      row.appendChild(cell);
      cell = document.createElement("td");
      cellText = document.createTextNode(userList[i].ApplicantTypeBasedOnEducation);
      cell.appendChild(cellText);

      row.appendChild(cell);
      let cellButtonDelete = document.createElement("button");
      cell = document.createElement("td");
      cellButtonDelete.innerHTML = "Sil";

      cellButtonDelete.addEventListener("click", function () {
        let confirmDelete = confirm ("Kullanıcıyı silmek istediğinize emin misiniz? \n Dikkat, Bu işlem geri alınamaz!");
        if (confirmDelete) {
        DataStorage.applicants = DataStorage.applicants.filter (applicant => (applicant.ApplicantName+applicant.ApplicantID) != (userList[i].ApplicantName+userList[i].ApplicantID));
        ListManager.refreshUserTable();
        ListManager.updateUserSelectionList();
        }
        return;
      } 
      );

      cell.appendChild(cellButtonDelete);
      row.appendChild(cell);

      cell = document.createElement("td");
      let cellEditButton = document.createElement("button");
     // cellEditButton.setAttribute("href", "mainPage");
      cellEditButton.innerHTML = "Düzenle";
      cellEditButton.addEventListener("click", function() {
        window.location.href = '#applicantPage';
        TableManager.editUserTable(userList, i);
        return;
        
      });
      cell.appendChild(cellEditButton);
      row.appendChild(cell);
       t1body.appendChild(row);

     }
     table.appendChild(t1body);
     userTable.appendChild(table);

  }
  /**
   * Kullanıcı listesinin Ekleme, Düzenleme ve silme işlemelerine bağlı değişiklikler ile güncellendiği kısım
   */
  static refreshUserTable() {
    let element = document.getElementById("userTableReferedId");
    element.innerHTML = "";
    element.parentNode.removeChild(element);
    ListManager.createUserList(DataStorage.applicants);
  }
  /**
   * Kayıtlı şehir olanaklar için listeleme ve tablo oluşturan kısım
   */
  static createCityOpportunityList(cityOpportunityList) {
    let cityOpportunityTable = document.getElementById("cityOpportunityTableId");
    cityOpportunityTable.innerHTML = '';
    let table = document.createElement("table");
    let t1body = document.createElement("tbody");
    table.id = "cityOpportunityTableReferedId";
    table.innerHTML = `<thead>
                              <tr>
                              <th>Şehir İsmi</th>
                              <th>Olanak İsmi</th>
                              <th>1 Yıl için Ücreti</th>
                              <th>Tanımlanabileceği Max. Yıl</th>
                              <th>Sil</th>
                              <th>Düzenle</th>
                              </tr>
				    			    </thead>`;
                      cityOpportunityTable.appendChild(table);
    for(let i = 0; i<cityOpportunityList.length; i++) {
      let row = document.createElement("tr");
      let cell = document.createElement("td");
      let cellText = document.createTextNode(cityOpportunityList[i].CityName);
      cell.appendChild(cellText);
      row.appendChild(cell);

      cell = document.createElement("td");
      cellText = document.createTextNode(cityOpportunityList[i].OpportunityName);
      cell.appendChild(cellText);
      row.appendChild(cell);

      cell = document.createElement("td");
      cellText = document.createTextNode(cityOpportunityList[i].PerYearPrice);
      cell.appendChild(cellText);
      row.appendChild(cell);

      cell = document.createElement("td");
      cellText = document.createTextNode(cityOpportunityList[i].TopLimitYearValue);
      cell.appendChild(cellText);

      row.appendChild(cell);
      let cellButtonDelete = document.createElement("button");
      cell = document.createElement("td");
      cellButtonDelete.innerHTML = "Sil";

      cellButtonDelete.addEventListener("click", function () {
        let confirmDelete = confirm ("Şehir - Olanak bilgisini silmek istediğinize emin misiniz? \n Dikkat, Bu işlem geri alınamaz!");
        if (confirmDelete) {
        DataStorage.cities = DataStorage.cities.filter (cityOpportunity => (cityOpportunity.CityName+cityOpportunity.OpportunityName) != (cityOpportunityList[i].CityName+cityOpportunityList[i].OpportunityName));
        ListManager.refreshCityOpportunityTable();
        ListManager.updateCityOpportunitySelectionList();
        ListManager.updateCitySelectionList();
        }
        return;

      } );

      cell.appendChild(cellButtonDelete);
      row.appendChild(cell);

      cell = document.createElement("td");
      let cellEditButton = document.createElement("button");
      cellEditButton.innerHTML = "Düzenle";
      cellEditButton.addEventListener("click", function() {
        window.location.href = '#cityPage';
        TableManager.editCityTable(cityOpportunityList,i);
        return;
        
      });
      cell.appendChild(cellEditButton);
      row.appendChild(cell);
       t1body.appendChild(row);

     }
     table.appendChild(t1body);
     cityOpportunityTable.appendChild(table);

  }
  /**
   *  Şehir-Olanak listesinin Ekleme, Düzenleme ve silme işlemelerine bağlı değişiklikler ile güncellendiği kısım
   */
  static refreshCityOpportunityTable() {
    let element = document.getElementById("cityOpportunityTableReferedId");
    element.innerHTML = "";
    element.parentNode.removeChild(element);
    ListManager.createCityOpportunityList(DataStorage.cities);
  }
  /**
   *Kayıtlı kartlar için listeleme ve tablo oluşturan kısım
   */
  static createCardList(cardList) {
    let cardTable = document.getElementById("cardTableId");
    cardTable.innerHTML = "";
    let table = document.createElement("table");
    let t1body = document.createElement("tbody");
    table.id = "cardTableReferedId";
    table.innerHTML = `<thead>
                              <tr>
                              <th>Kart ID</th>
                              <th>Kart Son Kullanma Tarihi</th>
                              <th>Kullancı</th>
                              <th>Şehir</th>
                              <th>Olanak</th>
                              <th>Sil</th>
                              <th>Düzenle</th>
                              </trcardListcardListcardList>
				    			    </thead>`;
    cardTable.appendChild(table);
    for(let i = 0; i<cardList.length; i++) {
      let row = document.createElement("tr");
      let cell = document.createElement("td");
      let cellText = document.createTextNode(cardList[i]._identity);
      cell.appendChild(cellText);
      row.appendChild(cell);
    
      cell = document.createElement("td");
      cellText = document.createTextNode(cardList[i]._expiryDate);
      cell.appendChild(cellText);
      row.appendChild(cell);

      cell = document.createElement("td");
      cellText = document.createTextNode(cardList[i].applicant);
      cell.appendChild(cellText);
      row.appendChild(cell);
      cell = document.createElement("td");
      cellText = document.createTextNode(cardList[i].city[0]);
      cell.appendChild(cellText);
      row.appendChild(cell);
            //}

      cell = document.createElement("td");
      cellText = document.createTextNode(cardList[i].opportunity);
      cell.appendChild(cellText);
      row.appendChild(cell);

      row.appendChild(cell);
      let cellButtonDelete = document.createElement("button");
      cell = document.createElement("td");
      cellButtonDelete.innerHTML = "Sil";

      cellButtonDelete.addEventListener("click", function () {
        let confirmDelete = confirm ("Kart bilgisini silmek istediğinize emin misiniz? \n Dikkat, Bu işlem geri alınamaz!");
        if (confirmDelete) {
        DataStorage.cards = DataStorage.cards.filter (card => (card._identity) != (cardList[i]._identity));
        ListManager.refreshCardTable();
        }
        return;

      } );

      cell.appendChild(cellButtonDelete);
      row.appendChild(cell);

      cell = document.createElement("td");
      let cellEditButton = document.createElement("button");
      cellEditButton.innerHTML = "Düzenle";
      cellEditButton.addEventListener("click", function() {
        window.location.href = '#cardPage';
        TableManager.editCardTable(cardList,i);
        return;
        
      });
      cell.appendChild(cellEditButton);
      row.appendChild(cell);
       t1body.appendChild(row);

     }
     table.appendChild(t1body);
     cardTable.appendChild(table);
    }

  static refreshCardTable() {
    let element = document.getElementById("cardTableReferedId");
    element.innerHTML = '';
    element.parentNode.removeChild(element);
    ListManager.createCardList(DataStorage.cards);
  }

  /**
   * Son kullanıcının kaldırıldığı kısım
   */
  static removeLast() {
 // DataStorage.applicants.pop();
  DataStorage.applicants.splice(-1,1)
}
}