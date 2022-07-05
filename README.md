# FINAL_PWA_UTN
Trabajo Final Programador Web Avanzado - Back y Front
Guillermo Paladini

El proyecto trata de un Sistema de Compras y Gestión de Presupuesto, en el cual se tiene cargado un presupuesto, y pueden cargarse Solicitudes de Compra que luego pueden ser aprobadas o rechazadas. Permite consultar las OC y su estado. Permite ver el presupuesto. El sistema inicia con un login que solicita usuario y contraseña. 

Se utilizaron las siguientes tecnologias:

Frontend: React y React Bootstrap. Se usaron hooks y para las llamadas a las APIs se utilizó AXIOS. El sitio es completamente responsivo, testeado con todas las vistas desde Google Chrome.
Backend: NodeJS con Express. Se programo un Web Server que atiende diferentes APIs (REST API) con llamadas GET y POST
Base de Datos: Se hizo uso de MySQL.

El sistema está subido en dos aplicaciones en Heroku. La Base de datos se cargo en un ClearDB MySQL.

Funcionamiento:

Al ingresar, se deberá iniciar sesión con las credenciales provistas.

La primer pantalla luego de iniciar sesión, muestra la bienvenida y las 4 opciones que tiene el sistema y se describen a continuación:

1) Compras: Formulario que carga en BD una Solicitud de compra. El formulario validará los datos e indicará cuales deben corregirse al hacerse clic en el boton enviar.

2) Consulta: Consulta la Base de Datos y muestra todas las Solicitudes de Compra cargadas y su estado: Aprobado - Rechazado - Pendiente

3) Aprobaciones: Muestra las Solicitudes de Compra que tienen pendiente la aprobación o el rechazo. Da la opción de aprobar o rechazar.

4) Presupuesto: Muestra el presupuesto anual.


