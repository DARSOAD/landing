// Utilitario reutilizable para todos los eventos de conversión
type TrackingEvent = "google" | "linkedin" | "facebook";

export const trackConversion = (event: TrackingEvent) => {
    if (typeof window === "undefined") return;

    switch (event) {
        case "google":
            if (window.gtag) {
                window.gtag("event", "conversion", {
                    send_to: "AW-16885861325/kCGVCK36laYaEM2X5_M-",
                });
            }
            break;

        case "linkedin":
            if (window.lintrk) {
                window.lintrk("track", { conversion_id: "19205140" }); // ID LinkedIn
            }
            break;

        // case "facebook":
        //   // Ejemplo para futuro Pixel de Facebook
        //   if (window.fbq) {
        //     window.fbq("track", "Lead");
        //   }
        //   break;
    }
};