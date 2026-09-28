# HTML Frames — Detailed Theory

## What are Frames?
Frames were an older HTML technique for dividing the browser window into independent sections. Each section could display a different HTML document.

Example:

```text
+-------------------------------+
|           Header              |
+---------------+---------------+
|     Menu      |    Content    |
|               |               |
+---------------+---------------+
```

## Why were Frames Used?
Frames were used to keep navigation visible while content changed, display multiple HTML documents in one window, and create fixed menu/content layouts.

## Important HTML5 Note
`<frameset>` and `<frame>` are obsolete in HTML5. Modern page layouts should use semantic HTML and CSS. `<iframe>` is still supported for embedding another page or resource.

## `<frameset>`
Defines how the browser window is divided.

```html
<frameset cols="30%,70%">
    <frame src="menu.html">
    <frame src="home.html">
</frameset>
```

`cols` creates vertical sections.

## `<frame>`
Loads an HTML document into one section.

```html
<frame src="menu.html">
```

## Rows
Use `rows` to divide the window horizontally.

```html
<frameset rows="20%,80%">
    <frame src="header.html">
    <frame src="content.html">
</frameset>
```

## Columns
Use `cols` to divide the window vertically.

```html
<frameset cols="25%,75%">
    <frame src="menu.html">
    <frame src="content.html">
</frameset>
```

## Nested Frames
Framesets can be nested to create a header plus menu/content layout.

```html
<frameset rows="20%,80%">
    <frame src="header.html">

    <frameset cols="25%,75%">
        <frame src="menu.html">
        <frame src="home.html">
    </frameset>
</frameset>
```

## Named Frames and Navigation
Give a frame a name:

```html
<frame src="home.html" name="contentFrame">
```

Then target that frame from a link:

```html
<a href="contact.html" target="contentFrame">
    Contact
</a>
```

Only the named content frame changes.

## `<iframe>`
An iframe embeds another document inside a normal HTML page.

```html
<iframe
    src="courses.html"
    width="600"
    height="300">
</iframe>
```

Unlike `<frameset>`, `<iframe>` is used inside `<body>`.

## Frames vs Iframe

| Traditional Frames | Iframe |
|---|---|
| `<frameset>` + `<frame>` | `<iframe>` |
| Divides browser window | Embeds content in a page |
| Obsolete in HTML5 | Supported in HTML5 |
| Legacy websites | Embedded pages/resources |

## Key Points
- `<frameset>` → divides the browser window
- `<frame>` → loads a document into a frame
- `rows` → horizontal divisions
- `cols` → vertical divisions
- `name` + `target` → load links into a specific frame
- `<iframe>` → modern way to embed another document/resource
