prompt *** Creating users ***
drop table users cascade constraints;
drop sequence user_id_seq;
@crt_users
@crt_users_trigger