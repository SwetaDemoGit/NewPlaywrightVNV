# Introduction to XML

## 1. What is XML?

XML stands for **Extensible Markup Language**.

XML is a text-based markup language used to **store, organize, and transport data**.

Unlike HTML, XML does not have predefined tags for presenting information. We create tags that describe the data.

HTML can be opened in a browser to see the webpage. XML can be opened to see the structured data, but XML itself doesn't create a webpage. Applications use XML and technologies such as XPath, XSLT, XSD, etc. to process that data
### Example

```xml
<?xml version="1.0" encoding="UTF-8"?>

<student>
    <name>Rahul</name>
    <course>Java</course>
    <city>Bangalore</city>
</student>
```

### Code explanation

- `<student>` is the root element.
- `<name>`, `<course>`, and `<city>` are child elements.
- `Rahul`, `Java`, and `Bangalore` are the data.
- XML tags describe what the data represents.

XML mainly focuses on **data**, while HTML mainly focuses on **presentation and structure of web content**.

---

# 2. Evolution of XML

Before XML became widely used, different technologies were used to represent and exchange structured data.

### SGML

**SGML (Standard Generalized Markup Language)** was an early standard for defining markup languages.

HTML was influenced by SGML.

However, SGML was powerful and complex for many common data-exchange requirements.

### HTML

HTML became widely used for creating web pages.

HTML provides predefined elements such as:

```html
<h1>
<p>
<table>
<form>
```

HTML is primarily concerned with displaying and structuring content in web pages.

### XML

XML was developed as a simpler, flexible way to represent structured data.

Example:

```xml
<employee>
    <id>101</id>
    <name>Priya</name>
    <department>IT</department>
</employee>
```

The developer can create meaningful tags such as `<employee>`, `<department>`, and `<id>`.

### Simple evolution

```text
SGML
  ↓
HTML → Web page presentation
  ↓
XML  → Structured data storage and exchange
```

XML became important for data exchange between different systems and applications.

---

# 3. Role of XML in Web Applications

XML can be used to **store and exchange structured data** between applications.

For example, an employee application may exchange:

```xml
<employee>
    <id>101</id>
    <name>Priya</name>
    <salary>50000</salary>
</employee>
```

The receiving application can read the XML and process the data.

## XML in data exchange

Consider two systems:

```text
Application A
     |
     | XML data
     ↓
Application B
```

Application A creates XML data.

Application B reads and processes the XML data.

This makes XML useful when different applications need a common data format.

---



## XML and Web Services

XML has historically been widely used with technologies such as **SOAP web services**.

Example SOAP-style data:

```xml
<soap:Envelope>
    <soap:Body>
        <getEmployee>
            <employeeId>101</employeeId>
        </getEmployee>
    </soap:Body>
</soap:Envelope>
```

The XML structure allows applications to exchange structured messages.

> Modern web APIs frequently use JSON, but XML remains important in many enterprise, legacy, configuration, document, and integration scenarios.

---

# 4. XML Characteristics

XML is:

- Text-based
- Extensible
- Platform independent
- Human-readable
- Machine-readable
- Useful for structured data

### Example

```xml
<book>
    <title>Java Basics</title>
    <author>John</author>
    <price>500</price>
</book>
```

The structure is easy for both people and software to understand.

---

# 5. Different Members of the XML Family

XML is part of a larger family of related technologies.

Important members include:

```text
XML
│
├── DTD
├── XML Schema (XSD)
├── XPath
├── XSLT
├── XLink
└── XQuery
```

---

## 5.1 DTD

**DTD (Document Type Definition)** defines the structure and allowed elements of an XML document.DTD tells us which elements are allowed and how they should be arranged.

Example:

```xml
<!DOCTYPE student [
    <!ELEMENT student (name, course)>
    <!ELEMENT name (#PCDATA)>
    <!ELEMENT course (#PCDATA)>
]>
```

This defines that a `<student>` must contain:

```text
name
course
```

---

## 5.2 XML Schema (XSD)

XML Schema, commonly called **XSD**, is another way to define and validate XML structure.

It can define:

- Elements
- Attributes
- Data types
- Restrictions
- Relationships

Example XML:

```xml
<student>
    <age>21</age>
</student>
```

An XSD can specify that `age` should contain an integer.

---

## 5.3 XPath

**XPath** is used to navigate and select nodes in an XML document.

Example XML:

```xml
<students>
    <student>
        <name>Rahul</name>
    </student>

    <student>
        <name>Priya</name>
    </student>
</students>
```

