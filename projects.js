// ============================================================
// EASY UPDATE FILE - PROJECTS DATABASE
// ============================================================
// CARA MENAMBAHKAN FOTO SLIDESHOW:
// Tambahkan baris baru di dalam "gallery": [ ... ]
// Contoh:
// "gallery": [
//   "assets/foto1.jpg",
//   "assets/foto2.jpg",
//   "assets/foto3.jpg"   <-- Jangan pakai koma di item terakhir
// ]
// ============================================================

const projects = [
  // ============================================================
  // PROJECT 01
  // ============================================================
  {
    "id": "01",
    "title": "MDP & Capacitor Bank",
    "category": "Main Distribution Panel (MDP)",
    "role": "Wiring",
    "description": "Teknisi panel builder bertanggung jawab penuh atas instalasi dan pengabelan (wiring) komponen utama panel daya, yang meliputi pemasangan busbar tembaga sebagai jalur distribusi arus utama, serta perakitan MCCB sebagai sistem proteksi arus beban tinggi. Selain itu, teknisi mengintegrasikan rangkaian kontrol otomatis menggunakan kontaktor magnetik yang terhubung langsung dengan capacitor bank untuk sistem koreksi faktor daya (faktor cos phi) jaringan. Seluruh proses pengabelan dilakukan secara presisi berdasarkan Single Line Diagram (SLD) dengan memastikan kekencangan koneksi torsi baut, kerapian jalur kabel kontrol pada ducting, serta penerapan standar keselamatan elektrikal yang ketat untuk mencegah risiko overheating dan flashover.",
    "summary": "Panel assembly, feeder wiring and motor control architecture for multiple loads.",
    "tags": [
      "MCC",
      "MCCB",
      "Motor Control",
      "Wiring"
    ],
    "image": "assets/03_MDP(0).jpg",
    "gallery": [
      "assets/sdp.MOV",
      "assets/03_MDP(0).jpg",
      "assets/03_MDP(1).jpg",
      "assets/03_MDP(2).jpg",
      "assets/03_MDP(3).jpg",
      "assets/03_MDP(4).jpg",
      "assets/03_MDP(5).jpg",
      "assets/03_MDP(6).jpg",
      "assets/03_MDP(7).jpg",
      "assets/03_MDP(8).jpg"
    ]
  },

  // ============================================================
  // PROJECT 02
  // ============================================================
  {
    "id": "02",
    "title": "Panel Interlock Motor / Sistem Kontrol Otomatis",
    "category": "Panel Kontrol (Panel Interlock Motor)",
    "role": "Panel Maker & Wiring Technician",
    "description": "Fungsi Rangkaian: Sistem kontrol interlock otomatis 3-Phase berbasis hardwired logic menggunakan kombinasi MCCB, magnetic contactor, TOR, dan timer relay. Sistem interlock elektrikal ini mencegah dua sumber daya atau dua motor aktif simultan untuk menghindari short circuit antar-fase atau tabrakan mekanis.\n\nKegunaan: Kontrol motor listrik industri berdaya menengah (pompa hydrant, blower, konveyor) dengan proteksi overload, serta aplikasi Automatic/Manual Change Over Switch (COS) skala menengah.\n\nSpesifikasi Teknis: Tegangan Operasional (Ue): Maksimal 415V AC (3-Phase, 50/60 Hz) / Tegangan Isolasi (Ui) 690V AC. Tegangan Kontrol: 220V AC. Kapasitas Arus (In): Desain nominal berkisar antara 50A hingga 100A per phase (disesuaikan dengan batas setting arus pada Thermal Overload Relay).",
    "summary": "Panel assembly, feeder wiring and motor control architecture for multiple loads.",
    "tags": [
      "MCC",
      "MCCB",
      "Relay",
      "Contaktor",
      "Motor Control",
      "Wiring"
    ],
    "image": "assets/02_Interlock Panel.jpg",
    "gallery": [
      "assets/02_Interlock Panel.jpg"
    ]
  },

  // ============================================================
  // PROJECT 03
  // ============================================================
  {
    "id": "03",
    "title": "Wastewater Treatment Plant (WWTP)",
    "category": "Panel Kontrol",
    "role": "SEBAGAI APA EKSEKUTOR, KONSULTAN DLL",
    "description": "CERITAKAN RINGKAS DAN JELAS SETIAP PROJECT MUA",
    "summary": "RANGKUMAN DESKRIPSI",
    "tags": [
      "DOL",
      "Star-Delta",
      "Forward-Reverse",
      "Control Circuit"
    ],
    "image": "assets/05_WWTP (2).jpg",
    "gallery": [
      "assets/03_motor_control_panel_large.jpg",
      "assets/05_WWTP (1).jpg",
      "assets/05_WWTP (3).jpg",
      "assets/05_WWTP (4).jpg",
      "assets/05_WWTP (5).jpg",
      "assets/05_WWTP (6).jpg",
      "assets/05_WWTP (7).jpg"
    ]
  },

  // ============================================================
  // PROJECT 04
  // ============================================================
  {
    "id": "04",
    "title": "JUDUL PROJEK",
    "category": "KATEGORI PEKERJAAN",
    "role": "SEBAGAI APA EKSEKUTOR, KONSULTAN DLL",
    "description": "CERITAKAN RINGKAS DAN JELAS SETIAP PROJECT MUA",
    "summary": "RANGKUMAN DESKRIPSI",
    "tags": [
      "DOL",
      "Star-Delta",
      "Forward-Reverse",
      "Control Circuit"
    ],
    "image": "assets/04_SDP(2).jpg",
    "gallery": [
      "assets/03_motor_control_panel_large.jpg",
      "assets/08_panel_assembly.jpg"
    ]
  },

  // ============================================================
  // PROJECT 05
  // ============================================================
  {
    "id": "05",
    "title": "Rancang Bangun Mesin Penyangrai Biji Kopi 500grm",
    "category": "Automasi",
    "role": "Riset Dan Pengembang",
    "description": "Melakukan pengembangan mesin penyangrai biji kopi secara end-to-end, mulai dari system engineering, pemilihan komponen, mechanical 3D design, electrical wiring, assembly, hingga firmware development. Mengintegrasikan mikrokontroler, sensor citra, temperature sensor, LED lighting system, motor, blower, dan power supply menjadi satu sistem kontrol terintegrasi. Mengembangkan firmware berbasis Arduino untuk closed-loop/parameter-based control dan monitoring RPM motor, blower, pencahayaan, serta temperatur roasting secara real-time untuk mendukung proses penyangraian yang terkontrol dan repeatable.",
    "summary": "Pengembangan mesin penyangrai biji kopi berbasis embedded system dengan integrasi motor control, blower, sensor suhu, sensor citra, dan sistem pencahayaan, mencakup proses mechanical design, electrical integration, assembly, hingga firmware development dan real-time monitoring.",
    "tags": [
      "Arduino",
      "Embedded Systems",
      "Hardware Design",
      "3D Design (CAD)",
      "Wiring & Assembly",
      "Component Selection",
      "Coffee Roast Classification"
    ],
    "image": "assets/03_MDP(7).jpg",
    "gallery": [
      "assets/03_motor_control_panel_large.jpg",
      "assets/08_panel_assembly.jpg"
    ]
  },

  // ============================================================
  // PROJECT 06
  // ============================================================
  {
    "id": "06",
    "title": "Industrial Electrical Panel – Wastewater Treatment Plant",
    "category": "Electrical",
    "role": "Electrical Engineer / Panel Builder & Wiring",
    "description": "Melakukan perakitan, wiring, dan pengujian panel listrik untuk kebutuhan sistem Wastewater Treatment Plant (WWTP), termasuk instalasi rangkaian power dan control, terminal wiring, motor control, cable management, serta troubleshooting untuk memastikan panel berfungsi sesuai kebutuhan sebelum proses commissioning.",
    "summary": "Perakitan dan wiring panel listrik untuk sistem Wastewater Treatment Plant (WWTP) yang mencakup power wiring, control wiring, motor control, testing, troubleshooting, hingga commissioning.",
    "tags": [
      "Electrical Control Panel",
      "Power & Control Wiring",
      "Terminal & Cable Management",
      "Motor Control",
      "Testing & Troubleshooting",
      "Commissioning"
    ],
    "image": "assets/03_MDP(1).jpg",
    "gallery": [
      "assets/03_motor_control_panel_large.jpg",
      "assets/08_panel_assembly.jpg"
    ]
  },

  // ============================================================
  // PROJECT 07
  // ============================================================
  {
    "id": "07",
    "title": "Main Distribution Panel (MDP)",
    "category": "Electrical",
    "role": "Electrical Engineer / Panel Builder & Wiring",
    "description": "Melakukan proses assembly dan wiring Main Distribution Panel (MDP) sebagai sistem distribusi utama daya listrik, mulai dari pemasangan komponen, busbar, circuit breaker, power wiring, control wiring, cable management, hingga testing panel untuk memastikan sistem distribusi bekerja sesuai rancangan.",
    "summary": "Perakitan Main Distribution Panel (MDP) sebagai pusat distribusi daya listrik yang mencakup electrical distribution, busbar, circuit breaker, power wiring, control wiring, dan testing.",
    "tags": [
      "MDP",
      "Electrical Distribution",
      "Circuit Breaker",
      "Busbar",
      "Power Wiring",
      "Control Wiring",
      "Testing"
    ],
    "image": "assets/03_MDP(3).jpg",
    "gallery": [
      "assets/03_motor_control_panel_large.jpg",
      "assets/08_panel_assembly.jpg"
    ]
  },

  // ============================================================
  // PROJECT 08
  // ============================================================
  {
    "id": "08",
    "title": "Sub Distribution Panel (SDP)",
    "category": "Electrical",
    "role": "Electrical Engineer / Panel Builder & Wiring",
    "description": "Melakukan perakitan dan wiring Sub Distribution Panel (SDP) untuk mendistribusikan daya listrik dari sistem utama menuju kelompok beban atau area tertentu. Pekerjaan mencakup pemasangan circuit breaker, busbar, power wiring, terminal, cable management, serta testing dan troubleshooting panel.",
    "summary": "Perakitan Sub Distribution Panel (SDP) untuk distribusi daya listrik menuju berbagai kelompok beban dengan proses assembly, wiring, testing, dan troubleshooting.",
    "tags": [
      "SDP",
      "Electrical Distribution",
      "Circuit Breaker",
      "Busbar",
      "Power Wiring",
      "Testing & Troubleshooting"
    ],
    "image": "assets/03_MDP(8).jpg",
    "gallery": [
      "assets/03_motor_control_panel_large.jpg",
      "assets/08_panel_assembly.jpg"
    ]
  },

  // ============================================================
  // PROJECT 09
  // ============================================================
  {
    "id": "09",
    "title": "Motor Control & Interlock Panel",
    "category": "Automasi",
    "role": "Electrical Engineer / Panel Builder & Wiring",
    "description": "Merancang dan merakit rangkaian kontrol motor dengan sistem electrical interlock untuk mengatur pengoperasian motor sesuai sequence yang ditentukan. Pekerjaan mencakup power circuit, control circuit, contactor, relay, overload relay, serta pengujian fungsi sistem untuk memastikan operasi motor berlangsung secara aman.",
    "summary": "Pengembangan panel kontrol motor dengan integrasi power circuit, control circuit, motor protection, dan electrical interlock untuk menghasilkan sistem pengoperasian motor yang aman dan terkontrol.",
    "tags": [
      "Motor Control",
      "Electrical Interlock",
      "Contactor",
      "Relay",
      "Overload Relay",
      "Control Circuit",
      "Power Circuit"
    ],
    "image": "assets/05_WWTP().jpg",
    "gallery": [
      "assets/03_motor_control_panel_large.jpg",
      "assets/08_panel_assembly.jpg"
    ]
  },

  // ============================================================
  // PROJECT 10
  // ============================================================
  {
    "id": "10",
    "title": "DOL Motor Starter",
    "category": "Motor Control",
    "role": "Electrical Engineer / Panel Builder & Wiring",
    "description": "Membuat dan melakukan wiring rangkaian Direct-On-Line (DOL) starter untuk mengendalikan motor listrik secara langsung. Sistem mencakup rangkaian power dan control, contactor, overload relay, circuit breaker, push button, serta pengujian fungsi dan proteksi motor.",
    "summary": "Implementasi rangkaian Direct-On-Line (DOL) starter untuk pengoperasian motor secara langsung dengan integrasi sistem kontrol dan proteksi motor.",
    "tags": [
      "DOL Starter",
      "Contactor",
      "Overload Relay",
      "MCB/MCCB",
      "Push Button",
      "Control Circuit",
      "Motor Protection"
    ],
    "image": "assets/03_motor_control_panel_large.jpg",
    "gallery": [
      "assets/03_motor_control_panel_large.jpg",
      "assets/08_panel_assembly.jpg"
    ]
  },

  // ============================================================
  // PROJECT 11
  // ============================================================
  {
    "id": "11",
    "title": "Star-Delta Motor Starter",
    "category": "Motor Control",
    "role": "Electrical Engineer / Panel Builder & Wiring",
    "description": "Merakit dan melakukan wiring rangkaian Star-Delta starter untuk mengurangi arus starting motor melalui proses perpindahan koneksi dari star ke delta secara berurutan. Sistem dilengkapi contactor, timer, overload relay, electrical interlock, serta rangkaian kontrol dan proteksi motor.",
    "summary": "Pengembangan rangkaian Star-Delta starter untuk mengurangi arus starting motor melalui sistem perpindahan star ke delta dengan kontrol timer dan electrical interlock.",
    "tags": [
      "Star-Delta Starter",
      "Contactor",
      "Timer",
      "Overload Relay",
      "Electrical Interlock",
      "Control Circuit",
      "Motor Protection"
    ],
    "image": "assets/03_motor_control_panel_large.jpg",
    "gallery": [
      "assets/03_motor_control_panel_large.jpg",
      "assets/08_panel_assembly.jpg"
    ]
  },

  // ============================================================
  // PROJECT 12
  // ============================================================
  {
    "id": "12",
    "title": "Forward-Reverse Motor Control",
    "category": "Motor Control",
    "role": "Electrical Engineer / Panel Builder & Wiring",
    "description": "Membangun rangkaian kontrol Forward-Reverse untuk mengatur arah putaran motor menggunakan dua kontaktor dengan sistem electrical interlock. Sistem dirancang untuk mencegah kedua kontaktor aktif secara bersamaan sehingga meningkatkan keamanan pengoperasian motor.",
    "summary": "Pengembangan sistem kontrol arah putaran motor Forward-Reverse dengan contactor, overload protection, push button, dan electrical interlock.",
    "tags": [
      "Forward-Reverse Control",
      "Contactor",
      "Electrical Interlock",
      "Push Button",
      "Overload Relay",
      "Motor Control Circuit"
    ],
    "image": "assets/03_motor_control_panel_large.jpg",
    "gallery": [
      "assets/03_motor_control_panel_large.jpg",
      "assets/08_panel_assembly.jpg"
    ]
  },

  // ============================================================
  // PROJECT 13
  // ============================================================
  {
    "id": "13",
    "title": "PLC I/O Control Panel",
    "category": "PLC & Automasi",
    "role": "Electrical Engineer / Panel Builder & Wiring",
    "description": "Melakukan assembly dan wiring panel kontrol berbasis PLC dengan mengintegrasikan perangkat input dan output ke terminal serta sistem kontrol. Pekerjaan mencakup wiring sensor, actuator, digital input/output, terminal block, cable management, dan troubleshooting koneksi I/O.",
    "summary": "Perakitan dan wiring PLC I/O Control Panel sebagai interface antara PLC dengan sensor dan actuator pada sistem automation.",
    "tags": [
      "PLC",
      "Digital Input/Output",
      "Terminal Block",
      "Control Wiring",
      "Sensors",
      "Actuators",
      "Troubleshooting"
    ],
    "image": "assets/03_motor_control_panel_large.jpg",
    "gallery": [
      "assets/03_motor_control_panel_large.jpg",
      "assets/08_panel_assembly.jpg"
    ]
  },

  // ============================================================
  // PROJECT 14
  // ============================================================
  {
    "id": "14",
    "title": "PLC & HMI Automation System",
    "category": "PLC & Automasi",
    "role": "Automation Engineer / PLC Programmer",
    "description": "Mengembangkan sistem automation menggunakan PLC dan HMI, mulai dari konfigurasi perangkat, pengalamatan PLC, konfigurasi HMI, komunikasi PLC-HMI, hingga pengaturan komunikasi RS485. Sistem dikembangkan untuk mendukung monitoring dan pengoperasian proses secara terintegrasi.",
    "summary": "Pengembangan sistem otomasi industri berbasis PLC dan HMI untuk monitoring dan pengoperasian sistem dengan integrasi komunikasi PLC-HMI dan RS485.",
    "tags": [
      "PLC",
      "HMI",
      "PLC Programming",
      "HMI Configuration",
      "RS485",
      "Industrial Communication",
      "Studio 5000 Logix Designer"
    ],
    "image": "assets/03_motor_control_panel_large.jpg",
    "gallery": [
      "assets/03_motor_control_panel_large.jpg",
      "assets/08_panel_assembly.jpg"
    ]
  },

  // ============================================================
  // PROJECT 15
  // ============================================================
  {
    "id": "15",
    "title": "Special Purpose Machine (SPM) – R&D",
    "category": "Riset & Pengembangan",
    "role": "Research & Development Engineer",
    "description": "Terlibat dalam kegiatan research and development Special Purpose Machine (SPM) untuk mendukung kebutuhan proses manufaktur tertentu. Pekerjaan mencakup pengembangan sistem, integrasi komponen electrical dan automation, machine development, serta proses testing untuk memastikan sistem dapat bekerja sesuai kebutuhan.",
    "summary": "Pengembangan Special Purpose Machine (SPM) untuk kebutuhan manufaktur dengan fokus pada system development, electrical integration, automation, dan testing.",
    "tags": [
      "Special Purpose Machine",
      "R&D",
      "Electrical System",
      "Automation",
      "Machine Development",
      "Testing"
    ],
    "image": "assets/03_motor_control_panel_large.jpg",
    "gallery": [
      "assets/03_motor_control_panel_large.jpg",
      "assets/08_panel_assembly.jpg"
    ]
  },

  // ============================================================
  // PROJECT 16
  // ============================================================
  {
    "id": "16",
    "title": "Obstacle Avoider Robot",
    "category": "Robotika",
    "role": "Embedded System / Robotics Engineer",
    "description": "Mengembangkan robot mobile autonomous yang mampu mendeteksi keberadaan objek menggunakan sensor ultrasonik dan menentukan pergerakan untuk menghindari obstacle secara otomatis. Sistem mengintegrasikan mikrokontroler, sensor ultrasonic, motor driver, dan DC motor sebagai sistem kendali utama.",
    "summary": "Pengembangan robot autonomous berbasis mikrokontroler dengan sensor ultrasonik untuk mendeteksi dan menghindari obstacle secara otomatis.",
    "tags": [
      "Arduino",
      "Ultrasonic HC-SR04",
      "DC Motor",
      "Motor Driver",
      "Embedded C/C++",
      "Autonomous Control"
    ],
    "image": "assets/03_motor_control_panel_large.jpg",
    "gallery": [
      "assets/03_motor_control_panel_large.jpg",
      "assets/08_panel_assembly.jpg"
    ]
  },

  // ============================================================
  // PROJECT 17
  // ============================================================
  {
    "id": "17",
    "title": "Kontes Robot Indonesia 2022",
    "category": "Robotika",
    "role": "Robotics Engineer / Team Leader",
    "description": "Terlibat dalam pengembangan sistem robot untuk mengikuti Kontes Robot Indonesia 2022, mencakup pengembangan sistem kontrol, integrasi perangkat elektronik, motor control, sensor integration, troubleshooting, dan koordinasi tim selama proses pengembangan robot.",
    "summary": "Pengembangan robot kompetisi dengan fokus pada sistem kontrol, integrasi elektronik, sensor, motor control, troubleshooting, dan koordinasi tim.",
    "tags": [
      "Robotics",
      "Arduino/Microcontroller",
      "Motor Control",
      "Sensors",
      "Embedded System",
      "System Integration",
      "Team Leadership"
    ],
    "image": "assets/03_MDP(5).jpg",
    "gallery": [
      "assets/03_motor_control_panel_large.jpg",
      "assets/08_panel_assembly.jpg"
    ]
  },

  // ============================================================
  // PROJECT 18
  // ============================================================
  {
    "id": "18",
    "title": "Rancang Bangun Mesin Penyangrai Biji Kopi 500grm (Advanced)",
    "category": "Automasi",
    "role": "Riset Dan Pengembang",
    "description": "Melakukan pengembangan mesin penyangrai biji kopi secara end-to-end, mulai dari system engineering, pemilihan komponen, mechanical 3D design, electrical wiring, assembly, hingga firmware development. Mengintegrasikan mikrokontroler, temperature sensor, motor, blower, heater, agitator, dan power supply menjadi satu sistem kontrol terintegrasi. Mengembangkan sistem kontrol berbasis Arduino untuk monitoring RPM motor, blower, serta temperatur roasting secara real-time guna mendukung proses penyangraian yang terkontrol dan repeatable.",
    "summary": "Pengembangan mesin penyangrai biji kopi berkapasitas 500 gram berbasis embedded system dengan integrasi motor control, blower, heater, sensor suhu, agitator, mechanical design, electrical integration, assembly, hingga firmware development dan real-time monitoring.",
    "tags": [
      "Arduino",
      "Embedded Systems",
      "Hardware Design",
      "3D Design (CAD)",
      "Wiring & Assembly",
      "Component Selection",
      "Temperature Control",
      "Motor Control",
      "Hot-Air Roasting System"
    ],
    "image": "assets/03_motor_control_panel_large.jpg",
    "gallery": [
      "assets/03_motor_control_panel_large.jpg",
      "assets/08_panel_assembly.jpg"
    ]
  },

  // ============================================================
  // PROJECT 19
  // ============================================================
  {
    "id": "19",
    "title": "Automatic Moringa Leaf Dryer",
    "category": "Automasi",
    "role": "Research & Development Engineer",
    "description": "Mengembangkan sistem pengering daun kelor dengan kontrol temperatur otomatis menggunakan heater, PWM, sensor temperatur, LCD, dan metode PID. Sistem dirancang untuk mempertahankan temperatur proses sesuai setpoint melalui pengendalian heater secara otomatis.",
    "summary": "Pengembangan sistem pengering otomatis berbasis PID untuk mengontrol temperatur proses menggunakan heater, PWM, sensor temperatur, dan mikrokontroler.",
    "tags": [
      "Arduino",
      "Heater",
      "Optocoupler",
      "PWM",
      "PID Control",
      "LCD 16×2",
      "Temperature Sensor"
    ],
    "image": "assets/03_MDP(6).jpg",
    "gallery": [
      "assets/03_motor_control_panel_large.jpg",
      "assets/08_panel_assembly.jpg"
    ]
  },

  // ============================================================
  // PROJECT 20
  // ============================================================
  {
    "id": "20",
    "title": "Smart Agriculture & Automatic Irrigation System",
    "category": "IoT & Automasi",
    "role": "IoT / Embedded System Engineer",
    "description": "Mengembangkan sistem smart agriculture untuk mengotomatisasi proses penyiraman berdasarkan kondisi kelembapan tanah. Sistem mengintegrasikan sensor soil moisture dengan mikrokontroler, solenoid valve, water pump, dan fertilizer control sehingga proses pemberian air dapat dikendalikan berdasarkan kondisi tanah.",
    "summary": "Pengembangan sistem irigasi otomatis berbasis IoT yang menggunakan sensor kelembapan tanah untuk mengontrol valve, pompa, dan sistem pemberian fertilizer.",
    "tags": [
      "Arduino",
      "ESP8266",
      "Soil Moisture Sensor YL-69",
      "Solenoid Valve",
      "Water Pump",
      "Fertilizer Control",
      "IoT"
    ],
    "image": "assets/03_motor_control_panel_large.jpg",
    "gallery": [
      "assets/03_motor_control_panel_large.jpg",
      "assets/08_panel_assembly.jpg"
    ]
  },

  // ============================================================
  // PROJECT 21
  // ============================================================
  {
    "id": "21",
    "title": "IoT Energy Monitoring System",
    "category": "IoT",
    "role": "IoT / Embedded System Engineer",
    "description": "Mengembangkan sistem monitoring parameter listrik secara real-time menggunakan ESP8266 dan PZEM-004T V3.0. Sistem membaca parameter energi listrik kemudian mengirimkan dan menyimpan data secara berkala menggunakan integrasi Google Sheets, Python, dan Raspberry Pi sebagai bagian dari sistem monitoring berbasis IoT.",
    "summary": "Pengembangan sistem monitoring energi listrik berbasis IoT menggunakan ESP8266 dan PZEM-004T dengan integrasi data logging melalui Google Sheets, Python, dan Raspberry Pi.",
    "tags": [
      "ESP8266",
      "PZEM-004T V3.0",
      "Arduino",
      "Energy Monitoring",
      "Google Sheets",
      "Python",
      "Raspberry Pi",
      "IoT Communication"
    ],
    "image": "assets/03_motor_control_panel_large.jpg",
    "gallery": [
      "assets/03_motor_control_panel_large.jpg",
      "assets/08_panel_assembly.jpg"
    ]
  },

  // ============================================================
  // PROJECT 22
  // ============================================================
  {
    "id": "22",
    "title": "Battery Pack + Solar Charging System",
    "category": "Battery",
    "role": "Research & Development Engineer",
    "description": "Merancang dan mengembangkan sistem penyimpanan energi berbasis baterai Li-ion yang terintegrasi dengan sistem pengisian tenaga surya, termasuk perencanaan kapasitas baterai, sistem proteksi, dan konfigurasi pengisian.",
    "summary": "Project pengembangan sistem penyimpanan dan pengisian energi yang mengintegrasikan battery pack Li-ion dengan solar charging system untuk kebutuhan suplai daya mandiri.",
    "tags": [
      "Li-ion Battery",
      "3S BMS 60A",
      "Solar Panel",
      "PWM Solar Charge Controller",
      "Battery Capacity Planning",
      "Power System Design"
    ],
    "image": "assets/03_MDP(6).jpg",
    "gallery": [
      "assets/03_motor_control_panel_large.jpg",
      "assets/08_panel_assembly.jpg"
    ]
  }
];

// ============================================================
// END OF PROJECT DATABASE
// ============================================================