# 📇 Contacts App

Una aplicación web moderna de gestión de contactos desarrollada con React que permite a los usuarios organizar, buscar y administrar su lista de contactos de manera intuitiva y eficiente.

![React](https://img.shields.io/badge/React-15.6.2-blue?logo=react)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Active-success)

## ✨ Características

### 🔍 **Gestión Completa de Contactos**
- **Lista de contactos**: Visualiza todos tus contactos con nombre, email y avatar
- **Búsqueda en tiempo real**: Filtra contactos instantáneamente mientras escribes
- **Agregar contactos**: Formulario intuitivo para crear nuevos contactos
- **Eliminar contactos**: Remueve contactos con un solo clic
- **Avatares personalizados**: Sube y gestiona imágenes de perfil para cada contacto

### 🚀 **Experiencia de Usuario**
- **Navegación fluida**: Implementado con React Router para una SPA completa
- **Ordenamiento automático**: Los contactos se organizan alfabéticamente
- **Contador dinámico**: Muestra cuántos contactos coinciden con tu búsqueda
- **Interfaz responsive**: Funciona perfectamente en dispositivos móviles y desktop

### 🔧 **Características Técnicas**
- **PWA (Progressive Web App)**: Funciona offline y se puede instalar
- **API REST**: Integración con backend para persistencia de datos
- **Autenticación por token**: Sistema de sesión seguro
- **Formatos modernos**: Soporte para múltiples formatos de imagen

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 15.6.2, React Router 4.2.0
- **Build Tool**: Create React App
- **Estilos**: CSS3 personalizado
- **Formularios**: form-serialize para manejo de datos
- **Búsqueda**: escape-string-regexp para filtrado seguro
- **Ordenamiento**: sort-by para organización de datos
- **Calidad de Código**: ESLint, Prettier, Husky (pre-commit hooks)

## 📦 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 8 o superior)
- npm o yarn
- Servidor de API backend (por defecto: `http://localhost:5001`)

### Pasos de Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/victoralfonsoperez/contacts.git
   cd contacts
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Configura la API (opcional)**
   
   Por defecto, la aplicación se conecta a `http://localhost:5001`. Para cambiar esto:
   ```bash
   # Crea un archivo .env en la raíz del proyecto
   echo "REACT_APP_CONTACTS_API_URL=https://tu-api.com" > .env
   ```

4. **Inicia la aplicación**
   ```bash
   npm start
   # o
   yarn start
   ```

5. **Accede a la aplicación**
   
   Abre tu navegador en `http://localhost:3000`

## 🏗️ Estructura del Proyecto

```
contacts/
├── public/
│   ├── index.html          # Template HTML principal
│   └── manifest.json       # Configuración PWA
├── src/
│   ├── App.js             # Componente principal con routing
│   ├── ListContacts.js    # Lista y búsqueda de contactos
│   ├── createContact.js   # Formulario para nuevos contactos
│   ├── ImageInput.js      # Componente para selección de avatares
│   ├── index.js           # Punto de entrada de la aplicación
│   ├── index.css          # Estilos globales
│   └── utils/
│       └── ContactsAPI.js # Comunicación con la API
├── package.json           # Dependencias y scripts
└── README.md             # Este archivo
```

## 🔌 API Integration

La aplicación se comunica con una API REST que debe implementar los siguientes endpoints:

### Endpoints Requeridos

- `GET /contacts` - Obtener lista de contactos
- `POST /contacts` - Crear nuevo contacto
- `DELETE /contacts/:id` - Eliminar contacto

### Formato de Datos

```javascript
// Estructura de un contacto
{
  id: "string",
  name: "string",
  email: "string",
  avatarURL: "string" // URL de la imagen
}
```

### Autenticación

La aplicación genera automáticamente un token de sesión que se almacena en `localStorage` y se envía en el header `Authorization` de todas las requests.

## 🚀 Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm test` - Ejecuta los tests
- `npm run build` - Construye la aplicación para producción
- `npm run eject` - Expone la configuración de Webpack (irreversible)

## 🎨 Características de Desarrollo

### Code Quality
- **ESLint**: Análisis estático de código
- **Prettier**: Formateo automático de código
- **Husky**: Git hooks para calidad de código
- **lint-staged**: Linting en archivos staged

### Git Workflow
```bash
# El código se formatea automáticamente en cada commit
git add .
git commit -m "Tu mensaje"
# Prettier formatea automáticamente los archivos modificados
```

## 🌟 Próximas Mejoras

- [ ] Edición inline de contactos
- [ ] Categorías/etiquetas para contactos
- [ ] Importación/exportación de contactos
- [ ] Sincronización con servicios de terceros
- [ ] Búsqueda avanzada por múltiples campos
- [ ] Tema oscuro/modo nocturno

## 🤝 Contribuir

1. **Fork** el proyecto
2. **Crea** una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre** un Pull Request

### Guías de Contribución

- Sigue las convenciones de código existentes
- Añade tests para nuevas funcionalidades
- Actualiza la documentación cuando sea necesario
- Usa commits descriptivos siguiendo [Conventional Commits](https://conventionalcommits.org/)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Victor Alfonso Pérez**
- GitHub: [@victoralfonsoperez](https://github.com/victoralfonsoperez)

## 🙏 Agradecimientos

- Equipo de Create React App por la excelente base de desarrollo
- Comunidad React por las mejores prácticas
- Todos los contribuidores que han mejorado este proyecto

---

¿Encontraste útil este proyecto? ¡Dale una ⭐ en GitHub!