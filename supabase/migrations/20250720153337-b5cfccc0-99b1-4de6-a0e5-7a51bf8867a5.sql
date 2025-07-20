-- Insert logo into media bucket for Navigation
INSERT INTO public.media_files (file_name, file_path, mime_type, alt_text) 
VALUES ('card-logo.png', 'logo/card-logo.png', 'image/png', 'CARD Logo');

-- Insert hero and program images for Index page into media bucket
INSERT INTO public.media_files (file_name, file_path, mime_type, alt_text) 
VALUES 
  ('hero-background.png', 'hero/hero-background.png', 'image/png', 'Hero background image'),
  ('agricultural-development.png', 'programs/agricultural-development.png', 'image/png', 'Community-driven agricultural development and water infrastructure in South Sudan'),
  ('food-security.png', 'programs/food-security.png', 'image/png', 'Food Security');

-- Insert program images for WhatWeDo page into media bucket
INSERT INTO public.media_files (file_name, file_path, mime_type, alt_text) 
VALUES 
  ('agricultural-work.png', 'programs/agricultural-work.png', 'image/png', 'Agricultural development work in South Sudan'),
  ('education-training.png', 'programs/education-training.png', 'image/png', 'Education and training session in South Sudan'),
  ('livestock-programs.png', 'programs/livestock-programs.png', 'image/png', 'Livestock and pastoralism programs in South Sudan'),
  ('water-infrastructure.png', 'programs/water-infrastructure.png', 'image/png', 'Community water infrastructure development project in Lowi Simon, Kapoeta East'),
  ('market-access.png', 'programs/market-access.png', 'image/png', 'Community market access programs'),
  ('capacity-building.png', 'programs/capacity-building.png', 'image/png', 'Capacity building and community training programs');

-- Insert profile images for WhoWeAre page into media bucket
INSERT INTO public.media_files (file_name, file_path, mime_type, alt_text) 
VALUES 
  ('alphonse-lotunyeny.png', 'profiles/alphonse-lotunyeny.png', 'image/png', 'Alphonse Lotunyeny'),
  ('emmy-lonyia.png', 'profiles/emmy-lonyia.png', 'image/png', 'Emmy Lonyia'),
  ('jemimah-lomongin.png', 'profiles/jemimah-lomongin.png', 'image/png', 'Jemimah Lomongin');

-- Insert community images for WhereWeWork page into media bucket
INSERT INTO public.media_files (file_name, file_path, mime_type, alt_text) 
VALUES 
  ('community-meetings.png', 'community/community-meetings.png', 'image/png', 'Community meetings and engagement');

-- Insert story/blog related images into media bucket
INSERT INTO public.media_files (file_name, file_path, mime_type, alt_text) 
VALUES 
  ('community-engagement.png', 'stories/community-engagement.png', 'image/png', 'Community engagement and training'),
  ('community-gathering.png', 'stories/community-gathering.png', 'image/png', 'Community gathering in South Sudan'),
  ('story-fallback.png', 'stories/story-fallback.png', 'image/png', 'Story fallback image');