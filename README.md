# ClearHandover

AI-powered vehicle condition scanning for car rental, car-sharing, and used-car dealers. Upload photos at pickup and return — get an objective, timestamped damage report in seconds.

[![Hugging Face](https://img.shields.io/badge/Hugging%20Face-Model-yellow?logo=huggingface)](https://huggingface.co/YOUR_USERNAME/ClearHandover)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Python](https://img.shields.io/badge/Python-3.10+-3776AB?logo=python&logoColor=white)](https://www.python.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-React-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![YOLOv8](https://img.shields.io/badge/YOLOv8-Ultralytics-00FFFF?logo=yolo&logoColor=black)](https://github.com/ultralytics/ultralytics)
[![OpenCV](https://img.shields.io/badge/OpenCV-Computer%20Vision-5C3EE8?logo=opencv&logoColor=white)](https://opencv.org/)
[![Firebase](https://img.shields.io/badge/Firebase-Backend-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)
[![GCP](https://img.shields.io/badge/GCP-Cloud%20Run-4285F4?logo=googlecloud&logoColor=white)](https://cloud.google.com/run)

---

## What it does

ClearHandover automates vehicle condition documentation at the moment it matters most: handover. Renters and dealers photograph the vehicle from a phone, and the model flags scratches, dents, and panel misalignment — creating an objective record that reduces disputed damage claims.

- 📸 **Snap & scan** — no special hardware, just phone photos
- 🤖 **AI damage detection** — YOLOv8 + OpenCV pipeline trained on scratches, dents, and misalignment
- 📄 **Instant reports** — shareable PDF/web report with flagged defects and confidence scores
- 🕒 **Before/after comparison** — objective record at pickup and return
- ☁️ **Cloud-native** — deployed on Cloud Run, scales with fleet size

## Why

Damage disputes at vehicle handover cost rental companies and dealers real money — and cost renters unfair charges. Enterprise solutions (scanning tunnels, hardware-bundled systems) are built for large chains. ClearHandover is built for independent dealers, small rental agencies, and car-sharing operators who need the same objectivity without the enterprise price tag.

## Tech stack

| Layer | Tech |
|---|---|
| Frontend | React, TypeScript |
| Backend | Node.js, Express |
| AI/CV | YOLOv8, OpenCV, TensorFlow |
| Data | Firebase / Firestore |
| Infra | Docker, GCP Cloud Run |
| Model hosting | Hugging Face |

## Getting started

```bash
# clone the repo
git clone https://github.com/YOUR_USERNAME/ClearHandover.git
cd ClearHandover

# install dependencies
npm install

# run locally
npm run dev
```

## Roadmap

- [ ] MVP: upload → detect → report loop
- [ ] Damage severity scoring & cost estimates
- [ ] Before/after comparison view
- [ ] Pilot with a local rental agency
- [ ] Mobile-first capture flow

## License

MIT
