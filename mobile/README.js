// Criação da classe Item
class Item {
  constructor(name, description, location) {
    this.name = name;
    this.description = description;
    this.location = location;
    this.claimed = false;
  }

  // Método para marcar o item como encontrado
  markFound() {
    this.claimed = true;
  }
}

// Criação da classe AchadosEPerdidos
class AchadosEPerdidos {
  constructor() {
    this.items = [];
  }

  // Método para adicionar um item
  addItem(item) {
    this.items.push(item);
  }

  // Método para listar todos os itens perdidos
  listLostItems() {
    return this.items.filter(item => !item.claimed);
  }

  // Método para listar todos os itens encontrados
  listFoundItems() {
    return this.items.filter(item => item.claimed);
  }
}

// Criação de um objeto da classe AchadosEPerdidos
const achadosEPerdidos = new AchadosEPerdidos();

// Criação de um novo item
const item1 = new Item("Celular", "iPhone 11 Preto", "Biblioteca");

// Adicionando o item ao sistema de achados e perdidos
achadosEPerdidos.addItem(item1);

console.log(achadosEPerdidos.listLostItems()); // [{name: "Celular", description: "iPhone 11 Preto", location: "Biblioteca", claimed: false}]

item1.markFound();

console.log(achadosEPerdidos.listFoundItems()); // [{name: "Celular", description: "iPhone 11 Preto", location: "Biblioteca", claimed: true}]