Example XPath:

```text
/students/student/name
```

This selects the `<name>` elements.

Another example:

```text
/students/student[1]/name
```

selects the name of the first student.

---

## 5.4 XSLT

**XSLT (Extensible Stylesheet Language Transformations)** is used to transform XML into another format.

For example:

```text
XML
 ↓
XSLT
 ↓
HTML
```

An XML document containing product information can be transformed into an HTML page for display.

---

## 5.5 XLink

**XLink** is a technology for creating links between XML resources.

It provides a standardized way to represent linking relationships in XML-based documents.

Imagine an online product catalog.

One XML file contains the product list:

<products
    xmlns:xlink="http://www.w3.org/1999/xlink">

    <product
        id="101"
        xlink:type="simple"
        xlink:href="laptop-details.xml">
        Laptop
    </product>

</products>

---

## 5.6 XQuery

**XQuery** is used to query and retrieve information from XML data.

For example, an application may have thousands of product records in XML and use XQuery to retrieve products matching specific conditions.

---

# 6. Introduction to XML Namespace

## Why are Namespaces Needed?

Different XML documents may use the same element name for different purposes.

For example:

```xml
<table>
```

could represent an HTML table.

In another XML vocabulary, `table` could represent a piece of furniture.

When different XML vocabularies are combined, the same element name can cause confusion.

Namespaces solve this problem by giving XML names a unique identity.

---

# 7. Namespace Syntax

A namespace is commonly declared using:

```xml
xmlns
```

Example:

```xml
<book xmlns="http://example.com/books">
    <title>XML Basics</title>
</book>
```

Here:

```text
xmlns
```

means XML namespace.

The namespace URI identifies the vocabulary.

---

# 8. Namespace Prefix

A namespace can also use a prefix.

Example:

```xml
<book:book xmlns:book="http://example.com/books">
    <book:title>XML Basics</book:title>
</book:book>
```

### Code explanation

```text
book:
```

is the namespace prefix.

```text
xmlns:book
```

declares the prefix.

```text
http://example.com/books
```

is the namespace URI.

The prefix connects the XML elements to that namespace.

---

# 9. Using Multiple Namespaces

Different XML vocabularies can be used in the same document.

Example:

```xml
<root
    xmlns:book="http://example.com/books"
    xmlns:store="http://example.com/store">

    <book:book>
        <book:title>XML Basics</book:title>
    </book:book>

    <store:name>ABC Book Store</store:name>

</root>
```

Here:

```text
book:
```

identifies elements from the book namespace.

```text
store:
```

identifies elements from the store namespace.

This prevents naming conflicts.

---

# 10. Important XML Rules

XML is case-sensitive.

These are different:

```xml
<Name>
<name>
```

XML elements must have a closing tag:

```xml
<name>Rahul</name>
```

Elements must be properly nested:

```xml
<student>
    <name>Rahul</name>
</student>
```

Not:

```xml
<student>
    <name>Rahul</student>
</name>
```

XML documents should have one root element:

```xml
<students>
    ...
</students>
```

---

# 11. Complete Example

```xml
<?xml version="1.0" encoding="UTF-8"?>

<students xmlns="http://example.com/student">

    <student>
        <id>101</id>
        <name>Rahul</name>
        <course>Java</course>
    </student>

    <student>
        <id>102</id>
        <name>Priya</name>
        <course>Python</course>
    </student>

</students>
```

### Code explanation

```xml
<?xml version="1.0" encoding="UTF-8"?>
```

is the XML declaration.

```xml
<students>
```

is the root element.

```xml
<student>
```

represents one student.

```xml
<id>
<name>
<course>
```

contain individual pieces of student information.

```xml
xmlns="http://example.com/student"
```

declares the default namespace for the document.

---

# Quick Summary

| Topic | Meaning |
|---|---|
| XML | Stores and exchanges structured data |
| SGML | Earlier generalized markup standard |
| HTML | Structures and presents web content |
| DTD | Defines XML document structure |
| XSD | Defines and validates XML structure and data types |
| XPath | Navigates/selects XML nodes |
| XSLT | Transforms XML into another format |
| XLink | Supports linking between XML resources |
| XQuery | Queries XML data |
| Namespace | Prevents naming conflicts |

### Easy way to remember

```text
XML       → Data
DTD/XSD   → Structure & validation
XPath     → Find data
XSLT      → Transform data
XQuery    → Query data
Namespace → Avoid name conflicts
```
