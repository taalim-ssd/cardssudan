import { supabase } from "@/integrations/supabase/client";

// Helper function to get Supabase storage URL
export const getStorageImageUrl = (bucketName: string, filePath: string, fallbackUrl?: string) => {
  if (!filePath) return fallbackUrl || '/placeholder.svg';
  
  // For now, return placeholder until images are uploaded to storage
  // TODO: Upload actual images to storage buckets
  return fallbackUrl || '/placeholder.svg';
  
  // Uncomment this when images are uploaded to storage:
  // const { data } = supabase.storage.from(bucketName).getPublicUrl(filePath);
  // return data.publicUrl;
};

// Helper function to get media file URL by path
export const getMediaFileUrl = async (filePath: string): Promise<string> => {
  try {
    const { data, error } = await supabase
      .from('media_files')
      .select('file_path')
      .eq('file_path', filePath)
      .single();
    
    if (error) {
      console.error('Error fetching media file:', error);
      return '/placeholder.svg';
    }
    
    return getStorageImageUrl('media', data.file_path);
  } catch (error) {
    console.error('Error in getMediaFileUrl:', error);
    return '/placeholder.svg';
  }
};

// Image mappings from public folder to storage paths
export const imageMap: Record<string, string> = {
  // Logo
  '/lovable-uploads/b6c0b34a-9d58-4849-82bf-aeb359fe8bb1.png': 'logo/card-logo.png',
  
  // Hero and Programs
  '/lovable-uploads/3b82f5c3-1c9e-4d8c-9c28-c1ccbe7de77b.png': 'hero/hero-background.png',
  '/lovable-uploads/b972445d-ae0b-4a40-99c1-d7cd9c2962f2.png': 'programs/agricultural-development.png',
  '/lovable-uploads/7125d47e-f8b6-4ce7-b455-a0ec9c418627.png': 'programs/food-security.png',
  
  // WhatWeDo Programs
  '/lovable-uploads/28a14471-0cd0-458a-a3d7-acc4378ce4b1.png': 'programs/agricultural-work.png',
  '/lovable-uploads/e5975fb9-cf6a-468a-bfa3-bf4cc9795823.png': 'programs/education-training.png',
  '/lovable-uploads/5d0a4f3a-1e7b-4c5c-8609-a8b8ad2bf573.png': 'programs/livestock-programs.png',
  '/lovable-uploads/5d2017ce-b48b-4324-a195-b5d40538fd4a.png': 'programs/water-infrastructure.png',
  '/lovable-uploads/95428baa-b2f2-42dc-a222-56d36f1f1c14.png': 'programs/market-access.png',
  '/lovable-uploads/e24492a5-4a03-4120-b42e-d5dd236858c5.png': 'programs/capacity-building.png',
  
  // Profile images
  '/lovable-uploads/1c6a16b6-2d75-43d7-947f-1ee7664f8eb5.png': 'profiles/alphonse-lotunyeny.png',
  '/lovable-uploads/2372c380-1e7f-4e91-8b2f-1c76730ac09c.png': 'profiles/emmy-lonyia.png',
  '/lovable-uploads/ca9d0e12-7c58-4ab8-85bd-212bd29f787e.png': 'profiles/jemimah-lomongin.png',
  
  // Community
  '/lovable-uploads/9bec6d44-5bfe-4c63-aaa4-3e3de495e60e.png': 'community/community-meetings.png',
  
  // Stories/Blog
  '/lovable-uploads/704d4949-6a97-4f68-b782-465dd3a9e61e.png': 'stories/community-engagement.png',
  '/lovable-uploads/e200fbed-1014-4ab9-ab6e-8d76106dd2be.png': 'stories/story-fallback.png',
  '/lovable-uploads/2a687e30-1baa-434c-a933-2cde06dae39f.png': 'stories/story-fallback.png'
};

// Helper function to convert public URL to storage URL
export const convertToStorageUrl = (publicUrl: string): string => {
  const storagePath = imageMap[publicUrl];
  if (storagePath) {
    return getStorageImageUrl('media', storagePath, publicUrl);
  }
  return publicUrl; // fallback to original if not mapped
};