class Modale {
    gestionnaire;
    message;
    conteneurHTML;
    elementHTML;

    constructor(gestionnaire, message, conteneurHTML) {
        this.gestionnaire = gestionnaire;
        this.message = message;
        this.conteneurHTML = conteneurHTML;
        this.elementHTML;

        this.injecterHTML();
    }

    /**
     * Fonction pour injecter le HTML de la modale dans le DOM
     */
    injecterHTML() {
        let gabarit = `<div class="modale__conteneur invisible">
            <div class="modale__carte">
                <div class="modale__image">
                    <img class="image" src="image"/>
                </div>
                <div class="modale__contenu">                
                    <p>Titre: <span class="titre bold"></span></p>
                    <p>Auteur: <span class="auteur bold"></span></p>
                    <p>Editeur: <span class="editeur bold"></span></p>
                    <p class="description"></p>
                    <p><span class="pages"></span> pages</p> 
                    <h2>Prix: $<span class="prix"></span></h2>
                    <p class="nouveaute"></p>
                    <p class="categorie"></p>
                </div>
        </div>`;
        this.conteneurHTML.insertAdjacentHTML("afterbegin", gabarit);
        this.elementHTML = this.conteneurHTML.firstElementChild;
        this.elementHTML.addEventListener("click", this.fermer.bind(this));
    }
    
    /**
     * Fonction pour changer le message affiché dans la modale
     * @param {String} nouveauMessage le nouveau message à afficher dans la modale
     */
    changerMessage(image, titre, auteur, editeur, pages, description, prix, nouveaute, categorie) {
        this.elementHTML.querySelector(".image").src = image;
        this.elementHTML.querySelector(".titre").textContent = titre;
        this.elementHTML.querySelector(".auteur").textContent = auteur;
        this.elementHTML.querySelector(".description").textContent = description;
        this.elementHTML.querySelector(".prix").textContent = prix;
        this.elementHTML.querySelector(".editeur").textContent = editeur;
        this.elementHTML.querySelector(".pages").textContent = pages;
        this.elementHTML.querySelector(".nouveaute").textContent = nouveaute;
        this.elementHTML.querySelector(".categorie").textContent = categorie;
    }

    /**
     * Fonction pour afficher la modale
     */
    afficher() {
        this.elementHTML.classList.remove("invisible");
        document.body.classList.add("modale-verrou");
    }

    /**
     * Fonction pour fermer la modale
     */
    fermer() {
        this.elementHTML.classList.add("invisible");
        document.body.classList.remove("modale-verrou");
    }
}

export default Modale;