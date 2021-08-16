const Sequelize = require("sequelize");
const env = process.env.NODE_ENV;
const config = require("../../config/config.json")[env];
const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.user = require('./domains/user')(sequelize, Sequelize);
db.dust_collector_manager = require("./domains/dust_collector_manager")(sequelize,Sequelize);
db.dust_collector_operation = require("./domains/dust_collector_operation")(sequelize,Sequelize);

// db.Comment = require('./comment')(sequelize, Sequelize);
// db.Hashtag = require('./hashtag')(sequelize, Sequelize);
// db.Image = require('./image')(sequelize, Sequelize);
// db.Post = require('./post')(sequelize, Sequelize);
// db.User = require('./user')(sequelize, Sequelize);

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
