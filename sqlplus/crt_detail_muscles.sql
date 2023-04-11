create table detail_muscles
    (muscle_name varchar(100),
    detail_id number(3),
    general_id number(2),
    other_names varchar2(60),
    muscle_heads varchar2(200),
    related_muscles varchar2(70),
    comments varchar2(2000),
    img varchar2(1000),
    constraint detail_idpk primary key (detail_id),
    constraint detail_idpos check(detail_id > 0),
    constraint general_idfk foreign key (general_id) references general_muscles (general_id)
    );