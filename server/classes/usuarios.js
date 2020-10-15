/**
 * Clase usuarios que contiene todas las listas de personas
 */
class Usuarios {
    constructor() {
        this.personas = []; // Personas conectadas al chat
    }

    /**
     * Agrega una persona al chat
     * @param {*} id 
     * @param {*} nombre 
     */
    agregarPersona(id, nombre, sala) {
        let persona = { id, nombre, sala };
        this.personas.push(persona);
        return this.personas;
    }

    /**
     * Obtiene una persona por id
     * @param {*} id 
     */
    getPersona(id) {
        let persona = this.personas.filter(persona => {
            return persona.id === id;
        })[0]; // Devuelve un array, y necesitamos la primera posición que es donde irá el objeto encontrado
        return persona;
    }

    /**
     * Devuelve todas las personas
     */
    gerPersonas() {
        return this.personas;
    }

    /**
     * Devuelve todas las personas de una sala concreta
     * @param {*} sala 
     */
    getPersonasPorSala(sala) {
        let personasEnSala = this.personas.filter(persona => {
            return persona.sala === sala;
        });
        return personasEnSala;
    }

    /**
     * Borra una persona del chat por ID
     * @param {*} id 
     */
    borrarPersona(id) {
        let personaBorrada = this.getPersona(id);
        this.personas = this.personas.filter(persona => persona.id != id);
        return personaBorrada;
    }
}

module.exports = {
    Usuarios
};