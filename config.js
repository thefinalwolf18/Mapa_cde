// Configuración del Mapa Ciudadano CDE.
// Completá estos dos datos con los de tu proyecto de Supabase (Project Settings > API).
// Son datos públicos: la seguridad la ponen las reglas de la base (01-esquema.sql), no este archivo.
// Si los dejás vacíos, la página funciona en "modo de prueba" con los datos de ejemplo y sin guardar nada.
window.CDE_CONFIG = {
  supabaseUrl: "",          // ej.: "https://abcdefghijklmno.supabase.co"
  supabaseAnonKey: "",      // la clave "anon public" (empieza con "eyJ..." o "sb_publishable_...")
  google: false,            // true cuando actives "Google" en Supabase > Authentication > Providers
  ia: true,                 // false para ocultar "Explicar con IA" aunque la clave esté cargada en Vercel
  originales: true          // false para guardar solo la copia liviana de cada foto (ahorra espacio en el plan gratis)
};
