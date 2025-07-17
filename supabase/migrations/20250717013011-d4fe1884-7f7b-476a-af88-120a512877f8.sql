-- Update Mary Natede's story to use the new image
UPDATE public.stories 
SET 
  image_storage_path = 'mary-natede-story.png',
  featured_image_url = NULL
WHERE title = 'Mary Natede''s Story';