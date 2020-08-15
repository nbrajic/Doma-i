class Covek {
    constructor(ime, prezime, godinaRodjenja) {
        this.ime = ime;
        this.prezime = prezime;
        this.godinaRodjenja = godinaRodjenja;
    }
}

class Student extends Covek {
    constructor(ime, prezime, godinaRodjenja, trenutnaGodinaStudija, trenutniProsek){
        super(ime, prezime, godinaRodjenja);
        this.trenutnaGodinaStudija = trenutnaGodinaStudija;
        this.trenutniProsek = trenutniProsek;
    }
}

class StudentOsnovnihStudija extends Student {
    constructor(ime, prezime, godinaRodjenja, trenutnaGodinaStudija, trenutniProsek, smerOsnovnihStudija){
        super(ime, prezime, godinaRodjenja, trenutnaGodinaStudija, trenutniProsek);
        this.smerOsnovnihStudija = smerOsnovnihStudija;
    }
}

class StudentMasterStudija extends Student {
    constructor(ime, prezime, godinaRodjenja, trenutnaGodinaStudija, trenutniProsek, smerMasterStudija){
        super(ime, prezime, godinaRodjenja, trenutnaGodinaStudija, trenutniProsek);
        this.smerMasterStudija = smerMasterStudija;
    }
}

class Zaposleni extends Covek {
    constructor(ime, prezime, godinaRodjenja, godinaZaposlenja, plata){
        super(ime, prezime, godinaRodjenja);
        this.godinaZaposlenja = godinaZaposlenja;
        this.plata = plata;
    }
}

class Nastavnik extends Zaposleni{
    constructor(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta){
        super(ime, prezime, godinaRodjenja, godinaZaposlenja, plata);
        this.omiljeniPredmet = omiljeniPredmet;
        this.listaPredmeta = listaPredmeta;
    }
}

class Profesor extends Nastavnik {
    constructor(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet,     listaPredmeta, titula){
        super(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta);
        this.titula = titula;
    }
}

class Asistent extends Nastavnik {
    constructor(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet,     listaPredmeta, smerDoktorskihStudija){
        super(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta);
        this.smerDoktorskihStudija = smerDoktorskihStudija;
    }
}

class Sluzbenik extends Zaposleni{
    constructor(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, odsek){
        super(ime, prezime, godinaRodjenja, godinaZaposlenja, plata);
        this.odsek = odsek;
    }
}

let sOS1 = new StudentOsnovnihStudija('Pera', 'Peric', 1999, '2-O', 7.53, 'Nastava hemije');
console.log(sOS1);

let sMS1 = new StudentMasterStudija('Nikola', 'Nikolic', 1996, '1-M', 9.05, 'Biohemija');
console.log(sMS1);

let Pr1 = new Profesor('Sanja', 'Popovic', 1959, 1983, 170000, 'Racunarska hemija', ['Racunarska hemija', 'Spektroskopske metode u neorganskoj hemiji', 'Supramolekulske strukture kompleksa prelaznih metala'], 'redovni');
console.log(Pr1);

let As1 = new Asistent('Jovana', 'Ivanovic', 1992, 2016, 50000, 'Neorganska hemija 2', ['Neorganska hemija 2', 'Odabrane oblasti neorganske hemije'], 'Hemija');
console.log(As1);

let Sl1 = new Sluzbenik('Petar', 'Petrovic', 1975, 1990, 40000, 'Studentska sluzba');
console.log(Sl1);