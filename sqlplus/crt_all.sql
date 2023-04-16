prompt *** Creating general_muscles ***
drop table general_muscles cascade constraints;
@crt_general_muscles

prompt *** Creating detail_muscles ***
drop table detail_muscles cascade constraints;
@crt_detail_muscles

prompt *** Creating exercises ***
drop table exercises cascade constraints;
@crt_exercises

prompt *** Creating users ***
drop table users cascade constraints;
drop sequence user_id_seq;
@crt_users
@crt_users_trigger
