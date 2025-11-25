<div align="center">
<h1>InfoBeer - Explorador de Cervezas</h1>
  <img src="frontend/public/infobeer-logo.png" alt="Nuncius Logo" width="350" height="300">

### 🌍 Choose Language

[**Español**](README.es.md) • [**English**](README.md)

</div>

---

# 🚀 Descripción

InfoBeer es una aplicación web diseñada para amantes de la cerveza que permite explorar y descubrir diferentes estilos y variedades de cerveza.

### ✨ Características principales:

- 📂 **Navegación por estilos** - Explora categorías de cervezas
- 🍺 **Catálogo completo** - Descubre numerosas cervezas dentro de cada estilo
- 🔍 **Vista detallada** - Información completa de cada cerveza
- 🎨 **Interfaz moderna** - Diseño responsive y intuitivo

# 💻 Tech Stack

### **Frontend:**

<div> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"> <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"> <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite"> <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"></div>

### **Backend:**

<div> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"> <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express"></div>

### **Base de Datos:**

<div> <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL"></div>

### **DevOps:**

<div> <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"> </div>

---

### 🎯 Objetivo

El objetivo de **InfoBeer** es desarrollar una **aplicación web fullstack dockerizada** que permita a los usuarios explorar y descubrir distintos estilos y variedades de cerveza.  
Este proyecto combina **frontend en React/TypeScript**, **backend en Node.js/Express**, y **base de datos PostgreSQL**, todo gestionado mediante **Docker Compose** para facilitar la instalación y despliegue.

### 📦 Fuentes de Datos

Los datos de las cervezas presentes en la base de datos **no son de creación propia**, sino que han sido obtenidos de la página [escerveza.com](https://escerveza.com/) mediante **web scraping** en otro proyecto personal.  
Puedes consultar el repositorio del scraper aquí: [🍻 scraping-beers-escervezas](https://github.com/Jorge-Guedes/scraping-beers-escervezas).

---

## 🖼️ Vista previa

<div align="center">

### Home / Pantalla principal

<img src="frontend/public/home.png" alt="Pantalla principal" width="400">
<br>
<em>Home / Inicio de InfoBeer</em>

### Categorías de cervezas

<img src="frontend/public/categories.png" alt="Categorías de cervezas" width="400">
<br>
<em>Exploración por estilos de cerveza</em>

### Listado de cervezas

<img src="frontend/public/beers-list.png" alt="Listado de cervezas" width="400">
<br>
<em>Catálogo completo dentro de un estilo</em>

### Detalle de cerveza

<img src="frontend/public/info-beer.png" alt="Detalle de cerveza" width="400">
<br>
<em>Información detallada de una cerveza</em>

</div>

---

# 🚀 Ejecución Rápida

## 📋 Requisitos

- **Docker**: Versión 20.10 o superior
- **Docker Compose**: Versión 2.0 o superior

### ✅ Verificar instalación:

```bash
docker --version
docker compose version
```

## 1 - 📥 Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/infobeer.git
cd infobeer
```

## 2 - 🐳 Ejecutar la aplicación

```bash
docker compose up --build
```

## 3 - 🌐 Acceder a la aplicación

Una vez que todos los contenedores estén en funcionamiento:

- 🖥️ **Aplicación Web**: http://localhost

## 4 - ⏹️ Detener la aplicación

```bash
docker compose down
```

---

# 🔧 Modo Desarrollo

### 📋 Requisitos adicionales

- **Node.js** versión 20 o superior
- **PostgreSQL** versión 15 o superior

### ✅ Verificar instalación:

```bash
node --version
npm --version
```

## 🗄️ 1 - Configuración de la Base de Datos

Para configurar la base de datos tienes dos opciones:

### 🅰️ Opción A: Usar Docker Compose (Recomendado)

- Navega a la carpeta de base de datos  
  cd backend/BBDD

- Ejecuta PostgreSQL con Docker  
  docker compose up -d

- Crea manualmente la base de datos **beers_db**

- Carga el archivo **beers_db.sql** usando pgAdmin, DBeaver u otra herramienta

### 🅱️ Opción B: PostgreSQL Local

- Instala PostgreSQL si no lo tienes
- Crea la base de datos llamada **beers_db**
- Carga el archivo backend/BBDD/beers_db.sql usando tu cliente SQL preferido

## 🚀 2 - Configuración del Backend

### 📁 Navegar al directorio del backend

```bash
cd backend
```

### 📦 Instalar dependencias

```bash
npm install
```

### ⚙️ Configurar variables de entorno

Crea un archivo **.env** en la carpeta _backend_ con:

```txt
DB_HOST=localhost
DB_PORT=5432
DB_NAME=beers_db
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
PORT=3000
```

### 🖥️ Ejecutar backend

```bash
npm run dev
```

## 🌐 3 - Configuración del Frontend

### 📁 Navegar al directorio del frontend

```bash
cd frontend
```

### 📦 Instalar dependencias

```bash
npm install
```

### 🎯 Ejecutar el frontend

```bash
npm run dev
```

## ✅ 4 - Verificar que todo funciona

- **Backend:** Disponible en http://localhost:3000
- **Frontend:** Disponible en http://localhost:5173 (o puerto similar)
<div align="center">
  <img src="frontend/public/beer.gif" alt="Beer Cheers" width="600">
  <br>
  <em>Salud! 🍻</em>
</div>
