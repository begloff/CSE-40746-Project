create table general_muscles
    (
        muscle_group varchar(30),
        general_id number(2),
        constraint gen_idpos check(general_id > 0),
        constraint gen_idpk primary key (general_id)
    );