create table users
(
    id        int auto_increment
        primary key,
    user_id   varchar(30)  not null,
    user_pw   varchar(100) not null,
    createdAt datetime     not null,
    updatedAt datetime     not null,
    constraint user_id
        unique (user_id)
) charset = utf8mb3;

-- auto-generated definition
create table dust_collector_managers
(
    id              int auto_increment
        primary key,
    port_control    tinyint(1) not null,
    port_monitoring tinyint(1) not null,
    type_control    tinyint(1) not null,
    type_monitoring tinyint(1) not null,
    idle_option     tinyint(1) not null,
    idle_seconds    int unsigned not null,
    stop_option     tinyint(1) not null,
    stop_seconds    int unsigned not null,
    chambers        int unsigned not null,
    comment         text null
) charset = utf8mb3;

-- auto-generated definition
create table users
(
    id        int auto_increment
        primary key,
    user_id   varchar(30)  not null,
    user_pw   varchar(100) not null,
    createdAt datetime     not null,
    updatedAt datetime     not null,
    constraint user_id
        unique (user_id)
) charset = utf8mb3;



INSERT INTO dev_db.`dust-collector-operations` (id, mode, status, control)
VALUES (0, 1, null, null);
INSERT INTO dev_db.`dust-collector-operations` (id, mode, status, control)
VALUES (1, 0, 1, 1);
INSERT INTO dev_db.`dust-collector-operations` (id, mode, status, control)
VALUES (2, 0, 2, 0);
INSERT INTO dev_db.`dust-collector-operations` (id, mode, status, control)
VALUES (3, 0, 3, 0);
INSERT INTO dev_db.`dust-collector-operations` (id, mode, status, control)
VALUES (4, 0, 4, 0);

INSERT INTO dev_db.dust_collector_managers (id, port_control, port_monitoring, type_control, type_monitoring,
                                            idle_option, idle_seconds, stop_option, stop_seconds, chambers, comment)
VALUES (1, 1, 0, 1, 0, 1, 0, 0, 0, 0, null);

INSERT INTO dev_db.users (id, user_id, user_pw, createdAt, updatedAt)
VALUES (1, 'test', '1234', '2021-08-16 23:25:17', '2021-08-16 23:25:19');