# prueba-phone-store
Phone Store app hecho en react

Aplicación hecha en create react app, 

<h1>DESCRIPCIÓN</h1>

<p>Muestra una pagina principal donde realizo el llamado a la API por medio medio de FETCH, luego itero sobre el resultado con un array method .map(),
luego al click en un resultado obtengo el id y lo envio a travez de props al componente donde se hara un llamado a la otra api que me envia los resultados de los detalles, luego muetra un selector para seleccionar un color y capacidad del producto, hay dos botones, uno para añadir al carrito y otro para ver los detalles de ese producto, al agregar al carrito se muestra un contador en la parte derecha superior de la pagina. tambien hay un buscador, donde se filtran los resultados, ya sea por marca, modelo o precio.
Los datos de la api se guardan en local storage y se verifica si exiten en local storage para no hacer la consulta a la api (se reinicia pasada una hora).</p>


<h2>🚀 Getting Started:</h2>

En el directorio del proyecto, puede ejecutar:

<h2>npm start</h2>
Ejecuta la aplicación en el modo de desarrollo.
Abra http://localhost:3000 para verlo en su navegador.

La página se volverá a cargar cuando realice cambios.
También puede ver errores de lint en la consola.

<h2>npm test</h2>
Inicia el corredor de prueba en el modo de reloj interactivo.
Consulte la sección sobre la ejecución de pruebas para obtener más información.

<h2>npm run build</h2>
Crea la aplicación para la producción en la build.
Empaqueta correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación se minimiza y los nombres de archivo incluyen los hashes.
¡Tu aplicación está lista para ser implementada!

<h2>npm run lint</h2>
Ejecuta este comando para Comprobar el codigo.
