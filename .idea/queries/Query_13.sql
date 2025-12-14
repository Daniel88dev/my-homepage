SELECT ts.id,
       ts.line_id,
       ts.station,
       ts.side,
       ts.tool_type_id,
       ts.tool_used,
       lt.sub_line_name,
       tt.tool_model,
       tt.torque_min,
       tt.torque_max,
       tt.accuracy,
       tt.lifespan
FROM tightening_station AS ts
         LEFT JOIN line_table AS lt ON lt.id = ts.line_id
         LEFT JOIN tool_type AS tt on tt.id = ts.tool_type_id
WHERE line_id = 6