CREATE TABLE status_notifications (
    id SERIAL PRIMARY KEY,
    received_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    client_id TEXT NOT NULL,
    status_id TEXT NOT NULL,
    status TEXT NOT NULL,
    payload JSONB
);