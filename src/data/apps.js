export const apps = [
  {
    id: "xpro",
    name: "XPRO",
    logo: "/ListApp/XPRO/logo.jpg",
    description: "Es la apliación que recomiendan, esta apliación solo esta para Android, hay TV´s con android otra opción para tenerla es mediante fire Tv, Andorid box...",
    steps: [
      { image: "finance-step1.png", text: "Descarga la app desde la tienda oficial." },
      { image: "finance-step2.png", text: "Regístrate con tu correo electrónico." },
      { image: "finance-step3.png" }
    ]
  },
  {
    id: "ssiptv",
    name: "SSIPTV",
    logo: "/ListApp/SSIPTV/logo.jpg",
    description: "Esta apliación funciona bastante bien, no todas las TV pueden tenerla, si la TV es Samsung se debe añadir mediante USB",
    steps: [
      { image: "/ListApp/SSIPTV/1.png", text: "Entrar en la aplicación en la tv y pinchar en el icono de configuración (circulo rojo)." },
      { image: "/ListApp/SSIPTV/2.png", text: "Podéis cambiar el idioma a español yendo a la derecha (cuadro azul), si ya esta en español debéis pinchar en Obtener código o Get code si está en inglés (cuadro verde). El código que os aparezca debéis guardarlo para el siguiente paso. Listo esto podeis cerrar la aplicación, cuando se añada la lista completa volverás a entrar para ver el contenido." },
      { text: "Accerder al siguiente enlace:", link: "https://ss-iptv.com/en/users/playlist", linkLabel: "Web SSIPTV"},
      { image: "/ListApp/SSIPTV/3.png", text: "En esta página entrar el código que se ha obtenido en el paso 2 (cuadro azul), puesto el código darle a ADD DEVICE. Si no borras el historial de navegación del navegador web, posiblemente este paso solo debas hacerlo una vez, si al acceder al enlace te aparece esto pues deberías añadir el codigo y darle a ADD DEVICE " },
      { image: "/ListApp/SSIPTV/4.png", text: "Aquí iremos a External Playlist(cuadro azul), aparecerá vuestra lista, aquí debeis ir a edit (cuadro verde)" },
      { image: "/ListApp/SSIPTV/5.png", text: "Aquí copiaremos la url completa que ya teníamos guardada, la pegaremos donde pone Source (cuadro azul), al copiar la url comprobar que empiece por http y no https, ya que si es https no os funcionará. Una vez realizado este paso darle a OK (cuadro verde)" },
      { image: "/ListApp/SSIPTV/6.png", text: "Este es el último paso, para que se actualice correctamente debéis darle a SAVE (cuadro azul). Una vez echo esto podéis cerrar todo e ir a la televisión, entrar como hacéis siempre y ya estaría vuestra lista actualizada" }
    ]
  },
  {
    id: "iboplayer",
    name: "IBO Player",
    logo: "/ListApp/IboPlayer/logo.jpg",
    description: "No conozco mucho esta apliación pero alguien la tiene en su TV",
    steps: [
      { image: "/ListApp/IboPlayer/1.png", text: "Entrar en la aplicación y pinchar en settings (cuadro rojo)" },
      { image: "/ListApp/IboPlayer/2.png", text: "En esta página iras a ACCOUNT (cuadro azul)" },
      { image: "/ListApp/IboPlayer/3.png", text: "Aparecerá un cuadra con distinta información de aquí deberás guardarte Mac Address y Device Key. Una vez realizado puedes cerrar la aplicación, cuando se añada la lista completa volverás a entrar para ver el contenido" },
      { text: "Accerder al siguiente enlace:", link: "https://iboplayer.com/device/login", linkLabel: "Web Ibo Player Pro"},
      { image: "/ListApp/IboPlayer/4.png", text: "Aquí deberás añadir la Mac Address y Device Key que has obtenido antes, escribir el Captcha y darle a LOGIN. Si no borras el historial de navegación del navegador web, posiblemente este paso solo debas hacerlo una vez, si al acceder al enlace te aparece esto pues deberías escribir Mac Address, Device Key, Captcha y LOGIN" },
      { image: "/ListApp/IboPlayer/5.png", text: "Aquí iremos al lápiz (cuadro azul) para poder actualizar la lista." },
      { image: "/ListApp/IboPlayer/6.png", text: "Aquí copiaremos la url completa que ya teníamos guardada, la pegaremos donde pone Playlist URL (,M3Y or M3u8) (cuadro azul), al copiar la url comprobar que empiece por http y no https, ya que si es https no os funcionará. Una vez realizado este paso darle a SAVE (cuadro verde)" },
      { image: "/ListApp/IboPlayer/7.png", text: "Este es el último paso, para que se actualice correctamente debéis darle a Logout (cuadro azul). Una vez echo esto podéis cerrar todo e ir a la televisión, entrar como hacéis siempre y ya estaría vuestra lista actualizada" }
    ]
  }
]