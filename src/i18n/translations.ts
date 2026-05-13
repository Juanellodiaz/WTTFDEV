export type Locale = 'en' | 'es'

export const translations: Record<
  Locale,
  {
    metaTitle: string
    langShort: string
    nav: {
      studio: string
      projects: string
      philosophy: string
      craft: string
      platforms: string
      contact: string
    }
    hero: {
      badge: string
      title: string
      titleAccent: string
      subtitle: string
      ctaPrimary: string
      ctaSecondary: string
    }
    intro: {
      label: string
      title: string
      p1: string
      p2: string
      quote: string
    }
    philosophy: {
      label: string
      title: string
      items: { title: string; body: string }[]
    }
    featured: {
      label: string
      title: string
      subtitle: string
      dueDates: { name: string; body: string }
      photoSwiper: { name: string; body: string }
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
      line1: string
      line2: string
    }
  }
> = {
  en: {
    metaTitle: 'WTTF DEV — Digital product studio | WTTF Design Studio',
    langShort: 'ES',
    nav: {
      studio: 'Studio',
      projects: 'Work',
      philosophy: 'Philosophy',
      craft: 'Build',
      platforms: 'Surfaces',
      contact: 'Contact',
    },
    hero: {
      badge: 'WTTF Design Studio — digital product division',
      title: 'We craft',
      titleAccent: 'digital experiences',
      subtitle:
        'Apps, platforms, and tools that feel simple, intuitive, and human — pairing strategic design with modern technology. Identity, connection, and real problems solved with elegance.',
      ctaPrimary: 'Start a conversation',
      ctaSecondary: 'Our philosophy',
    },
    intro: {
      label: 'Who we are',
      title: 'Design-led engineering.',
      p1:
        'WTTF DEV is the digital development arm of WTTF Design Studio — focused on applications and technological experiences built around design, functionality, and obsessive detail.',
      p2:
        'Born from a studio specialised in premium branding, we bring the same care for aesthetics, UX, and brand building into software and digital products.',
      quote: 'The best applications are not only used — they are felt.',
    },
    philosophy: {
      label: 'How we think',
      title: 'Principles etched into every release.',
      items: [
        {
          title: 'Premium design',
          body: 'Visual and interaction standards that match high-end brand expectations.',
        },
        {
          title: 'Top-tier UX/UI',
          body: 'Flows and interfaces refined until they feel obvious — never arbitrary.',
        },
        {
          title: 'Integrated branding',
          body: 'Product and identity move together so every screen reinforces the story.',
        },
        {
          title: 'Modern development',
          body: 'Solid stacks, performance, and maintainability without sacrificing craft.',
        },
        {
          title: 'Minimal & intuitive',
          body: 'Complexity tamed; clarity and calm as default states.',
        },
        {
          title: 'Obsessive detail',
          body: 'Micro-moments, motion, and polish that separate good from memorable.',
        },
      ],
    },
    featured: {
      label: 'Featured products',
      title: 'Shipped with intention.',
      subtitle:
        'Tools we design and build to solve everyday friction — fast, clear, and emotionally considered.',
      dueDates: {
        name: 'DueDates',
        body: 'An app to organise dates, open items, and task follow-up with clarity and efficiency.',
      },
      photoSwiper: {
        name: 'PhotoSwiper',
        body: 'A swipe-inspired visual flow that helps people quickly decide which photos to keep or delete.',
      },
    },
    services: {
      label: 'What we ship',
      title: 'From strategy to executable product.',
      subtitle:
        'Each build is conceived to work flawlessly while carrying a distinct identity — useful, fast, and visually impeccable.',
      items: [
        {
          title: 'Product & experience design',
          body: 'Discovery, information architecture, and UI systems aligned with your brand language.',
        },
        {
          title: 'Native & cross-platform apps',
          body: 'iOS, Android, macOS, and web surfaces with coherent behaviour and premium feel.',
        },
        {
          title: 'Platforms & internal tools',
          body: 'Dashboards, workflows, and utilities where precision and calm UX matter.',
        },
        {
          title: 'Motion, prototyping & handoff',
          body: 'Interactive prototypes and motion specs so engineering matches design intent.',
        },
      ],
    },
    platforms: {
      label: 'Surfaces',
      title: 'Where your product lives.',
      subtitle: 'One disciplined studio — many touchpoints, one voice.',
      web: 'Web',
      ios: 'iOS',
      android: 'Android',
      macos: 'macOS',
    },
    marquee: {
      label: 'Craft & stack',
      items: [
        'Premium UX',
        'Brand systems',
        'React',
        'Swift',
        'SwiftUI',
        'Kotlin',
        'TypeScript',
        'Motion design',
        'Design tokens',
        'Accessibility',
        'Performance',
        'Product thinking',
      ],
    },
    process: {
      label: 'Process',
      title: 'Scroll is part of the interface — so is our process.',
      steps: [
        {
          title: 'Immerse',
          body: 'Brand, audience, and constraints — distilled into a sharp product narrative.',
        },
        {
          title: 'Shape',
          body: 'Prototypes, flows, and technical spikes so decisions land early with confidence.',
        },
        {
          title: 'Build',
          body: 'Iterative delivery with visible craft: motion, spacing, and behaviour as first-class.',
        },
        {
          title: 'Evolve',
          body: 'Launch, measure, refine — products that grow with real usage and feedback.',
        },
      ],
    },
    cta: {
      title: 'Let’s build something that feels right.',
      body:
        'Tell us about your product, users, and timeline. We respond within two business days with next steps.',
      button: 'hello@wttf.dev',
      footnote: 'Replace with your production email or env variable when you go live.',
    },
    footer: {
      line1: '© WTTF DEV — digital division of WTTF Design Studio.',
      line2: 'Experiences with intention · React & motion',
    },
  },
  es: {
    metaTitle: 'WTTF DEV — Estudio de producto digital | WTTF Design Studio',
    langShort: 'EN',
    nav: {
      studio: 'Estudio',
      projects: 'Proyectos',
      philosophy: 'Filosofía',
      craft: 'Construimos',
      platforms: 'Superficies',
      contact: 'Contacto',
    },
    hero: {
      badge: 'WTTF Design Studio — división de producto digital',
      title: 'Creamos',
      titleAccent: 'experiencias digitales',
      subtitle:
        'Apps, plataformas y herramientas que buscan sentirse simples, intuitivas y humanas — diseño estratégico y tecnología moderna. Identidad, conexión y problemas reales resueltos con elegancia.',
      ctaPrimary: 'Hablemos',
      ctaSecondary: 'Nuestra filosofía',
    },
    intro: {
      label: 'Quiénes somos',
      title: 'Ingeniería con mirada de estudio.',
      p1:
        'WTTF DEV es la división de desarrollo digital de WTTF Design Studio, enfocada en crear aplicaciones y experiencias tecnológicas con visión centrada en diseño, funcionalidad y detalle.',
      p2:
        'Nace de un estudio especializado en branding premium: la misma obsesión por la estética, la experiencia de usuario y la construcción de marcas, aplicada al software y a los productos digitales.',
      quote: 'Las mejores aplicaciones no solo se usan: se sienten.',
    },
    philosophy: {
      label: 'Cómo pensamos',
      title: 'Principios que atraviesan cada entrega.',
      items: [
        {
          title: 'Diseño premium',
          body: 'Estándares visuales y de interacción al nivel de marcas de alta gama.',
        },
        {
          title: 'UX/UI de alto nivel',
          body: 'Flujos e interfaces refinados hasta sentirse evidentes — nunca arbitrarios.',
        },
        {
          title: 'Branding integrado',
          body: 'Producto e identidad van juntos; cada pantalla refuerza la historia.',
        },
        {
          title: 'Desarrollo moderno',
          body: 'Stacks sólidos, rendimiento y mantenibilidad sin renunciar al oficio.',
        },
        {
          title: 'Minimalismo e intuición',
          body: 'Complejidad domada; claridad y calma como estado por defecto.',
        },
        {
          title: 'Atención obsesiva al detalle',
          body: 'Micro momentos, motion y pulido que separan lo bueno de lo memorable.',
        },
      ],
    },
    featured: {
      label: 'Productos destacados',
      title: 'Hechos con intención.',
      subtitle:
        'Herramientas que diseñamos y construimos para quitar fricción cotidiana — rápidas, claras y emocionalmente cuidadas.',
      dueDates: {
        name: 'DueDates',
        body: 'Una aplicación para organizar fechas, pendientes y seguimiento de tareas con claridad y eficiencia.',
      },
      photoSwiper: {
        name: 'PhotoSwiper',
        body: 'Una experiencia visual inspirada en el swipe, para decidir rápido qué fotos conservar o eliminar.',
      },
    },
    services: {
      label: 'Qué construimos',
      title: 'De la estrategia al producto ejecutable.',
      subtitle:
        'Cada pieza se piensa para funcionar impecable y transmitir identidad propia — útil, rápida y visualmente impecable.',
      items: [
        {
          title: 'Diseño de producto y experiencia',
          body: 'Descubrimiento, arquitectura de información y sistemas de UI alineados con tu marca.',
        },
        {
          title: 'Apps nativas y multiplataforma',
          body: 'iOS, Android, macOS y web con comportamiento coherente y sensación premium.',
        },
        {
          title: 'Plataformas y herramientas internas',
          body: 'Paneles, flujos y utilidades donde importan la precisión y una UX serena.',
        },
        {
          title: 'Motion, prototipos y handoff',
          body: 'Prototipos interactivos y motion specs para que ingeniería respete la intención de diseño.',
        },
      ],
    },
    platforms: {
      label: 'Superficies',
      title: 'Donde vive tu producto.',
      subtitle: 'Un mismo criterio de estudio — muchos puntos de contacto, una sola voz.',
      web: 'Web',
      ios: 'iOS',
      android: 'Android',
      macos: 'macOS',
    },
    marquee: {
      label: 'Oficio y stack',
      items: [
        'UX premium',
        'Sistemas de marca',
        'React',
        'Swift',
        'SwiftUI',
        'Kotlin',
        'TypeScript',
        'Motion design',
        'Design tokens',
        'Accesibilidad',
        'Rendimiento',
        'Pensamiento de producto',
      ],
    },
    process: {
      label: 'Proceso',
      title: 'El scroll es parte de la interfaz — también nuestro proceso.',
      steps: [
        {
          title: 'Sumergirnos',
          body: 'Marca, audiencia y restricciones — destiladas en una narrativa de producto clara.',
        },
        {
          title: 'Dar forma',
          body: 'Prototipos, flujos y spikes técnicos para decidir pronto, con confianza.',
        },
        {
          title: 'Construir',
          body: 'Entrega iterativa con oficio visible: motion, ritmo y comportamiento como prioridad.',
        },
        {
          title: 'Evolucionar',
          body: 'Lanzar, medir, refinar — productos que crecen con el uso real y el feedback.',
        },
      ],
    },
    cta: {
      title: 'Construyamos algo que se sienta bien.',
      body:
        'Cuéntanos producto, usuarios y plazos. Respondemos en dos días hábiles con siguientes pasos.',
      button: 'hello@wttf.dev',
      footnote: 'Sustituye por tu correo de producción o variable de entorno al publicar.',
    },
    footer: {
      line1: '© WTTF DEV — división digital de WTTF Design Studio.',
      line2: 'Experiencias con intención · React y motion',
    },
  },
}
