class Index {
  constructor() {
    this.palabras = ["CODIGO", "REACT", "FRONTEND", "HTML"];
  }
  enviar_locaStorage() {
    localStorage.setItem("arreglo_palabra", this.palabras);
  }
  optener_locaStorage() {
    let palaba_storage = localStorage.getItem("arreglo_palabra").split(",");
    if(palaba_storage != ""){
      this.palabras = palaba_storage;
    }
  }
  new_palabra(palabra) {
    let palaba_storage = localStorage.getItem("arreglo_palabra").split(",");
    if(palaba_storage != ""){
      this.palabras = palaba_storage;
    }
    this.palabras.push(palabra);
    this.enviar_locaStorage();
  }
}
