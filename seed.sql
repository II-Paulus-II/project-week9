CREATE TABLE pw9_users ( id SERIAL PRIMARY KEY, clerk_user_id VARCHAR(255) NOT NULL, username TEXT, bio TEXT);

CREATE TABLE pw9_posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  target INTEGER NOT NULL REFERENCES pw9_users(id),
  target_is_enemy BOOLEAN NOT NULL,
  author_id INTEGER NOT NULL REFERENCES pw9_users(id)
);
