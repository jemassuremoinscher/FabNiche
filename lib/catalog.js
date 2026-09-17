// Catalogue FabNiche.
// Trois départements en ligne. Le reste de l'ancien catalogue est conservé dans `archived`
// (rien n'est perdu) mais n'apparaît pas sur le site.
// price: null = prix absent de la source Drive, à renseigner avant mise en vente. Devise AED.

const P = (name, slug, category, sub, price = null) => ({ name, slug, category, sub, price });

export const products = [
  // ============ PETS ============
  P('Pet Hair Brush', 'pet-hair-brush', 'pets', 'Grooming'),
  P('Pet Grooming Brush', 'pet-grooming-brush', 'pets', 'Grooming'),
  P('All-steel Pet Nail Clippers', 'all-steel-pet-nail-clippers', 'pets', 'Grooming'),
  P('Pet Protection Collar', 'pet-protection-collar', 'pets', 'Grooming'),
  P('Pet Hair Removal Brush', 'pet-hair-removal-brush', 'pets', 'Grooming'),
  P('Easy Pet Cleaning Bath Brush', 'easy-pet-cleaning-bath-brush', 'pets', 'Grooming'),
  P('Pet Silicone Finger Toothbrush', 'pet-silicone-finger-toothbrush', 'pets', 'Grooming'),

  P('Elevated Dog Bowl', 'elevated-dog-bowl', 'pets', 'Feeding'),
  P('Adjustable Elevated Dog Bowl', 'adjustable-elevated-dog-bowl', 'pets', 'Feeding'),
  P('Double Bowl Automatic Drinking Station', 'double-bowl-automatic-drinking', 'pets', 'Feeding'),
  P('Automatic Pet Feeder With Camera', 'automatic-pet-feeder-with-camera', 'pets', 'Feeding'),
  P('Automatic WiFi Pet Feeder', 'pet-automatic-feeder-wifi', 'pets', 'Feeding'),
  P('Dog Press Food Dispenser', 'dog-press-food-dispenser', 'pets', 'Feeding'),
  P('Portable Outdoor Drinking Cup', 'portable-outdoor-drinking-cup-for-pets', 'pets', 'Feeding'),
  P('Outdoor Dog Water Fountain', 'outdoor-dog-pet-water-fountain', 'pets', 'Feeding'),
  P('Waterproof Pet Feeding Mat', 'waterproof-pet-mat', 'pets', 'Feeding'),

  P('Retractable Dog Leash', 'automatic-retractable-dog-leash', 'pets', 'Walking'),
  P('Rhinestone Dog Collar', 'bling-rhinestone-dog-collar', 'pets', 'Walking'),
  P('Pet Bow-knot Collar', 'pet-bow-knot-collar', 'pets', 'Walking'),
  P('Inflatable Dog Protection Collar', 'inflatable-dog-protection-collar', 'pets', 'Walking'),
  P('Pet Leash With Water Bottle', 'pet-leash-with-water-bottle', 'pets', 'Walking'),
  P('GoPro Dog Strap Harness', 'gopro-dog-strap-harness', 'pets', 'Walking'),

  P('Smart Bark Stopper', 'smart-bark-stopper', 'pets', 'Training'),
  P('Dog Training Collar', 'dog-training-collar', 'pets', 'Training'),
  P('Two-in-one Pet Clicker', 'two-in-one-pet-clicker', 'pets', 'Training'),
  P('LED Remote Control Cat Stick', 'led-laser-cat-stick', 'pets', 'Training'),
  P('Sniffing Pad Puzzle Toy', 'sniffing-pad-puzzle-toy', 'pets', 'Training'),

  P('Cat House', 'cat-house', 'pets', 'Rest & comfort'),
  P('Cat Scratch Board', 'cat-scratch-board', 'pets', 'Rest & comfort'),
  P('Pet Anxiety Sleep Companion', 'pet-anxiety-sleep-companion', 'pets', 'Rest & comfort'),
  P('Corner Rubbing Massager', 'corner-rubbing-massager', 'pets', 'Rest & comfort'),
  P('Dog Soccer Ball With Straps', 'dog-soccer-ball-with-straps', 'pets', 'Rest & comfort'),
  P('Pet Christmas Woolen Hat', 'pet-christmas-woolen-hat', 'pets', 'Rest & comfort'),

  P('Dog Car Seat Cover', 'dog-car-seat-cover', 'pets', 'Travel'),
  P('Pet Car Mat', 'pet-car-mat', 'pets', 'Travel'),
  P('Car Pet Fence', 'car-pet-fence', 'pets', 'Travel'),

  P('Lint Roller Hair Remover Ball', 'lint-roller-hair-remover-ball', 'pets', 'Clean-up'),
  P('Household Clothing Lint Remover', 'household-clothing-lint-remover', 'pets', 'Clean-up'),
  P('Intelligent Robot Vacuum', 'intelligent-robot-vacuum', 'pets', 'Clean-up'),
  P('Pet Deodorant Air Purifier', 'pet-deodorant-air-purifier', 'pets', 'Clean-up'),
  P('Pet Photography Tool', 'pet-photography-tool', 'pets', 'Clean-up'),

  // ============ FITNESS ============
  P('Intelligent Dumbbell Machine', 'intelligent-dumbbell-machine', 'fitness', 'Strength'),
  P('Electroplating Dumbbell', 'electroplating-dumbbell', 'fitness', 'Strength'),
  P('Water Weight Bearing Dumbbell', 'water-weight-bearing-dumbbell', 'fitness', 'Strength'),
  P('Grip Power Forearm Trainer', 'grip-power-forearm-trainer', 'fitness', 'Strength'),
  P('Fitness Push-up Bar', 'fitness-push-up-bar', 'fitness', 'Strength'),
  P('Push-up Board Bracket', 'push-up-board-bracket', 'fitness', 'Strength'),

  P('Double Wheel Abdominal Exerciser', 'double-wheel-abdominal-exerciser', 'fitness', 'Core'),
  P('Multi Function Abdominal Wheel', 'multi-function-abdominal-wheel', 'fitness', 'Core'),
  P('Body Shape Stick', 'body-shape-stick', 'fitness', 'Core'),

  P('Flame Tiger Boxing Gloves', 'flame-tiger-boxing-gloves', 'fitness', 'Boxing'),
  P('Inflatable Punching Bag', 'inflatable-punching-bag', 'fitness', 'Boxing'),

  P('Cervical EMS Pulse Massager', 'cervical-ems-pulse-massager', 'fitness', 'Recovery'),
  P('Digital Physiotherapy Machine', 'digital-physiotherapy-machine', 'fitness', 'Recovery'),
  P('EMS Abs & Muscle Trainer', 'ems-abs-muscle-trainer', 'fitness', 'Recovery'),
  P('EMS Hip Muscle Trainer', 'ems-hip-muscle-trainer', 'fitness', 'Recovery'),
  P('EMS Neck Lymphvity Massager', 'ems-neck-lymphvity-massager', 'fitness', 'Recovery'),

  P('Automatic Shaker Mixer', 'automatic-shaker-mixer', 'fitness', 'On the go'),
  P('500ML Silicone Foldable Bottle', 'silicone-foldable-bottle', 'fitness', 'On the go'),

  // ============ HOME ============
  P('Digital Smart Faucet', 'digital-smart-faucet', 'home', 'Kitchen'),
  P('Multifunction Vegetable Cutter', 'multifunction-vegetable-cutter', 'home', 'Kitchen'),
  P('Manual Noodle Cutter', 'manual-noodle-cutter', 'home', 'Kitchen'),
  P('Mini Home Sandwich Maker', 'mini-home-sandwich-maker', 'home', 'Kitchen'),
  P('Mini Home Baking Scale', 'mini-home-baking-scale', 'home', 'Kitchen'),
  P('Electric Can Opener', 'electric-can-opener', 'home', 'Kitchen', 52),
  P('Multi-purpose Can Opener', 'multi-purpose-can-opener', 'home', 'Kitchen'),
  P('Champagne Gun', 'champagne-gun', 'home', 'Kitchen'),
  P('Automatic Stirring Mug', 'automatic-stirring-mug', 'home', 'Kitchen'),
  P('Anti-splash Silicone Lid', 'anti-splash-silicone-lid', 'home', 'Kitchen'),
  P('Octopus Sink Drain', 'octopus-sink-drain', 'home', 'Kitchen'),
  P('Refrigerator Clapboard Storage', 'refrigerator-clapboard-storage', 'home', 'Kitchen'),
  P('Faucet Cleaning Brush', 'faucet-cleaning-brush', 'home', 'Kitchen', 22),
  P('Kitchen Pot Brush Set', 'kitchen-pot-brush-set', 'home', 'Kitchen'),

  P('Wall Mounted Toothbrush Holder', 'wall-mounted-toothbrush-holder', 'home', 'Bathroom'),
  P('Spray Hair Dryer Shower Head', 'spray-hair-dryer-shower-head', 'home', 'Bathroom'),
  P('Home Bath Mat', 'home-bath-mat', 'home', 'Bathroom'),
  P('Household Hook', 'household-hook', 'home', 'Bathroom'),
  P('Green Tea Sleep Facial Mask', 'green-tea-sleep-facial-mask', 'home', 'Bathroom'),
  P('Cleansing Skin Adsorption Patches', 'cleansing-skin-patches', 'home', 'Bathroom'),

  P('Long-Handled Cleaning Brush', 'long-handled-cleaning-brush', 'home', 'Everyday'),
  P('All-inclusive Dust-proof Sheet', 'dust-proof-sheet', 'home', 'Everyday'),
  P('Wireless Bluetooth Alarm Clock', 'wireless-bluetooth-alarm-clock', 'home', 'Everyday'),
  P('Block Door Stopper', 'block-door-stopper', 'home', 'Everyday'),
  P('Luminous Anti-collision Silicone', 'luminous-anti-collision-silicone', 'home', 'Everyday'),
  P('Cable Buckle Sticker', 'cable-buckle-sticker', 'home', 'Everyday'),
  P('European Standard Conversion Plug', 'european-conversion-plug', 'home', 'Everyday'),

  P('Ceramic Vase', 'ceramic-vase', 'home', 'Living'),
  P('Smart Planter Pot', 'smart-planter-pot', 'home', 'Living'),
  P('USB Simulation Aroma Diffuser', 'usb-aroma-diffuser', 'home', 'Living'),
  P('Robot Shaped Lamp', 'robot-shaped-lamp', 'home', 'Living'),
  P('Elephant Painting', 'elephant-painting', 'home', 'Living'),
];

