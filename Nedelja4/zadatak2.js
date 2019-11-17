let recepti = [
    {
        ime: 'Spagete u belom sosu',
        tezina: 'Srednji',
        sastojci: ['Spagete', 'pavlaka za kuvanje', 'beli luk', 'curece meso', 'maslac', 'jaja', 'biber', 'so']
    },

    {
        ime: 'Spagete u crnom sosu',
        tezina: 'Laki',
        sastojci: ['Spagete', 'pavlaka za kuvanje', 'crni luk', 'curece meso', 'maslac', 'jaja', 'biber', 'so']
    },

    {
        ime: 'Popara',
        tezina: 'Majstor',
        sastojci: ['Hleb', 'Mleko']
    },
    
    {
        ime: 'Musaka',
        tezina: 'Pocetni',
        sastojci: ['Beli krompir', 'mleveno svinjsko meso', 'glavica crnog luka', 'so', 'biber', 'jaja', 'pavlaka', 'mleko']
    }
    
]

function easyCooking (){
recepti.forEach(recept => {
    ['Pocetni', 'Laki'].includes(recept.tezina) &&
        console.log(`${recept.ime}:\n Tezina: ${recept.tezina}\n Sastojci: ${recept.sastojci.toString()}`);
});
}
easyCooking();``