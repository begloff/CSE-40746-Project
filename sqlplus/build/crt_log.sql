create table log
    (workout_id number(10),
    exercise_id number(5),
    session_id number(10),
    reps number(3),
    sets number(3),
    constraint workout_idpk primary key (workout_id),
    constraint workout_idpos check(workout_id > 0),
    constraint log_exercise_idfk foreign key (exercise_id) references exercises (exercise_id),
    constraint log_session_idfk foreign key (session_id) references sessions (session_id)
    );


create sequence workout_id_seq start with 1;