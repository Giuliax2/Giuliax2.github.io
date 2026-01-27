# Divino Caffè Website
## A Modern Coffee Shop Experience

*By Giulia Ferraro*

---

## Project Overview

**Goal:** Create an engaging, user-friendly website for Divino Caffè, a local coffee shop in Corzano, Italy.

**Key Features:**
- Responsive design for all devices
- Interactive menu showcase
- Table booking system
- Location information with embedded map
- Social media integration

---

## Technology Stack

### Frontend Technologies
- **HTML5** - Semantic structure
- **CSS3** - Custom styling with animations
- **JavaScript** - Form validation and interactivity
- **Bootstrap 5** - Responsive grid system

### Design Approach
- Mobile-first responsive design
- Custom color scheme with primary blue accents
- Smooth animations and transitions

---

## Page Structure

The website is organized into five main sections:

1. **Home** - Hero section with animated title
2. **About Us** - Services description with animated image
3. **Menu** - Interactive flip cards showcasing dishes
4. **Where** - Location map and contact information
5. **Book** - Reservation form with validation
6. **Social** - Social media links

---

## Hero Section Design

### Visual Elements
- Dark background (`#0e1629`) for contrast
- Animated gradient text effect using conic-gradient
- Glowing animated buttons with rainbow border effect

### Key CSS Technique
```css
background: conic-gradient(from 90deg,
    var(--bs-primary) 0%,
    #6ea8fe 30%,
    #fff 50%,
    #6ea8fe 70%,
    var(--bs-primary) 100%);
```

---

## Interactive Menu Cards

### Flip Card Animation
- 3D flip effect on hover using CSS transforms
- Front side: Product image and title
- Back side: Detailed description

### Implementation
- `perspective: 1000px` for 3D effect
- `transform: rotateY(180deg)` on hover
- `backface-visibility: hidden` for smooth transition

---

## Image Animation

### Blob Effect
Created an organic, flowing animation for the "About" section image

**Technique:** Keyframe animation changing border-radius

```css
@keyframes blob {
  0% { border-radius: 31% 69% 60% 40% / 37% 35% 65% 63%; }
  /* ... multiple stages ... */
  100% { border-radius: 31% 69% 60% 40% / 37% 35% 65% 63%; }
}
```

Duration: 20 seconds, infinite loop

---

## Location Integration

### Google Maps Embed
- Embedded interactive Google Maps iframe
- Shows exact location: Piazza Karol Wojtyla, 5, Corzano (BS)
- Responsive container with shadow and rounded corners

### Contact Information
- Opening hours clearly displayed
- Address formatted for easy reading
- Clean, organized layout

---

## Booking Form - Frontend

### Form Structure
Eight input fields with labels:
- First Name, Last Name (text)
- Email (email type)
- Phone Number (tel type)
- Date, Time (date/time pickers)
- Number of Guests (number input, 1-20)
- Special Requests (textarea, optional)

All fields required except special requests

---

## Form Validation - Part 1

### Real-time Validation
- Validates on blur (when user leaves field)
- Re-validates on input if field has errors
- Visual feedback with red borders and error messages

### Validation Rules
- **Email:** Regex pattern `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- **Phone:** Regex `/^[\d\s\-\+\(\)]+$/` + minimum 8 digits
- **Guests:** Range validation (1-20)
- **Date:** Must be today or future date

---

## Form Validation - Part 2

### JavaScript Implementation
```javascript
function validateField(field) {
    const formGroup = field.parentElement;
    let isValid = true;
    
    // Check if empty
    if (!field.value.trim()) {
        isValid = false;
    }
    
    // Add/remove error class
    if (isValid) {
        formGroup.classList.remove('error');
    } else {
        formGroup.classList.add('error');
    }
}
```

---

## Success Modal

### User Feedback
After successful form submission:
- Modal overlay appears with fade-in animation
- Displays confirmation message
- Shows user's name, phone, and email
- Animated slide-up effect

### Features
- Click outside to close
- ESC key to close
- Form resets automatically
- Smooth CSS animations

---

## Responsive Design

### Mobile-First Approach
- Bootstrap grid system (col-md-4, col-sm-6)
- Flexible images (max-width: 80%)
- Responsive iframe for map
- Stacked layout on small screens

### Breakpoints
- Small devices: Single column
- Medium devices: 2 columns (menu cards)
- Large devices: 3 columns (menu cards)

---

## Navigation System

### Fixed Navigation Bar
- Stays at top when scrolling
- Smooth scroll to sections
- `scroll-margin-top: 120px` to account for fixed navbar
- Hamburger menu for mobile devices

### Smooth Scrolling
Anchor links with section IDs:
```html
<a href="#menu">Menu</a>
<div id="menu">...</div>
```

---

## Custom Styling Highlights

### Glowing Buttons
- Rainbow gradient border animation
- 20-second animation loop
- Blur filter for glow effect
- Hover state with smooth transitions

### Color Scheme
- Primary: Bootstrap blue (`var(--bs-primary)`)
- Dark: `#0e1629`
- Light backgrounds: `#fff`, `#f8f9fa`
- Accent gradients throughout

---

## Accessibility Features

### User Experience
- Semantic HTML structure
- Clear focus states on form inputs
- Error messages with descriptive text
- High contrast text and backgrounds
- Keyboard navigation support (ESC to close modal)

### Form UX
- Required field indicators (*)
- Real-time validation feedback
- Scroll to first error on submit

---

## Social Media Integration

### Simple and Effective
- Facebook and Instagram logo links
- Hover effects on social icons
- Centered layout for visual balance
- Easy to expand with more platforms

---

## Footer Design

### Clean and Professional
- Dark background matching hero section
- Copyright information
- Centered text alignment
- Adequate padding for breathing room

**Copyright:** © 2026 Divino Caffe' by Giulia Ferraro

---

## Challenges Overcome

### 1. Form Validation
- Implementing real-time validation without libraries
- Handling different input types with specific rules
- Creating smooth error state transitions

### 2. 3D Flip Cards
- Managing z-index for proper layering
- Ensuring smooth backface visibility
- Making cards responsive across devices

---

## Lessons Learned

### Technical Skills
- Advanced CSS animations and transforms
- Form validation best practices
- Responsive design patterns
- JavaScript event handling

### Design Principles
- User-centered design approach
- Importance of visual feedback
- Mobile-first thinking
- Consistency in styling

---

## Project Statistics

### Code Breakdown
- **HTML:** ~200 lines
- **CSS:** ~400+ lines
- **JavaScript:** ~100+ lines

### Features Implemented
- 6 main sections
- 1 booking form with 8 fields
- 6 interactive menu cards
- 1 embedded map
- Custom animations
- Full responsive design

---

## Demo Highlights

### Key Interactions to Test
1. Hover over menu cards (flip animation)
2. Submit booking form with invalid data
3. Submit valid booking (see success modal)
4. Resize browser window (responsive layout)
5. Navigate using menu links
6. Observe animated title and buttons
7. Click social media icons
