load data infile 'exercises.csv'
insert into table exercises
fields terminated by "~" optionally enclosed by '"'
(exercise_id, detail_id, exercise_name, equipment, utility, mechanics, muscle_force, preparation, execution, comments, img)