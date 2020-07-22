/*Сачувати у променљиве цену и пречник пице
Израчунати која је цена пице по цм² (пазити на то да се површина рачуна са полупречником)
Исписати тај резултат у конзолу*/

{
    let precnik = 32;
    let cena;
    let r = precnik / 2;
    let P;
    P = r * r * Math.PI;
    switch (precnik) 
    {
        case 28:
        cena = 580; 
        console.log ("Cena pice po cm² je: " + cena / P + " rsd/cm².");
        break;
        case 32:  
        cena = 690;
        console.log ("Cena pice po cm² je: " + cena / P + " rsd/cm².");
        break;
        case 42:
        cena = 950; 
        console.log ("Cena pice po cm² je: " + cena / P + " rsd/cm².");
        break;
        case 50:
        cena = 1190; 
        console.log ("Cena pice po cm² je: " + cena / P + " rsd/cm².");
        break;
        default:
        console.log ("U ponudi ne postoji pica sa zadatim prečnikom. Izaberite neku od standardnih vrednosti - 28 cm, 32 cm, 42 cm ili 50 cm.") 
    }  
}