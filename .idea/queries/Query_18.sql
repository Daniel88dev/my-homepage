SELECT max(id) FROM upg_list;

SELECT pg_get_serial_sequence('upg_list', 'id');

SELECT setval('upg_list_id_seq', 2402);