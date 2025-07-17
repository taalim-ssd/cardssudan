// Script to transfer images from public folder to Supabase storage buckets
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

const supabaseUrl = 'https://upwwipecvydtyngnudfy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwd3dpcGVjdnlkdHluZ251ZGZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0OTM4NTgsImV4cCI6MjA2NTA2OTg1OH0.IGbgfc6FJKePHIKKd9qp2yTWB2zjXp5cpFDsTTAUXw4';

const supabase = createClient(supabaseUrl, supabaseKey);

// List of images to transfer from public/lovable-uploads/
const images = [
  '058ca8b1-2575-4677-8e49-f3cce249d0b0.png',
  '0a381cab-b666-4974-bf27-76f88701ecec.png',
  '18065890-ca1d-417c-8a2f-812b97eb3c3f.png',
  '1c6a16b6-2d75-43d7-947f-1ee7664f8eb5.png',
  '1cdb20c3-b72d-4410-8367-447669cac1d3.png',
  '1e454688-5ea2-4d3c-afd7-7a717f008a38.png',
  '2372c380-1e7f-4e91-8b2f-1c76730ac09c.png',
  '28a14471-0cd0-458a-a3d7-acc4378ce4b1.png',
  '2a687e30-1baa-434c-a933-2cde06dae39f.png',
  '2d77b13f-d304-4fdd-b257-a1056e5781c6.png',
  '2d891487-f50a-4faa-b536-902fc37f142a.png',
  '3a99b15a-11cd-4f0d-9328-4e41df0b3a4a.png',
  '3b82f5c3-1c9e-4d8c-9c28-c1ccbe7de77b.png',
  '5d0a4f3a-1e7b-4c5c-8609-a8b8ad2bf573.png',
  '5d2017ce-b48b-4324-a195-b5d40538fd4a.png',
  '5d36f115-30a2-4b2a-b2d9-ebccbb46c7d0.png',
  '6ec63915-221d-4322-9674-b06712028084.png',
  '704d4949-6a97-4f68-b782-465dd3a9e61e.png',
  '7125d47e-f8b6-4ce7-b455-a0ec9c418627.png',
  '76774f51-468d-46a9-9756-e9a1ee2ce1e3.png',
  '7e77a94c-07f5-450c-a535-0fe58e161bd9.png',
  '82be0de1-f734-4588-b729-2895d2a01014.png',
  '95428baa-b2f2-42dc-a222-56d36f1f1c14.png',
  '989143b2-4bef-44dd-af20-72164ae91801.png',
  '9bec6d44-5bfe-4c63-aaa4-3e3de495e60e.png',
  '9c423eb3-f17b-4e9d-a07c-855ece0e0ef2.png',
  '9cfed559-6e00-4c70-9738-a698dfc629ec.png',
  'a021a960-9509-4547-860c-69682c6adc9e.png',
  'a1d51629-89a7-4160-bbc2-c3b75b2725f9.png',
  'b1a33c9e-52b9-47dd-b4ed-89138b92e9c0.png',
  'b365df88-4601-4cf3-99ce-8900d5aa39fa.png',
  'b972445d-ae0b-4a40-99c1-d7cd9c2962f2.png',
  'bf7c1f2b-d2d4-4b03-a108-f223289776fe.png',
  'c492242c-94f0-490c-82c6-288564a363f4.png',
  'ca9d0e12-7c58-4ab8-85bd-212bd29f787e.png',
  'ce7d0cf1-5c4e-43a5-8efe-b7d263303ee8.png',
  'd3a7f42f-f187-419a-9a1c-4be4b201a37f.png',
  'd8471b86-ab36-4030-86d5-0b331cfb292c.png',
  'ddb90a65-09c6-4d66-8e47-167f6bd19c6b.png',
  'dfcb6968-46d0-4bca-b81a-55af1420d366.png',
  'dfdcc7b8-d2f2-4c31-9fde-befb2fae0326.png',
  'e200fbed-1014-4ab9-ab6e-8d76106dd2be.png',
  'e24492a5-4a03-4120-b42e-d5dd236858c5.png',
  'e5975fb9-cf6a-468a-bfa3-bf4cc9795823.png',
  'edac3eb8-658d-4a51-93c1-76d811025c33.png',
  'ffb0784f-027e-4b2e-bd2f-11698e0250fb.png'
];

