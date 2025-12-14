SELECT ar.id, ar.aps_no, ar.aps_name, lt.sub_line_name, s.station_2, s.side_2, ul.id AS upg_id, ul.upg_no, ul.upg_name
FROM aps_records AS ar
LEFT JOIN upg_list AS ul ON ar.upg_id = ul.id
LEFT JOIN stations AS s ON ar.id = s.id
LEFT JOIN line_table AS lt ON s.line_2 = lt.id
WHERE ar.model_id = 5
ORDER BY ar.id;