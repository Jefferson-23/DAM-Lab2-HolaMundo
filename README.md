# Agregar un Cuadro de Texto en React Native

Este proyecto muestra cómo agregar un cuadro de texto (TextInput) en una aplicación de React Native haciendo uso de la documentación oficial.

## Procedimiento

1. **Importar el Componente `TextInput`**:
   - Importar el componente `TextInput` de 'react-native' en el archivo donde deseas utilizarlo. Asegúrate de importarlo al principio del archivo junto con otros componentes que necesites.

2. **Crear un Estado para Manejar el Texto**:
   - Utiliza el hook `useState` para crear un estado que maneje el valor del texto introducido en el cuadro de texto. Esto te permitirá leer y actualizar el texto según sea necesario.

3. **Agregar el Componente `TextInput` al JSX**:
   - Inserta el componente `TextInput` dentro del JSX donde desees que aparezca en tu aplicación. Asegúrate de pasar los props necesarios, como `value` y `onChangeText`, para manejar el estado del texto introducido.

4. **Definir Estilos**:
   - Define estilos para el componente `TextInput` utilizando `StyleSheet.create()`. Esto te permitirá personalizar la apariencia del cuadro de texto según tus preferencias de diseño.
