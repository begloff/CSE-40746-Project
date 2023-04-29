create table exercises
    (exercise_id number(5),
    detail_id number(3),
    exercise_name varchar(80),
    equipment varchar(25),
    utility varchar(20),
    mechanics varchar(10),
    muscle_force varchar(20),
    preparation varchar(750),
    execution varchar(750),
    comments varchar(1050),
    img varchar(150),
    preferability int,
    totalSearches number(25),
    constraint exercise_idpk primary key (exercise_id),
    constraint exercise_idpos check(exercise_id > 0),
    constraint detail_idfk foreign key (detail_id) references detail_muscles (detail_id)
    );