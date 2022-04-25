DROP TABLE IF EXISTS exercise_set CASCADE;
DROP TABLE IF EXISTS exercise_group CASCADE;
DROP TABLE IF EXISTS exercise_workout CASCADE;

CREATE TABLE exercise_workouts (
	workout_id serial PRIMARY KEY,
	name varchar(255)
);

CREATE TABLE exercise_groups (
	group_id serial PRIMARY KEY,
	name varchar(255),
	workout_id int REFERENCES exercise_workouts(workout_id)
);

CREATE TABLE exercise_sets (
	set_id serial PRIMARY KEY,
	weight int,
	reps int,
	group_id int REFERENCES exercise_groups(group_id)
);

INSERT INTO
	exercise_workouts (name)
VALUES
	('full body day 1'),
	('full body day 2'),
	('full body day 3');
	
INSERT INTO
	exercise_groups (name, workout_id)
VALUES
	('Bench Press', 1),
	('Squat', 1),
	('Deadlift', 1),
	
	('Bench Press', 2),
	('Squat', 2),
	('Deadlift', 2),
	
	('Bench Press', 3),
	('Squat', 3),
	('Deadlift', 3);
	
INSERT INTO
	exercise_sets (weight, reps, group_id)
VALUES
	(90, 5, 1),
	(90, 5, 1),
	(90, 5, 1),
	
	(130, 5, 2),
	(130, 5, 2),
	(130, 5, 2),
	
	(140, 5, 3),
	(140, 5, 3),
	(140, 5, 3),
	
	(90, 5, 4),
	(90, 5, 4),
	(90, 5, 4),
	
	(130, 5, 5),
	(130, 5, 5),
	(130, 5, 5),
	
	(140, 5, 6),
	(140, 5, 6),
	(140, 5, 6),
	
	(90, 5, 7),
	(90, 5, 7),
	(90, 5, 7),
	
	(130, 5, 8),
	(130, 5, 8),
	(130, 5, 8),
	
	(140, 5, 9),
	(140, 5, 9),
	(140, 5, 9);
	