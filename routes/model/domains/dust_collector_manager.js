//집진기 탈진관리
module.exports = (sequelize, DataTypes) => {
    const dust_collector_manager = sequelize.define('dust_collector_manager', {
        port_control: {
            type: DataTypes.BOOLEAN,
            allowNull: false, //null 허용 여부,
        },
        port_monitoring: {
            type: DataTypes.BOOLEAN,
            allowNull: false, //null 허용 여부,
        },
        type_control: {
            type: DataTypes.BOOLEAN,
            allowNull: false, //null 허용 여부
        },
        type_monitoring: {
            type: DataTypes.BOOLEAN,
            allowNull: false, //null 허용 여부
        },
        idle_option: {
            type: DataTypes.BOOLEAN,
            allowNull: false, //null 허용 여부
        },
        idle_seconds: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false, //null 허용 여부
        },
        stop_option: {
            type: DataTypes.BOOLEAN,
            allowNull: false, //null 허용 여부,
        },
        stop_seconds: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false, //null 허용 여부,
        },
        chambers: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false, //null 허용 여부,
        },
        comment:{
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, {
        timestamps: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
    return dust_collector_manager;
};