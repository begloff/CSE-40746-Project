create or replace trigger increment_workout_id
before insert on log
for each row
begin
    select workout_id_seq.NEXTVAL
    into :new.workout_id
    from dual;
end;
/