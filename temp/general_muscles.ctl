load data infile 'general-muscles.csv'
insert into table general_muscles
fields terminated by "~" optionally enclosed by '"'
(muscle_group, general_id)