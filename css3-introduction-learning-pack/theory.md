# Introduction to Cascading Style Sheets 3.0

## 1. What is CSS?

CSS stands for **Cascading Style Sheets**.

HTML is used to create the structure of a webpage, while CSS is used to control how that webpage looks.

For example, HTML can create:

```html
<h1>Welcome to My Website</h1>
<p>This is my webpage.</p>
```

CSS can change:
- Text color
- Font size
- Background color
- Borders
- Spacing
- Alignment
- Width and height
- Overall visual appearance

A simple way to remember:

```text
HTML → Structure
CSS  → Presentation / Styling
JavaScript → Behavior
```

---

# 2. What Can CSS Do?

CSS allows us to control the appearance of HTML elements.

## 2.1 Change Text Color

### Concept

The `color` property changes the color of text.

### Example

```html
<p style="color: blue;">Welcome to HTML and CSS</p>
```

### Code explanation

- `<p>` creates a paragraph.
- `style` contains CSS written directly inside the HTML element.
- `color` is the CSS property.
- `blue` is the value.

Result: The paragraph text appears blue.

---

## 2.2 Change Background Color

### Concept

The `background-color` property changes the background color of an element.

### Example

```html
<h1 style="background-color: yellow;">
    Welcome
</h1>
```

### Code explanation

`background-color` sets the background of the `<h1>` element to yellow.

---

## 2.3 Change Font Size

### Concept

The `font-size` property controls the size of text.

### Example

```html
<p style="font-size: 24px;">
    This is large text.
</p>
```

### Code explanation

`24px` specifies the size of the text.

---

## 2.4 Change Font Family

### Concept

The `font-family` property specifies the font used for text.

### Example

```html
<p style="font-family: Arial;">
    This text uses Arial.
</p>
```

### Code explanation

`font-family` tells the browser which font should be used.

---

## 2.5 Add a Border

### Concept

CSS can add a border around an element.

### Example

```html
<p style="border: 2px solid black;">
    This paragraph has a border.
</p>
```

### Code explanation

The border has three parts:

```text
2px     → border thickness
solid   → border style
black   → border color
```

---

## 2.6 Add Spacing

CSS can control spacing around and inside elements.

### Example

```html
<p style="margin: 20px; padding: 10px;">
    Content with spacing
</p>
```

### Code explanation

- `margin` → space outside the element
- `padding` → space inside the element

---

# 3. CSS Syntax

CSS follows a specific syntax.

```css
selector {
    property: value;
}
```

Example:

```css
p {
    color: blue;
    font-size: 20px;
}
```

## Understanding the Syntax

```text
p
│
└── Selector

color
│
└── Property

blue
│
└── Value
```

The complete statement is:

```css
color: blue;
```

This is called a **CSS declaration**.

The semicolon `;` separates multiple declarations.

Example:

```css
p {
    color: blue;
    font-size: 20px;
}
```

Here:
- `p` → selector
- `color` → property
- `blue` → value
- `font-size` → property
- `20px` → value

---

# 4. CSS Selector

A selector tells CSS **which HTML element should be styled**.

Example:

```css
p {
    color: red;
}
```

The selector is:

```css
p
```

It means:

> Apply this styling to paragraph elements.

---

## 4.1 Element Selector

An element selector selects HTML elements by their tag name.

```css
h1 {
    color: green;
}
```

This styles all `<h1>` elements.

Example:

```html
<h1>First Heading</h1>
<h1>Second Heading</h1>
```

Both headings become green.

---

# 5. Types of CSS

There are three commonly taught ways to apply CSS:

1. Inline CSS
2. Internal CSS
3. External CSS

---

# 6. Inline CSS

## Concept

Inline CSS is written directly inside an HTML element using the `style` attribute.

### Example

```html
<h1 style="color: red;">
    Welcome
</h1>
```

### Code explanation

```html
style="color: red;"
```

contains the CSS declaration.

Here:
- `style` → HTML attribute
- `color` → CSS property
- `red` → CSS value

Only this `<h1>` receives this inline style.

### Another example

```html
<p style="color: blue; font-size: 20px;">
    Hello Students
</p>
```

Two CSS properties are applied to the paragraph.

### When useful

