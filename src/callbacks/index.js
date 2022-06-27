const saludar = (nombre) => console.log(`Hola ${nombre}`);

const procesarEntradaUsuario = (nombre, callback) => callback(nombre);

procesarEntradaUsuario('David', saludar);