// Produits de l'ancien catalogue retirés du site (automobile, électronique, jouets,
// saisonnier, bureau, voyage, jardin). Conservés ici pour ne rien perdre.
export const archived = [
  'Wireless CarPlay Display', 'Vehicle Garbage Can', 'Car Phone Holder', 'Multi Function Car Console',
  'Full Touch Screen All-in-one', 'Mobile Insulated Carport Shade', 'Car Wrap Carbon Fiber Vinyl',
  'Carbon Fiber Door Stickers', 'Automobile LED Working Lights', 'Aluminium Alloy Valve Caps',
  'PDR Large Suction Cup Puller', 'Spaceman Keychain', 'Heart-shaped Keychain',
  'Boxing Gloves Keychain Pendant', 'Motorcycle Cover', 'Motorcycle Retractable Phone Holder',
  'Bicycle Headlights', 'Mountain Bike Spoke Lights', 'Double-sided Carwash Towel',
  'Car Headlight Repair Kit', 'Car Portable Vacuum Cleaner',
  'Plasma Lightning Ball', 'LED USB Magnetic Wood Night Light', 'LED Ring Light Selfie',
  'Portable Studio Set', 'Waterproof Bluetooth Speaker', 'Touch-sensitive Music Vase',
  'AI Interactive Audio Clock', 'Home Wireless Theater', 'Bluetooth Selfie Stick Tripod',
  'Small Portable USB Fan', '360 Auto Face Tracking Tripod', '3 in 1 Wireless Charger',
  'Adhesive Phone Charging Stand', 'Electric Nose Hair Trimmer', 'Video Game Player X7',
  'Virtual Pet Game Machine', 'Mini Retro Arcade Joystick',
  'Baby Spoon Bottle Feeder', 'Baby Cutlery Set', 'Anti-Fall Toddler Belt', "Children's Swing",
  'Baby Knitted Quilt', 'Portable Waterproof Changing Mat', 'Funny Baby Pacifier',
  'Pacifier Digital Thermometer', 'Husky Doll', 'Fox Long Leg-supporting Doll',
  'Pillow Doll Cushion', 'Plush Toy Girl Pillow Doll', 'Avocado Plush Toy',
  'Playstation Acrylic Dust Cover', 'Type-C Audio Adapter', 'Airplane Toys For Kids',
  'Solar Ant Electronic Pet Toy', 'Folding Camping Tableware Set', 'Cotton Hammock',
  'LED Strong Light Magnetic Lamp', 'Car Trunk Multi-function Tent', 'Rain Fly Camping Pavilion',
  'Kids Space Rocket Sprinkler', 'Magic UFO Floating Toy', 'AC Cobra Car Model',
  'F1 Team Car Model 1:43', 'Alloy Toy Model Car', 'Classic Model Car', 'Toy Car Display Box',
  'Wedding & Party Decoration Supplies',
  'Anti-Blue Light Retro Glasses', 'Ultra-light Blue Light Glasses',
  'Anti Blue Light Glasses for Children', 'Intelligent AI Translator', 'Xiaomi Voice Translator',
  '3D Mini Dancing Skull', 'Phone Disassembly Repair Tool', '3-in-1 Nightstand Speaker Charger',
  'Travel Bag', "Men's Multi-function Backpack", 'Water Gun Garden 8 Functions',
  'Easter Island Garden Decoration', 'Solar Garden Light', 'Telescopic Latex Water Hose',
  'Baby Nose Clip with Light', 'Halloween range (18 products)',
];

export const categories = [
  { slug: 'pets', name: 'Pets', lede: 'Feeding, grooming, walking and training kit for dogs and cats.', tone: '#1F4A5C' },
  { slug: 'fitness', name: 'Fitness', lede: 'Train at home and recover properly, without a gym membership.', tone: '#2C4636' },
  { slug: 'home', name: 'Home', lede: 'Kitchen, bathroom and everyday things that earn their place.', tone: '#4A3A2E' },
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
