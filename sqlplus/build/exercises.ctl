load data infile 'finalExercises.csv'
insert into table exercises
fields terminated by "~" optionally enclosed by '"'
(exercise_id, 
detail_id, 
exercise_name char(4000) NULLIF exercise_name=BLANKS, 
equipment char(4000) NULLIF equipment=BLANKS, 
utility char(4000) NULLIF utility=BLANKS, 
mechanics char(4000) NULLIF mechanics=BLANKS, 
muscle_force char(4000) NULLIF muscle_force=BLANKS, 
preparation char(4000) NULLIF preparation=BLANKS, 
execution char(4000) NULLIF execution=BLANKS, 
comments char(4000) NULLIF comments=BLANKS, 
img char(4000) NULLIF img=BLANKS,
preferability,
totalSearches)