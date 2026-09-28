# Working with Text and Fonts

## 1. Introduction

CSS provides several properties to control the appearance and readability of text on a web page.

The main areas covered in this topic are:

1. Text Formatting
2. Text Effects
3. Fonts

HTML provides the text content, while CSS controls how that text is displayed.

Example:

```html
<p class="message">Welcome to CSS</p>
```

```css
.message {
    color: blue;
    font-size: 20px;
}
```

Here:

- HTML creates the paragraph.
- CSS changes its appearance.

---

# 2. Text Formatting

Text formatting means controlling the alignment, spacing, indentation, capitalization, and general presentation of text.

## 2.1 Text Alignment

The `text-align` property controls the horizontal alignment of text.

### Syntax

```css
selector {
    text-align: value;
}
```

Common values:

- `left`
- `right`
- `center`
- `justify`

### Example

```html
<p class="left">Left aligned text</p>
<p class="center">Centered text</p>
<p class="right">Right aligned text</p>
```

```css
.left {
    text-align: left;
}

.center {
    text-align: center;
}

.right {
    text-align: right;
}
```

### `text-align: justify`

`justify` adjusts spacing between words so that text is aligned with both the left and right edges.

```css
.justify {
    text-align: justify;
}
```

This is commonly used for paragraphs containing multiple lines.

---

## 2.2 Text Indentation

The `text-indent` property controls the indentation of the first line of a paragraph.

```css
.indent {
    text-indent: 40px;
}
```

Example:

```html
<p class="indent">
    This paragraph demonstrates text indentation.
</p>
```

The first line starts 40 pixels from the normal starting position.

---

## 2.3 Line Height

The `line-height` property controls the vertical space between lines of text.

```css
p {
    line-height: 1.6;
}
```

A larger line height generally improves readability for paragraphs.

Example:

```html
<p class="readable">
    CSS controls the presentation of HTML content.
    Proper line spacing makes longer paragraphs easier to read.
</p>
```

```css
.readable {
    line-height: 1.7;
}
```

---

## 2.4 Text Transformation

The `text-transform` property changes the capitalization of text without changing the actual HTML content.

Common values:

- `uppercase`
- `lowercase`
- `capitalize`
- `none`

### Example

```html
<p class="upper">hello world</p>
<p class="capital">hello world</p>
```

```css
.upper {
    text-transform: uppercase;
}

.capital {
    text-transform: capitalize;
}
```

Result:

```text
HELLO WORLD
Hello World
```

---

# 3. Text Effects

CSS can add visual effects to text.

## 3.1 Text Decoration

The `text-decoration` property adds or removes decorative lines.

Common values:

- `underline`
- `overline`
- `line-through`
- `none`

### Example

```html
<p class="underlined">Underlined text</p>
<p class="deleted">Deleted text</p>
```

```css
.underlined {
    text-decoration: underline;
}

.deleted {
    text-decoration: line-through;
}
```

A common example is removing the default underline from a link:

```css
a {
    text-decoration: none;
}
```

---

## 3.2 Letter Spacing

The `letter-spacing` property controls the space between individual characters.

```css
.heading {
    letter-spacing: 3px;
}
```

Example:

```html
<h2 class="heading">CSS TEXT</h2>
```

Increasing letter spacing can be useful for headings, labels, and navigation text.

---

## 3.3 Word Spacing

The `word-spacing` property controls the space between words.

```css
.text {
    word-spacing: 12px;
}
```

Example:

```html
<p class="text">CSS controls text presentation.</p>
```

---

## 3.4 Text Shadow

The `text-shadow` property adds a shadow behind text.

### Syntax

```css
text-shadow: horizontal vertical blur color;
```

Example:

```css
.title {
    text-shadow: 2px 2px 4px gray;
}
```

Here:

- `2px` → horizontal offset
- `2px` → vertical offset
- `4px` → blur amount
- `gray` → shadow color

Example:

```html
<h1 class="title">Welcome</h1>
```

---

# 4. Fonts

