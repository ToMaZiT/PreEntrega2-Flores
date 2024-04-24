// Objeto
const productos = [
    { nombre: "Manzana", precio: 1.5 },
    { nombre: "Banana", precio: 2 },
    { nombre: "Zanahoria", precio: 1 },
    { nombre: "Lechuga", precio: 1.2 }
];

// Función para mostrar los productos disponibles
function mostrarProductos() {
    let listaProductos = "Productos disponibles:\n";
    productos.forEach((producto, index) => {
        listaProductos += `${index + 1} - ${producto.nombre}: $${producto.precio.toFixed(2)}\n`;
    });
    alert(listaProductos);
}

// Función para simular la compra de productos
function simularCompra() {
    let total = 0;
    let seguirComprando = true;
    let carrito = []; // Array para almacenar los productos comprados

    while (seguirComprando) {
        let seleccion = prompt("Ingrese el número del producto que desea comprar:\n1 - Manzana: $1.50\n2 - Banana: $2.00\n3 - Zanahoria: $1.00\n4 - Lechuga: $1.20\n\nEscriba Fin para finalizar la compra");
        if (seleccion.toLowerCase() === "fin") {
            seguirComprando = false;
        } else {
            let indice = parseInt(seleccion) - 1;
            if (indice >= 0 && indice < productos.length) {
                let cantidad = parseInt(prompt(`Ingrese la cantidad de ${productos[indice].nombre}:`));
                let subtotal = productos[indice].precio * cantidad;
                total += subtotal;
                // Agregamos el producto y la cantidad al carrito
                carrito.push({ producto: productos[indice].nombre, cantidad: cantidad, subtotal: subtotal });
            } else {
                alert("Número de producto no válido. Por favor, elija un número de producto válido.");
            }
        }
    }

    // Mostramos el detalle de la compra
    let detalleCompra = "Detalle de la compra:\n";
    carrito.forEach(item => {
        detalleCompra += `${item.cantidad} x ${item.producto}: $${item.subtotal.toFixed(2)}\n`;
    });
    detalleCompra += `\nTotal: $${total.toFixed(2)}`;
    alert(detalleCompra);
}

// Ejecutamos la simulación
mostrarProductos();
simularCompra();
