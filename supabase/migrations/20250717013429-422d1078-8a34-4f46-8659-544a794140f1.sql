-- Insert sample gallery images referencing the uploaded images
INSERT INTO public.gallery_images (storage_path, alt_text, category, location, story, display_order) VALUES
('058ca8b1-2575-4677-8e49-f3cce249d0b0.png', 'Community farming project', 'Agriculture', 'South Sudan', 'Local farmers working together to improve crop yields', 1),
('0a381cab-b666-4974-bf27-76f88701ecec.png', 'Water access project', 'Infrastructure', 'Juba', 'Clean water initiative bringing safe drinking water to rural communities', 2),
('18065890-ca1d-417c-8a2f-812b97eb3c3f.png', 'Education program', 'Education', 'Central Equatoria', 'Children attending classes in newly built school', 3),
('1c6a16b6-2d75-43d7-947f-1ee7664f8eb5.png', 'Healthcare outreach', 'Health', 'Eastern Equatoria', 'Mobile clinic providing medical services to remote areas', 4),
('1cdb20c3-b72d-4410-8367-447669cac1d3.png', 'Food distribution', 'Food Security', 'Warrap', 'Emergency food aid reaching families in need', 5),
('1e454688-5ea2-4d3c-afd7-7a717f008a38.png', 'Livestock program', 'Agriculture', 'Lakes', 'Cattle vaccination program protecting local herds', 6),
('2372c380-1e7f-4e91-8b2f-1c76730ac09c.png', 'Women empowerment', 'Gender', 'Western Equatoria', 'Women learning new skills through vocational training', 7),
('28a14471-0cd0-458a-a3d7-acc4378ce4b1.png', 'Youth engagement', 'Youth', 'Northern Bahr el Ghazal', 'Young people participating in peace building activities', 8),
('2a687e30-1baa-434c-a933-2cde06dae39f.png', 'Market access', 'Economic Development', 'Unity', 'Farmers selling produce at local market', 9),
('2d77b13f-d304-4fdd-b257-a1056e5781c6.png', 'Infrastructure development', 'Infrastructure', 'Upper Nile', 'Road construction connecting rural communities', 10);

-- Update some stories to use storage images
UPDATE public.stories 
SET image_storage_path = '2d891487-f50a-4faa-b536-902fc37f142a.png', featured_image_url = NULL
WHERE title = 'Women''s Cooperative Feeds the Community';

UPDATE public.stories 
SET image_storage_path = '3a99b15a-11cd-4f0d-9328-4e41df0b3a4a.png', featured_image_url = NULL
WHERE title = 'Youth Return to Farming';

UPDATE public.stories 
SET image_storage_path = '3b82f5c3-1c9e-4d8c-9c28-c1ccbe7de77b.png', featured_image_url = NULL
WHERE title = 'Solar-Powered Irrigation Success';

-- Update some blog posts to use storage images
UPDATE public.blog_posts 
SET image_storage_path = '5d0a4f3a-1e7b-4c5c-8609-a8b8ad2bf573.png', featured_image_url = NULL
WHERE title = 'Building Food Security Through Climate-Smart Agriculture';

UPDATE public.blog_posts 
SET image_storage_path = '5d2017ce-b48b-4324-a195-b5d40538fd4a.png', featured_image_url = NULL
WHERE title = 'Drought-Resistant Crops: A Game Changer for South Sudan';