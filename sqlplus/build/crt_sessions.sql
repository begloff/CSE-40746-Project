create table sessions
    (session_id number(10),
    sdate date not null,
    workout_type varchar(100) not null,
    user_id number(6),
    name varchar(100),
    constraint session_idpk primary key (session_id),
    constraint session_idpos check(session_id > 0),
    constraint sessions_user_idfk foreign key (user_id) references users (user_id)
    );


create sequence sessions_id_seq start with 1;