
# PawCare - Responsive Audit Report

## Project Information
- Project: PawCare Pet Grooming Centre
- Assignment: 09 - Responsive Audit
- Technology: HTML5 and CSS3

## Screen Sizes Tested

| Device | Width | Expected Layout |
|---|---:|---|
| Desktop | 1200px | Full navigation and 3-column gallery |
| Tablet | 768px | Compact navigation and 2-column gallery |
| Mobile | 375px | Stacked sections and 1-column gallery |

## Problems Identified and Fixed

### 1. Navigation Overflow
Problem: Navigation links could overflow on smaller screens.

Fix: Used flex-wrap, gap and a mobile media query.

### 2. Images Overflowing
Problem: Images could exceed their container width.

Fix: Used max-width: 100%, object-fit: cover and responsive heights.

### 3. Cards Too Narrow
Problem: Service cards looked crowded on mobile screens.

Fix: Changed the card layout to a vertical column.

### 4. Small Text
Problem: Large headings and navigation text needed adjustment.

Fix: Used smaller font sizes inside media queries.

### 5. Horizontal Scrolling
Problem: Some elements could create horizontal overflow.

Fix: Used box-sizing: border-box, responsive widths and overflow-x: hidden.

### 6. Buttons Too Close
Problem: Buttons and form fields needed more spacing.

Fix: Increased padding and margins.

## CSS Breakpoints

- 768px - Tablet devices
- 480px - Mobile devices

## Conclusion

The PawCare website uses responsive CSS to adjust its layout
for desktop, tablet and mobile screens.

The website is designed to avoid horizontal scrolling
and maintain readable content on smaller devices.
