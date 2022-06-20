//const mongoose = require('mongoose');
const productosController = require('../controladores/productosController');

import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import config from '../config';

const express = require('express');
const router = express.Router();
//const app = express();

class RouterProductos {
    constructor() {
        this.controladorProductos = new productosController()
    }

    start () {
        const schema = buildSchema( `
        type Query {
            productos [producto]
        }
        type Mutation {
            guardarProducto(id: Int!, nombre: String!,codigo: Int!,precio: Int!,stock: Int!): Producto
        },
        type Producto {
            id: Int
            nombre: String
            codigo: Int
            precio: Int
            stock: Int
        }   
        `);

        const root = {
            productos: productosController.getProductos,
            guardarProducto: productosController.postProducto
        }

        return graphqlHTTP({
            schema: schema, 
            rootValue: root,
            graphiql: config.GRAPHIQL == 'true'
        })
    }
}

export default RouterProductos

// routes

/*
router.get('/', productosController.getProductos);

//router.get('/listar/:id?', productosController.getById);

router.post('/', productosController.postProducto);
//router.post('/agregar', productosController.addProduct);

//router.patch('/actualizar/:id', productosController.updateProduct);

//router.delete('/borrar/:id', productosController.deleteProduct);

module.exports = router;

*/