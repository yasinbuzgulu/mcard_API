import { ICity } from "../interface/ICity";

export class CityListFromAPI {

    static getCityViaXhr() {
        let xhr = new XMLHttpRequest();
        let cities :Array<ICity> = new Array();
        xhr.open("GET", 'http://localhost:1234/cities/');

        xhr.onload = (event) => {
			var data = JSON.parse(event.target.response);
			if (Number(event.target.status) >= 200 && Number(event.target.status) < 400)
			{
				data._embedded.cities.forEach((city) => {
					cities.push({ 
										CityName: city.cityName,
                                        OpportunityName: city.opportunityName,
                                        PerYearPrice: Number(city.perYearPrice),
                                        TopLimitYearValue: Number(city.topLimitYearValue),
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