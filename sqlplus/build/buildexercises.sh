echo exit | sqlplus timmy/timmy @crt_all

sqlldr timmy/timmy control="general_muscles.ctl"

sqlldr timmy/timmy control="detail_muscles.ctl"

sqlldr timmy/timmy control="exercises.ctl"
