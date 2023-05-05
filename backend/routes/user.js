const { authenticateToken } = require('../jwt/jwt_authenticate');
const user_controller = require('../controllers/users_controller');

function user_routes(app){   
    app.post('/register', user_controller.register);
    app.post('/login', user_controller.login);
    app.get('/users', authenticateToken, user_controller.allUsers);
}

module.exports = {user_routes}