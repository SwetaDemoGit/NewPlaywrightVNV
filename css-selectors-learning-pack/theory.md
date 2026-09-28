# CSS Selectors

CSS selectors are used to tell the browser **which HTML elements should receive a style**.

The basic syntax is:

```css
selector {
    property: value;
}
```

Example:

```css
p {
    color: blue;
}
```

Here, `p` is the selector. The rule applies to paragraph elements.

This topic covers four selectors:

1. Type Selector
2. Universal Selector
3. ID Selector
4. Class Selector

---

## 1. Type Selector

### Concept

A Type Selector selects HTML elements using their **tag name**.

For example:

```css
p {
    color: blue;
}
```

This selects all `<p>` elements on the page.

### HTML

```html
<h1>My Webpage</h1>

<p>First paragraph</p>
<p>Second paragraph</p>
```

### CSS

```css
p {
    color: blue;
}
```

### Code explanation

The selector is `p`, so the rule is applied to **every paragraph**.

Both paragraphs will appear blue.

### Another example

```css
h1 {
    text-align: center;
}
```

This applies the rule to all `<h1>` elements.

### Demo

See `01-type-selector.html`.

---

## 2. Universal Selector

### Concept

The Universal Selector is represented by `*`.

It selects **all HTML elements** on the page.

### Example

```css
* {
    font-family: Arial;
}
```

### Code explanation

`*` means all elements.

Therefore, the font is applied to headings, paragraphs, lists, buttons, and other HTML elements.

### Example

```html
<h1>Welcome</h1>
<p>Hello Students</p>
<button>Click Me</button>
```

```css
* {
    font-family: Arial;
}
```

All three elements use the Arial font.

### Demo

See `02-universal-selector.html`.

---

## 3. ID Selector

### Concept

An ID Selector is used to style **one specific element**.

It is written using the `#` symbol followed by the ID name.

### HTML

```html
<h1 id="mainHeading">My Website</h1>
```

### CSS

```css
#mainHeading {
    color: green;
}
```

### Code explanation

The HTML element has:

```html
id="mainHeading"
```

The CSS selector is:

```css
#mainHeading
```

The `#` tells CSS that this is an ID selector.

The style is applied to the element having that ID.

### Another example

```html
<p id="importantMessage">
    This is an important message.
</p>
```

```css
#importantMessage {
    font-weight: bold;
}
```

### Important point

An ID should identify a specific element on a page. Do not use the same ID for multiple unrelated elements.

### Demo

See `03-id-selector.html`.

---

## 4. Class Selector

### Concept

A Class Selector is used when the **same style needs to be applied to multiple elements**.

A class selector starts with a `.` followed by the class name.

### HTML

```html
<p class="highlight">Important information</p>
<p class="highlight">Read this carefully</p>
```

### CSS

```css
.highlight {
    background-color: yellow;
}
```

### Code explanation

Both paragraphs have:

```html
class="highlight"
```

The CSS selector:

```css
.highlight
```

selects every element having the `highlight` class.

Therefore, both paragraphs receive the same style.

### A class can be used with different elements

```html
<h2 class="highlight">Special Offer</h2>

<p class="highlight">Limited time offer.</p>
```

```css
.highlight {
    color: red;
}
```

Both the `<h2>` and `<p>` are styled because both have the `highlight` class.

### Demo

See `04-class-selector.html`.

---

# 5. ID Selector vs Class Selector

| ID Selector | Class Selector |
|---|---|
| Uses `#` | Uses `.` |
| Targets a specific element | Can target multiple elements |
| Example: `#header` | Example: `.highlight` |
| HTML: `id="header"` | HTML: `class="highlight"` |

Example:

```html
<h1 id="mainTitle">My Website</h1>

<p class="note">First note</p>
<p class="note">Second note</p>
```

```css
#mainTitle {
    color: blue;
}

.note {
    color: green;
}
```

---

# 6. Type Selector vs Universal Selector

### Type Selector

```css
p {
    color: blue;
}
```

Only `<p>` elements are selected.

### Universal Selector

```css
* {
    color: blue;
}
```

All elements are selected.

---

# 7. Complete Example

### HTML

```html
<!DOCTYPE html>
<html>
<head>
    <title>CSS Selectors</title>

    <style>
        * {
            font-family: Arial;
        }

        h1 {
            text-align: center;
        }

        #mainTitle {
            color: blue;
        }

        .highlight {
            background-color: yellow;
        }
    </style>
</head>

<body>

    <h1 id="mainTitle">CSS Selectors</h1>

    <p class="highlight">
        CSS selectors identify HTML elements.
    </p>

    <p>
        Type selectors use HTML tag names.
    </p>

    <p class="highlight">
        Class selectors can style multiple elements.
    </p>

</body>
</html>
```

### Code explanation

```css
* {
    font-family: Arial;
}
```

Uses the Universal Selector and applies the font to all elements.

```css
h1 {
    text-align: center;
}
```

Uses the Type Selector and targets all `<h1>` elements.

```css
#mainTitle {
    color: blue;
}
```

Uses the ID Selector and targets the element with `id="mainTitle"`.

```css
.highlight {
    background-color: yellow;
}
```

Uses the Class Selector and targets all elements having `class="highlight"`.

### Demo

See `05-complete-demo.html`.

---

# Quick Reference

```text
Type Selector
    p { }

Universal Selector
    * { }

ID Selector
    #header { }

Class Selector
    .highlight { }
```

### Easy way to remember

```text
p       → Tag name → Type Selector
*       → Everything → Universal Selector
#name   → One ID → ID Selector
.name   → Class → Class Selector
```
