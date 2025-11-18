const PRODUCTS = [
  {
    id: 25,
    category: { en: "Paint", cn: "涂料" },
    name: {
      en: "Eco-Friendly Exterior Waterproof Coating",
      cn: "环保型外墙防水涂料"
    },
    desc: {
      en: "A high-performance, eco-friendly exterior waterproof coating. Provides excellent protection against rain and moisture, ensuring durability for building facades.",
      cn: "一种高性能、环保的外墙防水涂料。提供卓越的防雨防潮保护，确建筑物外立面的耐用性。"
    },
    img: "assets/img/Paint/1.png",
    imgs: [
      "assets/img/Paint/1.png",
      "assets/img/Paint/1.1.png",
      "assets/img/Paint/1.2.png",
      "assets/img/Paint/1.3.png"
    ]
  },
  {
    id: 26,
    category: { en: "Paint", cn: "涂料" },
    name: {
      en: "Epoxy Floor Coating (Waterproof & Anti-Slip)",
      cn: "环氧地坪漆（防水防滑）"
    },
    desc: {
      en: "A durable epoxy floor paint offering waterproof, dustproof, and anti-slip properties. Ideal for garages, warehouses, and basketball courts.",
      cn: "一种耐用的环氧地坪漆，具有防水、防尘和防滑性能。非常适合车库、仓库和篮球场。"
    },
    img: "assets/img/Paint/2.png",
    imgs: [
      "assets/img/Paint/2.png",
      "assets/img/Paint/2.1.png",
      "assets/img/Paint/2.2.png",
      "assets/img/Paint/2.3.png"
    ]
  },
  {
    id: 28,
    category: { en: "Paint", cn: "涂料" },
    name: {
      en: "Jinling Polyurethane Waterproof Paint",
      cn: "金陵聚氨酯防水涂料"
    },
    desc: {
      en: "A premium polyurethane (PU) waterproof coating designed for swimming pools and wet areas. Offers superior water resistance and long-lasting protection.",
      cn: "专为游泳池和潮湿区域设计的优质聚氨酯 (PU) 防水涂料。提供卓越的防水性能和持久保护。"
    },
    img: "assets/img/Paint/3.png",
    imgs: [
      "assets/img/Paint/3.png",
      "assets/img/Paint/3.1.png",
      "assets/img/Paint/3.2.png",
      "assets/img/Paint/3.3.png"
    ]
  },
  {
    id: 29,
    category: { en: "Paint", cn: "涂料" },
    name: {
      en: "Eco-Friendly Acrylic Latex Wall Paint",
      cn: "环保丙烯酸乳胶墙面漆"
    },
    desc: {
      en: "High-quality, water-based acrylic latex paint for interior and exterior walls. Suitable for residential and commercial use, offering a smooth, durable finish.",
      cn: "适用于内外墙的高品质水性丙烯酸乳胶漆。适用于住宅和商业用途，提供光滑、耐用的表面。"
    },
    img: "assets/img/Paint/4.png",
    imgs: [
      "assets/img/Paint/4.png",
      "assets/img/Paint/4.1.png",
      "assets/img/Paint/4.2.png",
      "assets/img/Paint/4.3.png"
    ]
  },
  {
    id: 30,
    category: { en: "Paint", cn: "涂料" },
    name: {
      en: "Instant-Fix Wall Repair Spray (300ml)",
      cn: "即时修复墙面修补喷雾 (300ml)"
    },
    desc: {
      en: "A convenient 300ml wall repair spray for quick touch-ups. Waterproof and easy to use, perfect for covering stains, cracks, and graffiti on white walls.",
      cn: "一款方便的 300ml 墙面修补喷雾，用于快速修补。防水且易于使用，非常适合覆盖白墙上的污渍、裂缝和涂鸦。"
    },
    img: "assets/img/Paint/5.png",
    imgs: [
      "assets/img/Paint/5.png",
      "assets/img/Paint/5.1.png",
      "assets/img/Paint/5.2.png",
      "assets/img/Paint/5.3.png"
    ]
  },
  {
    id: 31,
    category: { en: "Paint", cn: "涂料" },
    name: {
      en: "High Gloss 1K Automotive Refinishing Paint",
      cn: "高光 1K 汽车修补漆"
    },
    desc: {
      en: "A high-gloss 1K automotive coating spray for refinishing. Provides a professional, durable finish for car body repairs and touch-ups.",
      cn: "用于修补的高光 1K 汽车涂料喷雾。为车身维修和修补提供专业、耐用的表面效果。"
    },
    img: "assets/img/Paint/6.png",
    imgs: [
      "assets/img/Paint/6.png",
      "assets/img/Paint/6.1.png",
      "assets/img/Paint/6.2.png",
      "assets/img/Paint/6.3.png"
    ]
  },
  {
    id: 32,
    category: { en: "Paint", cn: "涂料" },
    name: {
      en: "Sanvo Premium Graffiti Spray Paint Set",
      cn: "Sanvo 高级涂鸦喷漆套装"
    },
    desc: {
      en: "Artist-grade spray paint with vibrant colors. Weatherproof and designed for street art, murals, and graffiti projects on various surfaces.",
      cn: "具有鲜艳色彩的艺术家级喷漆。防风雨设计，适用于各种表面上的街头艺术、壁画和涂鸦项目。"
    },
    img: "assets/img/Paint/7.png",
    imgs: [
      "assets/img/Paint/7.png",
      "assets/img/Paint/7.1.png",
      "assets/img/Paint/7.2.png",
      "assets/img/Paint/7.3.png"
    ]
  },
  {
    id: 33,
    category: { en: "Paint", cn: "涂料" },
    name: {
      en: "Interior Acrylic Emulsion Wall Paint",
      cn: "内墙丙烯酸乳胶漆"
    },
    desc: {
      en: "A versatile interior emulsion paint. This acrylic latex wall coating offers excellent coverage, washability, and color retention for home interiors.",
      cn: "一种多用途内墙乳胶漆。这种丙烯酸乳胶墙面涂料为家庭室内提供出色的覆盖力、耐洗性和保色性。"
    },
    img: "assets/img/Paint/8.png",
    imgs: [
      "assets/img/Paint/8.png",
      "assets/img/Paint/8.1.png",
      "assets/img/Paint/8.2.png",
      "assets/img/Paint/8.3.png"
    ]
  },
  {
    id: 34,
    category: { en: "Paint", cn: "涂料" },
    name: {
      en: "Acrylic Polymer Emulsion for Paint",
      cn: "涂料用丙烯酸聚合物乳液"
    },
    desc: {
      en: "A high-quality acrylic polymer emulsion designed as a raw material for manufacturing superior paints. Enhances durability and adhesion.",
      cn: "一种专为制造优质涂料而设计的高品质丙烯酸聚合物乳液原料。增强耐用性和附着力。"
    },
    img: "assets/img/Paint/9.png",
    imgs: [
      "assets/img/Paint/9.png",
      "assets/img/Paint/9.1.png",
      "assets/img/Paint/9.2.png",
      "assets/img/Paint/9.3.png"
    ]
  },
  {
    id: 35,
    category: { en: "Paint", cn: "涂料" },
    name: {
      en: "Nbs-135 Red Rubber Waterproof Coating",
      cn: "Nbs-135 红橡胶防水涂料"
    },
    desc: {
      en: "A specialized red rubber waterproof coating for roofs, metal surfaces, and walls. Provides a flexible, watertight seal against harsh weather.",
      cn: "一种专用于屋顶、金属表面和墙壁的红橡胶防水涂料。提供灵活的水密密封，抵御恶劣天气。"
    },
    img: "assets/img/Paint/10.png",
    imgs: [
      "assets/img/Paint/10.png",
      "assets/img/Paint/10.1.png",
      "assets/img/Paint/10.2.png",
      "assets/img/Paint/10.3.png"
    ]
  },
  {
    id: 36,
    category: { en: "Paint", cn: "涂料" },
    name: {
      en: "Wear-Resistant Acrylic Polyurethane Paint",
      cn: "耐磨丙烯酸聚氨酯漆"
    },
    desc: {
      en: "A customized high wear-resistant paint for indoor and outdoor use. This acrylic polyurethane coating is ideal for high-traffic areas requiring durability.",
      cn: "一种适用于室内外的定制高耐磨涂料。这种丙烯酸聚氨酯涂层非常适合需要耐用性的高流量区域。"
    },
    img: "assets/img/Paint/11.png",
    imgs: [
      "assets/img/Paint/11.png",
      "assets/img/Paint/11.1.png"
    ]
  },
{
    id: 37,
    category: { en: "Wall & Floor Tiles", cn: "墙地砖" },
    name: {
      en: "Vinyl Wood Plank Peel and Stick Floor Tile (Deep Gray)",
      cn: "自粘乙烯基木纹地板砖（深灰色）"
    },
    desc: {
      en: "A 36-pack of peel-and-stick vinyl floor tiles (54 sq.ft total) in Deep Gray. Features a rigid core, waterproof surface, and easy DIY installation. Ideal for modern interiors.",
      cn: "一套36片装的自粘乙烯基地板砖（共54平方英尺），深灰色。具有刚性芯材、防水表面和易于DIY安装的特点。非常适合现代室内装饰。"
    },
    img: "assets/img/Tiles/1.jpg",
    imgs: [
      "assets/img/Tiles/1.jpg",
      "assets/img/Tiles/1.1.jpg",
      "assets/img/Tiles/1.2.jpg",
      "assets/img/Tiles/1.3.jpg"
    ]
  },
  {
    id: 38,
    category: { en: "Wall & Floor Tiles", cn: "墙地砖" },
    name: {
      en: "Marble Pattern Peel and Stick Backsplash Panels (10pcs)",
      cn: "大理石纹自粘后挡板墙板（10片装）"
    },
    desc: {
      en: "A set of 10 waterproof PVC foam wall panels with a marble design (11.8\" x 11.8\"). Easy peel-and-stick application for kitchen backsplashes, bathrooms, and living rooms.",
      cn: "一套10片装的防水PVC泡沫墙板，采用大理石设计（11.8英寸 x 11.8英寸）。易于剥离和粘贴，适用于厨房后挡板、浴室和客厅。"
    },
    img: "assets/img/Tiles/2.jpg",
    imgs: [
      "assets/img/Tiles/2.jpg",
      "assets/img/Tiles/2.1.jpg",
      "assets/img/Tiles/2.2.jpg",
      "assets/img/Tiles/2.3.jpg"
    ]
  },
  {
    id: 39,
    category: { en: "Wall & Floor Tiles", cn: "墙地砖" },
    name: {
      en: "White Marble Vinyl Floor/Wall Tiles 12''x24'' (5 Pcs)",
      cn: "白色大理石纹乙烯基墙地砖 12''x24''（5片装）"
    },
    desc: {
      en: "5 pieces of 12\"x24\" self-adhesive vinyl tiles with a white marble look. Waterproof and versatile, suitable for bathroom floors, kitchen walls, and RV interiors.",
      cn: "5片 12英寸x24英寸 自粘乙烯基瓷砖，具有白色大理石外观。防水且用途广泛，适用于浴室地板、厨房墙壁和房车内饰。"
    },
    img: "assets/img/Tiles/3.jpg",
    imgs: [
      "assets/img/Tiles/3.jpg",
      "assets/img/Tiles/3.1.jpg",
      "assets/img/Tiles/3.2.jpg",
      "assets/img/Tiles/3.3.jpg"
    ]
  },
  {
    id: 40,
    category: { en: "Wall & Floor Tiles", cn: "墙地砖" },
    name: {
      en: "Rosewood Vinyl Plank Peel and Stick Flooring (36-Pack)",
      cn: "红木纹乙烯基自粘地板（36片装）"
    },
    desc: {
      en: "36-pack (54 sq.ft) of vinyl plank flooring with a classic Rosewood finish. Waterproof and adhesive, perfect for upgrading bedrooms, living rooms, kitchens, and RVs.",
      cn: "36片装（54平方英尺）乙烯基木地板，采用经典的红木饰面。防水且带背胶，非常适合升级卧室、客厅、厨房和房车。"
    },
    img: "assets/img/Tiles/4.jpg",
    imgs: [
      "assets/img/Tiles/4.jpg",
      "assets/img/Tiles/4.1.jpg",
      "assets/img/Tiles/4.2.jpg",
      "assets/img/Tiles/4.3.jpg"
    ]
  },
  {
    id: 41,
    category: { en: "Wall & Floor Tiles", cn: "墙地砖" },
    name: {
      en: "Grey Ash Vinyl Plank Flooring Tiles (36-Pack)",
      cn: "灰烬色乙烯基木地板砖（36片装）"
    },
    desc: {
      en: "A 36-pack of luxury vinyl flooring tiles in Grey Ash wood look. Covers 54 sq.ft. Self-adhesive and easy to install in kitchens, bedrooms, and bathrooms.",
      cn: "36片装豪华乙烯基地板砖，采用灰烬色木纹外观。覆盖54平方英尺。自粘式设计，易于在厨房、卧室和浴室安装。"
    },
    img: "assets/img/Tiles/5.jpg",
    imgs: [
      "assets/img/Tiles/5.jpg",
      "assets/img/Tiles/5.1.jpg",
      "assets/img/Tiles/5.2.jpg",
      "assets/img/Tiles/5.3.jpg"
    ]
  },
  {
    id: 42,
    category: { en: "Wall & Floor Tiles", cn: "墙地砖" },
    name: {
      en: "Carrara Marble Peel and Stick Floor Tile 12''x24'' (5 Tiles)",
      cn: "卡拉拉大理石纹自粘地砖 12''x24''（5片装）"
    },
    desc: {
      en: "Set of 5 Carrara marble style vinyl tiles (12\"x24\"). Waterproof and removable, these peel-and-stick tiles add elegance to bathroom floors, kitchens, and bedrooms.",
      cn: "5片卡拉拉大理石风格乙烯基瓷砖（12英寸x24英寸）。防水且可移除，这些自粘瓷砖为浴室地板、厨房和卧室增添优雅气息。"
    },
    img: "assets/img/Tiles/6.jpg",
    imgs: [
      "assets/img/Tiles/6.jpg",
      "assets/img/Tiles/6.1.jpg",
      "assets/img/Tiles/6.2.jpg",
      "assets/img/Tiles/6.3.jpg"
    ]
  },
  {
    id: 43,
    category: { en: "Wall & Floor Tiles", cn: "墙地砖" },
    name: {
      en: "Aqua Teal Blue Mosaic Pebble Tiles (5 Sheets)",
      cn: "水鸭蓝马赛克鹅卵石瓷砖（5张）"
    },
    desc: {
      en: "5 sheets of aqua teal blue mosaic pebble tiles. Ideal for creating stunning accent walls, backsplashes, and bathroom shower floors.",
      cn: "5张水鸭蓝马赛克鹅卵石瓷砖。非常适合打造令人惊叹的装饰墙、后挡板和浴室淋浴地板。"
    },
    img: "assets/img/Tiles/7.jpg",
    imgs: [
      "assets/img/Tiles/7.jpg",
      "assets/img/Tiles/7.1.jpg",
      "assets/img/Tiles/7.2.jpg",
      "assets/img/Tiles/7.3.jpg"
    ]
  },
  {
    id: 44,
    category: { en: "Wall & Floor Tiles", cn: "墙地砖" },
    name: {
      en: "Blue Stone Patterned Vinyl Tile 9''x9'' (16 Sheets)",
      cn: "蓝石花纹乙烯基瓷砖 9''x9''（16张）"
    },
    desc: {
      en: "16 sheets of 9\"x9\" composite vinyl tiles featuring a blue stone patterned flower design. Groutable and self-adhesive, perfect for kitchen and bathroom backsplashes.",
      cn: "16张 9英寸x9英寸 复合乙烯基瓷砖，采用蓝石花纹设计。可填缝且带背胶，非常适合厨房和浴室后挡板。"
    },
    img: "assets/img/Tiles/8.jpg",
    imgs: [
      "assets/img/Tiles/8.jpg",
      "assets/img/Tiles/8.1.jpg",
      "assets/img/Tiles/8.2.jpg",
      "assets/img/Tiles/8.3.jpg"
    ]
  },
  {
    id: 45,
    category: { en: "Wall & Floor Tiles", cn: "墙地砖" },
    name: {
      en: "Sefrou Green 3D Adhesive Tile Backsplash (5 Sheets)",
      cn: "Sefrou 绿色 3D 自粘瓷砖后挡板（5张）"
    },
    desc: {
      en: "5 sheets of 11.43\" x 9\" 3D peel-and-stick tiles in Sefrou Green. These adhesive tiles create a vibrant backsplash for kitchens and bathrooms.",
      cn: "5张 11.43英寸 x 9英寸 的 Sefrou 绿色 3D 自粘瓷砖。这些粘性瓷砖为厨房和浴室营造出充满活力的后挡板。"
    },
    img: "assets/img/Tiles/9.jpg",
    imgs: [
      "assets/img/Tiles/9.jpg",
      "assets/img/Tiles/9.1.jpg",
      "assets/img/Tiles/9.2.jpg",
      "assets/img/Tiles/9.3.jpg"
    ]
  },
  {
    id: 46,
    category: { en: "Wall & Floor Tiles", cn: "墙地砖" },
    name: {
      en: "Sage Green Vinyl Floor/Wall Sticker 12''x6'' (12Pcs)",
      cn: "鼠尾草绿乙烯基墙地贴纸 12''x6''（12件套）"
    },
    desc: {
      en: "A set of 12 non-slip, self-adhesive PVC tile decals in Sage Green (12\"x6\"). Perfect for DIY floor and wall upgrades in kitchens and bathrooms.",
      cn: "一套12件的防滑自粘 PVC 瓷砖贴纸，鼠尾草绿色（12英寸x6英寸）。非常适合厨房和浴室的 DIY 地面和墙面升级。"
    },
    img: "assets/img/Tiles/10.jpg",
    imgs: [
      "assets/img/Tiles/10.jpg",
      "assets/img/Tiles/10.1.jpg",
      "assets/img/Tiles/10.2.jpg",
      "assets/img/Tiles/10.3.jpg"
    ]
  },
  {
    id: 1,
    category: { en: "Handheld Construction Tools", cn: "手持式建筑工具" },
    name: {
      en: "RYOBI 10MM (3/8'') HAND DRILL, 500W, D-110VR",
      cn: "RYOBI 10毫米 (3/8英寸) 手电钻, 500W, D-110VR"
    },
    desc: {
      en: "A compact 500W hand drill from RYOBI, featuring a 10mm (3/8'') chuck and variable speed. The D-110VR is ideal for general-purpose drilling in wood and light metal.",
      cn: "RYOBI 出品的一款紧凑型 500W 手电钻，配备 10 毫米 (3/8英寸) 夹头和变速功能。D-110VR 型号非常适合在木材和轻金属上进行通用钻孔作业。"
    },
    img: "assets/img/Handheld/1.jpg",
    imgs: [
      "assets/img/Handheld/1.jpg",
    ]
  },
  {
    id: 2,
    category: { en: "Handheld Construction Tools", cn: "手持式建筑工具" },
    name: {
      en: "INGCO IMPACT DRILL 13MM 810W V SPEED F/R ID8108",
      cn: "INGCO 冲击钻 13毫米 810W 变速正反转 ID8108"
    },
    desc: {
      en: "This 810W INGCO impact drill features a durable 13mm chuck, variable speed (V Speed), and forward/reverse (F/R) function. Model ID8108 is perfect for masonry, wood, and metal drilling.",
      cn: "这款 810W INGCO 冲击钻具有耐用的 13 毫米夹头、变速功能 (V Speed) 和正反转 (F/R) 功能。ID8108 型号非常适合在砖石、木材和金属上钻孔。"
    },
    img: "assets/img/Handheld/2.jpg",
    imgs: [
      "assets/img/Handheld/2.jpg",
      "assets/img/Handheld/2.1.jpg",
      "assets/img/Handheld/2.2.jpg",
    ]
  },
  {
    id: 3,
    category: { en: "Handheld Construction Tools", cn: "手持式建筑工具" },
    name: {
      en: "INGCO IMPACT DRILL 13MM 680W ID6808",
      cn: "INGCO 冲击钻 13毫米 680W ID6808"
    },
    desc: {
      en: "A reliable 680W impact drill from INGCO with a 13mm keyless chuck. Model ID6808 offers a great balance of power and control for various drilling tasks, including concrete and wood.",
      cn: "INGCO 出品的一款可靠的 680W 冲击钻，配有 13 毫米无钥匙夹头。ID6808 型号在动力和控制之间取得了良好平衡，适用于包括混凝土和木材在内的各种钻孔任务。"
    },
    img: "assets/img/Handheld/3.jpg",
    imgs: [
      "assets/img/Handheld/3.jpg",
      "assets/img/Handheld/3.1.jpg",
      "assets/img/Handheld/3.2.jpg",
      "assets/img/Handheld/3.3.jpg",
    ]
  },
  {
    id: 4,
    category: { en: "Handheld Construction Tools", cn: "手持式建筑工具" },
    name: {
      en: "STANLEY 10MM (3/8'') ROTARY DRILL, 550W, STDR5510",
      cn: "STANLEY 10毫米 (3/8英寸) 旋转钻, 550W, STDR5510"
    },
    desc: {
      en: "The STANLEY STDR5510 is a 550W rotary drill with a 10mm (3/8'') chuck. Lightweight and compact, it's designed for efficient drilling and driving in wood and steel.",
      cn: "STANLEY STDR5510 是一款 550W 旋转钻，配有 10 毫米 (3/8英寸) 夹头。它轻巧紧凑，专为在木材和钢材上高效钻孔和旋拧而设计。"
    },
    img: "assets/img/Handheld/4.jpg",
    imgs: [
      "assets/img/Handheld/4.jpg",
      "assets/img/Handheld/4.1.jpg",
      "assets/img/Handheld/4.2.jpg",
      "assets/img/Handheld/4.3.jpg",
    ]
  },
  {
    id: 5,
    category: { en: "Handheld Construction Tools", cn: "手持式建筑工具" },
    name: {
      en: "INGCO 42V BL 7-1/4'' CIRCULAR SAW 1X2.0AH & 2 BLADES CSLI4218511",
      cn: "INGCO 42V 无刷 7-1/4英寸 圆锯 (含1x2.0Ah电池和2锯片) CSLI4218511"
    },
    desc: {
      en: "INGCO 42V brushless (BL) 7-1/4'' circular saw kit. This cordless tool provides powerful cutting performance. Comes with one 2.0Ah battery and two blades (CSLI4218511).",
      cn: "INGCO 42V 无刷 (BL) 7-1/4英寸圆锯套装。这款无绳工具提供强大的切割性能。配有一块 2.0Ah 电池和两片锯片 (CSLI4218511)。"
    },
    img: "assets/img/Handheld/5.jpg",
    imgs: [
      "assets/img/Handheld/5.jpg",
      "assets/img/Handheld/5.1.jpg",
      "assets/img/Handheld/5.2.jpg",
      "assets/img/Handheld/5.3.jpg",
    ]
  },
  {
    id: 6,
    category: { en: "Handheld Construction Tools", cn: "手持式建筑工具" },
    name: {
      en: "HIKOKI 185MM (7-1/4'') 36V LI-ION BRUSHLESS CIRCULAR SAW C3607DA MULTI VOLT",
      cn: "HIKOKI 185毫米 (7-1/4英寸) 36V 锂电无刷圆锯 C3607DA MULTI VOLT"
    },
    desc: {
      en: "The HIKOKI C3607DA is a 36V Multi Volt brushless circular saw. It features a 185mm (7-1/4'') blade for deep, fast, and cordless cuts, offering power comparable to corded models.",
      cn: "HIKOKI C3607DA 是一款 36V Multi Volt 多电压无刷圆锯。它配备 185 毫米（7-1/4英寸）锯片，可进行深度、快速的无绳切割，功率可与有线型号相媲美。"
    },
    img: "assets/img/Handheld/6.jpg",
    imgs: [
      "assets/img/Handheld/6.jpg",
    ]
  },
  {
    id: 7,
    category: { en: "Handheld Construction Tools", cn: "手持式建筑工具" },
    name: {
      en: "STANLEY 20V 2X2.0AH BRUSHLESS DRILL DRIVER SBD710D2K-B1",
      cn: "STANLEY 20V 2x2.0AH 无刷电钻 SBD710D2K-B1"
    },
    desc: {
      en: "A STANLEY 20V brushless drill driver kit (SBD710D2K-B1). This powerful and compact tool is ideal for demanding driving and drilling tasks. Comes with two 2.0Ah batteries.",
      cn: "STANLEY 20V 无刷电钻套装 (SBD710D2K-B1)。这款工具功能强大且结构紧凑，是高要求旋拧和钻孔任务的理想选择。配有两块 2.0Ah 电池。"
    },
    img: "assets/img/Handheld/7.jpg",
    imgs: [
      "assets/img/Handheld/7.jpg",
      "assets/img/Handheld/7.1.jpg",
      "assets/img/Handheld/7.2.jpg",
    ]
  },
  {
    id: 8,
    category: { en: "Handheld Construction Tools", cn: "手持式建筑工具" },
    name: {
      en: "MAKITA 12V 2X2.0AH LI-ION 10MM (3/8'') DRIVER DRILL, DF333DSAE",
      cn: "MAKITA 12V 2x2.0AH 锂电 10毫米 (3/8英寸) 电钻, DF333DSAE"
    },
    desc: {
      en: "The MAKITA DF333DSAE is a 12V CXT Li-Ion driver drill. It's lightweight with a 10mm (3/8'') chuck, offering precision and control for fastening and drilling in tight spaces. Includes two 2.0Ah batteries.",
      cn: "MAKITA DF333DSAE 是一款 12V CXT 锂电电钻。它重量轻，配有 10 毫米（3/8英寸）夹头，可在狭窄空间内提供精确的紧固和钻孔控制。包含两块 2.0Ah 电池。"
    },
    img: "assets/img/Handheld/8.jpg",
    imgs: [
      "assets/img/Handheld/8.jpg",
      "assets/img/Handheld/8.1.jpg",
    ]
  },
  {
    id: 9,
    category: { en: "Handheld Construction Tools", cn: "手持式建筑工具" },
    name: {
      en: "INGCO 8V 17PCS LI-ION CORDLESS DRIVER 6NM CSDLI08025",
      cn: "INGCO 8V 17件套锂电螺丝刀 6NM CSDLI08025"
    },
    desc: {
      en: "An INGCO 8V Li-Ion cordless driver kit (CSDLI08025). This 6Nm screwdriver is perfect for furniture assembly and light-duty tasks. Comes with a 17-piece accessory set.",
      cn: "INGCO 8V 锂电螺丝刀套装 (CSDLI08025)。这款 6Nm 扭矩的螺丝刀非常适合家具组装和轻型任务。附带 17 件配件套装。"
    },
    img: "assets/img/Handheld/9.jpg",
    imgs: [
      "assets/img/Handheld/9.jpg",
      "assets/img/Handheld/9.1.jpg",
      "assets/img/Handheld/9.2.jpg",
    ]
  },
  {
    id: 10,
    category: { en: "Handheld Construction Tools", cn: "手持式建筑工具" },
    name: {
      en: "DEWALT 20V BL ULTRA COMPACT HAMMER DRILL, 2X3.0AH DCD709L2-B1",
      cn: "DEWALT 20V 无刷超紧凑冲击钻 (含2x3.0AH电池) DCD709L2-B1"
    },
    desc: {
      en: "The DEWALT DCD709L2-B1 is a 20V MAX brushless, ultra-compact hammer drill. Its lightweight design gets into tight spaces, while the hammer function handles masonry. Includes two 3.0Ah batteries.",
      cn: "DEWALT DCD709L2-B1 是一款 20V MAX 无刷超紧凑型冲击钻。其轻巧的设计可进入狭窄空间，冲击功能可处理砖石作业。包含两块 3.0Ah 电池。"
    },
    img: "assets/img/Handheld/10.jpg",
    imgs: [
      "assets/img/Handheld/10.jpg",
      "assets/img/Handheld/10.1.jpg",
      "assets/img/Handheld/10.2.jpg",
    ]
  },
  {
    id: 11,
    category: { en: "Handheld Construction Tools", cn: "手持式建筑工具" },
    name: {
      en: "INGCO 12V LI-ION DRILL 20NM W/1X12V BATT CDLI12456",
      cn: "INGCO 12V 锂电电钻 20NM (含1x12V电池) CDLI12456"
    },
    desc: {
      en: "A compact 12V Li-Ion drill driver from INGCO (CDLI12456). With 20Nm of torque, it's a versatile tool for screwing and drilling. Kit includes one 12V battery.",
      cn: "INGCO (CDLI12456) 出品的一款紧凑型 12V 锂电电钻。具有 20Nm 扭矩，是一款适用于旋拧和钻孔的多功能工具。套装包含一块 12V 电池。"
    },
    img: "assets/img/Handheld/11.jpg",
    imgs: [
      "assets/img/Handheld/11.jpg",
      "assets/img/Handheld/11.1.jpg",
      "assets/img/Handheld/11.2.jpg",
      "assets/img/Handheld/11.3.jpg",
    ]
  },
  {
    id: 12,
    category: { en: "Handheld Construction Tools", cn: "手持式建筑工具" },
    name: {
      en: "INGCO 20V LI-ION BL IMPACT DRILL 96NM W/2X 4.0AH CHARGER + CASE CIDLI20968",
      cn: "INGCO 20V 锂电无刷冲击钻 96NM (含2x4.0AH电池, 充电器, 工具箱) CIDLI20968"
    },
    desc: {
      en: "A heavy-duty 20V brushless impact drill from INGCO (CIDLI20968). Delivering 96Nm of torque for tough applications. Complete kit includes two 4.0Ah batteries, charger, and a carrying case.",
      cn: "INGCO (CIDLI20968) 出品的一款重型 20V 无刷冲击钻。可提供 96Nm 的强大扭矩，适用于高强度应用。完整套装包括两块 4.0Ah 电池、充电器和便携箱。"
    },
    img: "assets/img/Handheld/12.jpg",
    imgs: [
      "assets/img/Handheld/12.jpg",
      "assets/img/Handheld/12.1.jpg",
      "assets/img/Handheld/12.2.jpg",
    ]
  },
{
    id: 13,
    category: { en: "Door & Window Hardware", cn: "门窗五金" },
    name: {
      en: "SL H-SHAPE GLASS DOOR SEAL CLEAR 2.5M",
      cn: "SL H型透明玻璃门密封条 2.5米"
    },
    desc: {
      en: "A 2.5-meter clear H-shape seal for glass doors. Provides effective weatherproofing and sound insulation while maintaining a clean, transparent look.",
      cn: "一款 2.5 米长的 H 型透明玻璃门密封条。在保持干净透明外观的同时，提供有效的防风雨和隔音效果。"
    },
    img: "assets/img/Door/1.jpg",
    imgs: [
      "assets/img/Door/1.jpg"
    ]
  },
  {
    id: 14,
    category: { en: "Door & Window Hardware", cn: "门窗五金" },
    name: {
      en: "SL 90 DEGREES BATHROOM SEAL 2.5M",
      cn: "SL 90度浴室密封条 2.5米"
    },
    desc: {
      en: "A 2.5-meter 90-degree seal designed for bathroom glass doors. Ensures a watertight seal to prevent leaks and keep your bathroom floor dry.",
      cn: "一款专为浴室玻璃门设计的 2.5 米 90 度密封条。确保证水密密封，防止泄漏并保持浴室地面干燥。"
    },
    img: "assets/img/Door/2.jpg",
    imgs: [
      "assets/img/Door/2.jpg"
    ]
  },
  {
    id: 15,
    category: { en: "Door & Window Hardware", cn: "门窗五金" },
    name: {
      en: "SL E-PROFILE WEATHERSTRIP 9X4MM-2X2.5M",
      cn: "SL E型密封条 9X4毫米-2X2.5米"
    },
    desc: {
      en: "A durable E-profile weatherstrip pack (2x 2.5m). Designed to seal gaps in windows and doors, reducing drafts, noise, and energy loss.",
      cn: "耐用的 E 型密封条套装（2x 2.5米）。专为密封门窗缝隙而设计，可减少穿堂风、噪音和能量损失。"
    },
    img: "assets/img/Door/3.jpg",
    imgs: [
      "assets/img/Door/3.jpg"
    ]
  },
  {
    id: 16,
    category: { en: "Door & Window Hardware", cn: "门窗五金" },
    name: {
      en: "ALUMINIUM CASEMENT WINDOW HANDLE",
      cn: "铝合金平开窗把手"
    },
    desc: {
      en: "A sleek and durable aluminium handle for casement windows. Offers smooth operation and a modern aesthetic for residential or commercial properties.",
      cn: "一款时尚耐用的铝合金平开窗把手。操作顺畅，为住宅或商业地产带来现代美感。"
    },
    img: "assets/img/Door/4.jpg",
    imgs: [
      "assets/img/Door/4.jpg",
      "assets/img/Door/4.1.jpg"
    ]
  },
  {
    id: 17,
    category: { en: "Door & Window Hardware", cn: "门窗五金" },
    name: {
      en: "WINDOW CASEMENT LOCK WITH KEY",
      cn: "带钥匙平开窗锁"
    },
    desc: {
      en: "A secure casement window lock with key mechanism. Provides enhanced safety and child protection for your home windows.",
      cn: "一款带钥匙机制的安全平开窗锁。为您的家庭窗户提供增强的安全性和儿童保护。"
    },
    img: "assets/img/Door/5.jpg",
    imgs: [
      "assets/img/Door/5.jpg"
    ]
  },
  {
    id: 18,
    category: { en: "Door & Window Hardware", cn: "门窗五金" },
    name: {
      en: "SL INSECT SCREEN ROLL IN GREY",
      cn: "SL 灰色防虫网卷"
    },
    desc: {
      en: "A roll of high-quality grey insect screen. Perfect for repairing or replacing window and door screens to keep bugs out while allowing airflow.",
      cn: "一卷优质灰色防虫网。非常适合修理或更换门窗纱网，在保持通风的同时防止昆虫进入。"
    },
    img: "assets/img/Door/6.jpg",
    imgs: [
      "assets/img/Door/6.jpg"
    ]
  },
  {
    id: 19,
    category: { en: "Door & Window Hardware", cn: "门窗五金" },
    name: {
      en: "SL POLYESTER INSECT SCREEN 1.5MX1.5M",
      cn: "SL 聚酯防虫网 1.5米X1.5米"
    },
    desc: {
      en: "A durable 1.5m x 1.5m polyester insect screen. Resistant to tearing and weathering, providing long-lasting protection against pests.",
      cn: "耐用的 1.5米 x 1.5米聚酯防虫网。抗撕裂和耐候，提供持久的防虫保护。"
    },
    img: "assets/img/Door/7.jpg",
    imgs: [
      "assets/img/Door/7.jpg",
      "assets/img/Door/7.1.jpg",
      "assets/img/Door/7.2.jpg"
    ]
  },
  {
    id: 20,
    category: { en: "Door & Window Hardware", cn: "门窗五金" },
    name: {
      en: "NELON DOOR STOPPER N-DSZ03",
      cn: "NELON 门吸 N-DSZ03"
    },
    desc: {
      en: "The NELON N-DSZ03 is a robust door stopper designed to prevent wall damage and hold doors open securely. Suitable for residential and office use.",
      cn: "NELON N-DSZ03 是一款坚固的门吸，旨在防止墙壁损坏并安全地保持门开启。适合住宅和办公室使用。"
    },
    img: "assets/img/Door/8.jpg",
    imgs: [
      "assets/img/Door/8.jpg"
    ]
  },
  {
    id: 21,
    category: { en: "Door & Window Hardware", cn: "门窗五金" },
    name: {
      en: "CHROME CONCEAL HINGES FOR CABINET",
      cn: "橱柜镀铬暗铰链"
    },
    desc: {
      en: "High-quality chrome concealed hinges for cabinets. These hinges offer a clean, seamless look and smooth closing action for kitchen or furniture doors.",
      cn: "用于橱柜的高品质镀铬暗铰链。这些铰链为厨房或家具门提供干净、无缝的外观和顺畅的关闭动作。"
    },
    img: "assets/img/Door/9.jpg",
    imgs: [
      "assets/img/Door/9.jpg"
    ]
  },
  {
    id: 22,
    category: { en: "Door & Window Hardware", cn: "门窗五金" },
    name: {
      en: "NELON S.S HINGES 1.5MM (PAIR)",
      cn: "NELON 不锈钢铰链 1.5毫米 (一对)"
    },
    desc: {
      en: "A pair of 1.5mm stainless steel hinges by NELON. Corrosion-resistant and durable, suitable for various door types.",
      cn: "一对 NELON 1.5毫米不锈钢铰链。耐腐蚀且耐用，适用于各种门型。"
    },
    img: "assets/img/Door/10.jpg",
    imgs: [
      "assets/img/Door/10.jpg"
    ]
  },
  {
    id: 24,
    category: { en: "Door & Window Hardware", cn: "门窗五金" },
    name: {
      en: "HORME CHROME PLATED DOOR PULL",
      cn: "HORME 镀铬门拉手"
    },
    desc: {
      en: "A stylish chrome-plated door pull handle from HORME. Its ergonomic design and shiny finish add a touch of elegance to any door.",
      cn: "HORME 出品的一款时尚镀铬门拉手。其符合人体工程学的设计和光泽的表面为任何门增添了一丝优雅。"
    },
    img: "assets/img/Door/11.jpg",
    imgs: [
      "assets/img/Door/11.jpg"
    ]
  },
]