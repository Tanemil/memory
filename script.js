let img_equipment = ['assets/img/Equipment/bag.png','assets/img/Equipment/belt.png','assets/img/Equipment/helm.png','assets/img/Equipment/Iron Armor.png','assets/img/Equipment/iron boot.png','assets/img/Equipment/iron helmet.png','assets/img/Equipment/leather armor.png','assets/img/Equipment/leather boot.png'];

var delayInMilliseconds = 600;

let lista_caselle_corrette = []
let controllo = []

let n_col = 0;
let n_cel = 0;

/* function appendi_img(elemento , src_immagine){
    let img = document.createElement('img')
    img.src = src_immagine
    elemento.appendChild(img)
} */

/* for (let index = 0; index < img_equipment.length; index++) {
    const element = img_equipment[index];
    appendi_img(document.getElementById('c'+String(index)) , element)
}  */
function rimuovi_caselle(tabella , numero_di_caselle){
    let n_cella = 0;
    let n_colonna = 0;

    for (let index = 0; index < numero_di_caselle; index++) {
        if (n_cella == 4){
            n_colonna += 1;
            n_cella = 0;
        }
        let var1 = tabella.getElementsByTagName('tr')[n_colonna].getElementsByTagName('td')[n_cella].getElementsByTagName('div')[0]
        let var2 = tabella.getElementsByTagName('tr')[n_colonna].getElementsByTagName('td')[n_cella].getElementsByTagName('img')[0]
        var1.style.opacity = 1;
        setTimeout(function() {
            var2.remove();
          }, 1000);

        n_cella += 1;
    }
}

function seleziona_caselle(tabella , numero_di_caselle , lista_immagini){
    let n_cella = 0;
    let n_colonna = 0;

    const lista_aggiornata = [...lista_immagini].concat([...lista_immagini]);
    /* mischio gli oggetti della lista */
    let lista_rimischiata = shuffle(lista_aggiornata);
    /* creo un loop per aggiungere ad ogni casella un  immagine */
    for (let index = 0; index < numero_di_caselle; index++) {
        let i = lista_rimischiata.pop();
        let img = document.createElement('img');
        img.src = i;
        if (n_cella == 4){
            n_colonna += 1;
            n_cella = 0;
        }
        tabella.getElementsByTagName('tr')[n_colonna].getElementsByTagName('td')[n_cella].appendChild(img);
        n_cella += 1;
    }
}

function shuffle(lista){
    let c_lista = [...lista];
    let r_lista = [];
    for (let index = 0; index < lista.length; index++) {
        let a = c_lista.splice(Math.floor(Math.random() * c_lista.length) , 1)
        r_lista.unshift(a[0])
    }
    return r_lista;
}

seleziona_caselle(document.getElementsByTagName('table')[0] , 16 , img_equipment)

for (let index = 0; index < 16; index++) {
    if (n_cel == 4){
        n_col += 1;
        n_cel = 0;
    }
    let elemento = document.getElementsByTagName('table')[0].getElementsByTagName('tr')[n_col].getElementsByTagName('td')[n_cel].getElementsByTagName('div')[0];
    elemento.style.cursor = 'pointer'
    elemento.onclick = function() {
        if (controllo[0] == undefined){
            if (this.style.opacity == ''){
                this.style.opacity = 1
                if (this.style.opacity == 1){
                    this.style.opacity = 0;
                    controllo.push(this)
    /*                 if (controllo[0] == undefined){
                        controllo.push(this)
                    } else{
                        if (controllo === this){
                            lista_caselle_corrette.push(controllo[0])
                            controllo.pop()
                            lista_caselle_corrette.push(this)
                        }
                    }  */
                } else{
                    this.style.opacity = 1; 
                }
            } else {
                if (this.style.opacity == 1){
                    this.style.opacity = 0;
                    controllo.push(this)
                } 

            }
            
        } else if(!(lista_caselle_corrette.includes(this.nextElementSibling.src))){

            if (this.style.opacity == ''){
                this.style.opacity = 1
                if (this.style.opacity == 1){
                    this.style.opacity = 0;
                    if (controllo[0].nextElementSibling.src == this.nextElementSibling.src){
                        lista_caselle_corrette.push(controllo[0].nextElementSibling.src)
                        controllo.pop()
                    } else{
                        let variabile = this
                        setTimeout(function() {
                            variabile.style.opacity = 1
                            controllo[0].style.opacity = 1
                            controllo.pop()
                          }, delayInMilliseconds);
                    }
                } 
            } else {
                if (this.style.opacity == 1){
                    this.style.opacity = 0;
                    console.log(controllo[0].nextElementSibling.src , this.nextElementSibling.src)
                    if (controllo[0].nextElementSibling.src == this.nextElementSibling.src){
                        lista_caselle_corrette.push(controllo[0].nextElementSibling.src)
                        controllo.pop()
                    } else{
                        let variabile = this
                        setTimeout(function() {
                            variabile.style.opacity = 1
                            controllo[0].style.opacity = 1
                            controllo.pop()
                          }, delayInMilliseconds);
                    }
                } 
            }


        }
    };
    n_cel += 1;
}

function reset(){
    rimuovi_caselle(document.getElementsByTagName('table')[0] , 16)
    setTimeout(function() {
        seleziona_caselle(document.getElementsByTagName('table')[0] , 16 , img_equipment)
      }, 1000);
    lista_caselle_corrette = []
    controllo = []

    n_col = 0;
    n_cel = 0;
}







