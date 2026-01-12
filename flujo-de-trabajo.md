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

