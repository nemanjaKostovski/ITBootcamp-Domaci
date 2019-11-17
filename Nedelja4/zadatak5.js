let recept =
{
    ime: 'Spagete u belom sosu',
    tezina: 'Srednji',
    sastojci: [
        {
            ime: 'Spagete',
            kolicina: 2,
            cena: 50
        },
        {
            ime: 'pavlaka za kuvanje',
            kolicina: 2,
            cena: 60
        },
        {
            ime: 'beli luk',
            kolicina: 1,
            cena: 40
        },
        {
            ime: 'curece meso',
            kolicina: 2,
            cena: 400
        }
    ],
    cena: function(){
        let suma = 0;
        this.sastojci.forEach(sastojak => {  
            suma += sastojak.kolicina * sastojak.cena;
        });
        return suma;
    }
};

console.log(recept.cena());