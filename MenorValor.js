function MenorValor(arreglo) {
  let menor = arreglo[0]; 
  
  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] < menor) {
      menor = arreglo[i]; 
    }
  }
  
  return menor;
}
