SELECT eil.id, eil.part_number, eil.part_name
FROM end_item_list AS eil
WHERE model_id = 6 AND tightening_part = TRUE