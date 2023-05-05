const { authenticateToken } = require('../jwt/jwt_authenticate');
const products_controller = require('../controllers/product_controller');

function product_routes(app){  
    app.get('/products',  products_controller.allProducts);
    app.get('/product/:id',  products_controller.getProduct);
    app.post('/createProduct', authenticateToken, products_controller.createProduct);
    app.put('/updateProduct/:id', authenticateToken,  products_controller.updateProduct);
    app.delete('/deleteProduct/:id',authenticateToken, products_controller.deleteProduct);
}

module.exports = {
    product_routes
}