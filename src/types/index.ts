export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  token_type: string;
  name: string;
}

export interface BlogPost {
  post_id: string;
  title: string;
  slug: string;
  author_name: string;
  created_at: string;
  thumbnail_url: string;
  cover_url: string;
  content: string;
}

export interface BlogPostFormData {
  title: string;
  slug: string;
  content: string;
  cover_base64: string;
  thumbnail_base64: string;
  author_name: string; // Siempre requerido, pero puedes poner un valor por defecto ("admin" por ejemplo)
}
