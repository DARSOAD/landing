// global.d.ts
export {}; // ¡Esto es clave!

declare global {
    interface Window {
      gtag?: (...args: unknown[]) => void;
      lintrk?: (action: string, params: { conversion_id: string }) => void;
      fbq?: (...args: unknown[]) => void; // Para futuro uso
    }
  }