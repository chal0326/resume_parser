export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      parsed_resumes: {
        Row: {
          id: string
          user_id: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          created_at?: string
        }
      }
      work_experiences: {
        Row: {
          id: string
          resume_id: string
          job_title: string
          company: string
          start_date: string
          end_date: string | null
          created_at: string
        }
        Insert: {
          id?: string
          resume_id: string
          job_title: string
          company: string
          start_date: string
          end_date?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          resume_id?: string
          job_title?: string
          company?: string
          start_date?: string
          end_date?: string | null
          created_at?: string
        }
      }
      job_descriptions: {
        Row: {
          id: string
          work_experience_id: string
          description: string
          created_at: string
        }
        Insert: {
          id?: string
          work_experience_id: string
          description: string
          created_at?: string
        }
        Update: {
          id?: string
          work_experience_id?: string
          description?: string
          created_at?: string
        }
      }
      skills: {
        Row: {
          id: string
          resume_id: string
          skill: string
          created_at: string
        }
        Insert: {
          id?: string
          resume_id: string
          skill: string
          created_at?: string
        }
        Update: {
          id?: string
          resume_id?: string
          skill?: string
          created_at?: string
        }
      }
      certifications: {
        Row: {
          id: string
          resume_id: string
          certification: string
          created_at: string
        }
        Insert: {
          id?: string
          resume_id: string
          certification: string
          created_at?: string
        }
        Update: {
          id?: string
          resume_id?: string
          certification?: string
          created_at?: string
        }
      }
      awards: {
        Row: {
          id: string
          resume_id: string
          award: string
          created_at: string
        }
        Insert: {
          id?: string
          resume_id: string
          award: string
          created_at?: string
        }
        Update: {
          id?: string
          resume_id?: string
          award?: string
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}