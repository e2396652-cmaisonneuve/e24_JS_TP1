import Livre from "./Livre.js";
import livresInfos from "../data/livres.js";
import FiltresLivres from "./FiltresLivres.js";
import Modale from "./Modale.js";

class GestionnaireLivres {
        constructor() {
            this.listeLivres = livresInfos;
            this.conteneurLivres = document.querySelector(".card-container");
            this.listeLivresInstanciees = [];    

            this.instancierLivres(this.listeLivres);
            this.filtres = new FiltresLivres(this);
            this.modale = new Modale(this, "Ceci est un message de test", document.body);
        }

        /**
         * Fonction qui instancie les videos et les ajoute à la liste de videos instanciées
         */
        instancierLivres() {
            this.listeLivresInstanciees = this.listeLivres.map((livre, index) => {
                return new Livre(this,livre, this.conteneurLivres);
            });
        }

        /**
         *
         * @param {*} livres
         */

        afficherLivres(livres) {
            this.viderListeHTML();
            livres.forEach((livre) => {
                this.conteneurLivres.insertAdjacentElement("beforeend", livre);
            });
        }

        viderListeHTML() {
            this.conteneurLivres.innerHTML = "";
        }

}

export default GestionnaireLivres;