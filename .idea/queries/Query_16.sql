SELECT ul.upg_no, ul.upg_name, SUM(ar.time) as time_sum, SUM(ar.time * ot.option_type_ratio) as time_effi_sum
FROM upg_list as ul
         LEFT JOIN aps_records AS ar ON ar.upg_id = ul.id
         LEFT JOIN option_types AS ot ON ot.id = ar.ratio_id
WHERE ul.model_id = 11
GROUP BY ul.upg_no, ul.upg_name