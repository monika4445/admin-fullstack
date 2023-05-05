const { authenticateToken } = require('../jwt/jwt_authenticate');
const categories_controller = require('../controllers/category_controller');

function category_routes(app){
    
    app.get('/categories', categories_controller.allCategories);
    app.get('/category/:id', categories_controller.getCategory);
    app.post('/createCategory', authenticateToken, categories_controller.createCategory);
    app.put('/updateCategory/:id', authenticateToken, categories_controller.updateCategory);
    app.delete('/deleteCategory/:id', authenticateToken, categories_controller.deleteCategory);
}

module.exports = {
    category_routes
}