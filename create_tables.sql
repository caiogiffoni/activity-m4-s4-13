CREATE TABLE IF NOT EXISTS users(
	id UUID PRIMARY KEY,
  	email VARCHAR(180) NOT NULL,
  	name VARCHAR(256) NOT NULL UNIQUE,
  	password VARCHAR(120) NOT NULL
);