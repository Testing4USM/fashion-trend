# Proyecto: Aplicacion web de tienda en línea "Fashion Trend"

## Integrantes:
- Felipe Fuentes Villegas - ROL: 201973102-5
- Eugenio Perez Perez - ROL: 202073020-2
- Rafael Aros Soto - ROL: 201973034-7

## Requerimientos de Negocio

### Background
"Fashion Trend" es una tienda en línea especializada en la venta de ropa y accesorios de moda. Actualmente, los clientes enfrentan dificultades para encontrar productos específicos y obtener información detallada de ellos. Además, la gestión manual del inventario y los detalles de los productos ha resultado ser un proceso lento y propenso a errores.

### Oportunidades de Negocio
Existe una clara oportunidad de negocio para desarrollar un sistema de gestión de inventario y catálogo en línea que la tienda necesita, permitiendo resolver las dificultades mencionadas. Este nuevo sistema permitirá a los clientes la posibilidad de contar con su propia cuenta y buscar productos fácilmente, acceder a información detallada sobre los productos y mejorar la eficiencia interna de la lógica de negocio de la tienda a través de la automatización de procesos.

Desarrollar un sistema de gestión de inventario y catálogo en línea que:
- Mejore la experiencia de búsqueda y compra para los clientes.
- Automatice la gestión del inventario, reduciendo errores y mejorando la eficiencia operativa.
- Aumente las ventas mediante la implementación de funciones que fomenten compras repetitivas.

### Objetivos de Negocio y Criterios de Éxito
El objetivo principal del negocio al que se quiere apuntar con esta solución está muy alineado con la misión de la tienda: “Crear una experiencia de compra memorable, brindando a los clientes información detallada y actualizada sobre productos de moda”, a través de la mejora de la experiencia del cliente y de la eficiencia operativa.

1. Mejorar la experiencia del cliente:
   - Proporcionar una plataforma de venta en línea que facilite la búsqueda y obtención de información detallada de los productos.
   - Permitir a los clientes ver detalles completos del producto, incluyendo imágenes, descripciones y precios.
2. Optimizar la gestión interna:
   - Automatizar la gestión del inventario y la información del producto.
   - Reducir los errores en la gestión del inventario y mejorar la eficiencia operativa.
3. Aumentar las ventas:
   - Facilitar el proceso de compra para los clientes.
   - Implementar funcionalidades que fomenten la repetición de compras, como listas de deseos y historial de compras.

Criterios de éxito:
- Aumento en la satisfacción del cliente.
- Reducción de errores en la gestión del inventario.
- Incremento de las ventas debido a una mejor experiencia de compra.
- Reducción del tiempo dedicado a la gestión manual de inventario y detalles de productos.

### Necesidades del Cliente y del Mercado
Los clientes necesitan una plataforma fácil de usar que les permita encontrar y comprar productos de moda rápidamente y con información detallada. El mercado necesita una tienda en línea que sea competitiva, que ofrezca una experiencia de usuario superior y una gestión eficiente del inventario para mantenerse ordenada.

### Riesgos de Negocio
- Implementación deficiente del sistema, lo que podría llevar a una mala experiencia del cliente y pérdida de ventas.
- Problemas técnicos que podrían resultar en interrupciones del servicio y afectar la reputación de la tienda.
- Resistencia al cambio por parte del equipo de la tienda para adoptar y utilizar el nuevo sistema.

## Casos de Uso

### UC1: Buscar Producto
**Actores:** Cliente  
**Descripción:** Permitir a los clientes buscar productos por categoría, tipo, tamaño y color.  
**Precondiciones:** Ninguna  
**Flujo Principal:**
1. El cliente ingresa los criterios de búsqueda.
2. El sistema muestra los productos que coinciden con los criterios.

**Flujo Alternativo:**
- Si no se encuentra ningún producto que coincida con los criterios de búsqueda, se muestra un mensaje indicando que no se encontraron resultados.

**Postcondiciones:** El cliente visualiza los productos que coinciden con los criterios de búsqueda.

**Comentarios:** Ninguno

### UC2: Ver Detalles del Producto
**Actores:** Cliente  
**Descripción:** Mostrar detalles completos de un producto seleccionado, incluyendo imágenes, descripciones y precios.  
**Precondiciones:** El cliente debe haber realizado una búsqueda de productos.
**Flujo Principal:**
1. El cliente selecciona un producto de la lista de resultados de búsqueda.
2. El sistema muestra los detalles del producto seleccionado, incluyendo imágenes, descripciones y precios.

**Flujo Alternativo:** Ninguno

**Postcondiciones:** El cliente visualiza los detalles del producto.

**Comentarios:** Ninguno

### UC3: Administrar Inventario
**Actores:** Personal de la tienda  
**Descripción:** Permitir al personal de la tienda agregar, editar y eliminar productos, así como gestionar el inventario.  
**Precondiciones:** El personal de la tienda debe iniciar sesión en la interfaz de administración.
**Flujo Principal:**
1. El personal de la tienda inicia sesión en la interfaz de administración.
2. El personal agrega, edita o elimina productos según sea necesario.

