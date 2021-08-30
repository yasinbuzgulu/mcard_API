import { DataStorage } from "../../DataStorage";

export class CityControllerAPI {
    
/**
 * 
 * @param ICity nesnesini HTTP POST metodu ile gönderen metod
 */
    static createCityViaAPI (ICity) {
        let xmlRequest = new XMLHttpRequest();
        xmlRequest.open("POST", 'http://localhost:1234/cities/', false);
        
		xmlRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		xmlRequest.send(ICity);
		window.location.reload();
		if (!Number(event.target.status) >= 200 && Number(event.target.status) < 400)
			console.log('error');
		DataStorage.createCityList();
    }

    /**
	*	Verilen ICity objesini HTTP PUT metodu ile düzenleyen sınıf, 
	*/
	static editApplicantViaAPI(ICity, CityOpportunityId)
	{
		let xmlRequest = new XMLHttpRequest();
		xmlRequest.open("PUT", 'http://localhost:1234/cities/'+CityOpportunityId);
		xmlRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		xmlRequest.send(ICity);
		window.location.reload();
		if (!Number(event.target.status) >= 200 && Number(event.target.status) < 400)
			console.log('error');
		DataStorage.createCityList();
	}

	/**
	* Verilen CityOpportunityId ile uygun ICity nesnesini silmek için HTTP DELETE metodunu çalıştırır.
	*/
	static deleteCityViaAPI(CityOpportunityId)
	{
		let xhr = new XMLHttpRequest();
		xhr.open("DELETE", 'http://localhost:1234/cities/'+CityOpportunityId);
		xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		xhr.send();
		window.location.reload();
		if (!Number(event.target.status) >= 200 && Number(event.target.status) < 400)
			console.log('error');
		DataStorage.createCityList();
	}
}