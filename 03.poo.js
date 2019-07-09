function Personne(nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.age = 'NON RENSEIGNE';

    this.getNomComplet = function (){
        return this.nom +' '+ this.prenom +' '+ this.pseudo;
    }
    this.getInitiales = function (){

        return this.prenom.charAt(0) + this.nom.charAt(0);
    }
}

var jules = new Personne('Jules', 'LEMAIRE', 'jules77');
var paul = new Personne('Paul', 'LEMAIRE', 'paul44');

console.log(jules.getNomComplet());

function afficherPersonne(personne){
    console.log(personne.getNomComplet());
}

afficherPersonne(paul);

jules.pseudo = 'jules44';
afficherPersonne(jules);

jules.age = 30;
console.log(jules.age);

console.log(jules.getInitiales());


var robert = {
    prenom: 'Robert',
    nom: 'LEPREFET',
    pseudo: 'robert77',
    getNomComplet: function () {
        return this.nom + ' ' + this.prenom +' '+ this.pseudo;
    }
};

console.log(robert.getNomComplet());

function Client(nom, prenom, pseudo, numeroClient) {

    Personne.call(this, nom, prenom, pseudo);
   
    this.numeroClient = numeroClient;

    this.getInfos = function (){
        return this.numeroClient+' '+this.nom+' '+this.prenom;
    }
}

var steve = new Client('Steve', 'LUCAS', 'steve44', 'A01');


afficherPersonne(steve);

console.log(steve.numeroClient)
console.log(steve.getInfos());



