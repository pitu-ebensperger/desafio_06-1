const fs = require('fs');



const registrar = (nombre, edad, animal, color, enfermedad) => { //defino parametros de funcion registrar
    const cita = { nombre, edad, animal, color, enfermedad };  //defino objeto cita con esos parametros
    let citas; //defino citas
    try {
        citas = JSON.parse(fs.readFileSync('citas.json', 'utf8')); //...leyendo contenido citas.json como array
    } catch (error) {
        citas = []; // si no existe, citas será un array vacío
    }
     citas = [...citas, cita]; //agrego cita(ultima) al array existente de citas
    fs.writeFileSync('citas.json', JSON.stringify(citas)); //rescribo el archivo citas.json con el array actualizado
    console.log('Cita registrada:', cita)// muestro mensaje de cita registrada
    return; 
};
const leer = () => { 
    let citas; //defino citas...
    try {
        citas = JSON.parse(fs.readFileSync('citas.json', 'utf8')); // ...leyendo contenido citas.json como array
    } catch (error) {
        citas = []; // si no existe, citas será un array vacío
    }

    if (citas.length === 0) { // si existe, pero está vacío, doy mensaje
        console.log('No hay citas registradas.');
        return;
    }    
    
    citas.forEach(cita => { //desestructuro el array citas leido al inicio y muestro cada cita
        console.log(`
            Nombre: ${cita.nombre}, 
            Edad: ${cita.edad}, 
            Animal: ${cita.animal}, 
            Color: ${cita.color}, 
            Enfermedad: ${cita.enfermedad}`);
    });

};



module.exports = { registrar, leer }; //exporto funciones 