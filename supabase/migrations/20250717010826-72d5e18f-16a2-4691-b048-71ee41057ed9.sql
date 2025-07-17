-- Update Mary Natede's story to use an image from Supabase storage
UPDATE public.stories 
SET image_storage_path = 'mary-natede-farm-work.jpg'
WHERE title = 'Mary Natede''s Story';