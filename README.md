# RobiLearn

**Learn robotics by programming it, not by watching a slide about it.**

![Status](https://img.shields.io/badge/status-Beta-orange)
![Frontend](https://img.shields.io/badge/frontend-React%20%2F%20TypeScript-61DAFB)
![3D](https://img.shields.io/badge/3D-Three.js%20%2F%20R3F-black)
![Rating](https://img.shields.io/badge/beta%20rating-4.7%E2%98%85-yellow)
![License](https://img.shields.io/badge/license-MIT-green)

---

## The problem

Most robotics education is either a video you watch or a $2,000 kit you buy. Neither one lets you actually break something and see why. RobiLearn puts a real-time 3D robot in the browser, gives you five different robot types to program, and lets you fail fast in simulation instead of waiting on hardware.

## How it works

```
                    Choose a Robot
                          |
                          v
        ┌──────────────────────────────────┐
        │        Multi-Modal Program        │
        │  Natural language · Block-based   │
        │      Python · JavaScript          │
        └──────────────────────────────────┘
                          |
                          v
        ┌──────────────────────────────────┐
        │      Real-Time 3D Simulator       │
        │   state mgmt · motion sequencing  │
        │   sensor readings · reset/replay  │
        └──────────────────────────────────┘
                          |
                          v
        ┌──────────────────────────────────┐
        │        AI Learning Assistant      │
        │  explains · debugs · hints        │
        │  never just hands you the answer  │
        └──────────────────────────────────┘
                          |
                          v
              Next Challenge Unlocked
```

The simulator is the core engineering surface: async movement execution, motion sequencing, rotation commands, wait operations, and simulated sensor readings, all rendered in real time rather than pre-baked animation.

## Core features

**Real-time 3D simulator**
Manipulate robots directly in a live 3D environment and watch state changes instantly, instead of reasoning about robotics in the abstract.

**Five robot types**
Robotic arms, drones, and mobile robots share one interface, so learners see how the same programming concepts apply across very different physical systems.

**Program however you think**
Natural language commands, block-based programming, Python, or JavaScript — beginners and experienced programmers both have a way in.

**AI learning assistant**
Explains concepts, suggests improvements, debugs broken programs, and gives guided hints. It's built to coach through the problem, not hand over the solution.

**Progressive curriculum**
10+ structured lessons and challenges covering movement, navigation, sensors, and autonomous behavior, with progress tracked across sessions so nothing resets between visits.

## Tech stack

| Layer | Tools |
|---|---|
| Frontend | React, TypeScript, Tailwind CSS |
| 3D / Graphics | Three.js, React Three Fiber, real-time scene rendering |
| State | Zustand |
| Animation | Framer Motion |
| Backend | Node.js, REST APIs |
| AI | LLM-powered tutoring, contextual code suggestions |


## Project structure

```
robilearn/
├── src/
│   ├── simulator/         # State management, motion sequencing, sensors
│   ├── components/        # 3D scene, editor, challenge UI
│   ├── programming/        # Natural language / block / Python / JS handlers
│   ├── assistant/          # AI tutoring and debugging layer
│   └── App.tsx
├── public/
└── README.md
```

## Why this exists

Robotics has one of the highest barriers to entry in engineering education: expensive hardware, slow iteration, and a learning curve that punishes curiosity. RobiLearn tries to make the first hour of learning robotics feel like play, not procurement.

---

*Co-founded and built by [Yugav Bhatia](https://github.com/ybhatia10088)*
