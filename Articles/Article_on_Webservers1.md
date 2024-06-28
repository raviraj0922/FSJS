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
