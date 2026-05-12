export type Locale = 'en' | 'es'

export const translations: Record<
  Locale,
  {
    metaTitle: string
    nav: { work: string; services: string; platforms: string; contact: string }
    work: { title: string; subtitle: string; cards: string[] }
    langShort: string
    hero: {
      badge: string
      title: string
      titleAccent: string
      subtitle: string
      ctaPrimary: string
      ctaSecondary: string
    }
    services: {
      label: string
      title: string
      subtitle: string
      items: { title: string; body: string }[]
    }
    platforms: {
      label: string
      title: string
      subtitle: string
      web: string
      ios: string
      android: string
      macos: string
    }
    marquee: { label: string; items: string[] }
    process: {
      label: string
      title: string
      steps: { title: string; body: string }[]
    }
    cta: {
      title: string
      body: string
      button: string
      footnote: string
    }
    footer: {
      rights: string
      built: string
    }
  }
> = {
  en: {
    metaTitle: 'WTTF Dev — Software studio',
    nav: {
      work: 'Work',
      services: 'Services',
      platforms: 'Platforms',
      contact: 'Contact',
    },
    work: {
      title: 'Selected work',
      subtitle: 'Interfaces engineered for clarity and speed.',
      cards: [
        'Realtime ops dashboard',
        'Native reader & sync',
        'macOS creative utility',
      ],
    },
    langShort: 'ES',
    hero: {
      badge: 'Modern software · Native & web',
      title: 'We craft',
      titleAccent: 'digital products',
      subtitle:
        'Minimal, fast, and precise experiences across web apps and native iOS, Android, and macOS.',
      ctaPrimary: 'Start a project',
      ctaSecondary: 'View capabilities',
    },
    services: {
      label: 'Services',
      title: 'Engineering with taste.',
      subtitle:
        'From product discovery to polished releases — architecture, UI, and performance as first-class citizens.',
      items: [
        {
          title: 'Web applications',
          body: 'SPA/PWA stacks, dashboards, and marketing sites tuned for speed, SEO, and accessibility.',
        },
        {
          title: 'Native mobile',
          body: 'iOS and Android apps with platform-native feel, offline-first patterns, and secure APIs.',
        },
        {
          title: 'macOS desktop',
          body: 'Utilities and pro tools that respect the Mac — menus, shortcuts, and system integration.',
        },
        {
          title: 'Design systems',
          body: 'Tokens, components, and motion language that scale with your team and brand.',
        },
      ],
    },
    platforms: {
      label: 'Platforms',
      title: 'One studio. Many surfaces.',
      subtitle: 'Ship cohesive experiences wherever your users are.',
      web: 'Web',
      ios: 'iOS',
      android: 'Android',
      macos: 'macOS',
    },
    marquee: {
      label: 'Stack & craft',
      items: [
        'TypeScript',
        'React',
        'Swift',
        'Kotlin',
        'SwiftUI',
        'Jetpack',
        'API design',
        'Motion',
        'CI/CD',
        'Accessibility',
        'Performance',
        'Security',
      ],
    },
    process: {
      label: 'Process',
      title: 'Scroll-reactive by design.',
      steps: [
        {
          title: 'Align',
          body: 'Goals, constraints, and success metrics — compressed into a crisp product brief.',
        },
        {
          title: 'Shape',
          body: 'Flows, prototypes, and technical spikes so decisions happen early, not late.',
        },
        {
          title: 'Build',
          body: 'Iterative delivery with visible progress, tight feedback loops, and measurable quality.',
        },
        {
          title: 'Launch',
          body: 'Store submissions, analytics, and hardening — then iterate with real usage data.',
        },
      ],
    },
    cta: {
      title: 'Ready when you are.',
      body: 'Tell us about your product, timeline, and stack preferences. We reply within two business days.',
      button: 'hello@wttf.dev',
      footnote: 'Replace with your real inbox in code or env when you deploy.',
    },
    footer: {
      rights: '© WTTF Dev. All rights reserved.',
      built: 'Built with React & motion.',
    },
  },
  es: {
    metaTitle: 'WTTF Dev — Estudio de software',
    nav: {
      work: 'Trabajo',
      services: 'Servicios',
      platforms: 'Plataformas',
      contact: 'Contacto',
    },
    work: {
      title: 'Trabajo destacado',
      subtitle: 'Interfaces pensadas para claridad y velocidad.',
      cards: [
        'Panel de operaciones en tiempo real',
        'Lector nativo y sincronización',
        'Utilidad creativa para macOS',
      ],
    },
    langShort: 'EN',
    hero: {
      badge: 'Software moderno · Nativo y web',
      title: 'Diseñamos',
      titleAccent: 'productos digitales',
      subtitle:
        'Experiencias mínimas, rápidas y precisas en web apps y apps nativas para iOS, Android y macOS.',
      ctaPrimary: 'Iniciar un proyecto',
      ctaSecondary: 'Ver capacidades',
    },
    services: {
      label: 'Servicios',
      title: 'Ingeniería con criterio.',
      subtitle:
        'Del descubrimiento al lanzamiento — arquitectura, interfaz y rendimiento como prioridad.',
      items: [
        {
          title: 'Aplicaciones web',
          body: 'SPA/PWA, paneles y sitios optimizados para velocidad, SEO y accesibilidad.',
        },
        {
          title: 'Móvil nativo',
          body: 'Apps iOS y Android con sensación nativa, offline y APIs seguras.',
        },
        {
          title: 'Escritorio macOS',
          body: 'Herramientas y utilidades que respetan el Mac: menús, atajos e integración con el sistema.',
        },
        {
          title: 'Sistemas de diseño',
          body: 'Tokens, componentes y motion que escalan con tu equipo y tu marca.',
        },
      ],
    },
    platforms: {
      label: 'Plataformas',
      title: 'Un estudio. Muchas superficies.',
      subtitle: 'Experiencias coherentes donde estén tus usuarios.',
      web: 'Web',
      ios: 'iOS',
      android: 'Android',
      macos: 'macOS',
    },
    marquee: {
      label: 'Stack y oficio',
      items: [
        'TypeScript',
        'React',
        'Swift',
        'Kotlin',
        'SwiftUI',
        'Jetpack',
        'Diseño de APIs',
        'Motion',
        'CI/CD',
        'Accesibilidad',
        'Rendimiento',
        'Seguridad',
      ],
    },
    process: {
      label: 'Proceso',
      title: 'Pensado para responder al scroll.',
      steps: [
        {
          title: 'Alinear',
          body: 'Objetivos, restricciones y métricas — resumidos en un brief claro.',
        },
        {
          title: 'Dar forma',
          body: 'Flujos, prototipos y spikes técnicos para decidir pronto, no tarde.',
        },
        {
          title: 'Construir',
          body: 'Entregas iterativas con avance visible, feedback ajustado y calidad medible.',
        },
        {
          title: 'Lanzar',
          body: 'Tiendas, analítica y endurecimiento — luego iterar con datos reales.',
        },
      ],
    },
    cta: {
      title: 'Listos cuando tú lo estés.',
      body: 'Cuéntanos producto, plazos y stack preferido. Respondemos en dos días hábiles.',
      button: 'hello@wttf.dev',
      footnote: 'Sustituye por tu correo real en código o variables de entorno al desplegar.',
    },
    footer: {
      rights: '© WTTF Dev. Todos los derechos reservados.',
      built: 'Hecho con React y motion.',
    },
  },
}
