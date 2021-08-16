//계정
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        user_id: {
            type: DataTypes.STRING(30),
            allowNull: false, //null 허용 여부
            unique: true
        },
        user_pw: {
            type: DataTypes.STRING(100),
            allowNull: false, //null 허용 여부
        }
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
    // User.associate = (db) => { //db 관계도 설정, 1:N , N:1, N:N..
    //     db.User.hasMany(db.Post); //user 한명은 여러개의 post를 가질 수 있다. 1:N
    //     db.User.hasMany(db.Comment); // 마찬가지
    //     db.User.hasMany(db.Hashtag);
    //     db.User.hasMany(db.Image);
    // };
    return user;
};