-- Warner Bros. ...
-- Buckingham Palace. ...
-- Tower of London. ...
-- Emirates Air Line cable car. IFS Cloud Cable Car. ...
-- Westminster Abbey. Westminster Abbey. ...
-- SEA LIFE London. SEA LIFE London aquarium. ...
-- The View From The Shard. The View from The Shard. ...
-- Shrek's Adventure! London.

PRAGMA foreign_keys = OFF;

BEGIN;

INSERT INTO locations VALUES

(1, 'Warner Bros', 3),
(2, 'Buckingham Palace', 4.2),
(3, 'Tower of London', 5),
(4, 'Emirates Air Line cable car', 1.5),
(5, 'Westminster Abbey', 1.8),
(6, 'SEA LIFE London', 5),
(7, 'The View From The Shard', 4.7),
(8, 'Shrek''s Adventure!', 6)

ON CONFLICT DO NOTHING;

INSERT INTO posts VALUES 

(1, 'Sumithra', 6, 5, 'Beautiful!', '2022-09-16 01:01:01'),
(2, 'Joe', 6, 3, 'Overrated', '2022-09-15 11:10:07'),
(3, 'Abdullah', 6, 4, 'Amazing place, I guess','2022-09-14 23:59:59' ),
(4, 'Anonymous', 3, 5, 'It''s a good place', '2022-05-13 13:00:59'),
(5, 'Paz', 8, 5, 'Nice staff', '2021-04-10 12:21:01')

ON CONFLICT(id) DO NOTHING;

COMMIT;

-- turn this back on now we're done
PRAGMA foreign_keys = ON;