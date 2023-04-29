create or replace trigger increment_id
before insert on users
for each row
begin
    select user_id_seq.NEXTVAL
    into :new.user_id
    from dual;
end;
/