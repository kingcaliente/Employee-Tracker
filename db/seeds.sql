USE business;

INSERT INTO department(department_name, roles_id)
VALUES 
('Meat', '1'),
('Dairy','2'),
('GM','3'),
('Grocery','4'),
('Reciving','5');

INSERT INTO roles(title, salary, department_id)
VALUES
('Heavyweight Champion', 32000, 1),
('International Champion', 20000, 2),
('GM Manager', 28000, 3),
('Tag Team Champion', 23000, 4),
('Intercontinental Champion', 38000, 5); 

INSERT INTO employees(id, first_name, last_name, roles_id, manager_id)
VALUES
(1, 'Luis', 'Pardo', '1', '1'),
(2, 'Dante', 'Martin', '2', '2'),
(3, 'Jon', 'Moxley', '3', '3'),
(4, 'Maxwell', 'Freedman', '4', '4'),
(5,'Wheeler', 'Yuta', '5', '5'),
(6, 'Orange', 'Cassidy','1', '1'),
(7, 'Kenny', 'Omega','2', '2');

