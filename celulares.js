class Celular {
  constructor(marca, modelo, cor, preco) {
    this.marca = marca;
    this.modelo = modelo;
    this.cor = cor;
    this.preco = preco;
  }

  makeAcall(number) {
    console.log(`calling to ${number}`);
  }

  sendingMensage(number, mensage) {
    console.log(`Sending mensage to ${number}: ${mensage}`);
  }
}

class Smartphone extends Celular {
  acessingInternet() {
    console.log("Acessing the internet");
  }
}

class FeaturePhone extends Celular {
  economyMode() {
    console.log("Using the economy mode");
  }
}

Smartphone = new Smartphone("Apple", "Iphone15", "Red", 6500);
FeaturePhone = new FeaturePhone("Samsung", "S24", "Blue", 8000);

Smartphone.makeAcall("123456789");
Smartphone.sendingMensage("987654321", "Me paga o que me deve");
Smartphone.acessingInternet();

FeaturePhone.makeAcall("987654321");
FeaturePhone.sendingMensage("123456789", "Não te devo nada!");
FeaturePhone.economyMode();
