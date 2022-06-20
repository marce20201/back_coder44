import * as negocio from '../api/productos.js'

class controladorProductos {
    constructor(){
        
    }

    getProductos = async ()=> {
        try {
            let productos = await negocio.obtenerProductos();

            return productos
        } catch(error) {
            console.log('error obtenerProductos ', error)
        }
    }

    postProducto = async ({id, nombre, codigo, precio, stock}) => {
        try {
            let producto = {id, nombre, codigo, precio, stock};
            let productoGuardado = await negocio.agregarProducto(producto)
            
            return productoGuardado
        } catch (error) {
            console.log('error postProducto ', error)
        }
    }
}
