# HTML Forms for User Input

## 1. What is an HTML Form?

An HTML form provides a way for users to enter information and send that information to a website or application.

Common examples include:
- Login forms
- Registration forms
- Search forms
- Feedback forms
- Contact forms
- Job application forms
- Online shopping checkout forms
- File upload forms

A form acts as a container for input controls.

Basic structure:

```html
<form>
    form controls
</form>
```

Example:

```html
<form>
    <label>Name:</label>
    <input type="text">
</form>
```

The `<form>` element groups related controls that collect user input.

## 2. How a Form Works

A typical form follows this flow:

```text
User
  ↓
Enters/selects information
  ↓
HTML form controls
  ↓
Clicks Submit
  ↓
Form data is sent
  ↓
Server/application processes the data
```

HTML creates the user interface. HTML alone does not store the submitted information in a database.

## 3. The `<form>` Element

The main attributes are:

### `action`

Specifies where the form data should be sent.

```html
<form action="/register">
```

### `method`

Specifies how the browser sends the data.

Common methods:

```html
<form method="get">
```

and

```html
<form method="post">
```

For basic learning:

- `GET` commonly sends data as part of the URL.
- `POST` sends data in the request body.

Example:

```html
<form action="/login" method="post">
    ...
</form>
```

## 4. `<label>`

Imagine a paper form

You have:

Username:  [________________]

There are two things here:

Username: → tells the user what to enter
[________] → the box where the user enters it

In HTML, we create those two things separately:

<label>Username:</label>
<input type="text">

That's the basic idea.

`<label>` provides a description for a form control.
<label> displays the name/description of a form field.
for in <label> connects the label to an input's id.
id uniquely identifies the input.
The value of for and id should match.

```html
<label for="username">Username:</label>
<input type="text" id="username">
```

The `for` value should match the input's `id`.

This creates a clear relationship between the label and the input.

## 5. Single-Line Text Field

A single-line text field is created using:

```html
<input type="text">
```

Example:

```html
<label for="name">Full Name:</label>
<input type="text" id="name" name="name">
```

The user can enter text on one line.

Example uses:
- Name
- City
- Username
- Search keyword
- Company name

### `placeholder`

Provides a hint inside the field.

```html
<input type="text"
       name="name"
       placeholder="Enter your name">
```

The placeholder is a hint, not a replacement for a label.

### `value`

Provides an initial value.

```html
<input type="text" name="city" value="Bangalore">
```

### `maxlength`

Limits the number of characters.

```html
<input type="text" name="username" maxlength="20">
```

### `required`

Makes the field mandatory.

```html
<input type="text" name="name" required>
```

## 6. Text Area

A `<textarea>` is used when the user needs to enter multiple lines.

Example:

```html
<label for="message">Message:</label>

<textarea id="message" name="message"
          rows="5" cols="40"></textarea>
```

Typical uses:
- Comments
- Feedback
- Address
- Description
- Message

Difference:

```text
<input type="text">  → Single line

<textarea>            → Multiple lines
```

A textarea has opening and closing tags:

```html
<textarea></textarea>
```

## 7. Checkbox

A checkbox lets the user select one or more independent options.

Syntax:

```html
<input type="checkbox">
```

Example:

```html
<input type="checkbox" name="java" value="java">
<label>Java</label>

<input type="checkbox" name="python" value="python">
<label>Python</label>

<input type="checkbox" name="sql" value="sql">
<label>SQL</label>
```

Possible selection:

```text
☑ Java
☑ Python
☐ SQL
```

Multiple checkboxes can be selected.

Common examples:
- Skills
- Hobbies
- Terms and conditions
- Notifications
- Multiple course selections

### `checked`

Makes a checkbox selected initially.

```html
<input type="checkbox" name="updates" checked>
```

## 8. Radio Buttons

Radio buttons are used when the user should select one option from a group.

Syntax:

```html
<input type="radio" name="gender" value="male">
```

The most important point is that radio buttons in the same group should have the same `name`.

Example:

```html
<input type="radio" name="mode" value="online">
<label>Online</label>

<input type="radio" name="mode" value="offline">
<label>Offline</label>
```

The user selects one:

```text
◉ Online
○ Offline
```

### Why does `name` matter?

These belong to the same group because they use:

```html
name="mode"
```

If different names are used, the browser can treat them as separate groups.

### `checked`

Selects one option by default:

```html
<input type="radio" name="mode" value="online" checked>
```

## 9. Checkbox vs Radio Button

| Checkbox | Radio Button |
|---|---|
| Multiple choices can be selected | Normally one choice per group |
| `type="checkbox"` | `type="radio"` |
| Useful for independent options | Useful for mutually exclusive choices |

Example:

Checkbox:

```text
☑ Java
☑ Python
☑ SQL
```

Radio:

```text
◉ Online
○ Offline
```

## 10. Password Field

A password field is created using:

```html
<input type="password">
```

Example:

```html
<label for="password">Password:</label>
<input type="password"
       id="password"
       name="password">
```

Characters are hidden while typing.

Example:

```text
Password:  ••••••••
```

Common uses:
- Login passwords
- PIN-like secret text
- Account credentials

Important: `type="password"` hides characters on the screen. Secure transmission still requires HTTPS and proper server-side security.

## 11. Pull-Down Menu

A pull-down menu is created using `<select>` and `<option>`.

Example:

