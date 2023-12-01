// Definindo a classe Heroi

class Heroi {
    constructor(nome, idade, tipo) { 
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }

    atacar() {
      let ataque;

      if (this.tipo === 'mago') {
            ataque = 'usou magia';
        } else if (this.tipo === 'guerreiro') {
            ataque = 'usou espada';
        } else if (this.tipo === 'monge') {
            ataque = 'usou artes marciais';
        } else if (this.tipo === 'ninja') {
            ataque = 'usou shuriken';
        } else {
            ataque = 'ataque desconhecido';
        }

      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}


  const heroiNinja = new Heroi('Merlin', 100, 'mago');
  const heroiMago = new Heroi('Arthur', 30, 'guerreiro');

heroiNinja.atacar();
heroiMago.atacar();