# New HTML Form Elements, Audio, Video and Article

This chapter introduces useful HTML5 elements and input types that make web pages more interactive and meaningful without requiring extra JavaScript for basic browser controls.

---

## 1. Date Input

### Concept

The `date` input is used when the user needs to select a date.

Instead of asking the user to manually type a date, the browser can provide a date picker.

### Example

```html
<label for="dob">Date of Birth:</label>
<input type="date" id="dob" name="dob">
```

### What the code does

- `<label>` displays the description.
- `for="dob"` connects the label to the input whose `id` is `dob`.
- `type="date"` tells the browser that this is a date field.
- `name="dob"` gives the field a name when the form is submitted.

The browser may display a calendar/date picker depending on the browser and device.

### Setting a date range

```html
<input type="date"
       id="appointment"
       name="appointment"
       min="2026-08-01"
       max="2026-12-31">
```

Here `min` specifies the earliest allowed date and `max` specifies the latest allowed date.

---

## 2. Number Input

### Concept

The `number` input is used when the user needs to enter a numeric value.

```html
<label for="age">Age:</label>
<input type="number" id="age" name="age">
```

The browser can provide controls for increasing or decreasing the number.

### Example with limits

```html
<input type="number"
       id="age"
       name="age"
       min="18"
       max="60">
```

The code limits the value to the range 18 through 60.

### Using `step`

```html
<input type="number"
       id="quantity"
       name="quantity"
       min="1"
       max="10"
       step="1">
```

`step` controls the allowed increments.

---

## 3. Range Input

### Concept

The `range` input displays a slider.

It is useful when the user needs to select a value from a range.

```html
<label for="volume">Volume:</label>
<input type="range" id="volume" name="volume">
```

The user moves the slider instead of typing a number.

### Example with limits

```html
<input type="range"
       id="rating"
       name="rating"
       min="1"
       max="10"
       value="5">
```

The slider starts at 5 and allows values from 1 to 10.

### Range vs Number

```text
number → user types/selects a numeric value

range  → user moves a slider to select a value
```

---

## 4. Email Input

### Concept

The `email` input is designed for email addresses.

```html
<label for="email">Email:</label>
<input type="email" id="email" name="email">
```

Browsers can perform basic validation when the form is submitted.

For example, a value that does not resemble an email address may be rejected by built-in browser validation.

### Required email

```html
<input type="email"
       id="email"
       name="email"
       required>
```

`required` means the field cannot be left empty.

HTML validation is useful for basic input checking, but real applications should also validate data on the server.

---

## 5. Search Input

### Concept

The `search` input is intended for search terms.

```html
<label for="search">Search:</label>
<input type="search" id="search" name="search">
```

It is similar to a text field but communicates that the purpose of the field is searching.

### Example

```html
<form>
    <label for="productSearch">Search Products:</label>
    <input type="search"
           id="productSearch"
           name="productSearch"
           placeholder="Search products">

    <button type="submit">Search</button>
</form>
```

The browser may provide search-specific UI depending on the browser.

---

## 6. Datalist

### Concept

`<datalist>` provides a list of suggested values for an input.

Unlike a normal `<select>`, the user can usually type their own value as well as choose from suggestions.

### Example

```html
<label for="browser">Choose a browser:</label>

<input list="browsers"
       id="browser"
       name="browser">

<datalist id="browsers">
    <option value="Chrome">
    <option value="Firefox">
    <option value="Edge">
    <option value="Safari">
</datalist>
```

### What the code does

The important connection is:

```text
<input list="browsers">
             ↓
<datalist id="browsers">
```

The value of the input's `list` attribute must match the `id` of the `<datalist>`.

The browser shows suggestions while the user types.

### Datalist vs Select

```text
<select>
    User normally chooses from predefined options.

<datalist>
    User gets suggestions but can generally type another value.
```

---

## 7. Audio

### Concept

The `<audio>` element is used to add audio content to a webpage.

```html
<audio controls>
    <source src="audio/song.mp3" type="audio/mpeg">
</audio>
```

### What the code does

- `<audio>` creates the audio player.
- `controls` displays play, pause, volume and other browser-provided controls.
- `<source>` specifies the audio file.
- `src` specifies the file path.
- `type` tells the browser the media type.

### Example with fallback text

```html
<audio controls>
    <source src="audio/sample.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
```

The text is fallback content.

### Useful attributes

```html
<audio controls autoplay muted loop>
```

- `controls` → displays controls
- `autoplay` → attempts to start automatically
- `muted` → starts muted
- `loop` → repeats the media

