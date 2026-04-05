const fs = require('fs');
const path = require('path');

const traverse = (dir) => {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverse(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;
            
            // Currency (Be careful not to replace template literal ${var})
            content = content.replace(/\$([0-9.]+)/g, '₹$1');
            content = content.replace(/\$\{([a-zA-Z]+)\}/g, '__TEMP_VAR_$1__'); // Temp hide valid template vars with word only
            content = content.replace(/\$\{([^}]+)\}/g, '__TEMP_VAR_COMPLEX_$1__'); // For expressions
            // Now safe to replace standalone $ signs if any left out that are just currency formats like `$`
            content = content.replace(/\$/g, '₹');
            // Put template vars back
            content = content.replace(/__TEMP_VAR_([a-zA-Z]+)__/g, '${$1}');
            content = content.replace(/__TEMP_VAR_COMPLEX_([^\}]+)__/g, '${$1}');

            // Wording Changes
            content = content.replace(/Protocol Telemetry/gi, "Store Overview");
            content = content.replace(/Manifestations/gi, "Products");
            content = content.replace(/Manifestation/gi, "Product");
            content = content.replace(/Digital Heritage Atelier/gi, "Custom Print Shop");
            content = content.replace(/Custodians/gi, "Customers");
            content = content.replace(/Guest Custodian/gi, "Guest User");
            content = content.replace(/Atelier Profile/gi, "My Account");
            content = content.replace(/Atelier/gi, "Store");
            content = content.replace(/digital heirlooms/gi, "custom orders");
            content = content.replace(/Telemetry Graph Initializing/gi, "Loading data");
            content = content.replace(/Identity Protocol/gi, "User Auth");
            content = content.replace(/Kinetic Registry/gi, "Database");
            content = content.replace(/Asset Cloud/gi, "Cloud Storage");
            content = content.replace(/Craft Registry/gi, "Orders");
            content = content.replace(/Pending Crafts/gi, "Pending Orders");
            content = content.replace(/Product Atelier/gi, "Products");
            content = content.replace(/Promotions/gi, "Discounts");
            content = content.replace(/Promotion Protocols/gi, "Discounts");
            content = content.replace(/Contact Identity/gi, "Contact Info");
            content = content.replace(/Email Protocol/gi, "Email Address");
            content = content.replace(/Signature Phone/gi, "Phone Number");
            content = content.replace(/Acquisition Point/gi, "Shipping Details");
            content = content.replace(/Artifact Receipt Address/gi, "Street Address");
            content = content.replace(/Signature Registry/gi, "Payment Details");
            content = content.replace(/Authorize Acquisition/gi, "Place Order");
            content = content.replace(/Artifact Telemetry/gi, "Order Summary");
            content = content.replace(/Deactivate Protocol/gi, "Logout");
            content = content.replace(/Identify Protocol Level 1/gi, "Standard Account");
            content = content.replace(/Transit Protocol/gi, "Shipping Method");
            content = content.replace(/Postal Protocol/gi, "Postal Code");
            content = content.replace(/Telepathic cart empty/gi, "Your cart is empty");
            content = content.replace(/Return to Gallery/gi, "Return to Shop");
            content = content.replace(/Insured Transit/gi, "Shipping");
            content = content.replace(/Artisan Processing/gi, "Processing");
            content = content.replace(/Total Investment/gi, "Total sum");
            content = content.replace(/Code Signature/gi, "Coupon Code");
            content = content.replace(/Value Node/gi, "Discount Value");
            content = content.replace(/Telemetry \(Uses\)/gi, "Total Uses");

            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content);
                console.log(`Updated: ${fullPath}`);
            }
        }
    });
};

traverse(path.join(__dirname, 'src'));
