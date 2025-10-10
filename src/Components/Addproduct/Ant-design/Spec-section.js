export const specSections = [
  {
    key: "processor",
    title: "Processor",
    fields: ["Cpu", "Socket", "BIOS", "Secure Flash"],
  },
  {
    key: "expansion_slot",
    title: "ExpansionSlot",
    fields: ["M.2"],
  },
  {
    key: "memory",
    title: "Memory",
    fields: ["Technology", "Capacity", "Socket"],
  },
   {
    key: "ethernet",
    title: "Ethernet",
    fields: ["Controller Speed", "Connector" ],
  },

  {
    key: "graphics",
    title: "Graphics",
    fields: [
      "Controller",
      "HDMI",
      "Display Port",
      "LVDS",
      "EDP",
      "MultiDisplay",
    ],
  },
    {
    key: "storage",
    title: "Storage",
    fields: [ "M:2","SATA",]
    },
     {
    key: "power",
    title: "Power requirements",
    fields: ["Input power", "Power On",]
    },
     {
    key: "form_factor",
    title: "Form factor",
    fields: ["Dimensions"],
  },
    {
    key: "reario",
    title: "Rear I/O",
    fields: ["HDMI", "Display port", "Ethernet", "USB"],
  },
   {
    key: "internal",
    title: "Internal Connection",
    fields: ["USB", "COM", "GPIO", "LVDs","Speaker header","MIPI camera header"],
  },
     {
    key: "audio",
    title: "Audio",
    fields: ["Interface.2"],
  },
    {
    key: "security",
    title: "Security",
    fields: ["TPM"],
  },
    {
    key: "watchdog",
    title: "Watchdog Timer",
    fields: ["Output","Interval"],
  },

   {
    key: "enviorment",
    title: "Enviorment",
    fields: ["Operating Temp", "Storage Temp", "Operating Humidity", "Storage Humidity"],
  },
]