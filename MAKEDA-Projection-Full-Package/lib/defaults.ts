export const disclaimer='Cette simulation est fournie à titre indicatif et ne constitue pas une promesse de rendement. Les performances passées ne préjugent pas des performances futures. Les frais, la fiscalité et les conditions propres à chaque produit peuvent modifier les résultats.';
export const products=[
 {id:'horizon',name:'FCP Makeda Horizon',description:'Un OPCVM obligataire pour diversifier votre épargne.',horizon:'2 ans',minimum:10000,source:'https://makeda.capital/fr/solutions/makeda-horizon',conditions:'Frais de souscription : 1 % HT maximum. Frais de rachat : 0,25 % HT.'},
 {id:'etude',name:'Makeda Patrimoine Étude',description:'Préparer le financement des études de vos enfants.',horizon:'5 ans',minimum:10000},
 {id:'projet',name:'Makeda Patrimoine Projet',description:'Constituer une épargne dédiée à votre projet personnel.',horizon:'2 ans',minimum:100000},
 {id:'retraite',name:'Makeda Patrimoine Retraite',description:'Préparer une épargne complémentaire pour votre retraite.',horizon:'5 ans',minimum:10000},
 {id:'transmission',name:'Makeda Patrimoine Transmission',description:'Préparer un patrimoine à transmettre à vos héritiers.',horizon:'5 ans',minimum:100000}
].map(p=>({...p,source:p.source||'https://makeda.capital/fr/solutions/makeda-patrimoine',conditions:p.conditions||'Épargne et double couverture d’assurance. Versements suivants à partir de 10 000 FCFA. Conditions contractuelles à vérifier auprès de Makeda.',risk:'Les placements comportent des risques. Indicateur de risque et modalités de rachat à confirmer dans la documentation réglementaire.'}));
export const defaults={rate:5,duration:30,disclaimer,products};
