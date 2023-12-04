class User {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location = _location
    }
    confrontaEta(altroUtente) {
        if (this.age > altroUtente.age) {
            console.log(this.firstName +" "+ "e` piu` vecchio di" +" "+ altroUtente.firstName)
        }
        else if (this.age < altroUtente.age) {
            console.log(this.firstName +" "+ "e` piu` giovane di" +" "+ altroUtente.firstName)
        }
        else {
            console.log("Hanno la stessa eta`")
        }
    }
}



const utente1 = new User ("Daniel", "Santini", 25, "Roma")
const utente2 = new User ("Giovanni", "Novelli", 22, "Verona")
const utente3 = new User ("Lorenzo", "Spagoni", 23, "Roma")

utente2.confrontaEta(utente1)