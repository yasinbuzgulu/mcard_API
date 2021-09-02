import {City} from '../../City';
import {DataStorage} from '../../DataStorage';
import {ListManager} from './ListManager';
import {Verifications} from '../../Verifications';
import {CityControllerAPI} from '../API/CityControllerAPI';

/**
 * Şehir olanak bilgilerininin alınıp yeni şehir nesnelerinin oluşturulduğu sınıf
 */
export class CityManager {

    static createCityObject() {
        let cityName = <HTMLInputElement>(document.getElementById("cityNameAttach"));
        let opportunityName = <HTMLInputElement>(document.getElementById("opportunityNameAttach"));
        let perYearPrice = <HTMLInputElement>(document.getElementById("perYearPriceAttatch"));
        let topLimitYearValue = <HTMLInputElement>(document.getElementById("topLimitYearValueAttach"));

        let cityOpportunityId;
        console.log("bunu döner " + Verifications.checkCityOpportunity(cityName, opportunityName));
        if (!!Verifications.checkCityOpportunity(cityName, opportunityName)) {
            cityOpportunityId = Verifications.checkCityOpportunity(cityName, opportunityName);
            console.log(cityOpportunityId + "benim eski şehir ıd");

        } else {
            cityOpportunityId = Math.floor(Math.random() * 10000);
            console.log(cityOpportunityId + "benim yeni şehir ıd");

        }

        if (Verifications.findCityOpportunityToEdit(cityOpportunityId) == true) {
            let newCityAndOpportunity = new City(cityName.value.toUpperCase(), opportunityName.value.toUpperCase(), Number(perYearPrice.value),
                Number(topLimitYearValue.value), Number(cityOpportunityId));
            CityControllerAPI.editCityViaAPI(newCityAndOpportunity, cityOpportunityId);
            alert("Şehir-Olanak başarılı bir şekilde düzenlendi.");

        } else {
            //if(Verifications.checkCityOpportunity(cityName,opportunityName)){
            let newCityAndOpportunity = new City(cityName.value.toUpperCase(), opportunityName.value.toUpperCase(), Number(perYearPrice.value),
                Number(topLimitYearValue.value), Number(cityOpportunityId));

            CityControllerAPI.createCityViaAPI(newCityAndOpportunity);
            //DataStorage.cities.push(newCityAndOpportunity);
            ListManager.updateCityOpportunitySelectionList();
            ListManager.updateCitySelectionList();
            alert("Şehir-Olanak başarılı bir şekilde listeye eklendi.");

        }
    }

    // }

    static getCityOpportunityNameWithId(id: Number) {
        let result = "";
        DataStorage.cities.forEach((city => {
            if (city.CityOpportunityId === id)
                result = city.CityName + city.OpportunityName;
        }))
        return result;
    }
}