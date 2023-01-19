let menu
let opcionTienda
let procesoCompra
let opcionAdminTienda
const hora = new Date
const carroCompras = []

menuInicial()

//Opciones del menú principal
function menuInicial() 
{
    do {
        menu = parseInt(prompt("Bienvenido a De+Cotas. Ingrese una Opción: (1) - (2) - (3)\n1- Ingresar a la Tienda para Comprar.\n2- Administrar Productos de la Tienda.\n3- Salir"));

        switch (menu) {
            case 1:
                menuTienda()
                break;
            case 2:
                menuAdminTienda()
                break;
            case 3:
                alert("Gracias por su visita!!!!!")
                break;
            default:
                alert("Opción Inválida")
        }
    } while (menu != 3);
}

//Opciones en la tienda
function menuTienda() 
{
    opcionTienda = parseInt(prompt("¿Que acción desea realizar? - Ingrese (1) - (2) - (3)\n1- Hacer una compra\n2- Ver productos\n3- Regresar al Menú Principal"))
    switch (opcionTienda) {
        case 1:
            comprarTienda()          
            break;
        case 2:
            mostrarProductos()
            alert("Regresará al menú anterior...")
            menuTienda()
            break;
        case 3:
            menuInicial()
            break;
        default:
            alert("Opción Inválida")
            break;
    }
}

//Agregar productos al carrito y mostrar precio final
function comprarTienda() 
{
    procesoCompra = parseInt(prompt("Desea cargar productos al carrito de compras? Ingrese (1) o (2)\n1- Si\n2- No"))
    
    while (procesoCompra != 1 && procesoCompra != 2) 
    {
        alert("Selección incorrecta. Ingrese un dato válido")
        procesoCompra = parseInt(prompt("Desea cargar productos al carrito de compras: Ingrese (1) o (2)\n1- Si\n2- No"))
    }

    if(procesoCompra == 1)
    {   
        alert("Primero le mostraremos nuestros productos. Recuerde el número de los productos que desea comprar...")
        mostrarProductos()             
    }
    else if(procesoCompra == 2)
    {
        alert("Gracias por su visita. Vuelva pronto")
        alert("")
    }

    while(procesoCompra != 2)
    {
        let compraProd = prompt("Agregue el número del producto que desea comprar")
        let encontrarProd = productos.find((prod) => prod.id == compraProd)
        if (encontrarProd != undefined) 
        {
            let cantidad = parseInt(prompt("Cantidad del producto " + encontrarProd.nombre + " que comprará?"))
            carroCompras.push({ nombre: encontrarProd.nombre, cantidad: cantidad, precio: encontrarProd.precio})
            console.log(carroCompras);           
        }
        else 
        {
            alert("No se encuentra el producto que desea comprar...")
        }
        procesoCompra = parseInt(prompt("Desea agregar más productos al carrito de compras? Ingrese (1) o (2)\n1- Si\n2- No"))

        if(procesoCompra == 2)
        {
            carroCompras.forEach((comprar) =>
            {
                alert(`Producto: ${comprar.nombre}, Cantidad: ${comprar.cantidad}, Precio total del producto: S/.${comprar.cantidad * comprar.precio} soles`)
            })
        }
    }

    const total = carroCompras.reduce((acumulador,elemento) => acumulador + elemento.precio * elemento.cantidad,0)
    alert("El total a pagar es: "+total+"\n"+"La hora de su compra es "+hora.toLocaleString())
}

//mostrar productos
function mostrarProductos() {
    let nuestrosProductos = productos.map((producto) => producto.id + " - " + producto.nombre + " - " + "S/." + producto.precio + " soles");
    alert("Estos son nuestros productos...\n" + nuestrosProductos.join("\n"))
}

function menuAdminTienda() 
{
    alert("Iniciar sesión para acceder...")
    
    let user = prompt("Ingrese su usuario")
    let pass = prompt("Ingrese su clave")

    if(user == "admin" && pass == "123456")
    {
        alert("Validación de usuario y clave correcta")
        do 
        {
            opcModProds()

        } while (opcionAdminTienda != 3);
    }
    else if(user != "admin" || pass != "123456")
    {
        alert("Usuario o clave incorrecto. Regresaremos al Menú Principal")
        menuInicial()
    }       
}

function opcModProds()
{
    opcionAdminTienda = parseInt(prompt("Selecciones una opción a realizar\n1-Agregar Productos\n2- Eliminar el Último Producto\n3- Regresar al Menú Principal"))
    
    switch (opcionAdminTienda) {
        case 1:
            agregarProducto()
            break;
        case 2:
            eliminarProducto()
            break;        
        case 3:
            menuInicial()
            break;
        default:
            alert("Opción Inválida")
            break;
    }
}








