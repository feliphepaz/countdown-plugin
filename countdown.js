export default class Countdown {
  constructor(futureDays) {
    this.futureDays = futureDays
  }
  get faltam() {
    const text = document.querySelector('.text');
    const dataF = new Date(this.futureDays)
    const dataA = new Date();
    const diasRestantes = Math.floor( dataF / (24 * 60 * 60 * 1000));
    const diasAtuais = Math.floor( dataA / (24 * 60 * 60 * 1000));
    text.innerText = `Faltam ${diasRestantes - diasAtuais} dias até esta data`
  }
  set faltam(newData) {
    this.futureDays = newData
  }
}