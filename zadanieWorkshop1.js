/*
    Masz tutaj tabele uczniowie która zawiera uczniów zapisanych na kurs bozy.
    Do tego kursu chcieli sie tez zapisac ich blizniacy.
    Uzywajac petli (a nie jak malpa z palca) dodaj ich blizniakow ktorzy nazywaja sie tak samo ale na drugie imie maja Zenon.
    I kazdy ich blizniak jest mlodszy o rok.
    W konsoli po poprawnym rozwiązaniu zadania pokaze ci sie komunikat WYNIK POPRAWNY
*/

/*
    pętla for of 
    for(const nazwaElementu of elementy)
    {

    }
*/

/*
    <tablica>.push(<element>) - dodanie elementu do tablicy
*/

/*
    Object.assing(<a>, <b>) - połączenie obkiektu a z obiektem b
*/

const uczniowie = [
    {wiek: 69, imie: "Jan"},    // 0
    {wiek: 100, imie: "Paweł"}, // 1
    {wiek: 21, imie: "Gaweł"},   // 2
    {wiek: 37, imie: "Karolina"}, // 3
];

function rozwiazanie()
{
    
    // MIEJSCE NA WASZ KOD
    const blizniaki =[];
    
    for (const uczen of uczniowie)
    {
        const blizniak = {...uczen};
        blizniak.wiek--;
        blizniak.imie=blizniak.imie + " Zenon"

        blizniaki.push(blizniak)

    }
for(const blizniak of blizniaki) 
{
    uczniowie.push(blizniak)
}
}

rozwiazanie();
console.log(sprawdzZadanie(uczniowie));

// NIE PATRZ TU OK

function sprawdzZadanie(tablica)
{
    const poprawnyWynik = [
        {wiek: 69, imie: "Jan"},
        {wiek: 68, imie: "Jan Zenon"},
        {wiek: 100, imie: "Paweł"},
        {wiek: 99, imie: "Paweł Zenon"},
        {wiek: 21, imie: "Gaweł"},
        {wiek: 20, imie: "Gaweł Zenon"},
        {wiek: 37, imie: "Karolina"},
        {wiek: 36, imie: "Karolina Zenon"},
    ];

    if(poprawnyWynik.length !== tablica.length)
    {
        return "WYNIK NIEPOPRAWNY";
    }

    for(const w of poprawnyWynik)
    {
        if(!tablica.find((e) => {
            return e.wiek === w.wiek && e.imie === w.imie
        }))
            return "WYNIK NIEPOPRAWNY";
    }

    return "WYNIK POPRAWNY";
}
