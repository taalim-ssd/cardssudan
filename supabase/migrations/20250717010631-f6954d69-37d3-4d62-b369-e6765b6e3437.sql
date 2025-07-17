-- Add unique constraint for content blocks to enable upsert functionality
ALTER TABLE public.content_blocks 
ADD CONSTRAINT content_blocks_key_page_path_unique 
UNIQUE (key, page_path);