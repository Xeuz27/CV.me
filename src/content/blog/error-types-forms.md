---
id: "error-types-formulario-typescript"
title: "Formularios en TypeScript: por qué los tipos no coinciden (y cómo solucionarlo)"
author: Jesus Gutierrez
img: /error-types-forms.webp
description: "Cómo evitar errores de tipo al trabajar con formularios usando mapped types"
date: 20260505T000000-0400
---

<div class="flex gap-2 overflow-hidden max-md:flex-col-reverse md:gap-4">
  <img 
    class="mx-auto aspect-auto max-h-[580px] md:max-h-64 lg:max-h-96 xl:max-h-[360px]" 
    src='/error-types-forms.webp' 
    alt="error types en formularios de typescript" />
</div>

Hoy estaba intentando tipar el estado de un formulario en React, y claro cuando el formulario ya tiene una instancia tipada, esa instancia o el tipo de esa instancia no van a coincidir con los tipos del estado del formulario, por que probablemente sean todos de tipo `string`, y hasta aqui todo bien, por que claro, si tenemos:

```ts
const initialForm = {
    title: '',
    description: '',
    price: '',
    createdAt: '',
}
//y su type correspondiente
type Product = {
    title : string
    description: string
    price: number
    createdAt: Date
}

// cuando en tu componente intentes hacer
 const initialForm : Product = {...}
```

te saldrá un `error de tipo` indicándote que las propiedades del tipo `Product`, como `price: number` y `createdAt: Date`, no son asignables a `price: string` y `createdAt: string` de tu `initialForm`.

<div class="flex gap-2 overflow-hidden max-md:flex-col-reverse md:gap-4">
<img class="mx-auto aspect-auto max-h-[580px] md:max-h-64 lg:max-h-96 xl:max-h-[360px]" src='/string-not-Date.png' alt="error type string not assignable to type date" />
</div>

lo primero que podríamos pensar sería cambiar los tipos de `price` y `createdAt` en `Product` para que coincidan con los valores de `initialForm`, pero al hacer eso tenemos dos inconvenientes: o usamos tipos como `price: number | string` y `createdAt: Date | string`, o creamos un nuevo tipo `ProductForm` adaptado a lo que necesita el formulario.

el problema con esto es que, o ensuciamos los tipos con unions innecesarios, o terminamos duplicando tipos cada vez que haya una pequeña adaptación.

entonces, ¿cuál es la respuesta? realmente sigue siendo cambiar los tipos de los valores, pero esta vez nos vamos a ayudar con un helper: algo parecido a una función, pero que trabaja a nivel de tipos.

para llegar ahí, primero necesitamos entender los generic types.

los generic types son un tipo de placeholder, lo que significa que no sabemos exactamente qué tipo estamos usando hasta que se declara. esto nos permite mantener el type safety al definir funciones o componentes, sin perder flexibilidad.

```ts
function identity<Type>(arg: Type): Type {
  return arg;
}
let whatIs = identity<string>("soy un string"); // typeof whatIs = string
let whatIs = identity<number>(123); // typeof whatIs = number
let whatIs = identity(true); // typeof whatIs = boolean (ts infiere boolean)
```

ahora que sabemos qué son los generic types, podemos hablar de los mapped types, que son una especie de “función de tipos” (como mencionamos antes). estos nos permiten transformar los tipos de un objeto usando sus propias claves.

en otras palabras, toman un tipo existente —como `Product`— y aplican una transformación a cada una de sus propiedades.

nota: para que sea un mapped type, debe operar sobre las claves de un tipo ya existente.

```ts
type Product = {
  name: string;
  description: string;
  price: number;
  createdAt: Date;
};

type mapped<Product> = {
  [Clave in keyof Product]: string;
};

const initialForm: mapped<Product> = {
  name: "",
  description: "",
  price: "", // ahora si puede ser un string por que ya no es number
  createdAt: "", // ahora si puede ser un string por que ya no es Date
};
```

entonces, todo este “chanchuyo” ¿para qué?

cuando pensamos que los inputs de formularios en HTML en su mayoría trabajan con strings, intentar usar directamente un tipo como `Product`, que tiene propiedades como `number` o `Date`, termina generando errores de tipo al asignar valores incompatibles.

usando mapped types podemos adaptar las propiedades de un objeto de forma dinámica sin tener que crear un nuevo tipo cada vez ni recurrir a union types innecesarios.

de esta forma, podemos mantener `Product` para la lógica de negocio, y tener otra versión adaptada para el formulario sin duplicar ni ensuciar nuestros tipos.

al final, el problema no era TypeScript, ni el formulario… sino intentar usar el mismo tipo para dos cosas que viven en contextos distintos.
