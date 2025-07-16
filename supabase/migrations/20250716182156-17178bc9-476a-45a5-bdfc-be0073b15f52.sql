-- Create storage buckets for images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES 
  ('gallery-images', 'gallery-images', true, 52428800, ARRAY['image/jpeg', 'image/png', 'image/webp']),
  ('story-images', 'story-images', true, 52428800, ARRAY['image/jpeg', 'image/png', 'image/webp']),
  ('blog-images', 'blog-images', true, 52428800, ARRAY['image/jpeg', 'image/png', 'image/webp'])
ON CONFLICT (id) DO NOTHING;

-- Create storage policies for gallery images
CREATE POLICY "Gallery images are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'gallery-images');

CREATE POLICY "Anyone can upload gallery images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'gallery-images');

-- Create storage policies for story images
CREATE POLICY "Story images are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'story-images');

CREATE POLICY "Anyone can upload story images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'story-images');

-- Create storage policies for blog images
CREATE POLICY "Blog images are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'blog-images');

CREATE POLICY "Anyone can upload blog images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'blog-images');

-- Create gallery_images table to store gallery metadata
CREATE TABLE IF NOT EXISTS public.gallery_images (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  storage_path TEXT NOT NULL,
  alt_text TEXT NOT NULL,
  category TEXT NOT NULL,
  location TEXT,
  story TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on gallery_images
ALTER TABLE public.gallery_images ENABLE ROW LEVEL SECURITY;

-- Create policies for gallery_images
CREATE POLICY "Gallery images are publicly readable" 
ON public.gallery_images 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can manage gallery images" 
ON public.gallery_images 
FOR ALL 
USING (true);

-- Create trigger for updated_at
CREATE TRIGGER update_gallery_images_updated_at
  BEFORE UPDATE ON public.gallery_images
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Update existing stories table to include image_storage_path
ALTER TABLE public.stories 
ADD COLUMN IF NOT EXISTS image_storage_path TEXT;

-- Update existing blog_posts table to include image_storage_path  
ALTER TABLE public.blog_posts 
ADD COLUMN IF NOT EXISTS image_storage_path TEXT;