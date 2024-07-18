class Livre{

    #titre;
    #auteur;
    #description;
    #prix;
    #editeur;
    #pages;
    #image;
    #nouveaute;
    #categorie;


    constructor(gestionnaire, infosLivre, conteneur) {
        const { titre,auteur,editeur,description,pages,prix,image,nouveaute,categorie } =
        infosLivre;

        this.gestionnaire = gestionnaire;
        this.#titre = titre;
        this.#auteur = auteur;
        this.#description = description;
        this.#prix = prix;
        this.#editeur = editeur;
        this.#pages = pages;
        this.#image = image;
        this.#nouveaute = nouveaute;
        this.#categorie = categorie;

        this.conteneurHTML = conteneur;
        this.elementHTML;

        this.injecterHtml();
    }
    
    injecterHtml() {
        let imageLivre = `
        <div class="img-container">
            <img src="${this.#image}"/>
                    </div>`;

        let gabaritHTML = `
            <div class="card" data-index="${this.#titre}">
                    ${imageLivre}
                    <div class="infos-container">
                        <h2 class="infos__titre">${this.#titre}</h2>
                        <p class="infos__prix">$${this.#prix}</p>
                    </div>
            </div>
        `;
        this.conteneurHTML.insertAdjacentHTML("beforeend", gabaritHTML);
        this.elementHTML = this.conteneurHTML.lastElementChild;
        this.elementHTML.addEventListener("click", this.afficherDetail.bind(this));
    }

    //FIXME: BOITE MODAL

     afficherDetail() {
        this.gestionnaire.modale.changerMessage(this.#image,this.#titre,this.#auteur,this.#editeur,this.#pages,this.#description,this.#prix);
        this.gestionnaire.modale.afficher();
    }
}

export default Livre;