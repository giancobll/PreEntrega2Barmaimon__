class Producto
{
    id;
    nombre;
    tipoProducto;
    tipoMascota;
    precio;

    constructor(id, nombre, tipoProducto, tipoMascota, precio)
    {
        this.id = id
        this.nombre = nombre
        this.tipoProducto = tipoProducto
        this.tipoMascota = tipoMascota
        this.precio = precio
    }
}

let opcProducto
let opcElimProd
const productos = []

const producto1 = new Producto("1","Colchoneta Gel Talla L","accesorio","perro",65)
const producto2 = new Producto("2","Plato Antiestres", "accesorio", "perro", 10)
const producto3 = new Producto("3","Rascador Redondo","accesorio","gato",15)
const producto4 = new Producto("4","Pastilla Antipulgas - Gato","medicina","gato",50)
const producto5 = new Producto("5","Pastilla Bravecto 4.5kg a 10kg","medicina","perro",108)
const producto6 = new Producto("6","Pechera Reflectiva Talla M","accesorio","perro",22)

productos.push(producto1)
productos.push(producto2)
productos.push(producto3)
productos.push(producto4)
productos.push(producto5)
productos.push(producto6)

function agregarProducto()
{
    opcProducto = parseInt(prompt("¿Desea gregar un nuevo producto a la lista? Ingrese (1) o (2)\n1-Ingresar un nuevo producto\n2- Regresar al Menú Anterior"))

    while(opcProducto != 1 && opcProducto != 2)
    {
        alert("Ingresar una opción correcta")
        opcProducto = parseInt(prompt("¿Desea gregar un nuevo producto a la lista? Ingrese (1) o (2)\n1-Ingresar un nuevo producto\n2- Regresar al Menú Anterior"))
    }

    if(opcProducto == 1)
    {
        alert("Ingrese datos para el nuevo producto")
        productos.push(new Producto(productos.length+1,prompt("Ingrese nombre del producto"),prompt("Ingrese el Tipo de Producto"),prompt("Ingrese el tipo de mascota que usa este producto"),parseFloat(prompt("Ingrese el precio del producto")))) 
        alert("Producto agregado correctamente")
        
        console.log(productos[productos.length-1]);
        productos.forEach((producto) => {console.log(producto)})

        opcProducto = parseInt(prompt("¿Desea agregar un producto más? - Ingrese (1) o (2)\n1- Ingresar un nuevo producto\n2- Regresar al Menú Anterior"))        
    }
    else if(opcProducto == 2)
    {
        alert("Regresando al Menú anterior")
        opcModProds()
    }     
}

function eliminarProducto()
{
    opcElimProd = parseInt(prompt("¿Está seguro que desea eliminar el último producto registrado? - Ingrese (1) o (2)\n1- Si, eliminar.\n2- No, regresar al menu anterior"))
    while(opcElimProd != 1 && opcElimProd != 2)
    {
        alert("Ingresar una opción correcta")
        opcElimProd = parseInt(prompt("¿Está seguro que desea eliminar el último producto registrado? - Ingrese (1) o (2)\n1- Si, eliminar.\n2- No, regresar al menu anterior"))
    }

    if(opcElimProd == 1)
    {
        productos.pop()
        alert("Ultimo producto eliminado correctamente")
        console.log(productos);        
    }
    else if(opcElimProd == 2)
    {
        alert("Regresando al Menú anterior")
        opcModProds()
    }
}

