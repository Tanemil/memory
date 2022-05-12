let img_equipment = ['assets/img/Equipment/Bag.png','assets/img/Equipment/Belt.png','assets/img/Equipment/Helm.png','assets/img/Equipment/Iron Armor.png','assets/img/Equipment/Iron Boot.png','assets/img/Equipment/Iron Helmet.png','assets/img/Equipment/Leather Armor.png','assets/img/Equipment/Leather Boot.png','assets/img/Equipment/Leather Helmet.png','assets/img/Equipment/Wizard Hat.png','assets/img/Equipment/Wooden Armor.png'];
let img_food = ['assets/img/Food/Apple.png','assets/img/Food/Beer.png','assets/img/Food/Bread.png','assets/img/Food/Cheese.png','assets/img/Food/Fish Steak.png','assets/img/Food/Green Apple.png','assets/img/Food/Ham.png','assets/img/Food/Meat.png','assets/img/Food/Mushroom.png','assets/img/Food/Wine 2.png','assets/img/Food/Wine.png']
let img_material = ['assets/img/Material/Fabric.png','assets/img/Material/Leather.png','assets/img/Material/Paper.png','assets/img/Material/Rope.png','assets/img/Material/String.png','assets/img/Material/Wood Log.png','assets/img/Material/Wooden Plank.png','assets/img/Material/Wool.png']
let img_misc = ['assets/img/Misc/Book 2.png','assets/img/Misc/Book 3.png','assets/img/Misc/Book.png','assets/img/Misc/Candle.png','assets/img/Misc/Chest.png','assets/img/Misc/Copper Coin.png','assets/img/Misc/Crate.png','assets/img/Misc/Envolop.png','assets/img/Misc/Gear.png','assets/img/Misc/Golden Coin.png','assets/img/Misc/Heart.png','assets/img/Misc/Golden Key.png','assets/img/Misc/Iron Key.png','assets/img/Misc/Lantern.png','assets/img/Misc/Map.png','assets/img/Misc/Rune Stone.png','assets/img/Misc/Scroll.png','assets/img/Misc/Silver Coin.png','assets/img/Misc/Silver Key.png']
let img_monster_part = ['assets/img/Monster Part/Bone.png','assets/img/Monster Part/Egg.png','assets/img/Monster Part/Feather.png','assets/img/Monster Part/Monster Egg.png','assets/img/Monster Part/Monster Eye.png','assets/img/Monster Part/Monster Meat.png','assets/img/Monster Part/Skull.png','assets/img/Monster Part/Slime Gel.png']
let ore_gem = ['assets/img/Ore & Gem/Coal.png','assets/img/Ore & Gem/Copper Ingot.png','assets/img/Ore & Gem/Copper Nugget.png','assets/img/Ore & Gem/Crystal.png','assets/img/Ore & Gem/Cut Emerald.png','assets/img/Ore & Gem/Cut Ruby.png','assets/img/Ore & Gem/Cut Sapphire.png','assets/img/Ore & Gem/Cut Topaz.png','assets/img/Ore & Gem/Diamond.png','assets/img/Ore & Gem/Emerald.png','assets/img/Ore & Gem/Gold Nugget.png','assets/img/Ore & Gem/Golden Ingot.png','assets/img/Ore & Gem/Obsidian.png','assets/img/Ore & Gem/Pearl.png','assets/img/Ore & Gem/Ruby.png','assets/img/Ore & Gem/Sapphire.png','assets/img/Ore & Gem/Silver Ingot.png','assets/img/Ore & Gem/Silver Nugget.png','assets/img/Ore & Gem/Topaz.png']
let potion = ['assets/img/Potion/Blue Potion 2.png','assets/img/Potion/Blue Potion 3.png','assets/img/Potion/Blue Potion.png','assets/img/Potion/Empty Bottle.png','assets/img/Potion/Green Potion 2.png','assets/img/Potion/Green Potion 3.png','assets/img/Potion/Green Potion.png','assets/img/Potion/Red Potion 2.png','assets/img/Potion/Red Potion 3.png','assets/img/Potion/Red Potion.png','assets/img/Potion/Water Bottle.png']
let weapon_tool = ['assets/img/Weapon & Tool/Arrow.png','assets/img/Weapon & Tool/Axe.png','assets/img/Weapon & Tool/Bow.png','assets/img/Weapon & Tool/Emerald Staff.png','assets/img/Weapon & Tool/Golden Sword.png','assets/img/Weapon & Tool/Hammer.png','assets/img/Weapon & Tool/Iron Shield.png','assets/img/Weapon & Tool/Iron Sword.png','assets/img/Weapon & Tool/Knife.png','assets/img/Weapon & Tool/Magic Wand.png','assets/img/Weapon & Tool/Pickaxe.png','assets/img/Weapon & Tool/Ruby Staff.png','assets/img/Weapon & Tool/Sapphire Staff.png','assets/img/Weapon & Tool/Shovel.png','assets/img/Weapon & Tool/Silver Sword.png','assets/img/Weapon & Tool/Topaz Staff.png','assets/img/Weapon & Tool/Torch.png','assets/img/Weapon & Tool/Wooden Shield.png','assets/img/Weapon & Tool/Wooden Staff.png','assets/img/Weapon & Tool/Wooden Sword.png']

