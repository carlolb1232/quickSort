function ordenamintoRapido(arr, pivoteIndice) {
  // Si se manda un arreglo vacío, se devuele uno vacío
  if (arr.length === 0) {
    return []
  }
  // Obtendremos el indice del medio para darselo al pivote
  pivoteIndice = Math.floor(arr.length/2);

  // Asignamos el pivote al lugar que queramos
  let pivote=arr[pivoteIndice];

  // Se crean arreglos para ordenar los números mayores y menores que el pivote
  let arrIzq = [];
  let arrDer = [];

  for (let i = 0; i < arr.length; i++) {
    // Si el indice es igual al pivote no realiza nada y lo salta
    if (i != pivoteIndice) {
      // Si el elemento recorrido es mayor al pivote ira al arreglo de la izquierda
      if(arr[i]>pivote){
        arrDer.push(arr[i]);
      }else{
        // Si el elemento es menor al pivote ira a la izquierda
        arrIzq.push(arr[i]);
      }
    }
  }
  // Se aplicara el metodo hasta que el ultimo elemento este colocado de forma correcta a la izquierda o derecha
  arrIzq = ordenamintoRapido(arrIzq);
  arrDer = ordenamintoRapido(arrDer);
  // Se retorna la union del arreglo de la izquierdam el pivote y el arreglo de la derecha en cada iteracion
  return arrIzq.concat(pivote).concat(arrDer);
}


let arreglo = [1, 4, 2, 7, 6, 3, 8, 20, 9, 15, 12, 10, 30 ];

console.log(ordenamintoRapido(arreglo,6))