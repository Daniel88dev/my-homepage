SELECT ar.id, ar.aps_no, ar.aps_name, ar.time, ot.option_type_ratio,
       ar.time * ot.option_type_ratio AS total_time, ar.aps_location, ot.option_type_name,
       lt.sub_line_name, ar.model_id, m.model_name, s.station_1 AS station,
       s.side_1 AS side, ar.tightening, ar.pe_confirmation, ar.is_deleted,
       lt.id AS sub_line_id, lt.line_name
FROM aps_records AS ar
         LEFT JOIN option_types AS ot ON ar.ratio_id = ot.id
         LEFT JOIN stations AS s ON ar.id = s.id
         LEFT JOIN line_table AS lt ON lt.id = s.line_1
         LEFT JOIN models AS m ON m.id = ar.model_id
WHERE ar.model_id IN (6, 7, 8, 9, 5) AND
    lt.line_name = 'T1';