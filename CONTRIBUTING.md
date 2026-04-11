# Contributing to 5ive Discord Bot

¡Gracias por tu interés en contribuir a 5ive! Este documento proporciona pautas para contribuir al proyecto.

## 🤝 Cómo Contribuir

### Reportar Bugs

Si encuentras un bug, por favor crea un issue con:
- Descripción clara del problema
- Pasos para reproducir el bug
- Comportamiento esperado vs comportamiento actual
- Versión de Node.js y Discord.js
- Logs relevantes (sin información sensible)

### Sugerir Mejoras

Para sugerir nuevas características:
- Verifica que la funcionalidad no exista ya
- Describe claramente el caso de uso
- Explica por qué beneficiaría al proyecto

### Pull Requests

1. **Fork el repositorio** y crea una rama desde `main`
   ```bash
   git checkout -b feature/nombre-de-la-feature
   ```

2. **Realiza tus cambios** siguiendo las guías de estilo

3. **Prueba tus cambios** localmente:
   ```bash
   npm install
   npm run deploy
   npm start
   ```

4. **Commit tus cambios** con mensajes descriptivos:
   ```bash
   git commit -m "feat: añadir comando de música"
   ```

5. **Push a tu fork** y crea un Pull Request

## 📝 Guías de Estilo

### Código JavaScript

- Usa ES6+ features (async/await, arrow functions, etc.)
- Usa comillas simples para strings
- Indentación de 2 espacios
- Nombres de variables en camelCase
- Nombres de archivos en kebab-case
- Añade JSDoc para funciones complejas

### Estructura de Comandos

```javascript
import { SlashCommandBuilder } from 'discord.js';
import { createEmbed } from '../../utils/helpers.js';

export default {
  category: 'Categoría',
  cooldown: 5, // opcional
  data: new SlashCommandBuilder()
    .setName('nombre')
    .setDescription('Descripción clara'),

  async execute(interaction) {
    // Implementación
  },
};
```

### Estructura de Eventos

```javascript
import { Events } from 'discord.js';

export default {
  name: Events.EventName,
  once: false,
  async execute(...args) {
    // Implementación
  },
};
```

## ✅ Checklist de Pull Request

Antes de enviar tu PR, asegúrate de que:

- [ ] El código sigue las guías de estilo del proyecto
- [ ] Has probado tus cambios localmente
- [ ] Has actualizado la documentación si es necesario
- [ ] Tu PR tiene una descripción clara de los cambios
- [ ] No incluyes cambios no relacionados
- [ ] No subes archivos sensibles (.env, tokens, etc.)

## 🧪 Testing

Antes de hacer un PR:

1. Prueba el bot en un servidor de prueba
2. Verifica que los comandos existentes sigan funcionando
3. Prueba casos edge (usuarios sin permisos, inputs inválidos, etc.)
4. Verifica que no haya errores en la consola

## 📋 Convenciones de Commit

Usa prefijos semánticos en tus commits:

- `feat:` Nueva característica
- `fix:` Corrección de bug
- `docs:` Cambios en documentación
- `style:` Cambios de formato (sin afectar código)
- `refactor:` Refactorización de código
- `test:` Añadir o modificar tests
- `chore:` Tareas de mantenimiento

Ejemplos:
```
feat: añadir comando de música
fix: corregir cooldown en comando ban
docs: actualizar README con nuevos comandos
refactor: mejorar sistema de logging
```

## 🚫 Qué NO hacer

- No subas código que contenga tokens o credenciales
- No hagas cambios masivos sin discutir primero
- No copies código de otros proyectos sin verificar la licencia
- No añadas dependencias innecesarias
- No modifiques archivos de configuración sin razón

## 💡 Ideas para Contribuir

Si no sabes por dónde empezar, aquí hay algunas ideas:

- Añadir más comandos de utilidad
- Mejorar el sistema de logging
- Añadir tests automatizados
- Mejorar la documentación
- Traducir la documentación
- Optimizar el rendimiento
- Añadir más eventos personalizables
- Crear comandos de economía/niveles
- Implementar sistema de tickets
- Añadir comandos de música

## 📞 Contacto

Si tienes preguntas sobre cómo contribuir:
- Abre un issue con la etiqueta "question"
- Únete a nuestro servidor de Discord (si existe)

## 📜 Código de Conducta

- Sé respetuoso con otros contribuidores
- Acepta críticas constructivas
- Enfócate en lo mejor para el proyecto
- Mantén un ambiente positivo y colaborativo

---

¡Gracias por contribuir a 5ive! 🎉
