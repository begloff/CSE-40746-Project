create table detail_muscles
    (detail_id number(3),
    general_id number(2),
    other_names varchar(60),
    muscle_heads varchar(200),
    related_muscles varchar(70),
    comments varchar(2000),
    img varchar(150),
    constraint detail_idpk primary key (detail_id),
    constraint detail_idpos check(detail_id > 0),
    constraint general_idfk foreign key (general_id) references general_muscles (general_id)
    );