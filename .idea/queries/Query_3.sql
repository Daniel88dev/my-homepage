SELECT COUNT(r.request_id), u.user_name
FROM requests AS r
LEFT JOIN users AS u ON u.id = r.resp_person
WHERE r.request_status = 'OPEN' OR r.request_status = 'UPDATED'
GROUP BY u.user_name;