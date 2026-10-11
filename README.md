# Edilight Events and Bakes

A fully functional bakery and event planning website built with HTML, CSS, and JavaScript. No login required - customers can browse the menu and place orders directly.

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Product Menu**: Browse the full cakes, pastries, cookies, and cupcakes catalogue with category filtering
- **Home Featured Products**: Home displays a limited featured selection while the Menu page contains the full catalogue
- **Order System**: Place orders directly through the website with a simple form
- **Contact Form**: Get in touch for custom orders and event planning
- **Gallery**: Showcase of wedding cakes, birthday cakes, and custom creations
- **Testimonials**: Customer reviews and feedback
- **Newsletter Subscription**: Stay updated with special offers

## Pages/Sections

1. **Home**: Hero section with call-to-action buttons
2. **Menu**: Product catalog with category filters (Cakes, Pastries, Cookies, Cupcakes)
3. **About**: Company story and features
4. **Gallery**: Visual showcase of products and events
5. **Contact**: Contact information and inquiry form

## How to Use

1. Open `index.html` in a web browser
2. Browse the menu sections using category filters
3. Click "Order Now" on any product to place an order
4. Fill out the order form with your details
5. Submit and receive confirmation

## File Structure

```
edilight-events-and-bakes/
├── index.html      # Main HTML file
├── styles.css      # All CSS styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Technologies Used

- HTML5
- CSS3 (with CSS Variables, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Playfair Display, Poppins)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Customization

### Adding Products
Edit the `products` array in `script.js` to add or modify products:

```javascript
{
    id: 17,
    name: "Product Name",
    category: "cakes", // cakes, pastries, cookies, cupcakes
    price: 49.99,
    description: "Product description",
    icon: "fa-icon-name", // Font Awesome icon
    gradient: "linear-gradient(135deg, #color1, #color2)"
}
```

### Changing Colors
Modify CSS variables in `styles.css`:

```css
:root {
    --primary-color: #e8834a;
    --secondary-color: #d4a574;
    --accent-color: #f5e6d0;
    /* ... */
}
```

## License

This project is open source and available for personal and commercial use.

## WhatsApp Order / Payment Redirect
The order form now redirects customers to WhatsApp with a pre-filled custom message containing their order details.

To change the WhatsApp destination number or greeting, edit these two values near the top of `script.js`:
- `WHATSAPP_NUMBER` — use international format without `+` or spaces.
- `WHATSAPP_GREETING` — the custom opening message.

The WhatsApp redirect is an order/payment-contact method; actual payment is completed according to the payment instructions provided through WhatsApp.
