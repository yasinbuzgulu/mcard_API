import { ICard } from "../interface/ICard";

export class CardListFromAPI {

    static getCardViaXhr () {
        let xhr = new XMLHttpRequest();
        let cards :Array<ICard> = new Array();
        xhr.open("GET", 'http://localhost:8080/cards/');

        xhr.onload = (event) => {
			var data = JSON.parse(event.target.response);
			if (Number(event.target.status) >= 200 && Number(event.target.status) < 400)
			{
				data.cards.forEach((card) => {
					cards.push({ 
 

                        CardIdentitty: Number (card.identity),
                        CardPrice: Number (card.price),
                        CardExpiryDate: card.expiryDate,
                        User: (card.applicant),
                        City: (card.city),
                        Opportunity: (card.opportunity)
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