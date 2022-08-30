# Intro to CSS

## Topics to cover:

- [X] **1. Things that we can achieve with CSS**
  1.1 [CSS Zen Garden](http://www.csszengarden.com/)
  1.2 Crazy communities: [CSS Design Awards](https://www.cssdesignawards.com/), [CodePen](https://codepen.io/)...

- [X] **2. HTML Recap** 
  2.1 Elements (_a.k.a. tags_)
  2.2 DOM
  2.3 Closing tags vs non closing tags
  2.4 Semantic tags
  2.5 HTML entities
  2.6 Inline vs Block elements

- [x] **3. Browsers' Developer Tools** 
  3.1 How assets are loaded (requests)
  3.2 Elements and styles tabs
  3.3 How to debug HTML and CSS

- [x] **4. Intro to CSS** 
  4.1 Where to study CSS
  4.1 Inline vs Header vs File styles
  4.2 Selectors: Element vs. Class vs ID
  4.3 Specificity
  4.4 How to edit and play with CSS in the browser

- [x] **5. CSS Box Model** 
  5.1 Box Model
  5.2 Understanding Box Model on dev tools
  5.3 [Interactive Box Model demo](https://codepen.io/psande/pen/nKOJyX)
  5.4 Box sizing: border-box vs content box

- [x] **6. CSS Browser Reset** 
  6.1 Browser's default stylings
  6.2 [CSS meyerweb reset](https://meyerweb.com/eric/tools/css/reset/)

  
- [X] **7. CSS Flexbox** 
  7.1 What is Flexbox and why should we use it?
  7.2 [Flexbox cheatsheet](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

- [X] **8. CSS Frameworks** 
  8.1 What is a framework?
  8.2 Most popular CSS Frameworks

## Extra content

- [CSS Zen Garden](http://www.csszengarden.com/)

- Crazy cool communities: [CSS Design Awards](https://www.cssdesignawards.com/) and [CodePen](https://codepen.io/)

- [Interactive Box Model demo](https://codepen.io/psande/pen/nKOJyX)

- [Meyerweb's CSS Reset](https://meyerweb.com/eric/tools/css/reset/)

- [CSS Tricks Website](https://css-tricks.com/)

- [Flexbox Cheatsheet](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### Semantic HTML
---
From [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
  > In programming, Semantics refers to the meaning of a piece of code — for example "what effect does running that line of JavaScript have?", or "what purpose or role does that HTML element have" (rather than "what does it look like?".)

HTML gives us access to many [semantic tags](https://developer.mozilla.org/en-US/docs/Glossary/Semantics) to better describe our documents. Consider: 

  ```html
  <div>My Awesome Page</div>
  <div>
    <div>
      <img src="https://via.placeholder.com/150" />
      <div>A picture of me</div>
    </div>
  </div>
  <div>More about me</div>
  <div>Copyright &copy; 2019</div>
  ```

  Versus:

  ```html
  <header>My Awesome Page</header>
  <main>
    <figure>
      <img src="https://via.placeholder.com/150" />
      <figcaption>A picture of me</figcaption>
    </figure>
  </main>
  <aside>More about me</aside>
  <footer>Copyright &copy; 2019</footer>
  ```

By using semantics, we can convey the _meaning_ of our markup to other developers who read our code as well as people using assistive devices to browse our site

### **C**ascading **S**tyle **S**heets
---
CSS is a [programming language](https://notlaura.com/css-is-a-programming-language/) that allows us to style our webpages

Can be added inline, embedded in a style element, or stored in an external file and linked in the head of the HTML file

#### Inline

```html
<div style="width: 90px; height: 250px;"></div>
```

#### Style Element

```html
<style>
  body {
    color: lawngreen;
  }
</style>
```

#### External Stylesheet

```css
/* styles.css */
body {
  background-color: lightsalmon;
}
```

```html
<!-- index.html -->
<link rel="stylesheet" href="./styles.css" />
```

### Selectors
---
CSS is based around using [selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) to apply certain styles to specific areas of the document

```css
/* syntax */
selector list {
  property: value;
}

/* we can select by element name */
div { ... }
/* comma separate to style multiple elements */
div, p, a, aside { ... }

/* by class name */
.my-class { ... }
/* element with a class name */
div.my-class { ... }

/* by id */
#my-id { ... }
/* element with id */
div#my-id { ... }
```

### DevTools
---
The Chrome DevTools are your best friend when developing client-side. Make heavy use of the `Elements` tab and the `Styles` section

### Box Model
---
The HTML elements on a web page can be considered `boxes`. These `boxes` consist of (from outside-in) margin, border, padding, and content:

* **Margin**: controls the space between elements
* **Border**: as it sounds, a border around the content and padding
* **Padding**: the space between the elements content and its border
* **Content**: the actual content of the element (eg. text or image)

![w3schools box model image](https://andydlindsay-portfolio.s3.amazonaws.com/lighthouse/box+model.png)
*Image taken from [w3schools](https://www.w3schools.com/css/css_boxmodel.asp)*

### CSS Resets
---
Browsers actually style every page that we visit using a special stylesheet called the **user agent stylesheet**. These styles are not consistent across browsers which can mean that our pages display differently on different browsers (obviously not ideal)

CSS resets are stylesheets that help to _reset_ or _normalize_ all styles on the page before we apply our own styles. This helps us present a more consistent style across various different browsers

We can use different css resets, like the famous [Meyerweb's css reset](https://meyerweb.com/eric/tools/css/reset/)

### Box Sizing
---
By default, the `width` and `height` of an element is only applied to its content. Any padding, border, and margin will then be **added** to the content width and height resulting in elements that take up more space than we had intended

Enter the `box-sizing` property which allows us to control this behaviour:
* If we set the `box-sizing` property to a value of `border-box`, then the `width` and `height` of the element will apply to the entire element (border, padding, and content) resulting in elements with more predictable dimensions

To better understand box-sizing, you can play with the following [Interactive demo](http://guyroutledge.github.io/box-model/)

### Specificity
---
CSS styles are applied in order from least specific to most specific. This means that more-specific styles will overwrite less-specific styles:
* We can take advantage of this fact to make sure that the styles that we want are applied correctly
* Least specific to most specific: element => class => id => inline style

```css
/* example styles of increasing specificity */
/* element selector */
div {
  border-color: magenta;
}

/* element + class selector */
div.green-border {
  border-color: green;
}

/* element + id selector */
div#blue-border {
  border-color: blue;
}
```

![Specificity](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week3/Day1/Breakout/assets/specificity1.png)

### Flexbox
---
The Flexbox Layout (Flexible Box) module aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic.

By following this [Flexbox complete guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) from the [css-tricks website](https://css-tricks.com/) you can start working with flexbox in no time.

The main idea behind the **flex layout** is to give the **container (parent element)** the ability to alter its **items’ (children elements)** width/height (and order) to best fill the available space (mostly to accommodate to all kind of display devices and screen sizes).

![Flex Container](https://css-tricks.com/wp-content/uploads/2018/10/01-container.svg)

A flex container expands items to fill available free space or shrinks them to prevent overflow.

![Flex Items](https://css-tricks.com/wp-content/uploads/2018/10/02-items.svg)

By understanding which element is the parent or container, and which elements are the items or children of the container, we can play with flexbox's properties and create incredible responsive layouts.