**Flujo Alternativo:**
- Si el personal de la tienda intenta realizar una acción sin los permisos adecuados, se muestra un mensaje de error y la acción es rechazada.

**Postcondiciones:** El inventario se actualiza según las acciones realizadas por el personal de la tienda.

**Comentarios:** Los miembros del equipo de la tienda están capacitados para gestionar el inventario.

### UC4: Registrar y Autenticar Cliente
**Actores:** Cliente  
**Descripción:** Permitir a los usuarios crear cuentas y realizar el inicio de sesión para acceder a funciones adicionales como guardar elementos en la lista de deseos y completar compras.  
**Precondiciones:** Ninguna  
**Flujo Principal:**
1. El cliente selecciona la opción de registro/inicio de sesión.
2. El sistema solicita la información necesaria.
3. El cliente ingresa los datos requeridos y confirma.
4. El sistema valida y registra/autentica al cliente.

**Flujo Alternativo:**
- Si el sistema experimenta problemas técnicos, se muestra un mensaje de error y se solicita al cliente que intente nuevamente más tarde.
- Si el cliente ingresa credenciales incorrectas durante el inicio de sesión, se muestra un mensaje de error y se le pide que vuelva a intentarlo.

**Postcondiciones:** El cliente está registrado o autenticado en el sistema.

**Comentarios:** Ninguno

### UC5: Realizar Compra
**Actores:** Cliente  
**Descripción:** Facilitar el proceso de compra permitiendo a los usuarios agregar productos al carrito, revisar su selección y completar transacciones.  
**Precondiciones:** El cliente debe estar autenticado en el sistema.
**Flujo Principal:**
1. El cliente agrega productos al carrito.
2. El cliente revisa su selección y procede al proceso de pago.
3. El cliente proporciona la información de envío y pago.
4. El sistema procesa la transacción y confirma la compra al cliente.

**Flujo Alternativo:**
- Si ocurre un error durante el proceso de pago, se muestra un mensaje de error y se solicita al cliente que lo intente nuevamente.

**Postcondiciones:** La compra se completa y se actualiza el inventario.

**Comentarios:** Ninguno


## Requerimientos Funcionales
1. **Búsqueda Avanzada (RF01):** Permitir a los clientes buscar productos por categoría, tipo, tamaño y color.
2. **Visualización Detallada de Productos (RF02):** Mostrar detalles completos de un producto seleccionado, incluyendo imágenes, descripciones y precios.
3. **Gestión de Inventario en Tiempo Real (RF03):** Proporcionar información actualizada sobre la disponibilidad de productos en el inventario.
4. **Interfaz de Administración (RF04):** El sistema debe ofrecer una interfaz de administración intuitiva para el equipo de la tienda, permitiendo agregar, editar y eliminar productos, así como gestionar el inventario.
   - **RF4.1:** Permitir agregar nuevos productos al catálogo.
   - **RF4.2:** Facilitar la edición de detalles de productos existentes.
   - **RF4.3:** Permitir eliminar productos del catálogo.
   - **RF4.4:** Facilitar la gestión de inventario, incluyendo la actualización de cantidades y la monitorización de stock.
5. **Registro y Autenticación de Clientes (RF05):** Permitir a los clientes crear cuentas y realizar el inicio de sesión para acceder a funciones adicionales.
6. **Proceso de Compra Simplificado (RF06):** Facilitar el proceso de compra permitiendo a los clientes agregar productos al carrito y completar transacciones de manera eficiente.
7. **Analisis y reporting (RNF07):** El sistema debe incorporar capacidades de generación de informes para permitir a la
administración tomar decisiones basadas en datos y tendencias del mercado.

## Requerimientos No Funcionales
1. **Seguridad de Datos (RNF01):** Garantizar la seguridad de la información personal y financiera de los clientes.
2. **Rendimiento del Sistema (RNF02):** Asegurar que el sistema pueda manejar cargas de trabajo variables sin degradación del rendimiento.
3. **Usabilidad de la Interfaz de Usuario (RNF03):** Asegurar que la interfaz de usuario sea intuitiva y fácil de usar.
4. **Mantenibilidad del Código (RNF04):** Facilitar la modificación y actualización del código del sistema.
5. **Escalabilidad del Sistema (RNF05):** Permitir que el sistema pueda crecer y adaptarse a medida que aumenta el número de usuarios y productos.

## Priorización de Requerimientos
### Requerimientos Funcionales:
1. **Alta Prioridad:**
   - Búsqueda Avanzada (RF01)
   - Gestión de Inventario en Tiempo Real (RF03)
   - Interfaz de Administración (RF04)
2. **Media Prioridad:**
   - Registro y Autenticación de Clientes (RF05)
   - Visualización Detallada de Productos (RF02)
   - Analisis y reporting (RNF07)
