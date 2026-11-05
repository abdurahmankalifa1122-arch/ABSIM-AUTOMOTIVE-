/**
 * ABSIM AUTOMOTIVE - Official Data & Assets
 * Addis Ababa, Ethiopia
 * Tagline: "WORKING HARD, SERVING WELL"
 */

export interface BusinessPhoto {
  id: string;
  title: string;
  caption: string;
  equipmentModel?: string;
  origin?: string;
  localSrc: string;
  remoteFallback: string;
  alt: string;
}

const getAssetUrl = (fileName: string) => {
  const base = (import.meta as any).env?.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}images/${fileName}`;
};

export const ABSIM_BRAND = {
  name: 'ABSIM AUTOMOTIVE',
  tagline: 'WORKING HARD, SERVING WELL',
  taglineAmharic: 'በትጋት በመሥራት፣ በቅንነት እናገለግላለን',
  headline: 'Professional Automotive Care You Can Trust.',
  supportingText:
    'ABSIM AUTOMOTIVE provides professional automotive care and workshop services with attention to detail, quality equipment, and customer satisfaction.',
  location: {
    address: 'Behind AMCE, Megenagna',
    city: 'Addis Ababa',
    country: 'Ethiopia',
    full: 'Behind AMCE, Megenagna, Addis Ababa, Ethiopia',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Behind+AMCE+Megenagna+Addis+Ababa+Ethiopia',
  },
  contact: {
    phone: '+251 91 189 3490',
    phoneDisplay: '+251 91 189 3490',
    whatsappUrl: 'https://wa.me/251911893490?text=Hello%20ABSIM%20Automotive%2C%20I%20would%20like%20to%20inquire%20about%20your%20automotive%20services.',
  },
  images: {
    logo: {
      localSrc: getAssetUrl('logo.jpg'),
      remoteFallback: 'https://i.ibb.co/YFjZcJvv/87155f07-06f6-4461-abb6-a6d87fb80707.jpg',
      alt: 'ABSIM AUTOMOTIVE Logo - Working Hard, Serving Well',
    },
    entrance: {
      localSrc: getAssetUrl('entrance.jpg'),
      remoteFallback: 'https://i.ibb.co/C3MCvwJ2/0e7d9a98-d398-4e9a-9cd3-a2401a1f63c0.jpg',
      alt: 'ABSIM AUTOMOTIVE Location and Entrance in Megenagna, Addis Ababa',
    },
    tyreChanger: {
      localSrc: getAssetUrl('tyre-changer.jpg'),
      remoteFallback: 'https://i.ibb.co/ch0gdThY/e3a608c5-df25-479c-8d0f-70ad6b7991e8.jpg',
      alt: 'Twin Busch Germany TW X-98 Tyre Changing Machine at ABSIM AUTOMOTIVE',
    },
    wheelBalancer: {
      localSrc: getAssetUrl('wheel-balancer.jpg'),
      remoteFallback: 'https://i.ibb.co/6c911yXs/8ff85d21-d0c7-4733-9a10-b9b21d54bd36.jpg',
      alt: 'Twin Busch Germany TW F-150 Digital Wheel Balancing Machine at ABSIM AUTOMOTIVE',
    },
    wheelAlignment: {
      localSrc: getAssetUrl('wheel-alignment.jpg'),
      remoteFallback: 'https://i.ibb.co/7NyvsyNz/a2a07809-b0a5-4d35-8dc5-be7d38996192.jpg',
      alt: 'CORGHI Computerized 3D Wheel Alignment System at ABSIM AUTOMOTIVE',
    },
    inspectionPit: {
      localSrc: getAssetUrl('inspection-pit.jpg'),
      remoteFallback: 'https://i.ibb.co/vvJQMZyD/8f089e41-e8eb-4894-8010-e2073f891c51.jpg',
      alt: 'Vehicle Inspection Pit and Alignment Bay at ABSIM AUTOMOTIVE',
    },
    airCompressor: {
      localSrc: getAssetUrl('air-compressor.jpg'),
      remoteFallback: 'https://i.ibb.co/tM71HW7C/e5f638d3-0a3c-48d4-9d27-b63792d29df7.jpg',
      alt: 'ABAC 270 Hp 3 Heavy-Duty Air Compressor at ABSIM AUTOMOTIVE',
    },
  },
};

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  equipmentAssigned: string;
  equipmentPhoto: {
    localSrc: string;
    remoteFallback: string;
    alt: string;
  };
}

export const ABSIM_SERVICES: ServiceItem[] = [
  {
    id: 'tyre-changing',
    number: '01',
    title: 'Tyre Changing',
    shortDescription: 'Precision mounting and demounting engineered to protect alloy rims and maintain airtight bead seals.',
    equipmentAssigned: 'Twin Busch Germany TW X-98',
    equipmentPhoto: ABSIM_BRAND.images.tyreChanger,
  },
  {
    id: 'wheel-balancing',
    number: '02',
    title: 'Wheel Balancing',
    shortDescription: 'Dynamic electronic balancing that eliminates highway vibrations, improves ride comfort, and prevents uneven tyre wear.',
    equipmentAssigned: 'Twin Busch Germany TW F-150',
    equipmentPhoto: ABSIM_BRAND.images.wheelBalancer,
  },
  {
    id: 'wheel-alignment',
    number: '03',
    title: 'Wheel Alignment',
    shortDescription: 'Computerized multi-angle alignment for precise steering response, straight tracking, and extended tyre lifespan.',
    equipmentAssigned: 'Corghi Computerized Alignment',
    equipmentPhoto: ABSIM_BRAND.images.wheelAlignment,
  },
  {
    id: 'vehicle-inspection',
    number: '04',
    title: 'Vehicle Inspection',
    shortDescription: 'Full underbody, steering, and suspension diagnostics conducted in our dedicated reinforced inspection pit.',
    equipmentAssigned: 'Reinforced Service Pit Bay',
    equipmentPhoto: ABSIM_BRAND.images.inspectionPit,
  },
  {
    id: 'workshop-services',
    number: '05',
    title: 'Automotive Workshop Services',
    shortDescription: 'Essential mechanical adjustments and torque calibrations powered by industrial pneumatic air systems.',
    equipmentAssigned: 'Industrial Pneumatic Bay',
    equipmentPhoto: ABSIM_BRAND.images.inspectionPit,
  },
  {
    id: 'car-laundry',
    number: '06',
    title: 'Car Laundry / Vehicle Cleaning',
    shortDescription: 'High-pressure exterior wash and underbody rinse keeping your vehicle clean and road-ready.',
    equipmentAssigned: 'On-Site Car Laundry Facility',
    equipmentPhoto: ABSIM_BRAND.images.entrance,
  },
];

export interface EquipmentItem {
  id: string;
  name: string;
  category: string;
  brand: string;
  origin: string;
  photo: {
    localSrc: string;
    remoteFallback: string;
    alt: string;
  };
  features: string[];
  purpose: string;
}

export const ABSIM_EQUIPMENT: EquipmentItem[] = [
  {
    id: 'tyre-changer',
    name: 'Tyre Changing Machine',
    category: 'Tyre Fitting',
    brand: 'Twin Busch Germany',
    origin: 'Germany',
    photo: ABSIM_BRAND.images.tyreChanger,
    purpose: 'Protective mounting and demounting for alloy wheels, passenger tyres, and SUV wheels without rim scratches.',
    features: [
      'Twin Busch Germany TW X-98 semi-automatic engineering',
      'Self-centering 4-jaw turntable with alloy rim protectors',
      'High-force pneumatic bead breaker with precision control',
    ],
  },
  {
    id: 'wheel-balancer',
    name: 'Wheel Balancing Machine',
    category: 'Dynamic Balancing',
    brand: 'Twin Busch Germany',
    origin: 'Germany',
    photo: ABSIM_BRAND.images.wheelBalancer,
    purpose: 'Detects microscopic wheel unbalance to deliver smooth highway handling and protect suspension components.',
    features: [
      'Twin Busch Germany TW F-150 microprocessor sensor',
      'Digital LED display with multi-program static and dynamic balancing',
      'Protective safety hood and precise counterweight calculation',
    ],
  },
  {
    id: 'wheel-alignment',
    name: 'Wheel Alignment Equipment',
    category: 'Chassis Geometry',
    brand: 'Corghi',
    origin: 'Italy',
    photo: ABSIM_BRAND.images.wheelAlignment,
    purpose: 'Calibrates camber, caster, and toe angles against vehicle manufacturer specifications for laser-straight tracking.',
    features: [
      'Corghi computerized diagnostic station with live color monitor',
      'High-precision optical sensors for rapid chassis measurement',
      'Vehicle database for accurate OEM alignment parameters',
    ],
  },
  {
    id: 'inspection-pit',
    name: 'Vehicle Inspection Pit',
    category: 'Undercarriage Inspection',
    brand: 'Custom Reinforced Bay',
    origin: 'Addis Ababa Workshop',
    photo: ABSIM_BRAND.images.inspectionPit,
    purpose: 'Allows full walk-through underbody inspection of suspension arms, steering linkages, drivetrain, and exhaust systems.',
    features: [
      'Full-depth reinforced concrete pit with high-visibility safety markings',
      'Integrated overhead illumination for detailed undercarriage visibility',
      'Directly aligned with computerized alignment equipment',
    ],
  },
  {
    id: 'air-compressor',
    name: 'Air Compressor',
    category: 'Pneumatic Power',
    brand: 'ABAC',
    origin: 'European Standard',
    photo: ABSIM_BRAND.images.airCompressor,
    purpose: 'Supplies continuous high-pressure air that powers workshop tyre changers, impact tools, and inflation stations.',
    features: [
      'ABAC 270 Hp 3 heavy-duty industrial dual-stage air receiver',
      'Cast-iron pump designed for sustained workshop duty',
      'Dual pressure regulators ensuring clean, dry air delivery',
    ],
  },
];

export const WORKSHOP_GALLERY = [
  {
    id: 'gate-entrance',
    title: 'Facility Entrance & Car Laundry',
    category: 'Location & Arrival',
    image: ABSIM_BRAND.images.entrance,
    description: 'Main workshop gate located behind AMCE in Megenagna with on-site car wash facilities.',
  },
  {
    id: 'bay-pit',
    title: 'Vehicle Inspection Pit & Bay',
    category: 'Inspection & Geometry',
    image: ABSIM_BRAND.images.inspectionPit,
    description: 'Walk-through underbody pit equipped with safety chevron striping and alignment positioning.',
  },
  {
    id: 'equipment-alignment',
    title: 'Corghi Wheel Alignment Station',
    category: 'Chassis Geometry',
    image: ABSIM_BRAND.images.wheelAlignment,
    description: 'Computerized alignment console displaying real-time wheel angle measurements.',
  },
  {
    id: 'equipment-tyre-changer',
    title: 'Twin Busch Tyre Station',
    category: 'Tyre Fitting',
    image: ABSIM_BRAND.images.tyreChanger,
    description: 'Pneumatic tyre changer designed to safeguard rims during tyre replacement.',
  },
  {
    id: 'equipment-balancer',
    title: 'Digital Wheel Balancing Unit',
    category: 'Vibration Control',
    image: ABSIM_BRAND.images.wheelBalancer,
    description: 'Microprocessor wheel balancer ensuring smooth, stable highway travel.',
  },
  {
    id: 'equipment-compressor',
    title: 'ABAC Heavy-Duty Air Compressor',
    category: 'Workshop Power',
    image: ABSIM_BRAND.images.airCompressor,
    description: '270-litre industrial compressor driving tyre equipment and pneumatic tools.',
  },
];
