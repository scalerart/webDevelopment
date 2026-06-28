/*
MODULE 1 — JavaScript Deep Foundation (Node.js শুরু করার আগে)
    লক্ষ্য: Node.js শেখার আগে JavaScript খুব শক্ত করা।

    Topics
        1.  JavaScript Core
            1.  JS Engine
            2.  Execution Context
            3.  Call Stack
            4.  Memory Model
            5.  Hoisting
            6.  Scope
            7.  Temporal Dead Zone

        2.  Variables
            1.  var
            2.  let
            3.  const

        3.  Data Types
            1.  Primitive
            2.  Reference

        4.  Operators
            1.  Arithmetic Operators
            2.  Assignment Operators
            3.  Comparison Operators
            4.  Logical 
            
        5.  Control Flow & Logic Building
            1.  if, else, switch
            2.  Loops: for, while, do...while
            3.  Break & Continue
            4.  Truthy / Falsy
            5.  Nested loops
            6.  Basic Time Complexity(intro)

        6.  Functions
            1.  Function Declaration
            2.  Expression
            3.  Arrow Function
            4.  Callback
            5.  Higher Order Function

        7.  Objects
            1.  Object Methods
            2.  Destructuring
            3.  Spread
            4.  Rest

        8.  Arrays
            1.  map
            2.  filter
            3.  reduce
            4.  find
            5.  some
            6.  every

        9.  DOM Manipulation(Real World)
            1.  DOM basics
            2.  Selectors
            3.  Event handling
            4.  Event bubbling & delegation
            5.  DOM traversal
            6.  Form handling & validation
            7.  Dynamic element create
            8.  DOM performance basics            

        10.  Modern JS
            1.  Template literals
            2.  Destructuring
            3.  Modules(import/export)
            4.  Optional chaining
            5.  Nullish coalescing
            6.  Set & Map
            7.  Symbol(basic)
            8.  Generators(intro)

        11.  Asynchronous JavaScript(CORE)
            1.  Callbacks
            2.  Promises
            3.  async / await
            4.  Event Loop
            5.  Microtask vs Macrotask
            6.  Fetch API
            7.  Error handling(try/catch)
            8.  Promise chaining
            9.  Parallel vs Sequential async
            10. AbortController

        12.  OOP in JavaScript
            1.  OOP concepts
            2.  Classes & Constructor
            3.  Inheritance
            4.  Encapsulation
            5.  Prototype & prototype chain
            6.  Factory function
            7.  Composition vs Inheritance

        13. Advanced JavaScript Concepts
            1.  Execution Context
            2.  Call Stack
            3.  Closures(deep)
            4.  Hoisting
            5.  Scope
            6.  this keyword
            7.  Bind, Call, Apply
            8.  Currying
            9.  Lexical Environment
            10. Temporal Dead Zone

        14. Functional Programming
            1.  Pure function
            2.  Immutability
            3.  Composition
            4.  Memoization
            5.  map vs reduce real use

        15. Browser & Web APIs
            1.  LocalStorage / SessionStorage
            2.  Cookies
            3.  Geolocation API
            4.  Fetch vs Axios
            5.  IndexedDB(intro)
            6.  Intersection Observer            

        16. Debugging & Error Handling
            1.  try/catch
            2.  Custom errors
            3.  DevTools debugging
            4.  Console methods
            5.  Network tab
            6.  Performance tab

        17. Performance Optimization
            1.  Debounce & Throttle
            2.  Lazy loading
            3.  Memory management
            4.  Code splitting(intro)
            5.  Critical rendering path

        18. Testing & Clean Code
            1.  Unit testing basics
            2.  Jest(intro)
            3.  Code structure
            4.  Naming convention
            5.  DRY principle

MODULE 2 — Node.js Fundamentals
    লক্ষ্য: Node.js কীভাবে কাজ করে বুঝা।

    Topics
        1.  Node.js Introduction
            1.  Node কী
            2.  Browser vs Node
            3.  Runtime

        2.  Installation
            1.  Node
            2.  npm
            3.  npx

        3.  Running Scripts
        4.  REPL
        5.  Modules
            1.  CommonJS
            2.  ES Module

        6.  Package Management
            1.  package.json
            2.  package-lock
            3.  semantic versioning

        7.  Global Objects
            1.  globalThis
            2.  process
            3.  Buffer

MODULE 3 — Asynchronous Node.js
    লক্ষ্য: Node-এর আসল শক্তি বুঝা।

    Topics
        1.  Event Loop (Deep)
            1.  Call Stack
            2.  Microtask Queue
            3.  Macrotask Queue

        2.  Async Programming
            1.  Callback
            2.  Promise
            3.  Async Await

        3.  Timers
            1.  setTimeout
            2.  setInterval

        4.  Event Emitter
        5.  Streams (Very Important)
            1.  Readable
            2.  Writable
            3.  Duplex
            4.  Transform
        6.  Backpressure

MODULE 4 — Core Node Modules
    Topics
        1.  File System
            1.  fs
            2.  fs/promises

        2.  Path
        3.  OS
        4.  HTTP
        5.  URL
        6.  Crypto
        7.  Buffer
        8.  Child Process
        9.  Worker Threads
        10. Cluster
        11. Stream API

MODULE 5 — Backend Development with Express.js
    লক্ষ্য: API তৈরি।

    Topics
        1.  Express Basics
        2.  Routing
        3.  Middleware
        4.  Request Response
        5.  REST API
        6.  Controllers
        7.  Service Layer
        8.  Validation
        9.  Error Middleware
        10. File Upload
        11. Cookies
        12. Sessions

MODULE 6 — Database Engineering
    1.  SQL
    2.  PostgreSQL
        1.  Schema
        2.  Relations
        3.  Index
        4.  Transaction

    3.  ORM
    4.  Prisma
    5.  Drizzle ORM
    6.  NoSQL
    7.  MongoDB
        1.  CRUD
        2.  Aggregation

MODULE 7 — Authentication & Security
    Topics
        1.  Authentication
            1.  Session
            2.  JWT
            3.  Refresh Token

        2.  Authorization
            1.  RBAC
            2.  Permission

        3.  Security
            1.  Hashing
            2.  Encryption

        4.  OAuth
        5.  Social Login
        6.  OTP
        7.  Email Verification
        8.  Security Practices
            1.  CORS
            2.  Helmet
            3.  Rate Limit
            4.  CSRF
            5.  XSS
            6.  SQL Injection
            7.  Secrets Management

MODULE 8 — Professional API Engineering
    Topics
        1.  API Architecture
        2.  REST
        3.  GraphQL
        4.  WebSocket
        5.  SSE
        6.  API Versioning
        7.  Pagination
        8.  Filtering
        9.  Logging
        10. Documentation
            1.  OpenAPI
            2.  Swagger

MODULE 9 — Testing (Professional Level)
    Topics
        1.  Unit Testing
        2.  Integration Testing
        3.  E2E Testing

        4.  Tools
            1.  Vitest
            2.  Jest
            3.  Supertest
        5.  Mocking
        6.  Coverage

MODULE 10 — Production Backend Architecture
    Topics
        1.  Clean Architecture
        2.  MVC
        3.  Repository Pattern
        4.  Dependency Injection
        5.  SOLID
        6.  Monolith
        7.  Modular Monolith
        8.  Microservice Basics

MODULE 11 — Performance & Scalability
    Topics
        1.  Profiling
        2.  Event Loop Optimization
        3.  Memory Leak
        4.  Caching
            1.  Redis
        5.  Queue
            1.  BullMQ
        6.  Job Processing
        7.  CDN
        8.  Horizontal Scaling

MODULE 12 — DevOps for Node.js
    Topics
        1.  Linux
        2.  SSH
        3.  Docker
        4.  Docker Compose
        5.  Nginx
        6.  CI/CD
        7.  Environment Management
        8.  Monitoring
        9.  Reverse Proxy

MODULE 13 — Cloud Deployment
    Topics
        1.  VPS
        2.  Cloud
        3.  Deploy
            1.  Backend
            2.  Database

        4.  Object Storage
        5.  Domain
        6.  SSL
        7.  Monitoring

MODULE 14 — Real-Time Systems
    Topics
        1.  WebSocket
        2.  Socket Architecture
        3.  Chat App
        4.  Notification System
        5.  Event Driven Design

MODULE 15 — Microservices (Advanced)
    Topics
        1.  Service Design
        2.  API Gateway
        3.  Message Queue
        4.  Kafka Concepts
        5.  Event Driven
        6.  Distributed System Basics

MODULE 16 — Super Advanced Node.js
    Topics
        1.  V8 Internals
        2.  Node Internals
        3.  Custom CLI
        4.  Native Addons
        5.  Performance Benchmark
        6.  Distributed Cache
        7.  Load Balancing
        8.  System Design

MODULE 17 — Full Stack Integration
    Topics
        1.  Frontend + Backend
        2.  React
        3.  Next.js
        4.  API Integration
        5.  Auth Flow
        6.  Upload System

MODULE 18 — Portfolio Projects (Mandatory)
    1.  CLI App
    2.  REST API
    3.  Authentication System
    4.  Blog Backend
    5.  E-Commerce Backend
    6.  Realtime Chat
    7.  LMS
    8.  Microservice App

MODULE 19 — Interview + Career Preparation
    Topics
        1.  DSA Basics
        2.  Backend Interview
        3.  System Design
        4.  GitHub
        5.  Freelancing
        6.  Remote Work
        7.  English for Developers

MODULE 20 — Professional Developer Mindset
    শিখবে:
        1.  Code Readability
        2.  Documentation
        3.  Debugging
        4.  Problem Solving
        5.  Communication
        6.  Team Workflow
        7.  AI Assisted Development
        8.  Long-term Learning

        
*/