let somma_liste = [img_equipment,img_food,img_material,img_misc,img_monster_part,ore_gem,potion,weapon_tool]

var delayInMilliseconds = 600;

let lista_caselle_corrette = []
let controllo = []

let n_col = 0;
let n_cel = 0;

let cliccable = true;

function seleziona_lista(lista_liste){
    lista_risultato = []
    let lista_casuale = [...lista_liste[Math.floor(Math.random()*lista_liste.length)]]
    for (let index = 0; index < 8; index++) {
        variabile_lista = lista_casuale[Math.floor(Math.random()*lista_casuale.length)]
        while (lista_risultato.includes(variabile_lista)) {
            variabile_lista = lista_casuale[Math.floor(Math.random()*lista_casuale.length)]
            console.log('loop')
        }
        lista_risultato.push(variabile_lista)
    }
    return lista_risultato
}

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
          }, 500);

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

seleziona_caselle(document.getElementsByTagName('table')[0] , 16 , seleziona_lista(somma_liste))

for (let index = 0; index < 16; index++) {
    if (n_cel == 4){
        n_col += 1;
        n_cel = 0;
    }
    let elemento = document.getElementsByTagName('table')[0].getElementsByTagName('tr')[n_col].getElementsByTagName('td')[n_cel].getElementsByTagName('div')[0];
    elemento.style.cursor = 'pointer'
    elemento.onclick = function() {
        if (controllo[0] == undefined && cliccable){
                if (this.style.opacity == 1 || this.style.opacity == ''){
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
            
        } else if(!(lista_caselle_corrette.includes(this.nextElementSibling.src)) && cliccable){
                if (this.style.opacity == 1 || this.style.opacity == ''){
                    this.style.opacity = 0;
                    if (controllo[0].nextElementSibling.src == this.nextElementSibling.src){
                        lista_caselle_corrette.push(controllo[0].nextElementSibling.src)
                        controllo.pop()
                    } else{
                        let variabile = this
                        cliccable = false
                        setTimeout(function() {
                            cliccable = true
                            variabile.style.opacity = 1
                            controllo[0].style.opacity = 1
                            controllo.pop()
                            }, delayInMilliseconds);
                        
                    }
                } 
        }
    };
    n_cel += 1;
}

function reset(){
    rimuovi_caselle(document.getElementsByTagName('table')[0] , 16)
    cliccable = false;
    setTimeout(function() {
        seleziona_caselle(document.getElementsByTagName('table')[0] , 16 , seleziona_lista(somma_liste))
        cliccable = true;
      }, 500);
    lista_caselle_corrette = []
    controllo = []

    n_col = 0;
    n_cel = 0;
}






