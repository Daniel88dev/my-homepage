SELECT r.request_id, request_u.user_name AS request_person_name, r.request_person AS request_person_id,
       resp_u.user_name AS responsible_person_name, r.resp_person AS responsible_person_id,
       r.request_detail, r.request_date, r.update_date, ar.id AS aps_id, ar.aps_no, ar.aps_name,
       r.team, r.system, r.line, m.model_name, r.request_status
FROM requests AS r
         LEFT JOIN users AS resp_u ON resp_u.id = r.resp_person
         LEFT JOIN users AS request_u ON request_u.id = r.request_person
         LEFT JOIN aps_records AS ar ON ar.id = r.aps_id
         LEFT JOIN models AS m ON m.id = r.model_id
ORDER BY r.request_id DESC
LIMIT 1000;

SELECT r.request_id, request_u.user_name AS request_person_name, request_u.id AS request_person_id,
       resp_u.user_name AS responsible_person_name, resp_u.id AS responsible_person_id,
       r.request_detail, r.request_date, r.update_date, ar.id AS aps_id, ar.aps_no, ar.aps_name,
       r.team, r.system, r.line, m.model_name, r.request_status
FROM requests AS r
         LEFT JOIN users AS resp_u ON resp_u.id = r.resp_person
         LEFT JOIN users AS request_u ON request_u.id = r.request_person
         LEFT JOIN aps_records AS ar ON ar.id = r.aps_id
         LEFT JOIN models AS m ON m.id = r.model_id
ORDER BY r.request_date;