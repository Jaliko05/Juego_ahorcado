class Arreglo {
  constructor() {
    this.palabras = ["CODIGO", "REACT", "FRONTEND", "HTML"];
  }
  enviar_locaStorage() {
    localStorage.setItem("arreglo_palabra", this.palabras);
  }
  optener_locaStorage() {
    let palaba_storage = localStorage.getItem("arreglo_palabra");
    if(palaba_storage != ""){
      this.palabras = palaba_storage.split(",");
    }
  }
  new_palabra(palabra) {
    let palaba_storage = localStorage.getItem("arreglo_palabra");
    if(palaba_storage != ""){
      this.palabras = palaba_storage.split(",");
    }
    this.palabras.push(palabra);
    this.enviar_locaStorage();
  }
}
