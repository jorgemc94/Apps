export const apps = [
{
    id: "xpro",
    name: "XPRO",
    logo: "/ListApp/XPRO/logo.jpg",
    description:
      "Es la aplicación recomendada. Disponible únicamente para dispositivos Android. Puede utilizarse en móviles, tablets, Smart TV con Android TV, Fire TV o Android TV Box.",
    steps: [
      {
        video: "/ListApp/XPRO/1.mp4",
        text: "Accede a Google Play y descarga la aplicación 'Downloader by AFTVnews'."
      },
      {
        video: "/ListApp/XPRO/2.mp4",
        text: "Abre la aplicación y pulsa en el cuadro azul que indica 'Enter a URL, Search Term, or Short Code'."
      },
      {
        video: "/ListApp/XPRO/3.mp4",
        text: "Introduce el código 3680877 y pulsa 'Go' o 'Siguiente' o ' ↵ '. En televisores la apariencia puede variar ligeramente."
      },
      {
        video: "/ListApp/XPRO/4.mp4",
        text: "Si es la primera vez que utilizas Downloader, el sistema solicitará permiso para instalar aplicaciones externas. Pulsa en 'Ajustes'."
      },
      {
        video: "/ListApp/XPRO/5.mp4",
        text: "Activa el permiso correspondiente y vuelve atrás."
      },
      {
        video: "/ListApp/XPRO/6.mp4",
        text: "Después pulsa 'Instalar' para comenzar la instalación. Espera a que finalice la instalación y pulsa 'Abrir'."
      },
      {
        video: "/ListApp/XPRO/7.mp4",
        text: "Abre XPRO y selecciona el modo adecuado: 'Mobile' para móvil o 'TV' para televisión. Después pulsa 'Guardar'."
      },
      {
        video: "/ListApp/XPRO/8.mp4",
        text: "Introduce los datos proporcionados: Nombre (puede ser cualquiera), Usuario y Contraseña. Finalmente pulsa 'Enter'."
      },
      {
        video: "/ListApp/XPRO/9.mp4",
        text: "Descarga el contenido de la lista. En móvil basta con pulsar cada apartado. En TV debes seleccionarlo y pulsar 'OK' en el mando. Ya puedes disfrutar de los canales."
      },
      {
        video: "/ListApp/XPRO/10.mp4",
        text: "La aplicación se actualiza automáticamente. Si necesitas hacerlo manualmente, utiliza el icono de actualización (flechas circulares). Ya puedes disfrutar de los canales."
      }
    ]
  },
  {
    id: "ssiptv",
    name: "SSIPTV",
    logo: "/ListApp/SSIPTV/logo.jpg",
    video: "/ListApp/SSIPTV/SSIPTV.mp4",
    description:
      "Aplicación estable compatible con muchas Smart TV. En algunos modelos Samsung puede requerir instalación mediante USB.",
    steps: [
      {
        video: "/ListApp/SSIPTV/1.mp4",
        text: "Abre la aplicación y accede al icono de configuración (rueda dentada)."
      },
      {
        video: "/ListApp/SSIPTV/2.mp4",
        text: "Si lo deseas, cambia el idioma a español. Después pulsa 'Obtener código' (Get Code) y anota el código que aparece."
      },
      {
        text: "Desde un ordenador o móvil, accede al siguiente enlace:",
        link: "https://ss-iptv.com/en/users/playlist",
        linkLabel: "Web oficial de SSIPTV"
      },
      {
        video: "/ListApp/SSIPTV/3.mp4",
        text: "Introduce el código y pulsa 'ADD DEVICE'."
      },
      {
        video: "/ListApp/SSIPTV/4.mp4",
        text: "Accede a 'External Playlist' y selecciona 'Edit'."
      },
      {
        video: "/ListApp/SSIPTV/5.mp4",
        text: "Pega tu URL completa en el campo 'Source', si está en Español es 'Fuente'. Es importante que comience por http y no por https. Pulsa 'OK'."
      },
      {
        video: "/ListApp/SSIPTV/6.mp4",
        text: "Pulsa 'SAVE' para guardar los cambios."
      },
      {
        video: "/ListApp/SSIPTV/7.mp4",
        text: "Vuelve a la aplicación en la TV para ver que funciona correctamente."
      }
    ]
  },
  {
    id: "iboplayer",
    name: "IBO Player",
    logo: "/ListApp/IboPlayer/logo.jpg",
    video: "/ListApp/IboPlayer/IBO2.mp4",
    description:
      "Aplicación utilizada principalmente en Smart TV. Requiere activar el dispositivo previamente desde su página web.",
    steps: [
      {
        video: "/ListApp/IboPlayer/1.mp4",
        text: "Abre la aplicación y entra en 'Settings'."
      },
      {
        video: "/ListApp/IboPlayer/2.mp4",
        text: "Selecciona la opción 'Account'."
      },
      {
        video: "/ListApp/IboPlayer/3.mp4",
        text: "Anota los datos 'Mac Address' y 'Device Key' que aparecen en pantalla."
      },
      {
        text: "Desde un navegador web accede a:",
        link: "https://iboplayer.com/device/login",
        linkLabel: "Web oficial IBO Player"
      },
      {
        video: "/ListApp/IboPlayer/4.mp4",
        text: "Introduce la Mac Address y la Device Key, completa el captcha y pulsa 'Login'."
      },
      {
        video: "/ListApp/IboPlayer/5.mp4",
        text: "Pulsa el icono del lápiz para editar o añadir tu lista."
      },
      {
        video: "/ListApp/IboPlayer/6.mp4",
        text: "Pega la URL en 'Playlist URL (M3U o M3U8)'. Debe comenzar por http. Después pulsa 'SAVE'."
      },
      {
        video: "/ListApp/IboPlayer/7.mp4",
        text: "Cierra sesión ('Logout')."
      },
      {
        video: "/ListApp/IboPlayer/7.mp4",
        text: "Vuelve a la aplicación en la TV para ver que funciona correctamente."
      }
    ]
  },
  {
    id: "iptvstreamer",
    name: "IPTV Streamer",
    logo: "/ListApp/IPTVStreamer/logo.png",
    description:
      "Aplicación compatible con iPhone, iPad, Android, Fire TV y Android TV. Permite importar listas IPTV mediante enlace M3U.",
    steps: [
      {
        video: "/ListApp/IPTVStreamer/1.mp4",
        text: "Descarga IPTV Streamer desde Google Play (Android) o App Store (iPhone / iPad)."
      },
      {
        video: "/ListApp/IPTVStreamer/2.mp4",
        text: "Si el sistema solicita permiso para enviar notificaciones, pulsa 'Permitir'."
      },
      {
        video: "/ListApp/IPTVStreamer/3.mp4",
        text: "📱 En móvil: pulsa 'Añadir proveedor de IPTV'.\n\n📺 En Fire TV o Android TV: entra en 'Settings' y después en 'Providers'."
      },
      {
        video: "/ListApp/IPTVStreamer/4.mp4",
        text: "📱 En móvil: selecciona 'Importar archivo M3U'.\n\n📺 En TV: pulsa 'Add an IPTV Provider'."
      },
      {
        video: "/ListApp/IPTVStreamer/5.mp4",
        text: "📱 En móvil: elige 'Import M3U file from URL'.\n\n📺 En TV: selecciona también 'Import M3U file from URL'."
      },
      {
        video: "/ListApp/IPTVStreamer/6.mp4",
        text: "Introduce un nombre identificativo (por ejemplo tu nombre y fecha de caducidad) y pega la URL completa de tu lista..."
      },
      {
        video: "/ListApp/IPTVStreamer/7.mp4",
        text: "Una vez importada la lista..."
      },
      {
        video: "/ListApp/IPTVStreamer/8.mp4",
        text: "Para acceder a ver los canales..."
      },
      {
        video: "/ListApp/IPTVStreamer/9.mp4",
        text: "Para actualizar la lista..."
      },
      {
        video: "/ListApp/IPTVStreamer/10.mp4",
        text: "Como recomendación, es mejor eliminar listas antiguas..."
      },
      {
        video: "/ListApp/IPTVStreamer/11.mp4",
        text: "Selecciona 'Eliminar' o 'Delete'."
      },
      {
        video: "/ListApp/IPTVStreamer/12.mp4",
        text: "Para añadir o actualizar la lista..."
      }
    ]
  }
]