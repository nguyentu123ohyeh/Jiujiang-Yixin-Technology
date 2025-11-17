const PRODUCTS = [
  {
    id: 1,
    category: { en: "Phone Accessories", cn: "手机配件" },
    name: { 
      en: "Car Phone Holder for MagSafe [78+LBS Suction & Strong Magnetic] – 360° Adjustable Car Mount for iPhone 12–17 Series, Carbon Fiber",
      cn: "磁吸车载手机支架【78+磅强力吸附 & 超强磁吸】360°可调节车载支架，适用于 iPhone 12–17 系列，碳纤维款,"},
    img: "assets/img/Phone/1.jpg",
    imgs: [
      "assets/img/Phone/1.jpg",
      "assets/img/Phone/1.1.jpg",
      "assets/img/Phone/1.2.jpg",
      "assets/img/Phone/1.3.jpg",
      "assets/img/Phone/1.4.jpg",
    ],
    desc:{
      en: "This MagSafe car phone holder features an ultra-strong 78+ lbs suction base and enhanced magnetic force for a secure hold even on rough roads. The 360° adjustable design allows flexible viewing angles, while the carbon-fiber finish adds a premium look. Compatible with iPhone 12–17 series and MagSafe-enabled cases.",
      cn: "这款磁吸车载手机支架配备超强78+磅吸附底座和增强磁力，即使在颠簸的道路上也能牢固固定。360°可调节设计允许灵活的观看角度，而碳纤维外观增添了高级感。兼容iPhone 12–17系列及支持MagSafe的手机壳。"},
  },
  {
    id: 2,
    category: { en: "Phone Accessories", cn: "手机配件" },
    name: {
      en: "3 in 2 USB C Cable for Apple Watch Charger/iPhone 17 Charger/Lightning,Multi Charging Cable Cord,Vacation Camping Essentials,Portable Designed for iWatch &iPhone 16-12-4FT",
      cn: "3合2 USB C 充电线，适用于 Apple Watch 充电器/iPhone 17 充电器/Lightning，多功能充电线，旅行露营必备，便携设计，适用于 iWatch & iPhone 16-12-4FT"},
    img: "assets/img/Phone/2.jpg",
    imgs: [
      "assets/img/Phone/2.jpg",
      "assets/img/Phone/2.1.jpg",
      "assets/img/Phone/2.2.jpg",
      "assets/img/Phone/2.3.jpg",
      "assets/img/Phone/2.4.jpg",
    ],
    desc:{
      en: "A versatile 3-in-2 USB-C charging cable designed for Apple Watch and iPhone. It combines Lightning, USB-C, and Watch charger interfaces into one compact cord—perfect for travel, camping, or daily convenience. Durable, tangle-free, and optimized for fast charging.",
      cn: "这是一款多功能的3合2 USB-C充电线，专为Apple Watch和iPhone设计。它将Lightning、USB-C和Watch充电接口结合在一根紧凑的线缆中——非常适合旅行、露营或日常使用。耐用、防缠绕，并优化了快速充电性能。"},
  },
  {
    id: 3,
    category: { en: "Phone Accessories", cn: "手机配件" },
    name:{
      en: "Professional Wireless Microphone for iPhone, iPad, Android, Lavalier Microphone for Video Recording - iPhone Mic Crystal Clear Recording with USB-C for Content Creators",
      cn: "专业无线麦克风，适用于 iPhone、iPad、Android，领夹式麦克风，适用于视频录制 - 适用于内容创作者的 USB-C iPhone 麦克风，提供清晰录音"},
    img: "assets/img/Phone/3.jpg",
    imgs: [
      "assets/img/Phone/3.jpg",
      "assets/img/Phone/3.1.jpg",
      "assets/img/Phone/3.2.jpg",
      "assets/img/Phone/3.3.jpg",
      "assets/img/Phone/3.4.jpg",
    ],
    desc:
    {en: "A wireless lavalier microphone designed for creators who need clear, stable audio for videos, interviews, and livestreams. It features real-time noise reduction, long transmission range, and dual compatibility with Lightning and USB-C devices.",
    cn: "这是一款无线领夹式麦克风，专为需要清晰、稳定音频的视频创作者、采访和直播而设计。它具有实时降噪、长传输范围，并兼容Lightning和USB-C设备。"},
  },
  {
    id: 4,
    category: { en: "Phone Accessories", cn: "手机配件" },
    name:{
      en: "3-in-1 Adjustable Phone Lanyard Crossbody Cell Phone Neck Strap Universal Mobile Wrist Lanyard",
      cn: "3合1可调节手机挂绳，斜挎手机颈带，通用手机手腕挂绳"},
    img: "assets/img/Phone/4.jpg",
    imgs: [
      "assets/img/Phone/4.jpg",
      "assets/img/Phone/4.1.jpg",
      "assets/img/Phone/4.2.jpg",
      "assets/img/Phone/4.3.jpg",
      "assets/img/Phone/4.4.jpg",
    ],
    desc:{
      en: "A 3-in-1 adjustable phone lanyard that functions as a crossbody strap, neck strap, or wrist strap. Designed for hands-free convenience and universal compatibility, featuring strong connectors and soft, comfortable nylon material.",
      cn: "这是一款3合1可调节手机挂绳，可作为斜挎带、颈带或手腕带使用。设计注重免提便利性和通用兼容性，配备坚固的连接器和柔软舒适的尼龙材质。"},
  },
  {
    id: 5,
    category: { en: "Phone Accessories", cn: "手机配件" },
    name:{
      en: "Retractable Car Charger, White Elephant Gifts for Men Women, 69W Cars Adapter USB C Fast Charger, Car Accessories for Women Men, Gifts for Dad Mom, for iPhone 17 Pro Max Air 16 15 14 13 12 Plus",
      cn: "可伸缩车载充电器，男女白象礼物，69W车载适配器USB C快速充电器，男女车载配件，送给爸爸妈妈的礼物，适用于iPhone 17 Pro Max Air 16 15 14 13 12 Plus"},
    img: "assets/img/Phone/5.jpg",
    imgs: [
      "assets/img/Phone/5.jpg",
      "assets/img/Phone/5.1.jpg",
      "assets/img/Phone/5.2.jpg",
      "assets/img/Phone/5.3.jpg",
      "assets/img/Phone/5.4.jpg",
    ],
    desc:{
      en: "This retractable 69W car charger provides fast and efficient charging for multiple iPhone models. The pull-out cable design prevents tangling and keeps your car interior clean. Durable, compact, and equipped with USB-C fast charging, it's a perfect everyday accessory for both short and long drives.",
      cn: "这款可伸缩69W车载充电器为多款iPhone型号提供快速高效的充电。拉出式线缆设计防止缠绕，保持车内整洁。耐用、紧凑，配备USB-C快速充电，是短途和长途驾驶的理想日常配件。"},
  },
  {
    id: 6,
    category: { en: "Phone Accessories", cn: "手机配件" },
    name:{
      en: "Silicone Double-Sided Suction Cup Phone Case Detachable Mount, Sticky Phone Grip with Higher Suction Power for iPhone, Hands-Free Phone Accessories Holder for Selfies and Videos, Light Pink",
      cn: "硅胶双面吸盘手机壳可拆卸支架，适用于iPhone的高吸力粘性手机握把，免提手机配件支架，适合自拍和视频，浅粉色"},
    img: "assets/img/Phone/6.jpg",
    imgs: [
      "assets/img/Phone/6.jpg",
      "assets/img/Phone/6.1.jpg",
      "assets/img/Phone/6.2.jpg",
      "assets/img/Phone/6.3.jpg",
      "assets/img/Phone/6.4.jpg",
    ],
    desc: {
    en: "A double-sided silicone suction phone case designed for hands-free use. The high-suction pads securely attach to smooth surfaces, allowing easy selfies, videos, makeup tutorials, or desk viewing. Soft, durable, and detachable for flexible use.",
    cn: "这是一款双面硅胶吸盘手机壳，专为免提使用而设计。高吸力垫牢固贴合光滑表面，方便自拍、视频录制、化妆教程或桌面观看。柔软耐用，可拆卸，使用灵活。" }
  },
  {
    id: 7,
    category: { en: "Phone Accessories", cn: "手机配件" },
    name:{
      en: "Silicone Suction Cup Phone Case Mount Double Sided, Hands-Free Silicon Phone Grip with Higher Suction Power for Selfies and Videos, Non Slip Phone Accessories",
      cn: "硅胶吸盘手机壳支架双面设计，免提硅胶手机握把，适用于自拍和视频录制，高吸力防滑手机配件"},
    img: "assets/img/Phone/7.jpg",
    imgs: [
      "assets/img/Phone/7.jpg",
      "assets/img/Phone/7.1.jpg",
      "assets/img/Phone/7.2.jpg",
      "assets/img/Phone/7.3.jpg",
      "assets/img/Phone/7.4.jpg",
    ],
    desc:{
      en: "This double-sided silicone suction mount provides a strong, slip-resistant grip for smartphones. Ideal for hands-free selfies, video calls, live streaming, and stable recording. Lightweight, reusable, and compatible with most phone models.",
      cn: "这款双面硅胶吸盘支架为智能手机提供强力防滑握把。非常适合免提自拍、视频通话、直播和稳定录制。轻便、可重复使用，兼容大多数手机型号。"},
  },
  {
    id: 8,
    category: { en: "Phone Accessories", cn: "手机配件" },
    name:{
      en: "Wireless Charger, 15W Fast Qi Certified Wireless Charging Station with Sleep-Friendly Adaptive Light Compatible with iPhone 17 16 15 14 13 12 Pro Max Samsung Galaxy S25 S24 S23 Note 20 Google etc",
      cn: "无线充电器，15W快速Qi认证无线充电站，配备适合睡眠的自适应灯光，兼容iPhone 17 16 15 14 13 12 Pro Max Samsung Galaxy S25 S24 S23 Note 20 Google等"},
    img: "assets/img/Phone/8.jpg",
    imgs: [
      "assets/img/Phone/8.jpg",
      "assets/img/Phone/8.1.jpg",
      "assets/img/Phone/8.2.jpg",
      "assets/img/Phone/8.3.jpg",
      "assets/img/Phone/8.4.jpg",
    ],
    desc: {
      en: "A 15W fast wireless charging pad compatible with iPhone, Samsung Galaxy, Google Pixel, and other Qi-enabled devices. Features smart temperature control, a sleep-friendly indicator light, and a slim, modern design perfect for desks, nightstands, or offices.",
      cn: "这是一款15W快速无线充电板，兼容iPhone、Samsung Galaxy、Google Pixel及其他支持Qi的设备。具有智能温控、适合睡眠的指示灯以及纤薄现代的设计，非常适合放置在办公桌、床头柜或办公室。"}
  },
  {
    id: 9,
    category: { en: "Phone Accessories", cn: "手机配件" },
    name: {
      en: "Translucent Phone Grip with Expanding Kickstand, PopSockets for Phone, Adhesive Grip, Translucent PopGrip - Clear Glitter Silver",
      cn: "半透明手机握把，带可扩展支架，适用于手机的PopSockets，粘性握把，半透明PopGrip - 透明闪光银"},
    img: "assets/img/Phone/9.jpg",
    imgs: [
      "assets/img/Phone/9.jpg",
      "assets/img/Phone/9.1.jpg",
      "assets/img/Phone/9.2.jpg",
      "assets/img/Phone/9.3.jpg",
      "assets/img/Phone/9.4.jpg",
    ],
    desc: {
      en: "A translucent expanding phone grip with a built-in kickstand for secure holding and convenient hands-free viewing. Designed with a glitter-silver finish for a stylish look. Fits most smartphones and cases with strong adhesive backing.",
      cn: "这是一款半透明的可扩展手机握把，内置支架，提供稳固的握持和便捷的免提观看体验。采用闪光银色设计，外观时尚。适用于大多数智能手机和手机壳，配备强力粘性背面。"}
  },
  {
    id: 10,
    category: { en: "Phone Accessories", cn: "手机配件" },
    name: {
      en: "Phone Grip with Expanding Kickstand, Adhesive Grip, Cute PopSockets - Purple Fields",
      cn: "带可扩展支架的手机握把，粘性握把，可爱PopSockets - 紫色田野"},
    img: "assets/img/Phone/10.jpg",
    imgs: [
      "assets/img/Phone/10.jpg",
      "assets/img/Phone/10.1.jpg",
      "assets/img/Phone/10.2.jpg",
      "assets/img/Phone/10.3.jpg",
      "assets/img/Phone/10.4.jpg",
    ],
    desc: {
      en: "A stylish phone grip featuring a foldable kickstand for comfortable viewing and secure handling. The Purple Fields design adds personality while offering strong adhesion and smooth expansion. Compatible with most phone models.",
      cn: "这是一款时尚的手机握把，配备可折叠支架，提供舒适的观看体验和稳固的握持。紫色田野设计增添个性，同时提供强力粘附和顺畅扩展。兼容大多数手机型号。"}
  },
  {
    id: 11,
    category: { en: "Phone Accessories", cn: "手机配件" },
    name: {
      en: "MagSafe Magnetic Leather Wallet for iPhone (Light Pink)",
      cn: "适用于 iPhone 的 MagSafe 磁吸皮革卡包（浅粉色）"
    },
    desc: {
      en: "A slim magnetic MagSafe leather wallet with strong attachment and RFID protection. Designed to snap securely onto iPhone 12–15 series cases, keeping cards organized and easily accessible.",
      cn: "这款纤薄的 MagSafe 磁吸皮革卡包具有强力吸附和 RFID 防护，可稳固贴合 iPhone 12–15 系列手机壳，让您的卡片随时整齐收纳、轻松取用。"
    },
    img: "assets/img/Phone/11.jpg",
    imgs: [
      "assets/img/Phone/11.jpg",
      "assets/img/Phone/11.1.jpg",
      "assets/img/Phone/11.2.jpg",
      "assets/img/Phone/11.3.jpg",
      "assets/img/Phone/11.4.jpg"
    ]
  },
  {
    id: 12,
    category: { en: "Phone Accessories", cn: "手机配件" },
    name: {
      en: "300W USB-C GaN IV Fast Charging Station (8 Ports)",
      cn: "300W USB-C GaN IV 八口快速充电站"
    },
    desc: {
      en: "A powerful 300W GaN IV fast charging station with eight USB ports, including 100W USB-C for laptops. Compatible with MacBook, Dell, Steam Deck, iPhone 16/15/14, Galaxy devices, and more—ideal for home, office, or travel.",
      cn: "这款 300W GaN IV 快速充电站配备八个 USB 接口，其中包含 100W USB-C，可为笔记本供电。兼容 MacBook、Dell、Steam Deck、iPhone 16/15/14、Galaxy 等设备，是家庭、办公和旅行的理想选择。"
    },
    img: "assets/img/Phone/12.jpg",
    imgs: [
      "assets/img/Phone/12.jpg",
      "assets/img/Phone/12.1.jpg",
      "assets/img/Phone/12.2.jpg",
      "assets/img/Phone/12.3.jpg",
      "assets/img/Phone/12.4.jpg"
    ]
  },
  {
    id: 13,
    category: { en: "Phone Accessories", cn: "手机配件" },
    name: {
      en: "35W 4-Port USB-C Fast Charger (3-Pack)",
      cn: "35W 四口 USB-C 快速充电器（三件装）"
    },
    desc: {
      en: "A compact 4-port fast charger featuring dual USB-C and dual USB outputs, supporting PD fast charging for iPhone 17/16/15 series and older models. Designed for travel, home, and multi-device charging.",
      cn: "这款四口快速充电器配备双 USB-C 和双 USB 接口，支持 iPhone 17/16/15 系列及更多型号的 PD 快充。体积小巧，非常适合旅行、家庭及多设备使用。"
    },
    img: "assets/img/Phone/13.jpg",
    imgs: [
      "assets/img/Phone/13.jpg",
      "assets/img/Phone/13.1.jpg",
      "assets/img/Phone/13.2.jpg",
      "assets/img/Phone/13.3.jpg",
      "assets/img/Phone/13.4.jpg"
    ]
  },
  {
    id: 14,
    category: { en: "Phone Accessories", cn: "手机配件" },
    name: {
      en: "Bluetooth Wireless Headset with Noise-Cancelling Microphone",
      cn: "蓝牙无线耳机（带降噪麦克风）"
    },
    desc: {
      en: "A lightweight Bluetooth headset designed for calls, truck drivers, office work, and remote meetings. Features noise-cancelling microphone, long battery life, and a convenient mute button for clear and distraction-free communication.",
      cn: "这款轻量级蓝牙耳机适用于通话、卡车司机、办公室和远程会议。配备降噪麦克风、长续航电池以及一键静音功能，确保清晰无干扰的沟通体验。"
    },
    img: "assets/img/Phone/14.jpg",
    imgs: [
      "assets/img/Phone/14.jpg",
      "assets/img/Phone/14.1.jpg",
      "assets/img/Phone/14.2.jpg",
      "assets/img/Phone/14.3.jpg",
      "assets/img/Phone/14.4.jpg"
    ]
  },
  {
    id: 15,
    category: { en: "Phone Accessories", cn: "手机配件" },
    name: {
      en: "Aluminum Desktop Phone Stand (Red)",
      cn: "铝制桌面手机支架（红色）"
    },
    desc: {
      en: "A sturdy aluminum phone stand designed for hands-free viewing, gaming, and video calls. Compatible with all smartphones and Nintendo Switch. Features anti-slip padding and adjustable viewing angles for maximum comfort.",
      cn: "这款坚固的铝制手机支架适用于免手持观看、游戏和视频通话，兼容所有智能手机和任天堂 Switch。配有防滑垫和可调节角度，提供舒适稳定的使用体验。"
    },
    img: "assets/img/Phone/15.jpg",
    imgs: [
      "assets/img/Phone/15.jpg",
      "assets/img/Phone/15.1.jpg",
      "assets/img/Phone/15.2.jpg",
      "assets/img/Phone/15.3.jpg",
      "assets/img/Phone/15.4.jpg"
    ]
  },
  {
    "id": 16,
    "category": { "en": "Computer Accessories", "cn": "电脑配件" },
    "name": {
      "en": "Ergonomic Portable Laptop Stand (Silver)",
      "cn": "人体工学便携式笔记本电脑支架（银色）"
    },
    "desc": {
      "en": "A sturdy, portable, and ergonomic laptop stand for desks. This adjustable riser fits all laptops up to 17.3 inches, improving your posture. Silver finish.",
      "cn": "一款坚固、便携的人体工学笔记本电脑桌面支架。这款可调节的增高架适用于所有17.3英寸以下的笔记本电脑，改善您的坐姿。银色外观。"
    },
    "img": "assets/img/Computer/1.jpg",
    "imgs": [
      "assets/img/Computer/1.jpg",
      "assets/img/Computer/1.1.jpg",
      "assets/img/Computer/1.2.jpg",
      "assets/img/Computer/1.3.jpg",
      "assets/img/Computer/1.4.jpg"
    ]
  },
  {
    "id": 17,
    "category": { "en": "Computer Accessories", "cn": "电脑配件" },
    "name": {
      "en": "RGB Laptop Cooling Pad with 6 Fans (Blue)",
      "cn": "RGB 笔记本电脑散热垫（6风扇，蓝色）"
    },
    "desc": {
      "en": "Upgraded laptop cooler for 15.6-17.3 inch laptops. Features 6 quiet fans, 7 adjustable height stands, 10 RGB light modes, and 2 USB ports. Ideal for desk or lap use.",
      "cn": "升级款笔记本电脑散热器，适用于15.6-17.3英寸笔记本。配备6个静音风扇、7档高度调节、10种RGB灯光模式和2个USB端口。适合桌面或膝上使用。"
    },
    "img": "assets/img/Computer/2.jpg",
    "imgs": [
      "assets/img/Computer/2.jpg",
      "assets/img/Computer/2.1.jpg",
      "assets/img/Computer/2.2.jpg",
      "assets/img/Computer/2.3.jpg"
    ]
  },
  {
    "id": 18,
    "category": { "en": "Computer Accessories", "cn": "电脑配件" },
    "name": {
      "en": "360° Rotating Ergonomic Laptop Stand (Silver)",
      "cn": "360° 旋转人体工学笔记本电脑支架（银色）"
    },
    "desc": {
      "en": "Stable metal laptop stand with a 360° rotating base. Ergonomic, foldable, and adjustable for height and angle. Supports 10-17 inch notebooks.",
      "cn": "稳定的金属笔记本电脑支架，配有360°旋转底座。符合人体工学，可折叠，高度和角度均可调节。支持10-17英寸笔记本电脑。"
    },
    "img": "assets/img/Computer/3.jpg",
    "imgs": [
      "assets/img/Computer/3.jpg"
    ]
  },
  {
    "id": 19,
    "category": { "en": "Computer Accessories", "cn": "电脑配件" },
    "name": {
      "en": "Pro Lap Desk with Wrist Rest & Phone Holder",
      "cn": "专业膝上桌（带腕托和手机支架）"
    },
    "desc": {
      "en": "A home office pro lap desk in black carbon finish. Features a comfortable wrist rest, integrated mouse pad, and phone holder. Fits laptops up to 15.6 inches.",
      "cn": "一款专业的家庭办公膝上桌，碳黑色外观。配备舒适的腕托、集成鼠标垫和手机支架。适用于15.6英寸以下的笔记本电脑。"
    },
    "img": "assets/img/Computer/4.jpg",
    "imgs": [
      "assets/img/Computer/4.jpg",
      "assets/img/Computer/4.1.jpg",
      "assets/img/Computer/4.2.jpg",
      "assets/img/Computer/4.3.jpg",
      "assets/img/Computer/4.4.jpg"
    ]
  },
  {
    "id": 20,
    "category": { "en": "Computer Accessories", "cn": "电脑配件" },
    "name": {
      "en": "Lightweight Ergonomic Wireless Mouse (530)",
      "cn": "轻量化人体工学无线鼠标 (530)"
    },
    "desc": {
      "en": "Model 530 lightweight wireless mouse. Features 2.4GHz USB nano receiver, 1200 DPI optical sensor, and an ergonomic design suitable for both left and right-hand users. Battery included.",
      "cn": "530 型号轻量级无线鼠标。配备2.4GHz USB纳米接收器，1200 DPI 光学传感器，以及适合左右手用户的人体工学设计。附带电池。"
    },
    "img": "assets/img/Computer/5.jpg",
    "imgs": [
      "assets/img/Computer/5.jpg",
      "assets/img/Computer/5.1.jpg",
      "assets/img/Computer/5.2.jpg",
      "assets/img/Computer/5.3.jpg"
    ]
  },
  {
    "id": 21,
    "category": { "en": "Computer Accessories", "cn": "电脑配件" },
    "name": {
      "en": "Bluetooth Silent Mouse with Adjustable DPI",
      "cn": "蓝牙静音鼠标（DPI可调）"
    },
    "desc": {
      "en": "A silent Bluetooth mouse with a blue optical sensor and 4 buttons. Features adjustable DPI and supports Microsoft Swift Pair for easy connection with Windows and ChromeOS.",
      "cn": "一款静音蓝牙鼠标，配备蓝色光学传感器和4个按钮。具有可调节的DPI，并支持Microsoft Swift Pair，可轻松连接Windows和ChromeOS。"
    },
    "img": "assets/img/Computer/6.jpg",
    "imgs": [
      "assets/img/Computer/6.jpg",
      "assets/img/Computer/6.1.jpg",
      "assets/img/Computer/6.2.jpg",
      "assets/img/Computer/6.3.jpg",
      "assets/img/Computer/6.4.jpg"
    ]
  },
  {
    "id": 22,
    "category": { "en": "Computer Accessories", "cn": "电脑配件" },
    "name": {
      "en": "Retro Wireless Keyboard & Mouse Combo (Milk-Tea)",
      "cn": "复古无线键鼠套装（奶茶色）"
    },
    "desc": {
      "en": "A colorful, retro-design wireless keyboard and mouse combo. Features ergonomic round typewriter keycaps and a reliable 2.4GHz connection. (Milk-Tea Colorful)",
      "cn": "一款色彩丰富的复古设计无线键盘和鼠标套装。采用符合人体工学的圆形打字机键帽和可靠的2.4GHz连接。（奶茶拼色）"
    },
    "img": "assets/img/Computer/7.jpg",
    "imgs": [
      "assets/img/Computer/7.jpg",
      "assets/img/Computer/7.1.jpg",
      "assets/img/Computer/7.2.jpg",
      "assets/img/Computer/7.3.jpg",
      "assets/img/Computer/7.4.jpg"
    ]
  },
  {
    "id": 24,
    "category": { "en": "Computer Accessories", "cn": "电脑配件" },
    "name": {
      "en": "Wireless Mechanical Keyboard (Graphite)",
      "cn": "无线机械键盘（石墨灰）"
    },
    "desc": {
      "en": "A high-performance wireless mechanical keyboard with tactile quiet switches and backlit keys. Connects via Bluetooth or USB-C. Compatible with macOS, Windows, Linux, iOS, and Android. (Graphite)",
      "cn": "一款高性能无线机械键盘，配备静音触感轴体和背光按键。可通过蓝牙或USB-C连接。兼容 macOS、Windows、Linux、iOS 和 Android。（石墨灰）"
    },
    "img": "assets/img/Computer/8.jpg",
    "imgs": [
      "assets/img/Computer/8.jpg",
      "assets/img/Computer/8.1.jpg",
      "assets/img/Computer/8.2.jpg",
      "assets/img/Computer/8.3.jpg"
    ]
  },
  {
    "id": 25,
    "category": { "en": "Computer Accessories", "cn": "电脑配件" },
    "name": {
      "en": "Retro Wireless Keyboard & Mouse Combo (Green)",
      "cn": "复古无线键鼠套装（绿色）"
    },
    "desc": {
      "en": "A full-sized wireless office keyboard and mouse combo with a colorful retro typewriter key design. Ensures a dropout-free 2.4GHz connection. (Green-Colorful)",
      "cn": "一款全尺寸无线办公键盘和鼠标套装，采用多彩的复古打字机按键设计。确保2.4GHz连接稳定无延迟。（绿色拼色）"
    },
    "img": "assets/img/Computer/9.jpg",
    "imgs": [
      "assets/img/Computer/9.jpg",
      "assets/img/Computer/9.1.jpg",
      "assets/img/Computer/9.2.jpg",
      "assets/img/Computer/9.3.jpg"
    ]
  },
  {
    "id": 26,
    "category": { "en": "Computer Accessories", "cn": "电脑配件" },
    "name": {
      "en": "Ultra Slim Wireless Keyboard & Mouse Combo (Silver)",
      "cn": "超薄无线键鼠套装（银白色）"
    },
    "desc": {
      "en": "An ultra-slim, silent 2.4G wireless keyboard and mouse set. Features a compact scissor-switch keyboard with cover and a 2400 DPI mouse. Batteries included. (Silver White)",
      "cn": "一套超薄静音的2.4G无线键盘和鼠标。配备带保护盖的紧凑型剪刀脚键盘和2400 DPI鼠标。附带电池。（银白色）"
    },
    "img": "assets/img/Computer/10.jpg",
    "imgs": [
      "assets/img/Computer/10.jpg",
      "assets/img/Computer/10.1.jpg",
      "assets/img/Computer/10.2.jpg",
      "assets/img/Computer/10.3.jpg"
    ]
  },
  {
    "id": 28,
    "category": { "en": "Computer Accessories", "cn": "电脑配件" },
    "name": {
      "en": "Apex 3 TKL RGB Gaming Keyboard (Black)",
      "cn": "Apex 3 TKL RGB 游戏键盘（黑色）"
    },
    "desc": {
      "en": "A compact Tenkeyless (TKL) gaming keyboard. Features 8-zone RGB, IP32 water/dust resistance, whisper-quiet gaming switches, and anti-ghosting. (Black)",
      "cn": "一款紧凑型 (TKL) 游戏键盘。具有8区RGB、IP32防水防尘、静音游戏开关和全键无冲功能。（黑色）"
    },
    "img": "assets/img/Computer/11.jpg",
    "imgs": [
      "assets/img/Computer/11.jpg",
      "assets/img/Computer/11.1.jpg",
      "assets/img/Computer/11.2.jpg",
      "assets/img/Computer/11.3.jpg"
    ]
  },
  {
    "id": 29,
    "category": { "en": "Computer Accessories", "cn": "电脑配件" },
    "name": {
      "en": "Tri-Mode Wireless Gaming Keyboard (Green)",
      "cn": "三模无线游戏键盘（绿色）"
    },
    "desc": {
      "en": "A tri-mode (Bluetooth/2.4GHz/USB-C) wireless gaming keyboard with number pad. Features custom creamy switches, RGB backlighting, and a programmable media knob. (Green)",
      "cn": "一款三模（蓝牙/2.4GHz/USB-C）无线游戏键盘，带数字键盘。配备定制奶油轴、RGB背光和可编程媒体旋钮。（绿色）"
    },
    "img": "assets/img/Computer/12.jpg",
    "imgs": [
      "assets/img/Computer/12.jpg",
      "assets/img/Computer/12.1.jpg",
      "assets/img/Computer/12.2.jpg",
      "assets/img/Computer/12.3.jpg"
    ]
  },
  {
    "id": 30,
    "category": { "en": "Computer Accessories", "cn": "电脑配件" },
    "name": {
      "en": "Foldable On-Ear Bluetooth Headphones (35Hr Playtime)",
      "cn": "可折叠贴耳式蓝牙耳机（35小时播放）"
    },
    "desc": {
      "en": "On-ear wireless Bluetooth headphones with a built-in microphone. Offers 35 hours of playtime and a foldable, collapsible design perfect for travel. (Black)",
      "cn": "贴耳式无线蓝牙耳机，内置麦克风。提供35小时播放时间，采用可折叠设计，非常适合旅行。（黑色）"
    },
    "img": "assets/img/Computer/13.jpg",
    "imgs": [
      "assets/img/Computer/13.jpg",
      "assets/img/Computer/13.1.jpg",
      "assets/img/Computer/13.2.jpg",
      "assets/img/Computer/13.3.jpg"
    ]
  },
  {
    "id": 31,
    "category": { "en": "Computer Accessories", "cn": "电脑配件" },
    "name": {
      "en": "Stereo USB Headset with Microphone (Xtream H5U)",
      "cn": "立体声 USB 耳机麦克风 (Xtream H5U)"
    },
    "desc": {
      "en": "The Xtream H5U is a stereo USB multimedia headset with a built-in microphone. Ideal for PC calls, gaming, and online learning.",
      "cn": "Xtream H5U 是一款带内置麦克风的立体声USB多媒体耳机。是PC通话、游戏和在线学习的理想选择。"
    },
    "img": "assets/img/Computer/14.jpg",
    "imgs": [
      "assets/img/Computer/14.jpg",
      "assets/img/Computer/14.1.jpg",
      "assets/img/Computer/14.2.jpg",
      "assets/img/Computer/14.3.jpg",
      "assets/img/Computer/14.4.jpg"
    ]
  },
  {
    "id": 32,
    "category": { "en": "Computer Accessories", "cn": "电脑配件" },
    "name": {
      "en": "Active Noise Cancelling Bluetooth Headphones",
      "cn": "主动降噪蓝牙耳机"
    },
    "desc": {
      "en": "Wireless Bluetooth headphones featuring Active Noise Cancellation (ANC) and a built-in microphone for clear calls. Perfect for immersive audio and focus.",
      "cn": "具有主动降噪（ANC）功能的无线蓝牙耳机，内置麦克风可确保通话清晰。非常适合沉浸式音频体验和专注工作。"
    },
    "img": "assets/img/Computer/15.jpg",
    "imgs": [
      "assets/img/Computer/15.jpg",
      "assets/img/Computer/15.1.jpg",
      "assets/img/Computer/15.2.jpg",
      "assets/img/Computer/15.3.jpg"
    ]
  },
  {
    "id": 33,
    "category": { "en": "Computer Accessories", "cn": "电脑配件" },
    "name": {
      "en": "Bluetooth 5.0+EDR Headphones with Mic",
      "cn": "蓝牙 5.0+EDR 耳机（带麦克风）"
    },
    "desc": {
      "en": "Wireless headphones featuring Bluetooth 5.0 + EDR for a stable connection and enhanced data rate. Includes a built-in microphone for hands-free calls.",
      "cn": "采用蓝牙5.0 + EDR 技术的无线耳机，连接稳定，数据传输速率更快。内置麦克风，支持免提通话。"
    },
    "img": "assets/img/Computer/16.jpg",
    "imgs": [
      "assets/img/Computer/16.jpg",
      "assets/img/Computer/16.1.jpg",
      "assets/img/Computer/16.2.jpg",
      "assets/img/Computer/16.3.jpg"
    ]
  },
  {
    "id": 34,
    "category": { "en": "Computer Accessories", "cn": "电脑配件" },
    "name": {
      "en": "Evolve2 40 Noise Cancelling PC Headset (USB-A)",
      "cn": "Evolve2 40 降噪电脑耳机 (USB-A)"
    },
    "desc": {
      "en": "A Microsoft Teams certified stereo PC headset (USB-A). Features noise cancellation and advanced 3-microphone technology for clear calls in open offices. (Black)",
      "cn": "一款经Microsoft Teams认证的立体声电脑耳机 (USB-A)。具有降噪功能和先进的3麦克风技术，可在开放式办公室中实现清晰通话。（黑色）"
    },
    "img": "assets/img/Computer/17.jpg",
    "imgs": [
      "assets/img/Computer/17.jpg",
      "assets/img/Computer/17.1.jpg",
      "assets/img/Computer/17.2.jpg",
      "assets/img/Computer/17.3.jpg"
    ]
  },
{
    "id": 35,
    "category": { "en": "Computer Hardware", "cn": "电脑硬件" },
    "name": {
      "en": "CORSAIR Vengeance LPX DDR4 RAM 32GB (2x16GB) 3200MHz",
      "cn": "美商海盗船 Vengeance LPX DDR4 32GB (2x16GB) 3200MHz 内存"
    },
    "desc": {
      "en": "A 32GB (2x16GB) kit of CORSAIR Vengeance LPX DDR4 desktop memory. Rated for 3200MHz with CL16 timings, optimized for both Intel and AMD motherboards. (Black)",
      "cn": "美商海盗船 Vengeance LPX DDR4 台式机内存套装，容量 32GB (2x16GB)。频率 3200MHz，CL16 时序，专为 Intel 和 AMD 主板优化。（黑色）"
    },
    "img": "assets/img/Hardware/1.jpg",
    "imgs": [
      "assets/img/Hardware/1.jpg",
      "assets/img/Hardware/1.1.jpg",
      "assets/img/Hardware/1.2.jpg",
      "assets/img/Hardware/1.3.jpg"
    ]
  },
  {
    "id": 36,
    "category": { "en": "Computer Hardware", "cn": "电脑硬件" },
    "name": {
      "en": "Crucial DDR5 Laptop RAM 32GB Kit (2x16GB) 5600MHz SODIMM",
      "cn": "英睿达 DDR5 笔记本内存 32GB (2x16GB) 5600MHz SODIMM"
    },
    "desc": {
      "en": "A Crucial 32GB (2x16GB) DDR5 laptop memory (SODIMM) kit. Rated for 5600MHz, it's compatible with 13th Gen Intel Core and AMD Ryzen 7000 series laptops.",
      "cn": "英睿达 32GB (2x16GB) DDR5 笔记本内存 (SODIMM) 套装。频率高达 5600MHz，兼容第13代 Intel 酷睿和 AMD 锐龙 7000 系列笔记本电脑。"
    },
    "img": "assets/img/Hardware/2.jpg",
    "imgs": [
      "assets/img/Hardware/2.jpg",
      "assets/img/Hardware/2.1.jpg",
      "assets/img/Hardware/2.2.jpg",
      "assets/img/Hardware/2.3.jpg"
    ]
  },
  {
    "id": 37,
    "category": { "en": "Computer Hardware", "cn": "电脑硬件" },
    "name": {
      "en": "GIGASTONE DDR4 Laptop RAM 32GB (2x16GB) 3200MHz SODIMM",
      "cn": "GIGASTONE DDR4 笔记本内存 32GB (2x16GB) 3200MHz SODIMM"
    },
    "desc": {
      "en": "A high-performance 32GB (2x16GB) DDR4 3200MHz SODIMM kit from GIGASTONE. This 1.2V, CL22 notebook memory is also compatible with 2933MHz and 2666MHz systems.",
      "cn": "来自 GIGASTONE 的高性能 32GB (2x16GB) DDR4 3200MHz SODIMM 套装。这款 1.2V、CL22 的笔记本内存还兼容 2933MHz 和 2666MHz 系统。"
    },
    "img": "assets/img/Hardware/3.jpg",
    "imgs": [
      "assets/img/Hardware/3.jpg"
    ]
  },
  {
    "id": 38,
    "category": { "en": "Computer Hardware", "cn": "电脑硬件" },
    "name": {
      "en": "Timetec 8GB DDR3L/DDR3 1600MHz Laptop RAM (SODIMM)",
      "cn": "Timetec 8GB DDR3L/DDR3 1600MHz 笔记本内存 (SODIMM)"
    },
    "desc": {
      "en": "An 8GB Timetec DDR3L/DDR3 1600MHz (PC3L-12800S) SODIMM module. This dual-voltage (1.35V/1.5V) laptop memory is perfect for upgrading older notebooks.",
      "cn": "一根 8GB Timetec DDR3L/DDR3 1600MHz (PC3L-12800S) SODIMM 内存条。这款双电压 (1.35V/1.5V) 笔记本内存是升级旧款笔记本电脑的理想选择。"
    },
    "img": "assets/img/Hardware/4.jpg",
    "imgs": [
      "assets/img/Hardware/4.jpg",
      "assets/img/Hardware/4.1.jpg",
      "assets/img/Hardware/4.2.jpg",
      "assets/img/Hardware/4.3.jpg"
    ]
  },
  {
    "id": 39,
    "category": { "en": "Computer Hardware", "cn": "电脑硬件" },
    "name": {
      "en": "Crucial Pro DDR5 Desktop RAM 32GB Kit (2x16GB) 5600MHz UDIMM",
      "cn": "英睿达 Pro DDR5 台式机内存 32GB (2x16GB) 5600MHz UDIMM"
    },
    "desc": {
      "en": "A Crucial Pro 32GB (2x16GB) DDR5 desktop memory (UDIMM) kit. Rated for 5600MHz, it is optimized for 13th Gen Intel Core and AMD Ryzen 7000 series CPUs.",
      "cn": "英睿达 Pro 32GB (2x16GB) DDR5 台式机内存 (UDIMM) 套装。频率高达 5600MHz，专为第13代 Intel 酷睿和 AMD 锐龙 7000 系列 CPU 优化。"
    },
    "img": "assets/img/Hardware/5.jpg",
    "imgs": [
      "assets/img/Hardware/5.jpg",
      "assets/img/Hardware/5.1.jpg",
      "assets/img/Hardware/5.2.jpg",
      "assets/img/Hardware/5.3.jpg",
      "assets/img/Hardware/5.4.jpg"
    ]
  },
  {
    "id": 40,
    "category": { "en": "Smart Home Accessories", "cn": "智能家居配件" },
    "name": {
      "en": "Echo Spot - Smart Alarm Clock with Alexa (Black)",
      "cn": "Echo Spot - 带 Alexa 的智能闹钟（黑色）"
    },
    "desc": {
      "en": "A compact smart alarm clock with Alexa, perfect for nightstands, offices, and kitchens. Features a screen for video calls and information at a glance. (Black)",
      "cn": "一款带 Alexa 的紧凑型智能闹钟，非常适合床头柜、办公室和厨房。配有屏幕，可进行视频通话并一目了然地显示信息。（黑色）"
    },
    "img": "assets/img/Home/1.jpg",
    "imgs": [
      "assets/img/Home/1.jpg",
      "assets/img/Home/1.1.jpg",
      "assets/img/Home/1.2.jpg",
      "assets/img/Home/1.3.jpg"
    ]
  },
  {
    "id": 41,
    "category": { "en": "Smart Home Accessories", "cn": "智能家居配件" },
    "name": {
      "en": "Echo Dot Max - Smart Speaker with Smart Home Hub (Glacier White)",
      "cn": "Echo Dot Max - 带智能家居中心的智能音箱（冰川白）"
    },
    "desc": {
      "en": "An Alexa smart speaker featuring room-filling sound and a built-in smart home hub. Control your smart devices and enjoy music. (Glacier White)",
      "cn": "一款 Alexa 智能音箱，具有充满房间的音效和内置的智能家居中心。控制您的智能设备并享受音乐。（冰川白）"
    },
    "img": "assets/img/Home/2.jpg",
    "imgs": [
      "assets/img/Home/2.jpg",
      "assets/img/Home/2.1.jpg",
      "assets/img/Home/2.2.jpg",
      "assets/img/Home/2.3.jpg"
    ]
  },
  {
    "id": 42,
    "category": { "en": "Smart Home Accessories", "cn": "智能家居配件" },
    "name": {
      "en": "4L Smart Cool Mist Humidifier (App/Voice Control)",
      "cn": "4L 智能冷雾加湿器（App/语音控制）"
    },
    "desc": {
      "en": "A 4L top-fill smart humidifier for large rooms. Features ultra-quiet (28 dB) operation, 36-hour runtime, nightlight, and control via Touch, App, or Voice. (Black)",
      "cn": "一款适用于大房间的 4L 上注水式智能加湿器。具有超静音（28 dB）运行、36小时续航、夜灯功能，并支持触摸、App 或语音控制。（黑色）"
    },
    "img": "assets/img/Home/3.jpg",
    "imgs": [
      "assets/img/Home/3.jpg",
      "assets/img/Home/3.1.jpg",
      "assets/img/Home/3.2.jpg",
      "assets/img/Home/3.3.jpg",
      "assets/img/Home/3.4.jpg"
    ]
  },
  {
    "id": 43,
    "category": { "en": "Smart Home Accessories", "cn": "智能家居配件" },
    "name": {
      "en": "WiFi Smart Temperature & Humidity Sensor (3-Pack)",
      "cn": "WiFi 智能温湿度传感器（3件装）"
    },
    "desc": {
      "en": "A 3-pack of WiFi smart temperature/humidity sensors. Get remote App/Email alerts, 2 years of data export, and 2-year battery life. No subscription required. Ideal for RVs, greenhouses, and homes.",
      "cn": "一套3件装的 WiFi 智能温湿度传感器。提供远程 App/电子邮件警报、2年数据导出和2年电池寿命。无需订阅。非常适合房车、温室和家庭使用。"
    },
    "img": "assets/img/Home/4.jpg",
    "imgs": [
      "assets/img/Home/4.jpg",
      "assets/img/Home/4.1.jpg",
      "assets/img/Home/4.2.jpg",
      "assets/img/Home/4.3.jpg"
    ]
  },
  {
    "id": 44,
    "category": { "en": "Smart Home Accessories", "cn": "智能家居配件" },
    "name": {
      "en": "Google TV 4K UHD Smart Projector with Dolby Sound",
      "cn": "Google TV 4K 超高清智能投影仪（杜比音效）"
    },
    "desc": {
      "en": "An official Google TV 4K UHD smart projector by HAPPRUN. Features Dolby Sound, Wi-Fi, Bluetooth, and built-in streaming apps. Compatible with game consoles and smartphones for indoor/outdoor use.",
      "cn": "一款 HAPPRUN 出品的官方 Google TV 4K 超高清智能投影仪。具有杜比音效、Wi-Fi、蓝牙和内置流媒体应用。兼容游戏机和智能手机，适合室内外使用。"
    },
    "img": "assets/img/Home/5.jpg",
    "imgs": [
      "assets/img/Home/5.jpg",
      "assets/img/Home/5.1.jpg",
      "assets/img/Home/5.2.jpg",
      "assets/img/Home/5.3.jpg",
      "assets/img/Home/5.4.jpg"
    ]
  },
  {
    "id": 45,
    "category": { "en": "Smart Home Accessories", "cn": "智能家居配件" },
    "name": {
      "en": "Rechargeable Motion Sensor Under Cabinet Lights (2-Pack)",
      "cn": "可充电式运动感应橱柜灯（2件装）"
    },
    "desc": {
      "en": "A 2-pack of 14.7-inch rechargeable, wireless under-cabinet lights. Features motion sensors, 5 dimmable levels, and a magnetic base. Perfect for kitchens, closets, stairs, and hallways.",
      "cn": "一套2件装的14.7英寸可充电无线橱柜灯。具有运动传感器、5级调光和磁吸底座。非常适合厨房、衣柜、楼梯和走廊。"
    },
    "img": "assets/img/Home/6.jpg",
    "imgs": [
      "assets/img/Home/6.jpg",
      "assets/img/Home/6.1.jpg",
      "assets/img/Home/6.2.jpg",
      "assets/img/Home/6.3.jpg"
    ]
  },
  {
    "id": 46,
    "category": { "en": "Smart Home Accessories", "cn": "智能家居配件" },
    "name": {
      "en": "Google Nest Smart Thermostat (Snow)",
      "cn": "Google Nest 智能恒温器（雪白色）"
    },
    "desc": {
      "en": "The Google Nest Thermostat, a programmable smart WiFi thermostat for your home. Helps you save energy and control your home's temperature from anywhere. (Snow)",
      "cn": "Google Nest 恒温器，一款适用于您家庭的可编程智能 WiFi 恒温器。帮您节省能源，并可随时随地控制家中温度。（雪白色）"
    },
    "img": "assets/img/Home/7.jpg",
    "imgs": [
      "assets/img/Home/7.jpg",
      "assets/img/Home/7.1.jpg",
      "assets/img/Home/7.2.jpg",
      "assets/img/Home/7.3.jpg"
    ]
  },
  {
    "id": 47,
    "category": { "en": "Smart Home Accessories", "cn": "智能家居配件" },
    "name": {
      "en": "Enhanced Smart Thermostat (Works with Siri, Alexa, Google)",
      "cn": "增强型智能恒温器（兼容 Siri、Alexa、Google）"
    },
    "desc": {
      "en": "An Energy Star certified enhanced smart thermostat. This programmable WiFi thermostat works with Siri, Alexa, and Google Assistant for easy smart home integration and energy savings.",
      "cn": "一款获得能源之星认证的增强型智能恒温器。这款可编程 WiFi 恒温器兼容 Siri、Alexa 和 Google 助手，可轻松集成到智能家居并节省能源。"
    },
    "img": "assets/img/Home/8.jpg",
    "imgs": [
      "assets/img/Home/8.jpg",
      "assets/img/Home/8.1.jpg",
      "assets/img/Home/8.2.jpg",
      "assets/img/Home/8.3.jpg"
    ]
  }
]