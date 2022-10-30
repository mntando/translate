# Translate

Convert text to different languages on the browser. Flexible package and powerful back-end using Google (default), [Yandex](https://translate.yandex.com/), [Libre](https://libretranslate.com/) or [DeepL](https://www.deepl.com/en/translator):

```js
const text = await translate("Hello, World", "it"); 
```

```
"Ciao mondo" 
```

## Getting started

You have to include the following script in you html document:

```html
<script src="https://cdn.jsdelivr.net/npm/translate@1/translate.min.js"></script>
```

All your text to be translated should be under a class called "translate":

```html
<p class="translate">
  Hello, World
<\p>
```

For the button to change language: [Button]()
In your javascript file: [javascript]()

## Authors and thanks

Current package and development: [Mvuselelo N Ndhlovu](https://github.com/mntando)

Repository forked from: [Francisco Presencia](https://francisco.io/)

Original package and idea: Andrew Lunny (alunny), Marak Squires, Google