Inline CSS can be useful for a quick one-off style, but large applications generally avoid putting lots of CSS directly inside HTML because it becomes difficult to maintain.

---

# 7. Internal CSS

## Concept

Internal CSS is written inside a `<style>` element, normally inside the `<head>` section of the HTML document.

### Example

```html
<!DOCTYPE html>
<html>

<head>

<style>
    h1 {
        color: blue;
    }

    p {
        font-size: 18px;
    }
</style>

</head>

<body>

<h1>Welcome</h1>
<p>Hello Students</p>

</body>

</html>
```

### Code explanation

```html
<style>
```

starts the CSS section.

```css
h1 {
    color: blue;
}
```

means all `<h1>` elements on this page should have blue text.

```css
p {
    font-size: 18px;
}
```

means all paragraphs on this page should have 18px text.

### Important point

Internal CSS is useful when styling is mainly required for one HTML page.

---

# 8. External CSS

## Concept

External CSS is written in a separate `.css` file.

For example:

```text
index.html
style.css
```

The HTML file connects to the CSS file using `<link>`.

### HTML

```html
<!DOCTYPE html>
<html>

<head>

<link rel="stylesheet" href="style.css">

</head>

<body>

<h1>Welcome</h1>
<p>Hello Students</p>

</body>

</html>
```

### CSS

```css
h1 {
    color: blue;
}

p {
    font-size: 18px;
}
```

### Code explanation

This line connects HTML with CSS:

```html
<link rel="stylesheet" href="style.css">
```

- `link` → creates a relationship with an external resource
- `rel="stylesheet"` → tells the browser that the linked file is a stylesheet
- `href="style.css"` → specifies the CSS file

The browser loads `style.css` and applies its rules to the HTML page.

---

# 9. Why External CSS is Commonly Used

Suppose a website has 50 HTML pages.

With external CSS:

```text
             style.css
             /   |               /    |           page1   page2  page3
```

One CSS file can be reused by many HTML pages.

This provides:
- Reusability
- Easier maintenance
- Consistent styling
- Cleaner HTML

Example:

```html
<link rel="stylesheet" href="style.css">
```

can be added to multiple HTML pages.

---

# 10. Comparing the Three Types

| Type | CSS Location | Typical Use |
|---|---|---|
| Inline | Inside HTML element | One specific element |
| Internal | `<style>` in HTML | One webpage |
| External | Separate `.css` file | Multiple webpages |

Examples:

### Inline

```html
<p style="color:red;">Hello</p>
```

### Internal

```html
<style>
p {
    color: red;
}
</style>
```

### External

```html
<link rel="stylesheet" href="style.css">
```

---

# 11. Cascading

The word **Cascading** in CSS means that when multiple CSS rules apply to the same element, the browser uses CSS rules such as origin, importance, specificity, and source order to determine which declaration wins.

For beginners, consider this simple example:

```html
<p style="color: red;">Hello</p>
```

If another rule says:

```css
p {
    color: blue;
}
```

the inline declaration normally wins in this basic example.

The important idea is:

> CSS can have multiple rules affecting an element, and the browser determines which applicable declaration should be used.

Specificity becomes important as CSS becomes more advanced.

---

# 12. Complete Example

HTML:

```html
<!DOCTYPE html>
<html>

<head>

<link rel="stylesheet" href="style.css">

</head>

<body>

<h1>Student Portal</h1>

<p>Welcome to the CSS learning page.</p>

<button>Login</button>

</body>

</html>
```

CSS:

```css
h1 {
    color: blue;
}

p {
    font-size: 18px;
}

button {
    background-color: green;
    color: white;
}
```

### Code explanation

The HTML provides the structure:

```text
h1
p
button
```

The external CSS provides the appearance:

```text
h1    → blue text
p     → 18px text
button → green background + white text
```

This separation of structure and presentation is one of the major benefits of CSS.

---

# 13. Quick Reference

### CSS Syntax

```css
selector {
    property: value;
}
```

### Inline

```html
<p style="color: red;">Hello</p>
```

### Internal

```html
<style>
p {
    color: red;
}
</style>
```

### External

```html
<link rel="stylesheet" href="style.css">
```

### Remember

```text
HTML → What is on the page?
CSS  → How does it look?
```
