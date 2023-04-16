create table users
    (
        user_id number(6),
        user_email varchar(100),
        username varchar(100),
        constraint user_idpk primary key (user_id)
    );


create sequence user_id_seq start with 1;
