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
# Flujo de trabajo
Cada persona para iniciar su trabajo debe iniciar siempre con los siguientes comandos:
```bash
git checkout develop
git pull origin develop
git checkout -b Rama con tu nombre
```

Durante el desarrollo de la funcionalidad se debe:

1. Realizar cambios en la rama con tu nombre, esta rama solo contendrá la funcionalidad en la que estes trabajando actualmente. 
2. Ejecutar pruebas unitarias.
3. Realizar commits pequeños, claros y semanticos (convención Angular)

Ejemplo

```bash
git status

sino estas en la rama de tu funcionalidad

git checkout Rama con tu nombre

git add .
git commit -m "feat: implementación de login con JWT"

publicamos cambios

git push origin Rama con tu nombre
```
Nota: Nunca realices push hacía develop ni a main directamente.

4. Crea Pull Request hacia develop
5. Asocia un Issue a tu Pull Request
6. Tu Pull Request entrará a revisión.
7. Una vez aprobado, se realiza merge a develop
8. La rama main se actualizará desde develop cuando se apruebe por parte del Product Owner.
9. Elimina el contenido de tu rama (Nada se pierde ya que la eliminación de archivos no es más que un triste commit más).


# Definición de ramas

```text
main          → versión estable (producción)
develop       → rama de integración del equipo
Rama con tu nombre/nickname   → Rama donde vas a trabajar en las implementaciones
documentacion → rama de registros
feature/*     → desarrollo de nuevas funcionalidades
hotfix/*      → correcciones urgentes en producción
```


## Pull Requests (PR)
Para solicitar Pull Requests, los asignados deberán copiar y rellenar la siguiente plantilla:

```js
Nombre: colocar el titulo del Issue que asociarás
Fecha: coloca la fecha del Issue

Descripción: explica tu desarrollo y razones
#issue: coloca aquí el número del Issue a asociar

Cambios realizados: describe los cambios o mejoras realizadas de manera breve

CHECKLIST (copia y pega el checklist de Tareas del Issue y ve marcandolas comforme a tu desarrollo)
- [ ] tarea 1
- [ ] tarea 2
.
.
.
- [ ] tarea n

Comentarios: agrega comentarios si crees oportuno o no puedes participar en la revisión
```


# Issues
Los "Issues" serán generados por el Product Owner, Scrum Master y Líder Técnico unicamente siguiendo la siguiente plantilla:

```js
Nombre: nueva funcionalidad o refactorizacion
Descripcion: proponer o reportar una nueva funcionalidad a desarrollar, breve
Titulo: "[FEAT] "
Etiquetas: mejora o propuesta, pagina o general o script, front o back o bbdd
Asignaciones: se asignará acorde a metrica y patrones de trabajo 
`
Tareas

- [ ] Crear rama feature/...
- [ ] Implementar funcionalidad
- [ ] Realizar pruebas unitarias
- [ ] Documentar cambios si aplica

Criterios de aceptación

- Marcar los corchetes correspondientes con una x, si hay alguno inconcluso explicar como podemos ayudarte como equipo.
- Qué debe hacer la funcionalidad para considerarse terminada.

Notas

Cualquier comentario adicional o requerimiento especial del Product Owner, Scrum Master o Lider Tecnico.
```



