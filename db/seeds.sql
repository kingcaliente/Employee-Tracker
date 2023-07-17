USE business;

INSERT INTO departments(name)
VALUES 
('Meat'),
('Dairy'),
('GM'),
('Grocery'),
('Reciving');

INSERT INTO roles(title, salary, department_id)
VALUES
('Heavyweight Champion', 32000, 1),
('International Champion', 20000, 2),
('GM Manager', 28000, 3),
('Tag Team Champion', 23000, 4),
('Intercontinental Champion', 38000, 5); 

INSERT INTO employees(first_name, last_name, roles_id, manager_id)
VALUES
('Luis', 'Pardo', 1, 1),
('Dante', 'Martin', 2, 2),
('Jon', 'Moxley', 3, 3),
('Maxwell', 'Freedman', 4, 4),
('Wheeler', 'Yuta',5, '5'),
('Orange', 'Cassidy','1', '1'),
('Kenny', 'Omega','2', '2');

