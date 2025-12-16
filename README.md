#  Proyecto E-Commerce

Este repositorio contiene el código fuente para la plataforma de comercio electrónico desarrollada por el equipo. La aplicación es una solución Full Stack que utiliza **React** para el frontend y **SQL** para la base de datos.

---

## 📂 Estructura del Repositorio

El proyecto está organizado de manera modular para separar la lógica del cliente (frontend), el servidor (backend) y la base de datos.

```text
mi-ecommerce-repo/
│
├── frontend/               # Proyecto de React (Single Page Application)
│   ├── public/             # Assets estáticos públicos
│   ├── src/                # Código fuente (Componentes, Hooks, Estilos)
│   ├── package.json        # Dependencias de npm/yarn del cliente
│   └── README.md           # Instrucciones específicas del frontend
│
├── backend/                # API y Lógica del Servidor
│   ├── src/                # Controladores, rutas y modelos
│   ├── server.js           # Punto de entrada del servidor
│   └── package.json        # Dependencias del servidor
│
├── database/               # Gestión de Datos
│   ├── script_creacion.sql # Script DDL para crear tablas
│   ├── seeds.sql           # Datos de prueba (semilla)
│   └── diagrama_er.png     # Diagrama Entidad-Relación visual
│
├── docs/                   # Documentación del Proyecto
│   ├── wireframes/         # Prototipos de diseño UI/UX
│   └── requerimientos.md   # Lista de funcionalidades requeridas
│
├── .gitignore              # Archivos excluidos de Git (node_modules, .env)
└── README.md               # Este archivo

