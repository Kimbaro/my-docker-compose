//게이트웨이 정보
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('gateway', {
        id: {
            type: DataTypes.STRING(30),
            allowNull: false, //null 허용 여부
            unique: true
        },
        pw: {
            type: DataTypes.STRING(100),
            allowNull: false, //null 허용 여부
        }
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
    return user;
};