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

```

## Definición de ramas

```text
main        → versión estable (producción)
develop     → rama de integración del equipo
feature/*   → desarrollo de nuevas funcionalidades
hotfix/*    → correcciones urgentes en producción
```

## Flujo de trabajo
Cada persona para iniciar su trabajo debe iniciar siempre con los siguientes comandos:
```bash
git checkout develop
git pull origin develop
git checkout -b feature/nombre-funcionalidad
```

Durante el desarrollo de la funcionalidad se debe:

1. Realizar cambios en la rama feature/* (git status para verificar que estas en la rama, git checkout feature/nombre-funcionalidad para moverte).
2. Ejecutar pruebas unitarias.
3. Realizar commits pequeños, claros y semanticos (convención Angular)

Ejemplo

```bash
git status

sino estas en la rama de tu funcionalidad

git checkout feature/nombre-funcionalidad

git add .
git commit -m "feat: implementación de login con JWT"

publicamos cambios

git push origin feature/nombre-funcionalidad
```
Nota: Nunca realices push hacía develop ni a main directamente.

4. Crea Pull Request hacia develop
5. Asocia un Issue a tu Pull Request
6. Tu Pull Request entrará a revisión.
7. Una vez aprobado, se realiza merge a develop
8. La rama main se actualizará desde develop cuando se apruebe por parte del Product Owner.