Modern browsers often restrict autoplay when media has sound, so `autoplay` should not be assumed to work everywhere.

---

## 8. Video

### Concept

The `<video>` element is used to display video content on a webpage.

```html
<video controls width="500">
    <source src="video/demo.mp4" type="video/mp4">
</video>
```

### What the code does

- `<video>` creates the video player.
- `controls` gives the user playback controls.
- `width` sets the displayed width.
- `<source>` specifies the video file.

### Poster Image

A poster image can be displayed before the video starts.

```html
<video controls
       width="500"
       poster="images/video-poster.svg">

    <source src="video/demo.mp4" type="video/mp4">

</video>
```

`poster` specifies the image shown before playback.

### Common attributes

```text
controls → show playback controls
autoplay → attempt automatic playback
muted    → start muted
loop     → repeat video
poster   → image shown before playback
width    → displayed width
height   → displayed height
```

---

## 9. Article Element

### Concept

The `<article>` element is a semantic HTML5 element.

It represents a self-contained piece of content that could make sense on its own.

Examples:
- Blog post
- News article
- Product review
- Forum post
- Technical article
- User comment

### Example

```html
<article>

    <h2>Introduction to HTML</h2>

    <p>
        HTML is used to structure content on web pages.
    </p>

</article>
```

### What the code does

`<article>` tells the browser and other tools that the enclosed content is an independent piece of content.

The `<h2>` provides the article heading.

The `<p>` contains the article text.

---

## 10. Multiple Articles

A page can contain multiple articles.

```html
<h1>Technology News</h1>

<article>
    <h2>HTML5</h2>
    <p>HTML5 introduced many useful semantic and form features.</p>
</article>

<article>
    <h2>Web Development</h2>
    <p>Modern web development uses HTML, CSS and JavaScript.</p>
</article>
```

Each `<article>` represents an independent content item.

---

## 11. Article with Author and Date

```html
<article>

    <h2>Learning HTML Forms</h2>

    <p>By Sweta</p>
    <p>Published: August 23, 2026</p>

    <p>
        HTML forms allow websites to collect information
        from users.
    </p>

</article>
```

The article contains a heading, author/date information and the actual content.

---

## 12. Complete Form Example

```html
<form>

    <label for="name">Name:</label>
    <input type="text" id="name" name="name">

    <br><br>

    <label for="dob">Date of Birth:</label>
    <input type="date" id="dob" name="dob">

    <br><br>

    <label for="age">Age:</label>
    <input type="number" id="age" name="age" min="18" max="60">

    <br><br>

    <label for="experience">Experience:</label>
    <input type="range"
           id="experience"
           name="experience"
           min="0"
           max="20"
           value="2">

    <br><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email">

    <br><br>

    <label for="search">Search:</label>
    <input type="search"
           id="search"
           name="search">

    <br><br>

    <label for="browser">Browser:</label>

    <input list="browsers"
           id="browser"
           name="browser">

    <datalist id="browsers">
        <option value="Chrome">
        <option value="Firefox">
        <option value="Edge">
        <option value="Safari">
    </datalist>

    <br><br>

    <button type="submit">Submit</button>

</form>
```

This example demonstrates six different HTML5 input features in one form.

---

## 13. Complete Media Example

```html
<article>

    <h2>HTML5 Multimedia</h2>

    <p>
        HTML provides native elements for audio and video.
    </p>

    <h3>Audio</h3>

    <audio controls>
        <source src="audio/sample.mp3" type="audio/mpeg">
    </audio>

    <h3>Video</h3>

    <video controls width="500"
           poster="images/video-poster.svg">

        <source src="video/sample.mp4" type="video/mp4">

    </video>

</article>
```

Here `<article>` represents the complete self-contained content, while `<audio>` and `<video>` provide multimedia controls.

---

## Quick Reference

| Element/Input | Purpose |
|---|---|
| `type="date"` | Select a date |
| `type="number"` | Enter a number |
| `type="range"` | Select a value using a slider |
| `type="email"` | Enter an email address |
| `type="search"` | Enter search text |
| `<datalist>` | Provide input suggestions |
| `<audio>` | Add audio |
| `<video>` | Add video |
| `<article>` | Represent self-contained content |

## Important Difference

These are not all "form elements" in the same sense.

```text
Form input types:
date
number
range
email
search

Form-related element:
datalist

Multimedia elements:
audio
video

Semantic content element:
article
```

This distinction helps understand why these elements belong to different parts of HTML5.
