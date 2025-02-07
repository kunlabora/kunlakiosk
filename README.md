# Kunlakiosk

Een simpele Raspberry PI based Kiosk voor Kunlabora die via HDMI CEC het actieve kanaal wordt wanneer de Open Space Apple TV niet meer actief is.

| Spec | Waarde         |
|------|----------------|
| **HW**   | Raspberry Pi 3 |
| **OS**   | DietPi         |
| **Webpagina** | https://kunlakiosk.netlify.app |

### How it works
DietPi staat ingesteld om Chromium in kiosk mode te starten op de webpagina hierboven. Dit was the easy part.

Hiernaast runt er op de achtergrond met `systemd` een background scriptje. Dit script pingt elke minuut de Apple TV om te kijken of deze nog actief is. Zo niet stuurt de RPI een HDMI CEC signaal dat het kanaal terug wijzigt naar dat van de RPI.

### Contribute
Pas de kiosk aan door de code onder `./kiosk` aan te passen.
De kiosk gebruikt data die aangeboden wordt door de Netlify Functions (basically serverless / lambda) onder `./kiosk-functions`

### Recreate OS
// TODO: document full recreation 

**DietPi**
```bash
dietpi-config # Start dietpi-config UI
```
**Mac**
```bash
arp -a # Scan devices on the local network
```

### TODO
- [x] ~~Monitor Apple TV status (169.254.211.214, 3.0.0.0)~~
- [ ] Verbindt RPI met het internet (hotspot temp)
- [x] ~~Auto switch naar RPI on standby~~
- [ ] Kiosk webpagina maken (met auto-refresh)
- [ ] Kiosk webpagina als default instellen op DietPI
- [x] ~~Module: The Happy Broadcast~~
- [ ] Module: Kunlabora events
- [ ] Module: Kunlabora nieuws
- [ ] Module: Kunlabora parking
- [ ] Module: Kunlabora meeting rooms
- [ ] Module: most liked Slack message
