---
title: "The Complete Markdown Syntax Handbook"
description: "A quick reference for all Markdown syntax, including GitHub-specific features."
date: "2024-09-08"
tags:
  - markdown
  - syntax
featured: false
draft: false
---

Hey there! 👋

You know how sometimes you forget things you actually know pretty well? Markdown is one of those for me. Nothing fancy, just a straightforward reference for those "wait, how do I do this again?" moments.

## Table of Contents

- [Basic Text Formatting](#basic-text-formatting)
- [Headers](#headers)
- [Lists](#lists)
- [Links and Images](#links-and-images)
- [Code and Syntax Highlighting](#code-and-syntax-highlighting)
- [Tables](#tables)
- [Blockquotes](#blockquotes)
- [Horizontal Rules](#horizontal-rules)
- [GitHub-Specific Features](#github-specific-features)
- [Advanced Elements](#advanced-elements)
- [Escaping Characters](#escaping-characters)

---

## Basic Text Formatting

### Bold and Italic Text

**Preview:**

- _This text is italic_
- **This text is bold**
- **_This text is bold and italic_**
- ~~This text is strikethrough~~

**Syntax:**

```markdown
_This text is italic_
_This text is also italic_
**This text is bold**
**This text is also bold**
**_This text is bold and italic_**
~~This text is strikethrough~~
```

### Inline Code

**Preview:**
Use the `printf()` function to display output.

**Syntax:**

```markdown
Use the `printf()` function to display output.
```

---

## Headers

**Preview:**

# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6

**Syntax:**

```markdown
# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6
```

**Alternative Syntax for H1 and H2:**

```markdown
# Header 1

## Header 2
```

---

## Lists

### Unordered Lists

**Preview:**

- First item
- Second item
- Third item
  - Nested item
  - Another nested item
- Fourth item

**Syntax:**

```markdown
- First item
- Second item
- Third item
  - Nested item
  - Another nested item
- Fourth item
```

**Alternative bullets:**

```markdown
- First item

* Second item

- Third item
```

### Ordered Lists

**Preview:**

1. First item
2. Second item
3. Third item
   1. Nested item
   2. Another nested item
4. Fourth item

**Syntax:**

```markdown
1. First item
2. Second item
3. Third item
   1. Nested item
   2. Another nested item
4. Fourth item
```

### Task Lists (GitHub-specific)

**Preview:**

- [x] Completed task
- [ ] Incomplete task
- [ ] Another incomplete task

**Syntax:**

```markdown
- [x] Completed task
- [ ] Incomplete task
- [ ] Another incomplete task
```

---

## Links and Images

### Links

**Preview:**

- [GitHub](https://github.com)
- [GitHub with title](https://github.com "GitHub Homepage")
- <https://www.example.com>
- [Reference link][1]

[1]: https://www.example.com

**Syntax:**

```markdown
[GitHub](https://github.com)
[GitHub with title](https://github.com "GitHub Homepage")
<https://www.example.com>
[Reference link][1]

[1]: https://www.example.com
```

### Images

**Preview:**
![ghibli ](https://www.ghibli.jp/gallery/chihiro045.jpg)

**Syntax:**

```markdown
![Alt text](https://via.placeholder.com/150x100/09f/fff.png)
![Alt text](image.jpg "Optional title")
![Reference image][image-ref]

[image-ref]: image.jpg "Optional title"
```

### Linked Images

**Preview:**
[![Alt text](https://www.ghibli.jp/gallery/howl005.jpg)](https://www.ghibli.jp/works/howl/)

**Syntax:**

```markdown
[![Alt text](image.jpg)](https://example.com)
```

---

## Code and Syntax Highlighting

### Inline Code

**Preview:**
The `console.log()` function outputs text to the console.

**Syntax:**

```markdown
The `console.log()` function outputs text to the console.
```

### Code Blocks

**Preview:**

```
Simple code block
No syntax highlighting
```

**Syntax:**

````markdown
```
Simple code block
No syntax highlighting
```
````

### Syntax-Highlighted Code Blocks

**Preview:**

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("World");
```

```python
def greet(name):
    print(f"Hello, {name}!")

greet("World")
```

```bash
#!/bin/bash
echo "Hello, World!"
```

**Syntax:**

````markdown
```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("World");
```

```python
def greet(name):
    print(f"Hello, {name}!")

greet("World")
```

```bash
#!/bin/bash
echo "Hello, World!"
```
````

---

## Tables

**Preview:**
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Row 1 | Data | More data|
| Row 2 | Data | More data|

**Syntax:**

```markdown
| Header 1 | Header 2 | Header 3  |
| -------- | -------- | --------- |
| Row 1    | Data     | More data |
| Row 2    | Data     | More data |
```

### Aligned Tables

**Preview:**
| Left Aligned | Center Aligned | Right Aligned |
|:-------------|:--------------:|--------------:|
| Left | Center | Right |
| Text | Text | Text |

**Syntax:**

```markdown
| Left Aligned | Center Aligned | Right Aligned |
| :----------- | :------------: | ------------: |
| Left         |     Center     |         Right |
| Text         |      Text      |          Text |
```

---

## Blockquotes

**Preview:**

> This is a blockquote.
> It can span multiple lines.
>
> > This is a nested blockquote.
>
> Back to the first level.

**Syntax:**

```markdown
> This is a blockquote.
> It can span multiple lines.
>
> > This is a nested blockquote.
>
> Back to the first level.
```

---

## Horizontal Rules

**Preview:**

---

---

---

**Syntax:**

```markdown
---
---

---
```

---

## GitHub-Specific Features

### Mentions and References

**Preview:**

- @username mentions a user
- #123 references an issue or pull request
- SHA: a5c3785ed8d6a35868bc169f07e40e889087fd2e
- User@SHA: jlord@a5c3785ed8d6a35868bc169f07e40e889087fd2e

**Syntax:**

```markdown
@username mentions a user
#123 references an issue or pull request
SHA: a5c3785ed8d6a35868bc169f07e40e889087fd2e
User@SHA: jlord@a5c3785ed8d6a35868bc169f07e40e889087fd2e
```

### Emoji

**Preview:**
:smile: :heart: :thumbsup: :rocket: :octocat:

**Syntax:**

```markdown
:smile: :heart: :thumbsup: :rocket: :octocat:
```

### Collapsible Sections

**Preview:**

<details>
<summary>Click to expand</summary>

This content is hidden by default and can be expanded by clicking the summary.

```javascript
console.log("Hidden code block!");
```

</details>

**Syntax:**

````markdown
<details>
<summary>Click to expand</summary>

This content is hidden by default and can be expanded by clicking the summary.

```javascript
console.log("Hidden code block!");
```
````

</details>
```

---

## Advanced Elements

### Footnotes

**Preview:**
Here's a sentence with a footnote[^1].

[^1]: This is the footnote content.

**Syntax:**

```markdown
Here's a sentence with a footnote[^1].

[^1]: This is the footnote content.
```

### Definition Lists

**Preview:**
First Term
: This is the definition of the first term.

Second Term
: This is the definition of the second term.

**Syntax:**

```markdown
First Term
: This is the definition of the first term.

Second Term
: This is the definition of the second term.
```

### Keyboard Keys

**Preview:**
Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.

**Syntax:**

```markdown
Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.
```

### Math Expressions (GitHub)

**Preview:**
Inline math: $x = y + z$

Block math:

$$
\sum_{i=1}^{n} x_i = x_1 + x_2 + \cdots + x_n
$$

**Syntax:**

```markdown
Inline math: $x = y + z$

Block math:

$$
\sum_{i=1}^{n} x_i = x_1 + x_2 + \cdots + x_n
$$
```

---

## Escaping Characters

Sometimes you need to display characters that have special meaning in Markdown. Use a backslash `\` to escape them.

**Preview:**
\*This text is not italic\*
\`This is not code\`
\# This is not a header

**Syntax:**

```markdown
\*This text is not italic\*
\`This is not code\`
\# This is not a header
```

**Characters that can be escaped:**

```markdown
\ backslash
` backtick

- asterisk
  \_ underscore
  {} curly braces
  [] square brackets
  () parentheses

# hash mark

- plus sign

* minus sign (hyphen)
  . dot
  ! exclamation mark
```

---

_This handbook serves as a quick reference for all your Markdown needs. Bookmark it and refer back whenever you need to remember a specific syntax._
