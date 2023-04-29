prompt *** Creating general_muscles ***
drop table general_muscles cascade constraints;
@crt_general_muscles

prompt *** Creating detail_muscles ***
drop table detail_muscles cascade constraints;
@crt_detail_muscles

prompt *** Creating exercises ***
drop table exercises cascade constraints;
@crt_exercises

-- These are comented out because a csv file would need to be generated to load them into DB

-- prompt *** Creating users ***
-- drop table users cascade constraints;
-- drop sequence user_id_seq;
-- @crt_users
-- @crt_users_trigger

-- prompt *** Creating sessions ***
-- drop table sessions cascade constraints;
-- drop sequence sessions_id_seq;
-- @crt_sessions
-- @crt_sessions_trigger

-- prompt *** Creating log ***
-- drop table log cascade constraints;
-- drop sequence workout_id_seq;
-- @crt_log
-- @crt_log_trigger