```html
<label for="city">City:</label>

<select id="city" name="city">
    <option value="bangalore">Bangalore</option>
    <option value="delhi">Delhi</option>
    <option value="mumbai">Mumbai</option>
</select>
```

The user sees a dropdown.

```text
City: [ Bangalore ▼ ]
```

Each option is created using:

```html
<option>
```

The `value` is the value submitted with the form.

### `selected`

Selects an option initially:

```html
<option value="bangalore" selected>Bangalore</option>
```

### `multiple`

Allows multiple selections:

```html
<select name="skills" multiple>
    <option value="java">Java</option>
    <option value="python">Python</option>
    <option value="sql">SQL</option>
</select>
```

## 12. File Selector

A file selector allows the user to choose a file from their computer.

Use:

```html
<input type="file">
```

Example:

```html
<label for="resume">Upload Resume:</label>

<input type="file"
       id="resume"
       name="resume">
```

The browser provides a file-selection control.

Typical uses:
- Resume upload
- Profile picture
- Documents
- Certificates
- Attachments

### Restricting File Types

The `accept` attribute can suggest allowed file types.

```html
<input type="file"
       name="resume"
       accept=".pdf,.doc,.docx">
```

For images:

```html
<input type="file"
       name="photo"
       accept="image/*">
```

## 13. Submit Button

A form usually needs a way to submit the information.

```html
<input type="submit" value="Submit">
```

or:

```html
<button type="submit">Submit</button>
```

Example:

```html
<form>
    <input type="text" name="name">
    <button type="submit">Submit</button>
</form>
```

## 14. Reset Button

A reset button restores form controls to their initial values.

```html
<button type="reset">Reset</button>
```

Example:

```html
<form>
    <input type="text" name="name">
    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
</form>
```

## 15. Complete Registration Form

```html
<!DOCTYPE html>
<html>

<head>
    <title>Registration Form</title>
</head>

<body>

<h1>Student Registration</h1>

<form action="/register" method="post">

    <label for="name">Full Name:</label>
    <input type="text"
           id="name"
           name="name"
           placeholder="Enter your name"
           required>

    <br><br>

    <label for="password">Password:</label>
    <input type="password"
           id="password"
           name="password"
           required>

    <br><br>

    <label for="city">City:</label>

    <select id="city" name="city">
        <option value="bangalore">Bangalore</option>
        <option value="delhi">Delhi</option>
        <option value="mumbai">Mumbai</option>
    </select>

    <br><br>

    <label>Training Mode:</label>

    <input type="radio"
           id="online"
           name="mode"
           value="online">

    <label for="online">Online</label>

    <input type="radio"
           id="offline"
           name="mode"
           value="offline">

    <label for="offline">Offline</label>

    <br><br>

    <label>Skills:</label>

    <input type="checkbox"
           id="java"
           name="skills"
           value="java">

    <label for="java">Java</label>

    <input type="checkbox"
           id="python"
           name="skills"
           value="python">

    <label for="python">Python</label>

    <input type="checkbox"
           id="sql"
           name="skills"
           value="sql">

    <label for="sql">SQL</label>

    <br><br>

    <label for="message">About Yourself:</label>

    <br>

    <textarea id="message"
              name="message"
              rows="5"
              cols="40"
              placeholder="Enter a short description"></textarea>

    <br><br>

    <label for="resume">Upload Resume:</label>

    <input type="file"
           id="resume"
           name="resume"
           accept=".pdf,.doc,.docx">

    <br><br>

    <button type="submit">Register</button>
    <button type="reset">Reset</button>

</form>

</body>
</html>
```

## 16. Important Form Elements

| Element | Purpose |
|---|---|
| `<form>` | Container for form controls |
| `<label>` | Describes a form control |
| `<input type="text">` | Single-line text |
| `<textarea>` | Multi-line text |
| `<input type="checkbox">` | Multiple selections |
| `<input type="radio">` | One choice from a group |
| `<input type="password">` | Hidden password input |
| `<select>` | Pull-down/dropdown menu |
| `<option>` | Option inside dropdown |
| `<input type="file">` | Select a file |
| `<button type="submit">` | Submit form |
| `<button type="reset">` | Reset form |

## 17. Commonly Used Input Attributes

| Attribute | Purpose |
|---|---|
| `id` | Uniquely identifies an element |
| `name` | Identifies form data when submitted |
| `value` | Value associated with the control |
| `placeholder` | Displays an input hint |
| `required` | Makes input mandatory |
| `checked` | Selects checkbox/radio initially |
| `selected` | Selects dropdown option initially |
| `maxlength` | Limits text length |
| `accept` | Suggests allowed file types |

## Key Difference Between `id` and `name`

`id` is commonly used to identify an element and connect it with its `<label>`.

```html
<label for="email">Email:</label>
<input type="text" id="email" name="email">
```

Here:

```text
for="email"  → connects label to id="email"
name="email" → identifies submitted form data
```

## Final Mental Model

```text
<form>
   │
   ├── <label>       → What should the user enter?
   │
   ├── <input>       → Single-line / password / checkbox / radio / file
   │
   ├── <textarea>    → Multiple lines
   │
   ├── <select>      → Choose from options
   │      └── <option>
   │
   └── Submit        → Send the form data
</form>
```

A form is essentially the HTML structure used to **collect information from a user and prepare it for submission to an application/server**.
