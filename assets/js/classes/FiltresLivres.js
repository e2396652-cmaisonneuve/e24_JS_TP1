import GestionnaireLivres from "./GestionnaireLivres.js";
class FiltresLivres {
    nouveaute;
    categorie;

    constructor(gestionnaireLivres) {
        this.gestionnaireLivres = gestionnaireLivres;
        this.conteneurHTML = document.querySelector(".filters-container");

        this.elementHTML;
        this.filtreCategorieHTML;

        this.injecterHTML();
    }

    injecterHTML() {
        const gabarit = `
           <div class="filtres">
                <button type="button" class="filter-control" data-filter="Tout" aria-selected="true">Tout</button>
                <button type="button" class="filter-control" data-filter="Nouveautés"
                    aria-selected="false">Nouveautés</button>
                <button type="button" class="filter-control" data-filter="Littérature"
                    aria-selected="false">Littérature</button>
                <button type="button" class="filter-control" data-filter="Art de
                    vivre" aria-selected="false">Art de
                    vivre</button>
                <button type="button" class="filter-control" data-filter="BD, Jeunesse,
                    Humour" aria-selected="false">BD, Jeunesse,
                    Humour</button>
                <button type="button" class="filter-control" data-filter="Culture et
                    société" aria-selected="false">Culture et
                    société</button>
                <button type="button" class="filter-control" data-filter="Loisirs,
                    Tourisme, Nature" aria-selected="false">Loisirs,
                    Tourisme, Nature</button>
                <button type="button" class="filter-control" data-filter="Savoir et
                    science" aria-selected="false">Savoir et
                    science</button>
            </div>
        `;

        this.conteneurHTML.insertAdjacentHTML("beforeend", gabarit);
        this.elementHTML = this.conteneurHTML.lastElementChild;

        this.filtreCategorieHTML = this.elementHTML.querySelector("#data-filter");
        this.elementHTML.addEventListener("click", this.filtrer.bind(this));
    }
    /**
     * Fonction qui filtre les livres selon la catégorie
     * @param {String} filtre Le filtre à appliquer
     */
    filtrer(evenement) {
        
        const elementClique = evenement.target;

        if(elementClique.closest("button")){

            this.conteneurHTML.querySelectorAll("button").forEach(function(bouton){
                bouton.setAttribute("aria-selected","false");
            })
            elementClique.setAttribute("aria-selected","true");

            const filtre = elementClique.dataset.filter

            this.gestionnaireLivres.listeLivresInstanciees.forEach(function (livre) {
                // Ajoute classe invisible aux livres qui ne correspondent pas au filtre
                // Si le filtre est 'TOUT', retire la classe invisible pour toutes livres
                const livreHTML = livre.elementHTML;
                livreHTML.classList.toggle("invisible", filtre == "Tout" ? false : livre.categorie != filtre);
                livreHTML.classList.toggle("nouveaute", filtre == "nouveaute" ? true : livre.nouveaute != filtre);

                /* FIXME: ////////////////////////////////////////////////////////////////////////////////////////////////
                Maxime, je n'ai pas réussi à mettre en marche les filtres, c'est pourquoi j'ai laissé ce FIXME ici après avoir nettoyé le code. Pourriez-vous me donner une explication sur la meilleure manière de faire ce filtre? Merci.
                //TODO: faire fonctionner les filtres, ouvrir avec les nouveautes 
                //TODO: EXTRA: Comment obtenir une balise/étiquette "NOUVEAUTE" en haut de la image pour les livres avec nouveaute = true?
                *////////////////////////////////////////////////////////////////////////////////////////////////////////

                
            });
        }
      
    }
    
}
export default FiltresLivres;