-- Fix security issues: Update all functions to have proper search_path settings
-- This prevents SQL injection attacks by ensuring functions use a stable search path

-- Update update_updated_at_column function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$;

-- Update create_admin_user function
CREATE OR REPLACE FUNCTION public.create_admin_user(user_email text)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $function$
DECLARE
  new_user_id uuid;
BEGIN
  -- This function will be called after the user is created in auth.users
  -- For now, we'll just return a placeholder
  RETURN gen_random_uuid();
END;
$function$;

-- Update handle_new_user function
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $function$
BEGIN
  INSERT INTO public.profiles (id, full_name, email)
  VALUES (
    NEW.id, 
    NEW.raw_user_meta_data->>'full_name',
    NEW.email
  );
  RETURN NEW;
END;
$function$;

-- Update is_admin function
CREATE OR REPLACE FUNCTION public.is_admin(user_id_to_check uuid DEFAULT auth.uid())
RETURNS boolean
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path = ''
AS $function$
BEGIN
  -- This function runs with definer rights, bypassing RLS
  RETURN EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE user_id = user_id_to_check AND is_active = true
  );
END;
$function$;

-- Update handle_updated_at function
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$;