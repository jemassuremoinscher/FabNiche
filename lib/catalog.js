// Catalogue FabNiche — extrait de la feuille Google Drive "FabNiche" (onglet Content).
// price: null = prix non renseigné dans la source. À compléter avant mise en vente.
// Devise : AED.

const P = (name, slug, category, sub, price = null) => ({ name, slug, category, sub, price });

export const products = [
  // ---------- HOME & LIVING ----------
  P('Multifunction Vegetable Cutter', 'multifunctional-vegetable-cutting-tool', 'home-living', 'Kitchen'),
  P('Mini Home Baking Scale', 'mini-home-baking-scale', 'home-living', 'Kitchen'),
  P('Champagne Gun', 'champagne-gun', 'home-living', 'Kitchen'),
  P('Octopus Sink Drain', 'octopus-sink-drain', 'home-living', 'Kitchen'),
  P('Anti-splash Silicone Lid', 'anti-splash-oil-silicone-anti-overflow-lid', 'home-living', 'Kitchen'),
  P('Refrigerator Clapboard Storage', 'plastic-refrigerator-clapboard-storage', 'home-living', 'Kitchen'),
  P('Digital Smart Faucet', 'intelligent-digital-display-faucet', 'home-living', 'Kitchen'),
  P('Mini Home Sandwich Maker', 'mini-home-nut-sandwich-maker-baking-machine', 'home-living', 'Kitchen'),
  P('Manual Noodle Cutter', 'manual-noodle-cutter', 'home-living', 'Kitchen'),
  P('Multi-purpose Can Opener', 'multi-purpose-can-opener', 'home-living', 'Kitchen'),
  P('Luminous Anti-collision Silicone', 'luminous-anti-collision-angle-silicone', 'home-living', 'Kitchen'),
  P('Electric Can Opener', 'electric-can-opener', 'home-living', 'Kitchen', 52),
  P('Faucet Cleaning Brush', 'faucet-cleaning-brush', 'home-living', 'Kitchen', 22),
  P('Kitchen Pot Brush Set', 'kitchen-pot-brush-set', 'home-living', 'Office'),
  P('3-in-1 Nightstand / Speaker / Charger', 'three-in-one-night-stand-bluetooth-speaker-wireless-charging-station', 'home-living', 'Office'),
  P('Cable Buckle Sticker', 'cable-buckle-sticker', 'home-living', 'Office'),
  P('Robot Shaped Lamp', 'robot-shaped-lamp', 'home-living', 'Office'),
  P('Anti-Blue Light Retro Glasses', 'anti-blue-light-retro-glasses', 'home-living', 'Office'),
  P('Ultra-light Blue Light Glasses', 'ultra-light-blue-light-glasses', 'home-living', 'Office'),
  P('Anti Blue Light Glasses for Children', 'anti-blue-light-glasses-for-children', 'home-living', 'Office'),
  P('Intelligent AI Translator', 'intelligent-ai-translator', 'home-living', 'Office'),
  P('Xiaomi Voice Translator', 'xiaomi-ai-translator', 'home-living', 'Office'),
  P('Block Door Stopper', 'block-door-stopper', 'home-living', 'Office'),
  P('European Standard Conversion Plug', 'european-standard-conversion-plug', 'home-living', 'Office'),
  P('3D Mini Dancing Skull', '3d-mini-dancing-skull', 'home-living', 'Office', 49),
  P('Phone Disassembly Repair Tool', 'mobile-phone-disassembly-repair-tool', 'home-living', 'Office', 39),
  P('Home Bath Mat', 'home-bath-mat', 'home-living', 'Bathroom'),
  P('Baby Nose Clip with Light', 'baby-nose-clip-with-light-baby-nose', 'home-living', 'Bathroom'),
  P('Spray Hair Dryer Shower Head', 'spray-hair-dryer-shower-head', 'home-living', 'Bathroom'),
  P('Wall Mounted Toothbrush Holder', 'wall-mounted-toothbrush-holder', 'home-living', 'Bathroom'),
  P('Cleansing Skin Adsorption Patches', 'cleansing-skin-adsorption-patches', 'home-living', 'Bathroom'),
  P('Green Tea Sleep Facial Mask', 'green-tea-sleep-facial-mask', 'home-living', 'Bathroom'),
  P('Household Hook', 'household-hook', 'home-living', 'Bathroom'),
  P('500ML Silicone Foldable Water Bottle', '500ml-silicone-foldable-water-bottle', 'home-living', 'Travel'),
  P('Automatic Stirring Mug', 'automatic-stirring-mug', 'home-living', 'Travel'),
  P('Travel Bag', 'travel-bag', 'home-living', 'Travel'),
  P("Men's Multi-function Backpack", 'backpack-mens-multi-function', 'home-living', 'Travel'),
  P('Ceramic Vase', 'ceramic-vase', 'home-living', 'Decoration'),
  P('Elephant Painting', 'elephant-painting', 'home-living', 'Decoration'),
  P('Smart Planter Pot', 'smart-planter-pot', 'home-living', 'Decoration'),
  P('USB Simulation Aroma Diffuser', 'usb-simulation-aroma-diffuser', 'home-living', 'Decoration'),
  P('Long-Handled Cleaning Brush', 'household-long-handled-screen-window-cleaning-brush', 'home-living', 'Household'),
  P('All-inclusive Dust-proof Sheet', 'all-inclusive-dust-proof', 'home-living', 'Household'),
  P('Wireless Bluetooth Alarm Clock', 'wireless-bluetooth-alarm-clock', 'home-living', 'Household'),
  P('Water Gun Garden 8 Functions', 'water-gun-garden-8-functions', 'home-living', 'Outdoor'),
  P('Easter Island Garden Decoration', 'easter-island-garden-decoration', 'home-living', 'Outdoor'),
  P('Solar Garden Light', 'solar-garden-light', 'home-living', 'Outdoor'),
  P('Telescopic Latex Water Hose', 'telescopic-water-hose-in-latex', 'home-living', 'Outdoor'),

  // ---------- FITNESS ----------
  P('Intelligent Dumbbell Fitness Machine', 'intelligent-sports-dumbbell-fitness-machine', 'fitness', 'Training'),
  P('Double Wheel Abdominal Exerciser', 'double-wheel-abdominal-exerciser', 'fitness', 'Training'),
  P('Multi Function Abdominal Wheel', 'multi-function-abdominal-wheel', 'fitness', 'Training'),
  P('Automatic Shaker Mixer', 'automatic-shaker-mixer', 'fitness', 'Accessories'),
  P('Water Weight Bearing Dumbbell', 'water-weight-bearing', 'fitness', 'Training'),
  P('Grip Power Wrist Forearm Trainer', 'grip-power-wrist-forearm', 'fitness', 'Training'),
  P('Inflatable Punching Bag', 'inflatable-punching-bag', 'fitness', 'Combat'),
  P('Electroplating Dumbbell', 'electroplating-dumbbell', 'fitness', 'Training'),
  P('Fitness Push-up Bar', 'fitness-push-up-bar', 'fitness', 'Training'),
  P('Flame Tiger Boxing Gloves', 'flame-tiger-boxing-gloves', 'fitness', 'Combat'),
  P('Push-up Board Bracket', 'push-up-board-bracket', 'fitness', 'Training'),
  P('EMS Hip Muscle Trainer', 'ems-hip-muscle-trainer', 'fitness', 'Recovery'),
  P('Cervical EMS Pulse Massager', 'cervical-ems-pulse-massager', 'fitness', 'Recovery'),
  P('Digital Physiotherapy Machine', 'digital-physiotherapy-machine', 'fitness', 'Recovery'),
  P('EMS Abs & Muscle Trainer', 'ems-abs-muscle-trainer', 'fitness', 'Recovery'),
  P('Body Shape Stick', 'body-shape-stick', 'fitness', 'Training'),

  // ---------- ELECTRONICS ----------
  P('Plasma Lightning Ball', 'plasma-lightning-ball', 'electronics', 'Lighting'),
  P('LED USB Magnetic Wood Night Light', 'auto-led-usb-magnetic-wood-wireless-night-light', 'electronics', 'Lighting'),
  P('LED Ring Light Selfie', 'led-ring-light-selfie-lamp', 'electronics', 'Photo'),
  P('Portable Studio Set', 'portable-studio-set', 'electronics', 'Photo'),
  P('Waterproof Bluetooth Speaker', 'waterproof-bluetooth-audio', 'electronics', 'Audio'),
  P('Touch-sensitive Music Vase', 'touch-sensitive-music-vase', 'electronics', 'Audio'),
  P('AI Interactive Audio Clock', 'ai-interactive-audio-clock', 'electronics', 'Audio'),
  P('Home Wireless Theater', 'home-wireless-theater', 'electronics', 'Audio'),
  P('Bluetooth Selfie Stick Tripod', 'bluetooth-fill-light-selfie-stick', 'electronics', 'Accessories'),
  P('Small Portable USB Fan', 'small-portable-usb-fan', 'electronics', 'Accessories'),
  P('360 Auto Face Tracking Tripod', '360-auto-face-tracking-tripod', 'electronics', 'Accessories'),
  P('3 in 1 Wireless Charger', '3-in-1-wireless-charger', 'electronics', 'Accessories'),
  P('EMS Neck Lymphvity Massager', 'ems-neck-acupoints-lymphvity-massager', 'electronics', 'Accessories'),
  P('Adhesive Phone Charging Stand', 'adhesive-mobile-phone-charging-stand', 'electronics', 'Accessories'),
  P('Electric Nose Hair Trimmer', 'electric-nose-hair-trimmer', 'electronics', 'Accessories', 29),
  P('Video Game Player X7', 'video-game-player-x7', 'electronics', 'Gaming'),
  P('Virtual Pet Game Machine', 'tamagochi', 'electronics', 'Gaming'),
  P('Mini Retro Arcade Joystick', 'mini-retro-arcade-joystick-games', 'electronics', 'Gaming'),

  // ---------- AUTOMOTIVE ----------
  P('Wireless CarPlay Display', 'wireless-carplay-display', 'automotive', 'Interior'),
  P('Vehicle Garbage Can', 'vehicle-garbage-can', 'automotive', 'Interior'),
  P('Car Phone Holder', 'car-phone-holder', 'automotive', 'Interior'),
  P('Multi Function Car Console', 'multi-function-car-center-console', 'automotive', 'Interior'),
  P('Full Touch Screen All-in-one', 'full-touch-screen-all-in-one', 'automotive', 'Interior'),
  P('Mobile Insulated Carport Shade', 'mobile-insulated-carport-shade', 'automotive', 'Exterior'),
  P('Car Wrap Carbon Fiber Vinyl', 'car-wrap-carbon-fiber-vinyl', 'automotive', 'Exterior'),
  P('Carbon Fiber Door Stickers (4pcs)', '4pcs-set-of-door-stickers-carbon-fiber', 'automotive', 'Exterior'),
  P('Automobile LED Working Lights', 'automobile-led-working-lights', 'automotive', 'Exterior'),
  P('Aluminium Alloy Valve Caps', 'car-tire-aluminum-alloy-color-valve', 'automotive', 'Exterior'),
  P('PDR Large Suction Cup Puller', 'powerful-large-suction-cup', 'automotive', 'Exterior', 69),
  P('Spaceman Keychain', 'spaceman-keychain', 'automotive', 'Keychains'),
  P('Heart-shaped Keychain', 'heart-shaped-keychain', 'automotive', 'Keychains'),
  P('Boxing Gloves Keychain Pendant', 'boxing-gloves-metal-keychain-pendant', 'automotive', 'Keychains'),
  P('Motorcycle Cover', 'motorcycle-cover', 'automotive', 'Motorcycles'),
  P('Motorcycle Retractable Phone Holder', 'motorcycle-retractable-mobile-phone-holder', 'automotive', 'Motorcycles'),
  P('Bicycle Headlights', 'bicycle-headlights', 'automotive', 'Motorcycles'),
  P('Mountain Bike Spoke Lights', 'mountain-bike-spoke-lights', 'automotive', 'Motorcycles'),
  P('Double-sided Carwash Towel', 'two-color-double-sided-car-wash-towel', 'automotive', 'Car Care'),
  P('Car Pet Fence', 'car-pet-fence', 'automotive', 'Car Care'),
  P('Car Headlight Repair Kit', 'car-headlight-repair-kit', 'automotive', 'Car Care'),
  P('Car Portable Vacuum Cleaner', 'car-portable-vacuum-cleaner', 'automotive', 'Car Care'),

  // ---------- PET SUPPLIES ----------
  P('Pet Hair Brush', 'pet-hair-brush', 'pet-supplies', 'Grooming'),
  P('Pet Grooming Brush', 'pet-grooming-brush-loose-puppy-hair-cleaning', 'pet-supplies', 'Grooming'),
  P('All-steel Pet Nail Clippers', 'all-steel-pet-nail-clippers', 'pet-supplies', 'Grooming'),
  P('Pet Protection Collar', 'pet-protection-collar', 'pet-supplies', 'Grooming'),
  P('Pet Hair Removal Brush', 'pet-groomer-pet-hair-removal-brush', 'pet-supplies', 'Grooming'),
  P('LED Remote Control Cat Stick', 'funny-remote-control-led-laser-cat-stick-pet-toy', 'pet-supplies', 'Training'),
  P('Two-in-one Pet Clicker', 'two-in-one-clicker-pet', 'pet-supplies', 'Training'),
  P('Smart Bark Stopper', 'smart-bark-stopper', 'pet-supplies', 'Training'),
  P('Dog Training Collar', 'dog-training-collar', 'pet-supplies', 'Training'),
  P('Sniffing Pad Puzzle Toy', 'sniffing-pad-bite-resistant-puzzle-pet-toy', 'pet-supplies', 'Furniture'),
  P('Pet Car Mat', 'pet-car-mat', 'pet-supplies', 'Furniture'),
  P('Cat Scratch Board', 'cat-scratch-board', 'pet-supplies', 'Toys'),
  P('Pet Leash With Water Bottle', 'pet-supplies-with-water-bottle-cup-pet-rope', 'pet-supplies', 'Toys'),
  P('Dog Soccer Ball With Straps', 'dog-soccer-balls-toy-with-straps', 'pet-supplies', 'Toys'),
  P('Pet Christmas Woolen Hat', 'pet-christmas-woolen-hat', 'pet-supplies', 'Toys'),
  P('Pet Anxiety Sleep Companion', 'pet-anxiety-sleep-companion', 'pet-supplies', 'Toys'),
  P('Retractable Dog Leash', 'automatic-retractable-dog-leash', 'pet-supplies', 'Collars & Leashes'),
  P('Rhinestone Dog Collar', 'bling-rhinestone-dog-collar', 'pet-supplies', 'Collars & Leashes'),
  P('Pet Bow-knot Collar', 'christmas-pet-bow-knot-collar', 'pet-supplies', 'Collars & Leashes'),
  P('Inflatable Dog Protection Collar', 'inflatable-dog-protection-collar', 'pet-supplies', 'Collars & Leashes'),
  P('Double Bowl Automatic Drinking', 'double-bowl-automatic-drinking-dog-pot-cat-bowl', 'pet-supplies', 'Bowls & Feeders'),
  P('Waterproof Pet Mat', 'waterproof-pet-mat', 'pet-supplies', 'Bowls & Feeders'),
  P('Portable Outdoor Drinking Cup', 'portable-outdoor-drinking-cup-for-pets', 'pet-supplies', 'Bowls & Feeders'),
  P('Automatic Pet Feeder With Camera', 'automatic-pet-feeder-with-camera', 'pet-supplies', 'Bowls & Feeders'),
  P('Automatic WiFi Pet Feeder', 'pet-automatic-feeder-wifi', 'pet-supplies', 'Bowls & Feeders'),
  P('Dog Press Food Dispenser', 'dog-press-food-dispenser', 'pet-supplies', 'Bowls & Feeders'),
  P('Elevated Dog Bowl', 'elevated-dog-bowl', 'pet-supplies', 'Bowls & Feeders'),
  P('Adjustable Elevated Dog Bowl', 'adjustable-elevated-dog-bowl', 'pet-supplies', 'Bowls & Feeders'),
  P('Cat House', 'cat-house', 'pet-supplies', 'Furniture'),
  P('Easy Pet Cleaning Bath Brush', 'easy-pet-cleaning-bath-brush', 'pet-supplies', 'Cleaning'),
  P('Pet Silicone Finger Toothbrush', 'pet-silicone-finger-toothbrush', 'pet-supplies', 'Cleaning'),
  P('Intelligent Robot Vacuum', 'robot-vacuum-intelligent', 'pet-supplies', 'Cleaning'),
  P('Outdoor Dog Water Fountain', 'outdoor-dog-pet-water-fountain', 'pet-supplies', 'Accessories'),
  P('GoPro Dog Strap Harness', 'gopro-dog-strap-belt-harness', 'pet-supplies', 'Accessories'),
  P('Dog Car Seat Cover', 'dog-car-seat-cover', 'pet-supplies', 'Accessories'),
  P('Pet Photography Tool', 'pet-photography-tool', 'pet-supplies', 'Accessories'),
  P('Pet Deodorant Air Purifier', 'pet-deodorant', 'pet-supplies', 'Accessories'),
  P('Lint Roller Hair Remover Ball', 'lint-roller-hair-remover-ball', 'pet-supplies', 'Accessories'),
  P('Corner Rubbing Massager for Pets', 'corner-rubbing-massager-for-pets', 'pet-supplies', 'Accessories'),
  P('Household Clothing Lint Remover', 'household-clothing-lint-remover', 'pet-supplies', 'Accessories'),

  // ---------- TOYS & KIDS ----------
  P('Baby Spoon Bottle Feeder', 'baby-spoon-bottle-feeder', 'toys-kids', 'Babies & Toddlers'),
  P('Baby Cutlery Set', 'baby-cutlery-set', 'toys-kids', 'Babies & Toddlers'),
  P('Anti-Fall Toddler Belt', 'anti-fall-toddler-belt', 'toys-kids', 'Babies & Toddlers'),
  P("Children's Swing", 'childrens-swing', 'toys-kids', 'Babies & Toddlers'),
  P('Baby Knitted Quilt', 'baby-knitted-quilt', 'toys-kids', 'Babies & Toddlers'),
  P('Portable Waterproof Changing Mat', 'portable-waterproof-baby-change-mat', 'toys-kids', 'Babies & Toddlers'),
  P('Funny Baby Pacifier', 'funny-baby-pacifier', 'toys-kids', 'Babies & Toddlers'),
  P('Pacifier Digital Thermometer', 'pacifier-digital-thermometer', 'toys-kids', 'Babies & Toddlers'),
  P('Husky Doll', 'dudu-simulation-cute-cat-doll-husky', 'toys-kids', 'Plush'),
  P('Fox Long Leg-supporting Doll', 'fox-long-leg-supporting-doll', 'toys-kids', 'Plush'),
  P('Pillow Doll Cushion', 'pillow-doll-cushion', 'toys-kids', 'Plush'),
  P('Plush Toy Girl Pillow Doll', 'plush-toy-girl-pillow-doll', 'toys-kids', 'Plush'),
  P('Avocado Plush Toy', 'avocado-plush-toy', 'toys-kids', 'Plush'),
  P('Playstation Acrylic Dust Cover', 'host-dust-cover-acrylic', 'toys-kids', 'Electronic Toys'),
  P('Type-C Audio Adapter', 'type-c-adapter', 'toys-kids', 'Electronic Toys'),
  P('Airplane Toys For Kids', 'airplane-toys-for-kids', 'toys-kids', 'Electronic Toys'),
  P('Solar Ant Electronic Pet Toy', 'solar-ant-baby-electronic-pet-toy', 'toys-kids', 'Electronic Toys'),
  P('Folding Camping Tableware Set', 'travel-picnic-tableware-folding-camping-set', 'toys-kids', 'Outdoor'),
  P('Cotton Hammock', 'cotton-hammock', 'toys-kids', 'Outdoor'),
  P('LED Strong Light Magnetic Lamp', 'led-strong-light-magnetic', 'toys-kids', 'Outdoor'),
  P('Car Trunk Multi-function Tent', 'multi-function-tent-for-outdoor-car-trunk', 'toys-kids', 'Outdoor'),
  P('Rain Fly Camping Pavilion', 'rain-fly-camping-pavillion', 'toys-kids', 'Outdoor'),
  P('Kids Space Rocket Sprinkler', 'kids-space-rocket-sprinkler', 'toys-kids', 'Outdoor'),
  P('Magic UFO Floating Toy', 'magic-ufo-semi-finished-toy', 'toys-kids', 'Outdoor'),
  P('AC Cobra Car Model', 'simulation-static-car-model-toy', 'toys-kids', 'Model Vehicles'),
  P('F1 Team Car Model 1:43', 'simulation-car-f1-team-1-43', 'toys-kids', 'Model Vehicles'),
  P('Alloy Toy Model Car', 'alloy-toy-model-car', 'toys-kids', 'Model Vehicles'),
  P('Classic Model Car', 'classic-model-car', 'toys-kids', 'Model Vehicles'),
  P('Toy Car Display Box', 'toy-car-box', 'toys-kids', 'Model Vehicles'),
  P('Wedding & Party Decoration Supplies', 'decoration-supplies-for-wedding-party', 'toys-kids', 'Party Supplies'),

  // ---------- SEASONAL ----------
  P('Halloween Pumpkin LED Lantern', 'halloween-pumpkin-lantern', 'seasonal', 'Halloween'),
  P('Halloween Glowing Ghost Skull', 'halloween-glowing-ghost-skull', 'seasonal', 'Halloween'),
  P('Halloween Yoga Skull Skeleton', 'halloween-yoga-skull-skeleton', 'seasonal', 'Halloween'),
  P('Halloween Pumpkin Ceramic Mug', 'halloween-pumpkin-ceramic-coffee-mug', 'seasonal', 'Halloween'),
  P('Halloween Outdoor Pumpkin Lantern', 'halloween-outdoor-pumpkin-lantern', 'seasonal', 'Halloween'),
  P('Halloween Hanging Ghost', 'halloween-hanging-ghost', 'seasonal', 'Halloween'),
  P('Halloween Ghost Ornaments', 'halloween-ghost-ornaments', 'seasonal', 'Halloween'),
  P('Halloween Pumpkin Bouncing Doll', 'halloween-pumpkin-head-bouncing-doll', 'seasonal', 'Halloween'),
  P('Floating LED Candles With Magic Wand', 'halloween-floating-led-candles', 'seasonal', 'Halloween'),
  P('Halloween Tricky Headband', 'halloween-tricky-item-headband', 'seasonal', 'Halloween'),
  P('Halloween Skull Fish-skeleton Hanger', 'halloween-skull-fish-skeleton-hanger', 'seasonal', 'Halloween'),
  P('Halloween Electric Pumpkin Lamp', 'halloween-electric-pumpkin-lamp', 'seasonal', 'Halloween'),
  P('Halloween Ghost Wall Decoration', 'halloween-ghost-hanging-decoration', 'seasonal', 'Halloween'),
  P('Halloween Pumpkin Slippers', 'halloween-pumpkin-cartoon-slippers', 'seasonal', 'Halloween'),
  P("Halloween Women's Ghost Pullover", 'halloween-womens-ghost-pullover', 'seasonal', 'Halloween'),
  P('Halloween Ghost Cartoon Slippers', 'halloween-home-ghost-cartoon-slippers', 'seasonal', 'Halloween'),
  P('Halloween Pet Costume', 'halloween-pet-costume', 'seasonal', 'Halloween'),
  P('Halloween Jumpsuit Pajamas', 'halloween-printed-jumpsuit-pajamas', 'seasonal', 'Halloween'),
];

