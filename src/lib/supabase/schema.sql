-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm"; -- For text search

-- Drop existing tables if they exist
DROP TABLE IF EXISTS chat_messages;
DROP TABLE IF EXISTS characters;

-- Characters table
CREATE TABLE characters (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  personality TEXT NOT NULL,
  speaking_style TEXT NOT NULL,
  background TEXT NOT NULL,
  image_url TEXT NOT NULL
);

-- Chat messages table
CREATE TABLE chat_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  character_id UUID NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant')),
  content TEXT NOT NULL
);

-- Indexes for better query performance
CREATE INDEX idx_characters_created_at ON characters(created_at);
CREATE INDEX idx_chat_messages_character_id ON chat_messages(character_id);

-- Add RLS policies
ALTER TABLE characters ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access to characters"
  ON characters FOR SELECT
  USING (true);

CREATE POLICY "Allow public read access to chat messages"
  ON chat_messages FOR SELECT
  USING (true);

-- Allow public insert access
CREATE POLICY "Allow public insert to characters"
  ON characters FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow public insert to chat messages"
  ON chat_messages FOR INSERT
  WITH CHECK (true);

-- Allow public delete access
CREATE POLICY "Allow public delete from characters"
  ON characters FOR DELETE
  USING (true);

CREATE POLICY "Allow public delete from chat messages"
  ON chat_messages FOR DELETE
  USING (true);

-- Create functions for better querying
CREATE OR REPLACE FUNCTION get_recent_chat_messages(
  p_character_id UUID,
  p_limit INTEGER DEFAULT 50
)
RETURNS SETOF chat_messages AS $$
BEGIN
  RETURN QUERY
  SELECT *
  FROM chat_messages
  WHERE character_id = p_character_id
  ORDER BY created_at DESC
  LIMIT p_limit;
END;
$$ LANGUAGE plpgsql;