Fonts control the typeface, size, thickness, and style of text.

Important CSS font properties include:

- `font-family`
- `font-size`
- `font-weight`
- `font-style`

---

## 4.1 Font Family

The `font-family` property specifies which font should be used.

```css
p {
    font-family: Arial, sans-serif;
}
```

Multiple fonts can be specified as a fallback list:

```css
p {
    font-family: Arial, Helvetica, sans-serif;
}
```

The browser tries the fonts from left to right. If the first font is unavailable, it tries the next one.

### Generic Font Families

Common generic families include:

| Generic Family | Description |
|---|---|
| `serif` | Fonts with decorative strokes |
| `sans-serif` | Fonts without decorative strokes |
| `monospace` | Characters generally have equal width |

Example:

```css
.serif {
    font-family: Georgia, serif;
}

.sans {
    font-family: Arial, sans-serif;
}

.mono {
    font-family: "Courier New", monospace;
}
```

---

## 4.2 Font Size

The `font-size` property controls the size of text.

```css
h1 {
    font-size: 32px;
}

p {
    font-size: 18px;
}
```

Example:

```html
<h1 class="large">Large Heading</h1>
<p class="normal">Normal paragraph text</p>
```

Common units include:

- `px`
- `em`
- `rem`
- `%`

For example:

```css
p {
    font-size: 1rem;
}
```

---

## 4.3 Font Weight

The `font-weight` property controls the thickness of text.

Common values:

- `normal`
- `bold`
- Numeric values such as `400`, `500`, `700`

Example:

```css
.normal {
    font-weight: 400;
}

.bold {
    font-weight: 700;
}
```

Example:

```html
<p class="normal">Normal text</p>
<p class="bold">Bold text</p>
```

---

## 4.4 Font Style

The `font-style` property controls whether text is normal, italic, or oblique.

Example:

```css
.italic {
    font-style: italic;
}
```

HTML:

```html
<p class="italic">This text is italic.</p>
```

Common values:

```css
font-style: normal;
font-style: italic;
font-style: oblique;
```

---

# 5. Combined Example

Text formatting and font properties can be combined in one CSS rule.

### HTML

```html
<h2 class="course-title">CSS Training Program</h2>

<p class="description">
    Learn how CSS controls text formatting, text effects, and fonts.
</p>
```

### CSS

```css
.course-title {
    font-family: Georgia, serif;
    font-size: 28px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 1px 1px 2px gray;
}

.description {
    font-family: Arial, sans-serif;
    font-size: 18px;
    line-height: 1.6;
    text-align: justify;
}
```

This demonstrates how multiple CSS properties work together to create a consistent text design.

---

# 6. Quick Reference

| Property | Purpose | Example |
|---|---|---|
| `text-align` | Horizontal alignment | `text-align: center;` |
| `text-indent` | First-line indentation | `text-indent: 40px;` |
| `line-height` | Space between lines | `line-height: 1.6;` |
| `text-transform` | Changes capitalization | `text-transform: uppercase;` |
| `text-decoration` | Adds/removes decoration | `text-decoration: underline;` |
| `letter-spacing` | Space between characters | `letter-spacing: 2px;` |
| `word-spacing` | Space between words | `word-spacing: 10px;` |
| `text-shadow` | Adds text shadow | `text-shadow: 2px 2px 4px gray;` |
| `font-family` | Selects typeface | `font-family: Arial;` |
| `font-size` | Controls text size | `font-size: 20px;` |
| `font-weight` | Controls thickness | `font-weight: bold;` |
| `font-style` | Controls text style | `font-style: italic;` |

---

# 7. Key Takeaways

- **Text formatting** controls alignment, indentation, spacing, capitalization, and line height.
- **Text effects** add visual styling such as underline, strike-through, letter spacing, and shadows.
- **Fonts** control the typeface, size, thickness, and style of text.
- Multiple CSS properties can be combined in a single rule.
- CSS changes the **presentation** of text without changing the underlying HTML content.
