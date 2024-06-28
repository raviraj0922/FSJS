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

 
# Audio and Video Tag
## <audio> Tag:
- The <audio> tag is used to embed sound content in a document, such as music or other audio streams.
- It contains one or more <source> tags with different audio sources.
- Browsers choose the first supported source.
Ex:
<audio controls>
    <source src="horse.ogg" type="audio/ogg">
    <source src="horse.mp3" type="audio/mpeg">
    Your browser does not support the audio tag.
</audio>
## <video> Tag:
- The <video> tag embeds a media player for video playback.
- You can also use it for audio content, but <audio> is more appropriate for sound files.
Ex:
<video controls>
    <source src="movie.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
 

# Flex Box (CSS)
## Flexbox, short for “Flexible Box Layout,” is a powerful CSS layout model that simplifies creating complex web layouts. It provides a flexible way to align elements and distribute space within a container element.
## Flex Container and Flex Items:
- A flex container is an element that holds one or more flex items.
- To create a flex container, set the display property to flex or inline-flex.
.container {
    display: flex; /* or inline-flex */
}
## Properties for the Parent (Flex Container):
- flex-direction: Defines the main axis direction.
- Options: row, row-reverse, column, column-reverse.
- flex-wrap: Controls whether items wrap onto multiple lines.
- Options: nowrap, wrap, wrap-reverse.
- justify-content: Aligns items along the main axis.
- Options: flex-start, flex-end, center, space-between, space-around, space-evenly, and more.
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
 

# Positioning (CSS)
## Static Positioning:
- Default behavior for HTML elements.
- Not affected by top, bottom, left, or right properties.
- Positioned according to the normal flow of the page.
## Relative Positioning:
- Positioned relative to its normal position.
- Adjusted using top, right, bottom, or left properties.
- Other content doesn’t adjust to fill gaps left by the element.
## Fixed Positioning:
- Positioned relative to the viewport (stays in place during scrolling).
- Uses top, right, bottom, or left properties.
- Doesn’t leave a gap where it would normally be located.
## Absolute Positioning:
- Positioned relative to the nearest positioned ancestor (or document body).
- Removed from normal flow and can overlap other elements.
  # Sticky Positioning:
- Based on user’s scroll position.
- Toggles between relative and fixed positioning.
 
# CSS Box Model (Padding, Margin, Border)
## Content:
- The content of an element (where text and images appear).
- It’s the innermost part of the box.
## Padding:
- Clears an area around the content.
- Space between the content and the border.
- Padding is transparent.
Ex:
- padding-top
- padding-right
- padding-bottom
- padding-left
## Border:
- Surrounds the padding and content.
- It’s the line that defines the boundary of the box.
Ex:
- dotted - Defines a dotted border
- dashed - Defines a dashed border
- solid - Defines a solid border
- double - Defines a double border
- groove - Defines a 3D grooved border. The effect depends on the border-color value
- ridge - Defines a 3D ridged border. The effect depends on the border-color value
- inset - Defines a 3D inset border. The effect depends on the border-color value
- outset - Defines a 3D outset border. The effect depends on the border-color value
- none - Defines no border
- hidden - Defines a hidden border
## Margin:
- Clears an area outside the border.
- Space between the border and neighboring elements.
- Margin is transparent.
Ex:
- margin-top
- margin-right
- margin-bottom
- margin-left

 
# Media Query
## Media queries are a powerful CSS3 feature that allow webpages to adapt their layout based on different screen sizes and media types. They play a crucial role in creating responsive web designs.
Ex: 
`@media only screen and (max-width: 600px) {
    body {
        background-color: lightblue;
    }
}`
## Breakpoints and Responsive Design
- Breakpoints define where parts of the design behave differently based on screen size.
- We can add breakpoints to adjust layouts for desktop, tablet, and phone screens.
- Here’s an example of a breakpoint at 768px
`/* For desktop: */
.col-1 { width: 8.33%; }
.col-2 { width: 16.66%; }
/* ... other column widths ... */
@media only screen and (max-width: 768px) {
    /* For mobile phones: */
    [class*="col-"] {
        width: 100%;
    }
}`
## Mobile First Approach
- Designing for mobile first means making changes when the width gets larger than 768px.
- Here’s an example of a mobile-first approach
`/* For mobile phones: */
[class*="col-"] {
    width: 100%;
}
@media only screen and (min-width: 768px) {
    /* For desktop: */
    .col-1 { width: 8.33%; }
    /* ... other column widths ... */
}`
 
# CSS Grid
## CSS Grid is a powerful two-dimensional layout system for creating responsive web designs.
## Grid Container:
- The parent element that holds grid items.
- Use display: grid; or display: inline-grid;.
- Define columns and rows using grid-template-columns and grid-template-rows.
## Grid Items:
- Elements inside the grid container.
- Positioned in columns and rows.
- Use fractional units (fr) for flexible sizing
Ex:
`.container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr; /* Three equal columns */
    grid-template-rows: 100px auto 50px; /* Fixed, flexible, fixed rows */
}`
