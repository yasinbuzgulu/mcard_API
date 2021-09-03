export class CardControllerAPI {


    /**
     *
     * @param Icard nesnesini HTTP POST metodu ile gönderen metod
     */
    static createCardViaAPI(ICard) {
        let xmlRequest = new XMLHttpRequest();
        xmlRequest.open("POST", 'http://localhost:8080/cards/', false);

        xmlRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlRequest.send(JSON.stringify(ICard));
        // window.location.reload();
        if (!Number(event.target.status) >= 200 && Number(event.target.status) < 400)
            console.log('error');
        //DataStorage.createCardList();
    }

    /**
     *    Verilen ICard objesini HTTP PUT metodu ile düzenleyen sınıf,
     */
    static editCardViaAPI(ICard, identity) {
        let xmlRequest = new XMLHttpRequest();
        xmlRequest.open("PUT", 'http://localhost:8080/cards/' + identity);
        xmlRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlRequest.send(JSON.stringify(ICard));
        //window.location.reload();
        if (!Number(event.target.status) >= 200 && Number(event.target.status) < 400)
            console.log('error');
        // DataStorage.createCardList();
    }

    /**
     * Verilen identity ile uygun ICard nesnesini silmek için HTTP DELETE metodunu çalıştırır.
     */
    static deleteCardViaAPI(identity) {
        let xhr = new XMLHttpRequest();
        xhr.open("DELETE", 'http://localhost:8080/cards/' + identity);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send();
        //	window.location.reload();
        if (!Number(event.target.status) >= 200 && Number(event.target.status) < 400)
            console.log('error');
        //DataStorage.createCardList();
    }
}