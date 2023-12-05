# NgbDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

**Configurar un proyecto angular con bootstrap

todo proyecto Front requiere tomar algunas decisiones sobre que componentes vamos a utilizar para manejar el diseño de la UI, 
Angular es un framework completo que tiene herramientas para todas las etapas de la creación de una nueva aplicación web, entonces la decisión que framework de componentes 
se utilizará es importante y no es poca cosa dado que ese compromiso de la aplicación y su generador de elementos UI afectará todas las decisiones de crecimiento de la interfaz.

Es posible que se pueda diseñar una app de modo que la UI sea lo más independiente del framework css pero es algo que exploraremos en un una siguiente entrega. 

En este primer post, vamos a crear una app en angular usando el conocido framework bootstrap en un proyecto angular. Angular puede trabajar con distintos frameworks UI y esta serie de entregas se centra en explorar distintas alternativas de frameworks UI usando Angular.

Boostrap es un framework CSS, que nos aportará buena cantidad de elementos que nos ayudarán en el desarrollo de un proyecto.

**Primeros pasos.

1. crear un proyecto en angular.

Es importante prestar atención a la versión que se tiene de angular, dado que eso influye en las versiones de bootstrap y sus dependencias, este punto es muy importante e influye en tener una instalación limpia o algunos dolores de cabeza por problemas de compatibilidad.


Aqui es importante tener en cuenta el siguiente listado de compatibilidad.

Vamos a usar esta implementación de los compoentes bootstrap para angular
https://ng-bootstrap.github.io/#/getting-started

Aqui tiene esta tabla de compatbilidad.


ng-bootstrap	Angular			Bootstrap CSS	Popper
10.x.x			^12.0.0			4.5.0	
11.x.x			^13.0.0			4.6.0	
12.x.x			^13.0.0			5.0.0			^2.10.2
13.x.x			^14.1.0			5.2.0			^2.10.2
14.x.x			^15.0.0			5.2.3			^2.11.6
15.x.x			^16.0.0			5.2.3			^2.11.6
16.x.x			^17.0.0			5.3.2			^2.11.8

Creamos un nuevo proyecto angular.

Para esta demostracion tenemos un angular cli version 16

1. ng new ngb-demo
2. ng add @ng-bootstrap/ng-bootstrap@v15

Observar que la version 15 es compatible con la version 16 de angular.

3. Organizar el proyecto para contar con un modulo exclusivo para importar los componentes boostrap
4. importar ese modulo en el modulo principal
5. Crear componentes que usen en el html referencias a ng-bootstrap
6. Demo del proyecto en github: https://github.com/jorge-alvarado-revata/ngb-demo.git