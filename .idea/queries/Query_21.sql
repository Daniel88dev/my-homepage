SELECT COUNT(r.request_id)
FROM requests AS r
WHERE r.request_status = 'OPEN' OR r.request_status = 'UPDATED';