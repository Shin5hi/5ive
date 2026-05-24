# 5ive - Discord Bot Base Repository

Un bot de Discord completo y profesional diseñado para automatizar y gestionar servidores de Discord de manera eficiente.

## 🌟 Características

- ✅ Sistema de comandos slash modular y escalable
- ✅ Gestión de eventos personalizable
- ✅ Sistema de cooldown integrado
- ✅ Comandos de moderación (kick, ban, clear)
- ✅ Comandos de utilidad (info, ping, help, userinfo, serverinfo)
- ✅ Sistema de logging robusto
- ✅ Manejo de errores completo
- ✅ Bienvenida automática a nuevos miembros
- ✅ Código limpio y bien documentado
- ✅ Soporte para permisos y roles

## 📋 Requisitos Previos

- Node.js v18.0.0 o superior
- npm o yarn
- Una aplicación de Discord Bot (obtén el token en [Discord Developer Portal](https://discord.com/developers/applications))

## 🚀 Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/Shin5hi/5ive.git
cd 5ive
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env
```

Edita el archivo `.env` con tus credenciales:
```env
DISCORD_TOKEN=tu_token_del_bot
CLIENT_ID=tu_application_id
GUILD_ID=tu_server_id (opcional, para pruebas)
OWNER_ID=tu_discord_user_id
```

4. **Registrar comandos slash**
```bash
npm run deploy
```

5. **Iniciar el bot**
```bash
npm start
```

Para desarrollo con auto-reload:
```bash
npm run dev
```

## 🔧 Configuración del Bot

### Crear una Aplicación de Discord

1. Ve a [Discord Developer Portal](https://discord.com/developers/applications)
2. Haz clic en "New Application"
3. Dale un nombre a tu aplicación
4. Ve a la sección "Bot" y haz clic en "Add Bot"
5. Copia el token del bot (DISCORD_TOKEN)
6. Activa los siguientes **Privileged Gateway Intents**:
   - SERVER MEMBERS INTENT
   - MESSAGE CONTENT INTENT
   - PRESENCE INTENT

### Invitar el Bot a tu Servidor

1. Ve a la sección "OAuth2" > "URL Generator"
2. Selecciona los siguientes scopes:
   - `bot`
   - `applications.commands`
3. Selecciona los permisos del bot:
   - Administrator (o permisos específicos según necesites)
4. Copia la URL generada y ábrela en tu navegador
5. Selecciona el servidor donde quieres añadir el bot

## 📁 Estructura del Proyecto

```
5ive/
├── src/
│   ├── commands/          # Comandos del bot organizados por categorías
│   │   ├── moderation/    # Comandos de moderación (kick, ban, clear)
│   │   └── utility/       # Comandos de utilidad (ping, help, info)
│   ├── events/            # Event handlers del bot
│   │   ├── ready.js       # Evento cuando el bot está listo
│   │   ├── interactionCreate.js  # Manejo de interacciones
│   │   └── guildMemberAdd.js     # Bienvenida a nuevos miembros
│   ├── utils/             # Utilidades y helpers
│   │   ├── logger.js      # Sistema de logging
│   │   └── helpers.js     # Funciones auxiliares
│   ├── config.js          # Configuración del bot
│   ├── index.js           # Punto de entrada principal
│   └── deploy-commands.js # Script para registrar comandos
├── .env.example           # Plantilla de variables de entorno
├── .gitignore            # Archivos ignorados por git
├── package.json          # Dependencias y scripts
└── README.md             # Este archivo
```

## 🎯 Comandos Disponibles

### Utilidad
- `/ping` - Verifica la latencia del bot
- `/help` - Muestra todos los comandos disponibles
- `/info` - Información del bot y estadísticas
- `/userinfo [usuario]` - Información sobre un usuario
- `/serverinfo` - Información sobre el servidor

### Moderación
- `/kick <usuario> [razón]` - Expulsa a un miembro del servidor
- `/ban <usuario> [razón] [días]` - Banea a un miembro del servidor
- `/clear <cantidad> [usuario]` - Elimina múltiples mensajes

## 🔨 Crear Nuevos Comandos

1. Crea un nuevo archivo en `src/commands/[categoría]/comando.js`
2. Usa esta plantilla:

```javascript
import { SlashCommandBuilder } from 'discord.js';

export default {
  category: 'Nombre de Categoría',
  cooldown: 5, // segundos (opcional)
  data: new SlashCommandBuilder()
    .setName('nombre-comando')
    .setDescription('Descripción del comando'),

  async execute(interaction) {
    await interaction.reply('¡Hola desde tu nuevo comando!');
  },
};
```

3. Ejecuta `npm run deploy` para registrar el nuevo comando
4. Reinicia el bot

## 🎪 Crear Nuevos Eventos

1. Crea un nuevo archivo en `src/events/nombreEvento.js`
2. Usa esta plantilla:

```javascript
import { Events } from 'discord.js';

export default {
  name: Events.NombreDelEvento,
  once: false, // true si solo debe ejecutarse una vez
  async execute(...args) {
    // Tu código aquí
  },
};
```

## 🛠️ Personalización

### Cambiar el Prefijo del Bot
Edita `PREFIX` en tu archivo `.env`

### Modificar la Presencia del Bot
Edita el archivo `src/events/ready.js`:
```javascript
client.user.setPresence({
  activities: [{ name: 'tu mensaje personalizado' }],
  status: 'online', // online, idle, dnd, invisible
});
```

### Configurar Auto-Roles
Descomenta y configura el código en `src/events/guildMemberAdd.js`

### Personalizar el Canal de Bienvenida
Modifica la lógica en `src/events/guildMemberAdd.js` para especificar el canal correcto

## 📝 Scripts NPM

- `npm start` - Inicia el bot
- `npm run dev` - Inicia el bot con auto-reload (Node.js 18+)
- `npm run deploy` - Registra/actualiza los comandos slash

## 🐛 Solución de Problemas

### El bot no responde a comandos
1. Verifica que ejecutaste `npm run deploy`
2. Asegúrate de que el bot tiene los permisos necesarios
3. Verifica que los intents estén activados en el Developer Portal

### Error "Missing Access"
- El bot necesita permisos para realizar esa acción
- Verifica la jerarquía de roles (el rol del bot debe estar más alto)

### Comandos no se registran
- Para comandos globales, puede tardar hasta 1 hora
- Usa `GUILD_ID` en `.env` para pruebas instantáneas

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:
1. Haz fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🔗 Enlaces Útiles

- [Discord.js Documentation](https://discord.js.org/)
- [Discord Developer Portal](https://discord.com/developers/applications)
- [Discord.js Guide](https://discordjs.guide/)

## 💬 Soporte

Si tienes preguntas o necesitas ayuda, abre un issue en el repositorio.

---

**Desarrollado con ❤️ para la comunidad de Discord**