export const categories = [
  { slug: 'home-living', name: 'Home & Living', tagline: 'Kitchen, bathroom, decor and everyday gear', accent: '#1B9CD9' },
  { slug: 'fitness', name: 'Fitness & Recovery', tagline: 'Train at home, recover faster', accent: '#0d8a52' },
  { slug: 'electronics', name: 'Electronics', tagline: 'Audio, lighting, photo and accessories', accent: '#5a4bd6' },
  { slug: 'automotive', name: 'Automotive', tagline: 'Interior, exterior, care and two-wheelers', accent: '#c1442e' },
  { slug: 'pet-supplies', name: 'Pet Supplies', tagline: 'Grooming, feeding, training and comfort', accent: '#d98a1b' },
  { slug: 'toys-kids', name: 'Toys & Kids', tagline: 'Babies, plush, outdoor and model vehicles', accent: '#c62a6d' },
  { slug: 'seasonal', name: 'Seasonal', tagline: 'Halloween and event ranges', accent: '#6b3fa0' },
];

export function getCategory(slug) {
  return categories.find((c) => c.slug === slug) || null;
}

export function productsByCategory(slug) {
  return products.filter((p) => p.category === slug);
}

export function subcategoriesOf(slug) {
  return [...new Set(productsByCategory(slug).map((p) => p.sub))];
}

export function countByCategory(slug) {
  return productsByCategory(slug).length;
}

export function searchProducts(q) {
  if (!q) return [];
  const needle = q.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(needle) ||
      p.sub.toLowerCase().includes(needle) ||
      p.category.includes(needle)
  );
}
