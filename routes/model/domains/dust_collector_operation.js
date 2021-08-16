//집진기 작업설정
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('dust-collector-operation', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true, // Primary Key 여부
            autoIncrement: false,
            comment: '자동증가 false 입니다. 챔버개수 지정 시 PK 직접 할당해야합니다.',
        },
        mode: {
            type: DataTypes.BOOLEAN,
            allowNull: false, //null 허용 여부
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: true, //null 허용 여부
        },
        control: {
            type: DataTypes.BOOLEAN,
            allowNull: true, //null 허용 여부
        },
    }, {
        timestamps: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
    return user;
};