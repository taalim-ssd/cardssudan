-- Update all stories to use working featured image URLs and clear the invalid storage path
UPDATE public.stories 
SET 
  image_storage_path = NULL,
  featured_image_url = CASE 
    WHEN title = 'Mary Natede''s Story' THEN 'https://images.unsplash.com/photo-1594736797933-d0c19e8a7d93?w=600&h=400&fit=crop'
    WHEN title = 'Women''s Cooperative Feeds the Community' THEN 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop'
    WHEN title = 'Youth Return to Farming' THEN 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop'
    WHEN title = 'Solar-Powered Irrigation Success' THEN 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400&h=300&fit=crop'
    WHEN title = 'Livestock Health Program Impact' THEN 'https://images.unsplash.com/photo-1586771107045-b791e006b42a?w=400&h=300&fit=crop'
    WHEN title = 'Market Access Transforms Lives' THEN 'https://images.unsplash.com/photo-1566754089908-ac581afe4b96?w=400&h=300&fit=crop'
    ELSE featured_image_url
  END;