async function transferImages() {
  console.log('Starting image transfer...');
  
  // Transfer first 10 images to gallery-images bucket
  for (let i = 0; i < 10 && i < images.length; i++) {
    const imageName = images[i];
    const filePath = path.join('public', 'lovable-uploads', imageName);
    
    if (fs.existsSync(filePath)) {
      const fileBuffer = fs.readFileSync(filePath);
      const { data, error } = await supabase.storage
        .from('gallery-images')
        .upload(imageName, fileBuffer, {
          contentType: 'image/png',
          upsert: true
        });
      
      if (error) {
        console.error(`Error uploading ${imageName} to gallery:`, error);
      } else {
        console.log(`✓ Uploaded ${imageName} to gallery-images`);
      }
    }
  }
  
  // Transfer next 10 images to story-images bucket
  for (let i = 10; i < 20 && i < images.length; i++) {
    const imageName = images[i];
    const filePath = path.join('public', 'lovable-uploads', imageName);
    
    if (fs.existsSync(filePath)) {
      const fileBuffer = fs.readFileSync(filePath);
      const { data, error } = await supabase.storage
        .from('story-images')
        .upload(imageName, fileBuffer, {
          contentType: 'image/png',
          upsert: true
        });
      
      if (error) {
        console.error(`Error uploading ${imageName} to stories:`, error);
      } else {
        console.log(`✓ Uploaded ${imageName} to story-images`);
      }
    }
  }
  
  // Transfer next 10 images to blog-images bucket
  for (let i = 20; i < 30 && i < images.length; i++) {
    const imageName = images[i];
    const filePath = path.join('public', 'lovable-uploads', imageName);
    
    if (fs.existsSync(filePath)) {
      const fileBuffer = fs.readFileSync(filePath);
      const { data, error } = await supabase.storage
        .from('blog-images')
        .upload(imageName, fileBuffer, {
          contentType: 'image/png',
          upsert: true
        });
      
      if (error) {
        console.error(`Error uploading ${imageName} to blog:`, error);
      } else {
        console.log(`✓ Uploaded ${imageName} to blog-images`);
      }
    }
  }
  
  // Transfer next 10 images to activity-images bucket
  for (let i = 30; i < 40 && i < images.length; i++) {
    const imageName = images[i];
    const filePath = path.join('public', 'lovable-uploads', imageName);
    
    if (fs.existsSync(filePath)) {
      const fileBuffer = fs.readFileSync(filePath);
      const { data, error } = await supabase.storage
        .from('activity-images')
        .upload(imageName, fileBuffer, {
          contentType: 'image/png',
          upsert: true
        });
      
      if (error) {
        console.error(`Error uploading ${imageName} to activities:`, error);
      } else {
        console.log(`✓ Uploaded ${imageName} to activity-images`);
      }
    }
  }
  
  // Transfer remaining images to media bucket
  for (let i = 40; i < images.length; i++) {
    const imageName = images[i];
    const filePath = path.join('public', 'lovable-uploads', imageName);
    
    if (fs.existsSync(filePath)) {
      const fileBuffer = fs.readFileSync(filePath);
      const { data, error } = await supabase.storage
        .from('media')
        .upload(imageName, fileBuffer, {
          contentType: 'image/png',
          upsert: true
        });
      
      if (error) {
        console.error(`Error uploading ${imageName} to media:`, error);
      } else {
        console.log(`✓ Uploaded ${imageName} to media`);
      }
    }
  }
  
  console.log('Image transfer completed!');
}

// Run the transfer
transferImages().catch(console.error);