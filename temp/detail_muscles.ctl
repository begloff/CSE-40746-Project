load data infile 'detail-muscles.csv'
insert into table detail_muscles
fields terminated by '~'
(muscle_name char(4000),
detail_id, 
general_id, 
other_names char(4000) NULLIF other_names=BLANKS, 
muscle_heads char(4000) NULLIF muscle_heads=BLANKS,
related_muscles char(4000) NULLIF related_muscles=BLANKS, 
comments char(4000) NULLIF comments=BLANKS, 
img char(4000) NULLIF img=BLANKS
)