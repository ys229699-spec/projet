function lireNombre(id) {
  const valeur = document.querySelector(id).value;
  if (valeur.trim() === "") {
    return NaN;                          
  }
  return Number(valeur);
}

function afficherResultat(id, texte, type) {
  const zone = document.querySelector(id);
  zone.textContent = texte;
  zone.className = `alert alert-${type} mt-3 mb-0`;
}
document.querySelector("#btn-Estimer").addEventListener("click", function () {
  const a = lireNombre("#valeur");
  const b = lireNombre("#annèes");
  const c= lireNombre("#seuil");
  if (!Number.isInteger(a) || !Number.isInteger(b) ||!Number.isInteger(c) || a <= 0 || b <= 0 || c <= 0 ) {
    afficherResultat("#res-denombrement", "erreur!!!!", "danger");
    return;
  }
  afficherResultat("#res-denombrement", `valeurApres = ${valeurApres(a, b)}  •  anneesAvantSeuil = ${anneesAvantSeuil(a, c)}`, "success");
)
  document.querySelector("#btn-calculer").addEventListener("click", function () {   
  const a = lireNombre("#vid");
  const b = lireNombre("#pneu");
  if (!Number.isInteger(a) || !Number.isInteger(b) || a <= 0 || b <= 0 ) {
    afficherResultat("#res-calculer", "erreur!!!!", "danger");
    return;
  }
  afficherResultat("#res-calculer", `entretienCommun = ${entretienCommun(a, b)}`, "success");
  )
document.querySelector("#btn-Générer").addEventListener("click", function () {   
  const a = lireNombre("#plaque");
  const b = lireNombre("#num");
  if (!Number.isInteger(a) || !Number.isInteger(b) || a <= 0 || b <= 0 ) {
    afficherResultat("#res-Générer", "erreur!!!!", "danger");
    return;
  }
  afficherResultat("#res-Générer", `formaterPlaque = ${formaterPlaque(a)} •  codeAntivol = ${codeAntivol(b)}`, "success");
)