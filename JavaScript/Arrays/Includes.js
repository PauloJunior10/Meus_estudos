// O includes()método retorna true se uma matriz contiver um valor especificado.

// O includes()método retorna falsese o valor não for encontrado.

// O includes()método diferencia maiúsculas de minúsculas.

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true