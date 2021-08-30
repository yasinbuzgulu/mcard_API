import { ICity } from "../interface/ICity";

export class CityListFromAPI {

    static getCityViaXhr() {
        let xhr = new XMLHttpRequest();
        let cities :Array<ICity> = new Array();
        xhr.open("GET", 'http://localhost:8080/cities/');

        xhr.onload = (event) => {
			var data = JSON.parse(event.target.response);
			if (Number(event.target.status) >= 200 && Number(event.target.status) < 400)
			{
				data.cities.forEach((city) => {
					cities.push({ 
										CityName: city.CityName,
                                        OpportunityName: city.OpportunityName,
                                        PerYearPrice: Number(city.PerYearPrice),
                                        TopLimitYearValue: Number(city.TopLimitYearValue),
                                        CityOpportunityId : Number(city.CityOpportunityId)
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
		  return cities;
    }
}