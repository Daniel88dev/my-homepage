SELECT max(id) FROM models;

SELECT pg_get_serial_sequence('models', 'id');

SELECT setval('models_id_seq', 11);