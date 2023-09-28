class Hombre {
    #nombre = "estado default";
    #estado = 0;
    #llego = 0;

    setNombre(nombre) {
        this.#nombre = nombre;
    }
    getNombre() {
        return this.#nombre;
    }
    setEstado(estado) {
        this.#estado = estado;
    }
    getEstado() {
        return this.#estado;
    }
    subirAl(coche) {
        console.log("arrancar " + coche.getNombre());
        coche.auto(this);
    }
    movimiento(persona) {
        this.#estado++;
        if (this.#estado > 0) {
            console.log("en movimiento");
        }   if (this.#llego <=0) {
            console.log("estoy en camino")
            this.#llego++
        }    else {
            console.log("llegue")
        }
        if (this.#llego===1){
            console.log("en 5 minutos estoy")
        }
    }
}

class Coche {
    #nombre = "estado default";
    #estado = 0;

    setNombre(nombre) {
        this.#nombre = nombre;
    }
    getNombre() {
        return this.#nombre;
    }
    setEstado(estado) {
        this.#estado = estado;
    }
    getEstado() {
        return this.#estado;
    }

    auto(enciende) {
        this.#estado++;
        if (this.#estado > 0) {
            console.log("encendido");
            enciende.movimiento(this);
        } if (this.#estado===0) {
            console.log("no enciende");
        } 
    }
}

const carlos = new Hombre();
const elRojo = new Coche();
carlos.setNombre("Carlos");
elRojo.setNombre("el Rojo");
carlos.subirAl(elRojo);



