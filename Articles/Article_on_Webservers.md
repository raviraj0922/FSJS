# Web Servers: 
## A web server can be referred to as either the hardware (the computer) or the software (the computer application) that helps to deliver content that can be accessed through the Internet. A web server is what makes it possible to be able to access content like web pages or other data from anywhere as long as it is connected to the internet.
<ul><li>A web server is a computer that stores web server software and a website’s component files (such as HTML documents, images, CSS stylesheets, and JavaScript files).</li>
<li>It connects to the Internet and facilitates data interchange with other devices on the web.</li>
<li>The core component is the HTTP server, which understands URLs (web addresses) and the HTTP protocol (used by browsers to view webpages).</li>
<li>When your browser requests a file (e.g., an HTML page) hosted on a web server, it sends an HTTP request.</li>
<li>The web server (software) accepts the request, locates the requested document, and sends it back to your browser via HTTP.</li>
<li>If the server doesn’t find the requested document, it returns a 404 response.</li></ul>

## Types of Web Servers:
<ul><li>Static Web Server: Sends hosted files as-is to your browser. It consists of a computer with an HTTP server.</li>
<li>Dynamic Web Server: Includes extra software (e.g., an application server and a database). The application server updates hosted files before delivering content to your browser. For complex sites (like MDN or Wikipedia), this setup is common.</li></ul>
<p>Web servers play a crucial role in delivering web content to users. They handle requests, locate files, and ensure smooth data exchange.</p>

 
# HTML Element
## Hyper Text Mark-up Language is helpful for the structure and design of any webpage. It just provides the primary structure that is assisted by more advanced programming languages like javascript.
## HTML Tags: 
- H1 to H6 - header tags: This tag is use to give title and subject, it is start with "H1" and end with "/H1".
- p paragraph tag: This tag is use to separate the content paragraphs, it is start with 'p' and end with '/p'.
- a anchor tag: This tag is use to define a hyperlink, which connect the one web page to an another webpage, it is start with 'a' and end with '/a'.
- img image tag: This tag is use to insert the image in the webpage, we can insert the image in the webpage by linking the image address from other webpage.

## Lorem
<p>Lorem is the dummy content use for to insert in the webpage in the place of content, we can insert as long as content in the webpage.</p>
<p>Ex: if we want to insert the 100 word content in the web page we just type “Lorem100” and hit tab and we get 100 word of dummy content.</p>

## There are lots of other tags which were used in the HTML page designing:
- !DOCTYPE html: Defines the document type and version (HTML5 in this case).
- html: The root element that wraps all other elements.
- head: Contains metadata about the document (e.g., title, links to stylesheets, scripts).
- body: Contains the visible content of the webpage.
- h1 to h6: Headings (from largest to smallest).
- p: Paragraphs.
- a: Hyperlinks.
- img: Embeds images.
- ul and ol: Unordered and ordered lists.
- li: List items.
- div: A generic container for grouping elements.
- span: Inline container for styling or scripting.
- table, tr, td: Creates tables and their rows and cells.
- form: Defines input forms.
- input: Various input types (text, checkbox, radio, etc.).

 
# Input Elements
## Input elements are essential components in web forms that allow users to interact with a webpage. They come in various types, each serving a specific purpose.
## Text Input (<input type="text">):
- A single-line text field where users can enter alphanumeric data.
- Example: <input type="text" name="username">
## Checkbox (<input type="checkbox">):
- Allows users to select or deselect options.
- Example: <input type="checkbox" name="subscribe">
## Radio Buttons (<input type="radio">):
- Users can choose one option from a group of mutually exclusive choices.
- Example: <input type="radio" name="gender" value="male">
## Number Input (<input type="number">):
- Accepts numeric values and often includes a spinner for adjustments.
- Example: <input type="number" name="quantity">
## Date Picker (<input type="date">):
- Allows users to select a date from a calendar.
- Example: <input type="date" name="birthdate">
## Color Picker (<input type="color">):
- Opens a color selection dialog.
- Example: <input type="color" name="favoriteColor">
## File Upload (<input type="file">):
- Lets users choose files from their device.
- Example: <input type="file" name="avatar" accept="image/*">
## Password Input (<input type="password">):
- Conceals the entered text (e.g., for passwords).
- Example: <input type="password" name="userPassword">
## Submit Button (<input type="submit">):
- Triggers form submission.
- Example: <input type="submit" value="Submit">
