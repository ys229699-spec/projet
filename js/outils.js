function pgcd(a, b) {
while (b !== 0) {
const reste = a % b;
a = b;
b = reste;
}
return a;
}
function ppcm(a, b) {
return (a * b) / pgcd(a, b);
}
function inverserTexte(texte) {
let resultat = "";
for (const lettre of texte) {
resultat = lettre + resultat; 
}
return resultat;
}
function valeurApres(valeur, annees) {
    s=0
    if (annees==0) {
        return valeur
    }
    else{
        for(i=1;i<annees;i++){
              s=s+Math.round(valeur -((valeur * 15)/100))
        }
        return s
    }
    
}
function anneesAvantSeuil(valeur, seuil) {
    nb=0
    if (seuil>valeur) {
        return 0
    }
    else{
        while (seuil<valeur) {
            nb=nb+1
            Math.round(seuil +((seuil * 15)/100))
        }
        return nb
    }
}
function entretienCommun(vidange, pneus) {
    return ppcm(vidange,pneus)
}
function formaterPlaque(plaque) {
    resultat=""
    ch="1234569870"
    for(i=0;i<plaque.length();i++){
        if (plaque[i] in ch) {
            resultat=resultat+plaque[i]
        }
        else{
            resultat=resultat+" "+plaque[i]
        }
    }
    return resultat
}
function codeAntivol(serie) {
    ch=inverserTexte(serie)
    res=""
    for(i of ch){
        res=res+(String((Number(i)+7)%10))
    }
    return res
}