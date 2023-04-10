load data infile 'detail-muscles.csv'
insert into table detail_muscles
fields terminated by "~" optionally enclosed by '"'
(muscle_name, detail_id, general_id, other_names, muscle_heads, related_muscles, comments, img)