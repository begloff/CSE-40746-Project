create or replace trigger increment_session_id
before insert on sessions
for each row
begin
    select sessions_id_seq.NEXTVAL
    into :new.session_id
    from dual;
end;
/