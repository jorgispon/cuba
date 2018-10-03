//ESTO ES UNA CLASE EN TYPESCRIPT
export class Empleado{
    /*public nombre:string;
    public edad:number;

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }*/

    //VAMOS A HACER LO MISMO QUE ARRIBA, PERO CON LO LLAMADO COMO MODELO DE DATOS
    constructor(
        public nombre:string,
        public edad:number,
        public cargo:string,
        public contratado:boolean
){}
}
