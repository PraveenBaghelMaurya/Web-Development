CSS Units Explained
1. Absolute Units (Fixed Size)
These units do not change based on the screen size or parent elements.

px (pixels) → Fixed size, does not scale with screen size.
cm (centimeters) → Real-world centimeters.
mm (millimeters) → 1 mm = 1/10 of a cm.
in (inches) → 1 inch = 2.54 cm.
pt (points) → 1 pt = 1/72 of an inch (used in typography).
pc (picas) → 1 pc = 12 pt.
💡 Best Practice: Use px for precise control, but avoid absolute units for responsive designs.

2. Relative Units (Flexible Size)
These units adjust based on screen size or parent elements, making them ideal for responsive designs.

a) Relative to Parent Element
% (percentage) → Size is relative to the parent element.
em → Based on the font size of the parent.
ex → Based on the height of the lowercase "x" of the font.
ch → Based on the width of the "0" character in the font.
💡 Best Practice:

Use % for flexible widths inside containers.
Use em for proportional spacing and padding.
b) Relative to Root Element
rem → Similar to em, but based on the root <html> font size instead of the parent.
💡 Best Practice:

Use rem for fonts to ensure consistency across the entire site.
rem is better than em for global text scaling.
c) Relative to Viewport (Screen Size)
vw (viewport width) → 1vw = 1% of the screen width.
vh (viewport height) → 1vh = 1% of the screen height.
vmin → Smaller of vw or vh.
vmax → Larger of vw or vh.
💡 Best Practice:

Use vw and vh for full-screen layouts.
vmin and vmax help maintain aspect ratio.