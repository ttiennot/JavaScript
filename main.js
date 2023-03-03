var nombre =prompt('saisir un chiffre/nbr pour avoir sa factorielle:');
var result = 1;
for(var i = 1; i <=nombre; i++){
    result = result * i;
}

alert("voici la factorielle du nombre saisi :" + result);