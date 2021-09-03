import { ICard } from "../interface/ICard";

export class CardListFromAPI {

    static getCardViaXhr () {
        let xhr = new XMLHttpRequest();
        let cards :Array<ICard> = [];
        xhr.open("GET", 'http://localhost:8080/cards/');

        xhr.onload = (event) => {
			var data = JSON.parse(event.target.response);
			if (Number(event.target.status) >= 200 && Number(event.target.status) < 400)
			{
				data.forEach((card) => {
					cards.push({
						CardIdentity: Number (card.CardIdentitty),
						CardPrice: Number (card.CardPrice),
						CardExpiryDate: (card.CardExpiryDate),
						User: (card.User),
						City : (card.City),
						Opportunity : (card.Opportunity)
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
		  return cards;
    }
}