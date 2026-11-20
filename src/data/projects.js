export const projects = [
  {
    id: 'battery-bms',
    index: '01',
    title: 'INTELLIGENT EV BMS',
    kicker: 'EMBEDDED × DIGITAL TWIN',
    short: 'STM32 battery management firmware co-simulated with an OpenModelica electro-thermal plant model.',
    description:
      'A software-in-the-loop EV battery management system pairing STM32 embedded firmware with a high-fidelity OpenModelica electro-thermal digital twin. Real-time telemetry drives multi-stage CC→CV charging, runaway thermal protection, and safety state machines — simulated in Renode before touching real silicon.',
    status: 'ONGOING',
    accent: 'green',
    cover: '/(bms)om_env.png',
    chips: ['STM32', 'Embedded C', 'OpenModelica', 'Renode'],
    metrics: [
      ['PLANT MODEL', 'OpenModelica'],
      ['CHARGING', 'Adaptive CC → CV'],
      ['SIMULATION', 'Renode + STM32'],
    ],
    architecture: [
      'Electro-Thermal Plant (OpenModelica)',
      'Telemetry Stream (V, I, T)',
      'STM32 State Machine',
      'CC→CV & Fault Protection',
      'Renode Virtual Co-Simulation',
    ],
    implementation:
      'Modeled nonlinear cell internal resistance, discharge curves, and heat dissipation in OpenModelica. The STM32 firmware treats this model as real physical hardware, running an event-driven state machine to govern constant-current constant-voltage charging, thermal throttling, and emergency disconnects. Renode bridges the gap, executing compiled ARM binaries against the plant telemetry in real time.',
    challenges: [
      'Modeling realistic thermal runaway conditions without equation instability in OpenModelica.',
      'Enforcing strict microsecond safety cutoffs while allowing flexible user charging policies in embedded C.',
      'Co-simulating discrete firmware state transitions with continuous-time physical battery dynamics.',
    ],
    learned: [
      'A robust BMS is fundamentally a tight electro-thermal control loop, not just a passive monitor.',
      'Digital twins and co-simulation catch dangerous thermal runaway and overcharge edge cases before touching real cells.',
      'Clean separation between hardware-level trip conditions and user charging preferences prevents catastrophic failure.',
    ],
    result:
      'OpenModelica electro-thermal model is running and coupled to the STM32 control firmware. CC→CV state machine, thermal throttling, and fault cutoffs validated in simulation.',
    technologies: ['STM32', 'STM32CubeIDE', 'Embedded C', 'OpenModelica', 'Renode', 'State machines', 'Digital Twin'],
    links: [],
    media: [
      { type: 'image', label: 'OpenModelica Electro-Thermal Model Setup', url: '/(bms)om_env.png' },
      { type: 'image', label: 'Voltage, Current & Thermal Transient Simulation', url: '/(bms)om_graph.png' },
    ],
  },
  {
    id: 'holo-battalion',
    index: '02',
    title: 'HOLO BATTALION',
    kicker: 'ROBOTICS + ROS2',
    short: 'Three-wheel holonomic robot with ROS2, PID control, inverse kinematics and ArUco vision.',
    description:
      'Built for the e-Yantra Holo Battalion task. Three omni wheels (~185 mm robot radius, ~0.038 m wheel radius) give the robot holonomic motion. ROS2 nodes handle the control loop — desired chassis velocity goes through inverse kinematics to individual wheel commands, PID closes the loop. ArUco markers are used for visual tasks.',
    status: 'COMPETITION WORK',
    accent: 'blue',
    chips: ['ROS2', 'PID', 'ArUco'],
    metrics: [
      ['DRIVE', '3 omni wheels'],
      ['GEOMETRY', '~185 mm radius'],
      ['VISION', 'ArUco markers'],
    ],
    architecture: [
      'ArUco detection',
      'Desired robot motion',
      'Inverse kinematics',
      'PID per wheel',
      'Holonomic drive',
    ],
    implementation:
      'ROS2 handles the node graph — perception, control and actuation as separate nodes communicating over topics. A Python control node takes desired (vx, vy, ω) and computes wheel velocity commands via the holonomic inverse kinematics matrix. PID runs on each wheel. Gazebo simulates the robot; RViz and rqt are used for debugging.',
    challenges: [
      'Coordinate frame consistency across perception, control and kinematics nodes.',
      'PID tuning — bad gains hid kinematic bugs and vice versa.',
      'Getting ArUco pose estimates usable within the ROS2 control loop.',
    ],
    learned: [
      'Start from chassis velocity, derive wheel commands — not the other way around.',
      'A correct controller still fails when frames are mixed up.',
      'RViz and rqt_graph are essential — not optional — debugging tools for ROS2 systems.',
    ],
    result:
      'Completed the holonomic motion control and ArUco perception pipeline. Simulation working in Gazebo. Competition work for e-Yantra Holo Battalion.',
    technologies: ['ROS2 Humble', 'Gazebo', 'Python', 'PID', 'ArUco', 'RViz2', 'Inverse kinematics'],
    cover: '/(title)Holo Battalion Robot Arena.png',
    links: [],
    media: [
      { type: 'video', label: 'Gazebo Simulation', url: '/(holo)gazebo square - side view.mp4' },
      { type: 'image', label: 'RQT Graph', url: '/rqt-graph(holo).jpg' },
      { type: 'video', label: 'Top View with Terminals', url: '/(holo) top view with terminals Trim.mp4' },
    ],
  },
  {
    id: 'mapping-robot',
    index: '03',
    title: 'MAPPING ROBOT',
    kicker: 'MOBILE ROBOTICS',
    short: 'Low-cost mobile platform using VL53L1X and ESP32-CAM to build spatial data in ROS2.',
    description:
      'An ongoing build exploring how cheap sensors — VL53L1X time-of-flight and ESP32-CAM — can feed spatial data into ROS2 and produce something useful in RViz. Running on Raspberry Pi hardware. Still being assembled and debugged.',
    status: 'ONGOING',
    accent: 'cyan',
    chips: ['ROS2', 'VL53L1X', 'ESP32-CAM'],
    metrics: [
      ['SENSING', 'ToF + camera'],
      ['MIDDLEWARE', 'ROS2'],
      ['VIEW', 'RViz2'],
    ],
    architecture: [
      'VL53L1X + ESP32-CAM',
      'Sensor nodes',
      'ROS2 topics',
      'Processing',
      'RViz visualization',
    ],
    implementation:
      'Distance readings from VL53L1X and image data from ESP32-CAM are published as ROS2 topics from the Raspberry Pi. OpenCV handles basic image processing. RViz is used to inspect the sensor data spatially. The robot is being built out incrementally.',
    challenges: [
      'Getting consistent geometry from inexpensive sensors.',
      'Time-aligning data from sensors with different rates.',
      'Understanding how sensor placement affects what can actually be mapped.',
    ],
    learned: [
      'Mapping is a coordinate-system and timing problem as much as a sensing problem.',
      'Cheap sensors need to be calibrated against something real before trusting the output.',
      'RViz makes sensor problems visible much faster than printing values to a terminal.',
    ],
    result:
      'Work in progress. Hardware assembled, sensors publishing to ROS2 topics. Mapping pipeline still being developed.',
    technologies: ['ROS2', 'RViz2', 'ESP32-CAM', 'VL53L1X', 'OpenCV', 'Raspberry Pi', 'Python'],
    links: [],
    media: [],
  },
  {
    id: 'robotic-arm',
    index: '04',
    title: '4-DOF ROBOTIC ARM',
    kicker: 'EMBEDDED ROBOTICS',
    short: 'Physical four-axis arm built with servo motors and embedded PWM control.',
    description:
      'Built a four-degree-of-freedom robotic arm from scratch. Control is done through a microcontroller generating PWM signals to drive servo motors at each joint. Experimented with wired and wireless/web-based control interfaces.',
    status: 'BUILT',
    accent: 'orange',
    chips: ['Servo', 'PWM', 'Embedded'],
    metrics: [
      ['DOF', '4'],
      ['ACTUATION', 'Servo motors'],
      ['CONTROL', 'Microcontroller'],
    ],
    architecture: [
      'User input',
      'Microcontroller',
      'PWM signals',
      'Servo motors',
      'Arm joints',
    ],
    implementation:
      'Each joint is driven by a servo motor positioned through PWM duty-cycle control from the microcontroller. User commands are mapped to joint target angles and converted to pulse widths. Also tested wireless control through a simple web interface.',
    challenges: [
      'Mapping user input to joint motion that actually looks useful.',
      'Mechanical limits — servos fight back when you push against physical constraints.',
      'Dealing with joint interactions where moving one axis moves the apparent position of another.',
    ],
    learned: [
      'PWM control is straightforward once you can watch the servo move in response.',
      'Real mechanisms expose assumptions quickly — things that look right in code can be wrong on hardware.',
      'Calibrating zero positions for each joint properly matters more than I expected.',
    ],
    result:
      'Working arm built and tested. Used it to understand embedded control, servo behaviour and the gap between software angles and physical movement.',
    technologies: ['Embedded C', 'PWM', 'Servo motors', 'Microcontroller', 'Robotics'],
    cover: '/(title)DIY Robotic Arm Workbench Setup.png',
    links: [],
    media: [
      { type: 'image', label: 'Robotic Arm System', url: '/arm_photo.jpg' },
      { type: 'video', label: 'Initial Integration Test', url: '/Initial_test _arm.mp4' },
      { type: 'video', label: 'Arm Movement', url: '/arm_movement.mp4' },
    ],
  },
  {
    id: 'battlebot',
    index: '05',
    title: '15 KG BATTLEBOT',
    kicker: 'SYSTEM INTEGRATION',
    short: '~15 kg combat robot integrating motor drive, power electronics, RC control and a physical chassis.',
    description:
      'Built a ~15 kg combat robot. Involved picking and wiring motor drivers, handling the battery and power distribution, setting up radio control, building the chassis and getting everything to work together under real load.',
    status: 'BUILT',
    accent: 'yellow',
    chips: ['Motor Control', 'Power', 'Integration'],
    metrics: [
      ['MASS', '~15 kg'],
      ['SYSTEM', 'Electromechanical'],
      ['MODE', 'Radio control'],
    ],
    architecture: [
      'RC transmitter',
      'Receiver',
      'Motor drivers',
      'Drive motors',
      'Chassis',
    ],
    implementation:
      'Motor drivers receive signals from the RC receiver and drive the motors. Power comes from a LiPo system with basic distribution and protection. The chassis holds electronics and motors together under combat conditions. Most of the work was packaging, wiring and testing under real load.',
    challenges: [
      'Electronics packaging that survives impacts and high-current draw.',
      'Power system reliability — motors pulling hard current under load.',
      'Finding failures through physical testing when the problem could be mechanical, electrical or both.',
    ],
    learned: [
      'Current handling and connector choice matter at this scale.',
      'Mechanical and electrical problems look similar when the robot just stops working.',
      'Physical testing finds failure modes that sitting at a desk never will.',
    ],
    result:
      'Built and drove a working ~15 kg battlebot. Good hands-on experience with power electronics, motor control and putting a complete system together.',
    technologies: ['Motor drivers', 'Power electronics', 'Radio control', 'Mechanical integration', 'Embedded electronics'],
    cover: '/battelbot(bot1).jpg',
    links: [],
    media: [],
  },
  {
    id: 'esp32-lab',
    index: '06',
    title: 'ESP32 LAB',
    kicker: 'EMBEDDED EXPERIMENTS',
    short: 'ESP32 and ESP-IDF experiments — firmware, peripherals, serial debugging, camera and wireless.',
    description:
      'An ongoing set of ESP32 experiments using ESP-IDF as the development environment. Not a single product — a place to actually learn the microcontroller. Covers GPIO, ADC, UART, SPI, I2C, Wi-Fi, BLE, deep sleep, FTDI flashing and ESP32-CAM.',
    status: 'ONGOING',
    accent: 'violet',
    chips: ['ESP32', 'ESP-IDF', 'Embedded C'],
    metrics: [
      ['SDK', 'ESP-IDF'],
      ['I/O', 'GPIO + ADC + comms'],
      ['POWER', 'Deep sleep'],
    ],
    architecture: [
      'ESP-IDF firmware',
      'MCU peripherals',
      'Sensors / camera',
      'Serial debug / output',
    ],
    implementation:
      'Working directly with ESP-IDF — no Arduino abstraction. Build, flash, read serial. Each experiment targets a specific peripheral or concept: blinking with proper GPIO config, reading analog, UART communication, camera stream from ESP32-CAM, BLE advertisement, deep sleep wake behaviour. FTDI adapter used for programming and serial debug.',
    challenges: [
      'ESP-IDF has a steep startup compared to Arduino-style frameworks.',
      'Distinguishing wiring problems from firmware or config problems.',
      'Understanding power modes — deep sleep behaviour depends on what is configured before sleep.',
    ],
    learned: [
      'Reading the peripheral registers and ESP-IDF docs directly is faster than hoping example code works.',
      'Serial output is the most useful debugging tool when you have no other visibility.',
      'Getting comfortable with the toolchain is the first real skill, everything else builds on it.',
    ],
    result:
      'Solid working knowledge of ESP32 and ESP-IDF through direct experimentation. This feeds directly into the camera and wireless work in the mapping robot project.',
    technologies: ['ESP32', 'ESP32-CAM', 'ESP-IDF', 'Embedded C', 'FTDI', 'UART', 'GPIO', 'ADC', 'Wi-Fi', 'BLE', 'Deep sleep'],
    cover: '/(emb1)title_rotated.jpg',
    coverFit: 'contain',
    links: [],
    media: [
      { type: 'image', label: 'Tilt-Controlled Pixel Space Shooter', url: '/(emb1)Tilt-Controlled Pixel Space Shooter Setup.png' },
      { type: 'image', label: 'ESP32-CAM Web Interface', url: '/(emb1)esp32cam_web_interface.png' },
      { type: 'image', label: 'Setup', url: '/(emb2)IMG-20261005-WA0006 (3).jpg' },
      { type: 'image', label: 'Setup', url: '/(emb2)IMG-20261005-WA0006 (4).jpg' },
      { type: 'image', label: 'Setup', url: '/(emb2)IMG-20261005-WA0006 (5).jpg' },
    ],
  },
];
