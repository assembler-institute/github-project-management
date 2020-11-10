![Assembler School Logo](https://assets.website-files.com/5d7ac47d34aefe1ecf290ce6/5d7ac68da9740c393a589ee7_logo_org_1.png)



# Github Project Management Reference

## Basic Kanban

Lo primero que necesitaremos, es crear un tablero para gestionar nuestro proyecto. Esto lo podemos encontrar en la pestana **Projects** de github:

![](./assets/asset.png)

Procedemos a colocar un nombre para nuestro proyecto (y opcionalmente una descripción):

![](./assets/asset1.png)

Como utilizaremos un Kanban básico, podemos hacer uso de los templates (plantillas) que nos provee github

![](./assets/asset2.png)

¡Felicidades! Ya tienes un tablero para tu proyecto. Para tener limpio nuestro tablero podemos pasar a archivar las cartas que nos coloca por defecto github:

![](./assets/asset3.png)

Confirmamos:

![](./assets/asset4.png)

Ahora tenemos un tablero limpio y listo para utilizarse!

![](./assets/asset5.png)

Un concepto clave de utilizar github projects es que podemos gestionar nuestros _milestones_. En scrum se conoce como _Sprints_, y se refiere a las fechas pautadas para planificar la entrega de nuevas funcionalidades.

Podemos crear una nueva desde el apartado **Milestones** al lado de **Labels** en la pestaña Issues.

![](./assets/asset6.png)

Hacemos click en **New Milestone**

![](./assets/asset7.png)

Podremos colocar el nombre, descripción y **fecha en la que culmina** ese sprint. Por lo general, no suelen durar mas de 2 semanas.

![](./assets/asset8.png)

¡Felicidades, ya tienes un Sprint!

![](./assets/asset9.png)

Ahora, procederemos a crear nuestro primer Issue. Hacemos click en **New Issue** en la pestaña Issue

![](./assets/asset10.png)

Ahora podemos customizar una serie de campos para especificar que este nuevo Issue pertenece a nuestro proyecto.

![](./assets/asset11.png)

**Primero**, podemos colocar la persona que se encargará de este Issue.

![](./assets/asset12.png)

Luego, podemos asignar este Issue a nuestro nuevo proyecto

![](./assets/asset13.png)

Finalmente, lo vinculamos con nuestro Sprint actual

![](./assets/asset14.png)

Ahora, podemos proceder a colocar una descripción:

![](./assets/asset15.png)

![](./assets/asset16.png)

En nuestro caso, hemos colocado que deberíamos renombrar una función para mantener una buena organización del código.

Una vez se crea la Issue, aparecerá a la derecha de nuestro board, lista para que la añadamos en **To Do.**

![](./assets/asset17.png)

Procedemos a añadirla a **To Do**

![](./assets/asset18.png)

Cuando la persona esté lista para empezar a desarrollar, procederá a moverla a la columna de **In Progress**

![](./assets/asset19.png)

A continuación, realizará cambios en el código, y commiteará dichos cambios

> _Importante ⚠_
> El mensaje del commit debe contener el numero (#3 en nuestro caso) de la issue que se quiera resolver.

![](./assets/asset20.png)

Un ejemplo de commit message sería:

feat: implement function renaming #3

![](./assets/asset21.png)

Una vez commiteado, aparecerá dentro del historico de la Issue

![](./assets/asset22.png)

Si hacemos click en el commit, accederemos a los cambios en el código. Podremos revisarlos, hacer comentarios, sugerencias:

![](./assets/asset23.png)

Podemos mencionar personas con "@"

![](./assets/asset24.png)

Una vez finalizada la Issue, la movemos en nuestro tablero a **Done**

![](./assets/asset25.png)

Y procedemos a cerrar la Issue en cuestion.

![](./assets/asset26.png)

Si vamos a nuestro Sprint, como hemos cumplido con todas las tareas, tendremos un 100% completado! 🙌

![](./assets/asset27.png)

## Practica:

- Se deberá Forkear el repositorio: [https://github.com/assembler-school/github-project-management](https://github.com/assembler-school/github-project-management)
- Entrar en el repositorio forkeado, e invitar a los colaboradores. Ir a settings:

![](./assets/asset28.png)

Vamos a Manage Access:

![](./assets/asset29.png)

Invite teams or people:

![](./assets/asset30.png)

Colocamos el nombre de la persona:

![](./assets/asset31.png)

Le damos permisos para que pueda colaborar como admin

![](./assets/asset32.png)

![](./assets/asset33.png)

- Una vez estén todos los colaboradores, empezar a crear el Proyecto.
- Crear una milestone (Sprint)
- Crear 4 issues, basados en: [https://github.com/assembler-school/github-project-management/projects/2](https://github.com/assembler-school/github-project-management/projects/2)
- Empezar a desarrollar los Issues siguiendo la metodología, y commitear vuestros cambios. _Recordad que los mensajes de commit deben estar vinculados al numero de la Issue!_

Happy coding! 🧡

## Recursos

[https://www.youtube.com/watch?v=ff5cBkPg-bQ](https://www.youtube.com/watch?v=ff5cBkPg-bQ)
