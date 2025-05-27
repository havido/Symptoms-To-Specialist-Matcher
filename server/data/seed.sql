CREATE TABLE symptoms (id INTEGER PRIMARY KEY, name TEXT);
CREATE TABLE specialists (id INTEGER PRIMARY KEY, name TEXT, description TEXT);
CREATE TABLE symptom_specialist_map (symptom_id INTEGER, specialist_id INTEGER);

INSERT INTO symptoms (name) VALUES
('chest pain'), ('headache'), ('fatigue'), ('rash'), ('shortness of breath');

INSERT INTO specialists (name, description) VALUES
('Cardiologist', 'Heart and circulation specialist'),
('Neurologist', 'Brain and nerve specialist'),
('Dermatologist', 'Skin and hair specialist'),
('Pulmonologist', 'Lung and breathing specialist');

INSERT INTO symptom_specialist_map VALUES
(1, 1), (2, 2), (3, 1), (4, 3), (5, 4);
