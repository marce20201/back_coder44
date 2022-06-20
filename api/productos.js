const model = require('../model/DAOs/producto');

export const obtenerProductos = async () => {
    return await model.obtenerProductos()
}

export const agregarProducto = async (producto) => {
    await model.agregarProducto(producto);
}