export const apps = [
  {
    id: "xpro",
    name: "XPRO",
    logo: "/ListApp/XPRO/logo.jpg",
    description: "Es la aplicación recomendada. Solo está disponible para Android. Algunas TV tienen Android integrado; otra opción es usarla mediante Fire TV o Android TV Box.",
    moredescription: "Si queréis, también podéis tener esta aplicación en el móvil. Os recuerdo que solo se puede utilizar en un dispositivo a la vez: o en el móvil o en la televisión. Si os falla en la televisión, podéis comprobar su funcionamiento en el móvil.",
    steps: [
      { image: "/ListApp/XPRO/1.jpg", text: "Lo primero es ir a Google Play y descargar la aplicación Downloader by AFTVnews." },
      { image: "/ListApp/XPRO/2.jpg", text: "Entrad en la aplicación y pulsad en el cuadro 'Enter a URL, Search Term, or Short Code' (cuadro azul)." },
      { image: "/ListApp/XPRO/3.jpg", text: "Escribid el código 3680877 y pulsad la tecla 'Siguiente' (puede variar según el teclado, pero está en el mismo lugar). También podéis pulsar 'Go', que aparece debajo del cuadro donde se escribe el código. En TV (Android TV, Fire TV, etc.) puede mostrarse ligeramente diferente." },
      { image: "/ListApp/XPRO/4.jpg", text: "Una vez descargada la aplicación, si es la primera vez que usáis Downloader, aparecerá un mensaje solicitando permiso para instalar aplicaciones. Debéis pulsar en 'Ajustes' (cuadro azul)." },
      { image: "/ListApp/XPRO/5.jpg", text: "Aparecerá una opción que debéis activar como en la imagen (cuadro azul). Tras conceder los permisos, aparecerá un mensaje y debéis pulsar en 'Instalar' (cuadro verde)." },
      { image: "/ListApp/XPRO/6.jpg", text: "La aplicación se instalará en vuestro dispositivo. Cuando termine, pulsad en 'Hecho' (cuadro azul)." },
      { image: "/ListApp/XPRO/7.jpg", text: "Aparecerá otro cuadro informativo donde debéis elegir 'Done' (cuadro azul). Una vez finalizado, podéis borrar Downloader, ya que no será necesario." },
      { image: "/ListApp/XPRO/8.jpg", text: "Entrad en la aplicación y aparecerá un mensaje para elegir entre 'Mobile' o 'TV'. Seleccionad la opción correspondiente y pulsad en 'Guardar' (cuadro azul)." },
      { image: "/ListApp/XPRO/9.jpg", text: "Aquí debéis introducir vuestro usuario y contraseña. Hay tres campos: Nombre (podéis poner vuestro nombre), Usuario (el usuario de vuestra lista IPTV) y Contraseña (la contraseña de la lista IPTV). Por último, pulsad 'Enter'." },
      { image: "/ListApp/XPRO/10.jpg", text: "Aquí debéis descargar todo el contenido incluido en la lista. En móvil, pulsad cada cuadro y se descargará automáticamente. En TV, debéis seleccionar cada cuadro y pulsar 'OK' en el mando para iniciar la descarga." },
      { image: "/ListApp/XPRO/11.jpg", text: "La aplicación actualiza las URL automáticamente. No obstante, si queréis hacerlo manualmente, en móvil pulsad los iconos de las flechas (cuadro azul). En TV, seleccionad el cuadro correspondiente, pulsad la flecha hacia arriba y después 'OK' para iniciar la actualización." },
      { text: "Para ver el contenido, entrad en la sección deseada, normalmente 'TV en Directo', donde se cargarán los canales."}
    ]
  },
  {
    id: "ssiptv",
    name: "SSIPTV",
    logo: "/ListApp/SSIPTV/logo.jpg",
    description: "Esta aplicación funciona bastante bien. No todas las TV son compatibles. En televisores Samsung debe añadirse mediante USB.",
    steps: [
      { image: "/ListApp/SSIPTV/1.png", text: "Entrad en la aplicación en la TV y pulsad en el icono de configuración (círculo rojo)." },
      { image: "/ListApp/SSIPTV/2.png", text: "Podéis cambiar el idioma a español desde la parte derecha (cuadro azul). Si ya está en español, pulsad en 'Obtener código' o 'Get Code' (cuadro verde). Guardad el código que aparezca para el siguiente paso. Después podéis cerrar la aplicación hasta completar la configuración." },
      { text: "Acceded al siguiente enlace:", link: "https://ss-iptv.com/en/users/playlist", linkLabel: "Web SSIPTV"},
      { image: "/ListApp/SSIPTV/3.png", text: "En esta página, introducid el código obtenido en el paso anterior (cuadro azul) y pulsad en 'ADD DEVICE'. Si no borráis el historial del navegador, este paso normalmente solo será necesario hacerlo una vez." },
      { image: "/ListApp/SSIPTV/4.png", text: "Entrad en 'External Playlist' (cuadro azul). Aparecerá vuestra lista; pulsad en 'Edit' (cuadro verde)." },
      { image: "/ListApp/SSIPTV/5.png", text: "Copiad la URL completa que teníais guardada y pegadla en el campo 'Source' (cuadro azul). Comprobad que empiece por http y no por https, ya que en caso contrario no funcionará. Después pulsad 'OK' (cuadro verde)." },
      { image: "/ListApp/SSIPTV/6.png", text: "Por último, pulsad en 'SAVE' (cuadro azul) para que se actualice correctamente. Después podéis cerrar todo y volver a la TV para acceder a vuestra lista actualizada." }
    ]
  },
  {
    id: "iboplayer",
    name: "IBO Player",
    logo: "/ListApp/IboPlayer/logo.jpg",
    description: "No conozco mucho esta aplicación, pero algunos usuarios la utilizan en su TV.",
    steps: [
      { image: "/ListApp/IboPlayer/1.png", text: "Entrad en la aplicación y pulsad en 'Settings' (cuadro rojo)." },
      { image: "/ListApp/IboPlayer/2.png", text: "En esta pantalla, acceded a 'Account' (cuadro azul)." },
      { image: "/ListApp/IboPlayer/3.png", text: "Aparecerá un cuadro con distinta información. Debéis anotar la 'Mac Address' y la 'Device Key'. Una vez hecho esto, podéis cerrar la aplicación hasta completar la configuración." },
      { text: "Acceded al siguiente enlace:", link: "https://iboplayer.com/device/login", linkLabel: "Web Ibo Player Pro"},
      { image: "/ListApp/IboPlayer/4.png", text: "Introducid la 'Mac Address' y la 'Device Key' obtenidas anteriormente, completad el captcha y pulsad 'Login'. Si no borráis el historial del navegador, este paso normalmente solo será necesario una vez." },
      { image: "/ListApp/IboPlayer/5.png", text: "Pulsad en el icono del lápiz (cuadro azul) para actualizar la lista." },
      { image: "/ListApp/IboPlayer/6.png", text: "Copiad la URL completa que teníais guardada y pegadla en el campo 'Playlist URL (M3U o M3U8)' (cuadro azul). Comprobad que empiece por http y no por https, ya que de lo contrario no funcionará. Después pulsad 'SAVE' (cuadro verde)." },
      { image: "/ListApp/IboPlayer/7.png", text: "Por último, pulsad en 'Logout' (cuadro azul). Después podéis cerrar todo y volver a la TV para acceder a vuestra lista actualizada." }
    ]
  }
]