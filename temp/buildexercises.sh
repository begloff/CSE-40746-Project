echo exit | sqlplus ben/ben @crt_all

sqlldr ben/ben control="detail_muscles.ctl"

sqlldr ben/ben control="general_muscles.ctl"

sqlldr ben/ben control="exercises.ctl"
