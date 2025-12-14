SELECT eh.id, eh.year, eh.month, eh.total_efficiency
FROM efficiency_history AS eh
ORDER BY id DESC
LIMIT 12;