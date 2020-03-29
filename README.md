This free is mobile ready menu for restaurants

### Getting Started
1. Modify public/config.js
2. Build the app (`npm run serve`)


### Starting in development mode
`npm run serve`

### Shopping cart (optional)
In order to enable ordering feature 3 steps should be done:
1. Prepare backend script which is capable of sending emails (see Mail Sending Backend)
2. Set URL of the backend in the property "mailServerUrl" in config.js
3. Set property "orderingEnabled" to "true" in config.js

### Mail Sending Backend
see sample backend script email_sender_sample.php

### Features
- Dishes & categories
- Pictures
- Business lunch (only visible in configured time)
- Shopping cart & making an order (only sample backend)
- Configurable auto-disabling of ordering out-of-working time
- Allergenes and Additives (required by German laws)


### Features (under development)
- Search
- Picture Gallery