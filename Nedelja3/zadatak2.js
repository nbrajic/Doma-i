// Написати функцију која израчунава цену пице по квадратном центиметру (параметри функције су полупречник у цм, и цена пице)

function pizza(poluprecnik, cena) {
    let P = poluprecnik * poluprecnik * Math.PI
    console.log("Cena pice prečnika " + poluprecnik*2 + " cm po cm² je: " + cena / P + " rsd/cm².")
    return (cena/P)
}

pizza(16, 690)