3. **Baja Prioridad:**
   - Proceso de Compra Simplificado (RF06)

### Requerimientos No Funcionales:
1. **Alta Prioridad:**
   - Seguridad de Datos (RNF01)
   - Rendimiento del Sistema (RNF02)
   - Usabilidad de la Interfaz de Usuario (RNF03)
2. **Media Prioridad:**
(Son requesitos no funcionales, no necesariamente van a tener prioridad)
3. **Baja Prioridad:**
   - Escalabilidad del Sistema (RNF05)
   - Mantenibilidad del Código (RNF04)
 

## Supuestos
1. **Acceso a Internet Estable (SU01):** Se parte del supuesto de que tanto los clientes como el personal de la tienda contarán con una conexión a Internet estable y confiable para acceder sin contratiempos a la plataforma en línea.
2. **Recursos de Hardware y Software Disponibles (SU02):** Se espera que la infraestructura necesaria tanto en términos de hardware como de software esté disponible y funcione adecuadamente para alojar y ejecutar el sistema de gestión de la tienda en línea.
3. **Colaboración Activa del Equipo de la Tienda (SU03):** Se confía en que el equipo de la tienda estará dispuesto a colaborar activamente durante el proceso de implementación y prueba del sistema proporcionando información valiosa sobre los productos y los procesos internos de la tienda.
4. **Aceptación y Retroalimentación de los Usuarios Finales (SU04):** Se espera que los usuarios finales tanto clientes como personal de la tienda estén abiertos y dispuestos a adoptar el nuevo sistema brindando retroalimentación útil para futuras mejoras y optimizaciones.

## Casos de Prueba

### TC01: Búsqueda de Producto
**Requerimiento Asociado:** RF01 (Búsqueda Avanzada)  
**Descripción:** Verificar que los clientes puedan buscar productos por categoría, tipo, tamaño y color.  
**Pasos:**
1. Ingresar a la página de búsqueda avanzada.
2. Ingresar criterios de búsqueda (categoría, tipo, tamaño, color).
3. Verificar que los resultados mostrados coincidan con los criterios ingresados.

**Resultado Esperado:** Los resultados de la búsqueda deben coincidir con los criterios ingresados.

### TC02: Registro de Cliente
**Requerimiento Asociado:** RF05 (Registro y Autenticación de Clientes)  
**Descripción:** Confirmar que los nuevos clientes puedan registrarse correctamente en el sistema y que se cree una cuenta para ellos.  
**Pasos:**
1. Ir a la página de registro.
2. Completar el formulario de registro con información válida.
3. Enviar el formulario.

**Resultado Esperado:** Se crea correctamente una nueva cuenta de cliente.

### TC03: Visualización de Detalles del Producto
**Requerimiento Asociado:** RF02 (Visualización Detallada de Productos)  
**Descripción:** Verificar que los clientes puedan ver los detalles completos de un producto seleccionado.  
**Pasos:**
1. Seleccionar un producto de la lista de resultados de búsqueda.
2. Verificar que se visualicen descripciones y precios del producto.

**Resultado Esperado:** Se muestra correctamente toda la información detallada del producto seleccionado.

### TC04: Gestión de Inventario
**Requerimiento Asociado:** RF03 (Gestión de Inventario en Tiempo Real)  
**Descripción:** Verificar que los administradores puedan agregar, editar y eliminar productos del inventario.  
**Pasos:**
1. Iniciar sesión en la interfaz de administración.
2. Ir a la sección de gestión de inventario.
3. Agregar, editar o eliminar un producto.

**Resultado Esperado:** Los cambios en el inventario deben reflejarse en tiempo real.

### TC05: Realización de Compras
**Requerimiento Asociado:** RF06 (Proceso de Compra Simplificado)  
**Descripción:** Verificar que los clientes puedan completar una compra de manera sencilla y sin problemas.  
**Pasos:**
1. Seleccionar un producto.
2. Agregar el producto al carrito.
3. Proceder al proceso de pago.
4. Completar los detalles de pago y confirmar la compra.

**Resultado Esperado:** La transacción debe completarse con éxito y el inventario debe actualizarse correctamente.

### TC06: Disponibilidad del Producto en Tiempo Real
**Requerimiento Asociado:** RF03 (Gestión de Inventario en Tiempo Real)  
**Descripción:** Verificar que la disponibilidad del producto se actualice en tiempo real.  
**Pasos:**
1. Realizar una compra de un producto.
2. Verificar que la disponibilidad del producto se actualice automáticamente en el inventario.

**Resultado Esperado:** La disponibilidad del producto se actualiza correctamente después de realizar una compra.

### TC07: Generación de Reportes de Ventas
**Requerimiento Asociado:** RF07 (Análisis y Reporting)  
**Descripción:** Verificar que se generen informes de ventas mensuales.  
**Pasos:**
1. Acceder al panel de administración.
2. Generar un informe de ventas para un mes específico.

**Resultado Esperado:** Se genera correctamente un informe de ventas mensuales.
