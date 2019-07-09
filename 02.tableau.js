var villes = [ 'nantes', 'paris', 'saint-nazaire', 'angers', 'le mans' ]

villes.forEach(function (element){
    console.log(element);
});


console.log('lettreADansToutesLesVilles', ' = ', villes.every(function (valeur) {
    return valeur.includes('a');
}));

console.log('auMoinsUneVilleAvecUnTiret', ' = ', villes.some(function (valeur) {
    return valeur.includes('-');
}));

var villeSansTiretSansEspace = villes.filter(function (valeur) {
    if (!(valeur.includes('-')) && !(valeur.includes(' '))){
    return valeur;
    }
});

console.log('villeSansTiretSansEspace', ' = ', villeSansTiretSansEspace);

var villesMajusculeSeTerminantParS = villes 
    .filter(function (valeur){
        if (valeur.substr(-1) == 's'){
            return valeur;
        }})
    .map(function (val){
        return val.toUpperCase()
    });

console.log('villesMajusculeSeTerminantParS', ' = ', villesMajusculeSeTerminantParS);
