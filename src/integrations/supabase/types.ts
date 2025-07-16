export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      activities: {
        Row: {
          activity_number: string | null
          activity_text: string
          category: string | null
          created_at: string
          id: string
          organization_id: string
        }
        Insert: {
          activity_number?: string | null
          activity_text: string
          category?: string | null
          created_at?: string
          id?: string
          organization_id: string
        }
        Update: {
          activity_number?: string | null
          activity_text?: string
          category?: string | null
          created_at?: string
          id?: string
          organization_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "activities_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organization_info"
            referencedColumns: ["id"]
          },
        ]
      }
      activity_images: {
        Row: {
          activity_id: string | null
          created_at: string
          description: string | null
          id: string
          storage_path: string
          updated_at: string
          uploaded_by: string | null
        }
        Insert: {
          activity_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          storage_path: string
          updated_at?: string
          uploaded_by?: string | null
        }
        Update: {
          activity_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          storage_path?: string
          updated_at?: string
          uploaded_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "activity_images_activity_id_fkey"
            columns: ["activity_id"]
            isOneToOne: false
            referencedRelation: "activities"
            referencedColumns: ["id"]
          },
        ]
      }
      admin_users: {
        Row: {
          created_at: string
          id: string
          is_active: boolean
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          author: string | null
          category: string | null
          content: string | null
          created_at: string
          excerpt: string | null
          featured_image_url: string | null
          id: string
          image_storage_path: string | null
          is_featured: boolean | null
          published_date: string
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          author?: string | null
          category?: string | null
          content?: string | null
          created_at?: string
          excerpt?: string | null
          featured_image_url?: string | null
          id?: string
          image_storage_path?: string | null
          is_featured?: boolean | null
          published_date?: string
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          author?: string | null
          category?: string | null
          content?: string | null
          created_at?: string
          excerpt?: string | null
          featured_image_url?: string | null
          id?: string
          image_storage_path?: string | null
          is_featured?: boolean | null
          published_date?: string
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      board_members: {
        Row: {
          created_at: string
          full_name: string
          id: string
          is_active: boolean | null
          organization_id: string
          position_order: number | null
          title: string
        }
        Insert: {
          created_at?: string
          full_name: string
          id?: string
          is_active?: boolean | null
          organization_id: string
          position_order?: number | null
          title: string
        }
        Update: {
          created_at?: string
          full_name?: string
          id?: string
          is_active?: boolean | null
          organization_id?: string
          position_order?: number | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "board_members_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organization_info"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
          name: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: number
          name: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      contact_info: {
        Row: {
          address: string | null
          contact_person: string | null
          created_at: string
          email_primary: string | null
          email_secondary: string | null
          id: string
          organization_id: string
          phone_number: string | null
        }
        Insert: {
          address?: string | null
          contact_person?: string | null
          created_at?: string
          email_primary?: string | null
          email_secondary?: string | null
          id?: string
          organization_id: string
          phone_number?: string | null
        }
        Update: {
          address?: string | null
          contact_person?: string | null
          created_at?: string
          email_primary?: string | null
          email_secondary?: string | null
          id?: string
          organization_id?: string
          phone_number?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contact_info_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organization_info"
            referencedColumns: ["id"]
          },
        ]
      }
      content_blocks: {
        Row: {
          content_data: Json
          content_type: string
          created_at: string
          id: string
          key: string
          page_path: string
          updated_at: string
        }
        Insert: {
          content_data?: Json
          content_type?: string
          created_at?: string
          id?: string
          key: string
          page_path: string
          updated_at?: string
        }
        Update: {
          content_data?: Json
          content_type?: string
          created_at?: string
          id?: string
          key?: string
          page_path?: string
          updated_at?: string
        }
        Relationships: []
      }
      core_values: {
        Row: {
          created_at: string
          description: string | null
          display_order: number | null
          id: string
          organization_id: string
          value_name: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          display_order?: number | null
          id?: string
          organization_id: string
          value_name: string
        }
        Update: {
          created_at?: string
          description?: string | null
          display_order?: number | null
          id?: string
          organization_id?: string
          value_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "core_values_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organization_info"
            referencedColumns: ["id"]
          },
        ]
      }
      countries: {
        Row: {
          code: string
          created_at: string | null
          id: number
          name: string
        }
        Insert: {
          code: string
          created_at?: string | null
          id?: number
          name: string
        }
        Update: {
          code?: string
          created_at?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      currencies: {
        Row: {
          code: string
          created_at: string | null
          name: string
          rate: number | null
          status: string | null
          symbol: string | null
        }
        Insert: {
          code: string
          created_at?: string | null
          name: string
          rate?: number | null
          status?: string | null
          symbol?: string | null
        }
        Update: {
          code?: string
          created_at?: string | null
          name?: string
          rate?: number | null
          status?: string | null
          symbol?: string | null
        }
        Relationships: []
      }
      districts: {
        Row: {
          country_id: number | null
          created_at: string | null
          id: number
          name: string
        }
        Insert: {
          country_id?: number | null
          created_at?: string | null
          id?: number
          name: string
        }
        Update: {
          country_id?: number | null
          created_at?: string | null
          id?: number
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "districts_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
        ]
      }
      gallery_images: {
        Row: {
          alt_text: string
          category: string
          created_at: string
          display_order: number | null
          id: string
          location: string | null
          storage_path: string
          story: string | null
          updated_at: string
        }
        Insert: {
          alt_text: string
          category: string
          created_at?: string
          display_order?: number | null
          id?: string
          location?: string | null
          storage_path: string
          story?: string | null
          updated_at?: string
        }
        Update: {
          alt_text?: string
          category?: string
          created_at?: string
          display_order?: number | null
          id?: string
          location?: string | null
          storage_path?: string
          story?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      media_files: {
        Row: {
          alt_text: string | null
          created_at: string
          file_name: string
          file_path: string
          file_size: number | null
          id: string
          mime_type: string | null
          uploaded_by: string | null
        }
        Insert: {
          alt_text?: string | null
          created_at?: string
          file_name: string
          file_path: string
          file_size?: number | null
          id?: string
          mime_type?: string | null
          uploaded_by?: string | null
        }
        Update: {
          alt_text?: string | null
          created_at?: string
          file_name?: string
          file_path?: string
          file_size?: number | null
          id?: string
          mime_type?: string | null
          uploaded_by?: string | null
        }
        Relationships: []
      }
      objectives: {
        Row: {
          created_at: string
          id: string
          objective_number: number | null
          objective_text: string
          organization_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          objective_number?: number | null
          objective_text: string
          organization_id: string
        }
        Update: {
          created_at?: string
          id?: string
          objective_number?: number | null
          objective_text?: string
          organization_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "objectives_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organization_info"
            referencedColumns: ["id"]
          },
        ]
      }
      operational_areas: {
        Row: {
          area_name: string
          created_at: string
          description: string | null
          id: string
          organization_id: string
        }
        Insert: {
          area_name: string
          created_at?: string
          description?: string | null
          id?: string
          organization_id: string
        }
        Update: {
          area_name?: string
          created_at?: string
          description?: string | null
          id?: string
          organization_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "operational_areas_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organization_info"
            referencedColumns: ["id"]
          },
        ]
      }
      organization_info: {
        Row: {
          acronym: string | null
          background_info: string | null
          created_at: string
          formation_date: string | null
          id: string
          logo_url: string | null
          mission: string | null
          name: string
          registration_info: string | null
          updated_at: string
          vision: string | null
        }
        Insert: {
          acronym?: string | null
          background_info?: string | null
          created_at?: string
          formation_date?: string | null
          id?: string
          logo_url?: string | null
          mission?: string | null
          name: string
          registration_info?: string | null
          updated_at?: string
          vision?: string | null
        }
        Update: {
          acronym?: string | null
          background_info?: string | null
          created_at?: string
          formation_date?: string | null
          id?: string
          logo_url?: string | null
          mission?: string | null
          name?: string
          registration_info?: string | null
          updated_at?: string
          vision?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string | null
          email: string | null
          full_name: string | null
          id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      stories: {
        Row: {
          content: string | null
          created_at: string
          featured_image_url: string | null
          id: string
          image_storage_path: string | null
          is_featured: boolean | null
          location: string | null
          published_date: string
          slug: string
          summary: string | null
          title: string
          updated_at: string
        }
        Insert: {
          content?: string | null
          created_at?: string
          featured_image_url?: string | null
          id?: string
          image_storage_path?: string | null
          is_featured?: boolean | null
          location?: string | null
          published_date?: string
          slug: string
          summary?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          content?: string | null
          created_at?: string
          featured_image_url?: string | null
          id?: string
          image_storage_path?: string | null
          is_featured?: boolean | null
          location?: string | null
          published_date?: string
          slug?: string
          summary?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      create_admin_user: {
        Args: { user_email: string }
        Returns: string
      }
      is_admin: {
        Args: { user_id_to_check?: string }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
