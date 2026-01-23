import { useState } from 'react';
import { 
  MantineProvider, AppShell, Burger, Group, Title, Button, 
  Text, Space, Card, Image, Badge, SimpleGrid, Timeline, 
  ActionIcon, useMantineColorScheme, useComputedColorScheme,
  Avatar, Stack, Divider, Paper, Modal, List, ThemeIcon, useMantineTheme, Box
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Carousel } from '@mantine/carousel';
import { 
  IconSun, IconMoon, IconGitBranch, IconCircleCheck, 
  IconExternalLink, IconBrandGithub, IconBrandLinkedin, IconInfoCircle, IconDownload 
} from '@tabler/icons-react';

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

// --- Assets ---
import model3d1 from './assets/3d-model/1.png';
import model3d2 from './assets/3d-model/2.png';
import model3d3 from './assets/3d-model/3.png';
import model3d4 from './assets/3d-model/4.png';
import scraper1 from './assets/scraper/1.png';
import scraper2 from './assets/scraper/2.png';
import scraper3 from './assets/scraper/3.png';
import scraper4 from './assets/scraper/4.png';
import scraper5 from './assets/scraper/5.png';
import dating1 from './assets/dating-app/1.png';
import dating2 from './assets/dating-app/2.png';
import dating3 from './assets/dating-app/3.png';
import dating4 from './assets/dating-app/4.png';
import dating5 from './assets/dating-app/5.png';
import dating6 from './assets/dating-app/6.png';
import dating7 from './assets/dating-app/7.png';
import dating8 from './assets/dating-app/8.png';
import leftovers from './assets/leftovers.png';
import game from './assets/game.png';
import typescript from './assets/tech/typescript.png';
import assembly from './assets/tech/assembly.jpg';
import haskell from './assets/tech/haskell.png';
import edx from './assets/edx.png';
import html from './assets/tech/html.png';
import css from './assets/tech/css.png';
import react from './assets/tech/react.png';
import javascript from './assets/tech/javascript.png';
import angular from './assets/tech/angular.png';
import sass from './assets/tech/sass.png';
import tailwind from './assets/tech/tailwind.png';
import bootstrap from './assets/tech/bootstrap.png';
import python from './assets/tech/python.png';
import django from './assets/tech/django.png';
import flask from './assets/tech/flask.png';
import nodejs from './assets/tech/nodejs.png';
import sql from './assets/tech/sql.png';
import mongodb from './assets/tech/mongodb.png';
import postgresql from './assets/tech/postgresql.svg';
import sqlite from './assets/tech/sqlite.svg';
import sqalchemy from './assets/tech/sqalchemy.png';
import neo4j from './assets/tech/neo4j.png';
import git from './assets/tech/git.png';
import firebase from './assets/tech/firebase.png';
import rlanguage from './assets/tech/r.png';
import kotlin from './assets/tech/kotlin.png';
import java from './assets/tech/java.png';
import clanguage from './assets/tech/c.png';
import huggingface from './assets/tech/huggingface.svg';
import langchain from './assets/tech/langchain.png';
import langgraph from './assets/tech/langgraph.svg';
import milvus from './assets/tech/milvus.png';
import jest from './assets/tech/jest.png';
import selenium from './assets/tech/selenium.png';
import cucumber from './assets/tech/cucumber.svg';
import playwright from './assets/tech/playwright.png';
import csharp from './assets/tech/csharp.png';
import flutter from './assets/tech/flutter.png';
import express from './assets/tech/express.png';
import streamlit from './assets/tech/streamlit.png';
import unity from './assets/tech/unity.png';
import godot from './assets/tech/godot.png';


const colors = {
  "Gemini 2.5 Flash": "green", "JavaScript": "blue", "Node.js": "red", "Express": "red",
  "Vercel": "red", "Puppeteer": "red", "Axios": "red", "Docker": "yellow",
  "GitHub Actions": "yellow", "Python": "red", "Playwright": "red", "MongoDB": "red",
  "React": "blue", "Tailwind CSS": "blue", "Framer Motion": "blue", "Recharts": "blue",
  "Flutter": "blue", "Dart": "blue", "Firebase": "red", "Cloudinary": "yellow",
  "GDScript": "red", "TypeScript": "red", "Assembly": "red", "Haskell": "red",
  "Hugging Face Spaces": "yellow","Three.js":"blue"
};

// --- Helper Components ---

function DarkModeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  return (
    <ActionIcon onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')} variant="default" size="lg">
      {computedColorScheme === 'light' ? <IconMoon size={20} /> : <IconSun size={20} />}
    </ActionIcon>
  );
}

function CarouselFor({ images, height } : { images: string[]; height: number }) {
  return (
    <Box style={{ maxWidth: '100%', overflow: 'hidden' }}>
      <Carousel withIndicators height={height} slideSize="100%">
        {images.map((x, i) => (
          <Carousel.Slide key={i}>
            <Image src={x || "https://placehold.co/400x200"} height={height} fit="cover" w="100%" />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
}

function Card2({modal, title, images, description, technologies, url, list } : {modal : any, title:string, images:string[], description:string, technologies:string[], url:string, list:string[] }) {
  const project = { title, images, description, technologies, list };
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder h="100%" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <Card.Section><CarouselFor images={images} height={200} /></Card.Section>
      <Stack justify="space-between" mt="md" style={{ flex: 1 }}>
        <div>
          <Text fw={700} mb="xs">{title}</Text>
          <Group gap={5}>{technologies.map((t :string) => <Badge key={t} size="xs" color={colors[t as keyof typeof colors]}>{t}</Badge>)}</Group>
          <Space h="md" />
          <Text size="sm" c="dimmed" mb="md" >{description}</Text>
        </div>
        <Group grow gap="xs">
          <Button variant="default" onClick={() => modal(project)} leftSection={<IconInfoCircle size={16} />}>More</Button>
          <Button color="dark" component="a" href={url} target="_blank" rightSection={url.includes("github") ? <IconBrandGithub size={16} /> : <IconExternalLink size={16} />}>
            {url.includes("github") ? "GitHub" : "View"}
          </Button>
        </Group>
      </Stack>
    </Card>
  );
}

function GridForProjects({ modal } : {modal:any}) {
  const projects = [
    {
      "title": "AI-Driven 3D Room Designer",
      "images": [model3d1, model3d2, model3d3, model3d4],
      "description": "Developed a specialized 3D interior design application that allows users to scrape real-world furniture products from e-commerce sites and instantly convert them into interactive 3D models for spatial planning, using Gemini.",
      "tech": ["Gemini 2.5 Flash", "JavaScript", "Three.js","HTML/CSS", "Node.js", "Express", "Puppeteer", "Axios", "Docker", "Hugging Face Spaces"],
      "url": "https://huggingface.co/spaces/adelinaf/3d-room-designer",
      "list": ["Integrated Google Gemini 2.5 Flash via API to perform image-to-3D reconstruction", "Built a robust 3D rendering engine using Three.js, featuring custom room geometry (adjustable width, depth, and wall height), dynamic lighting, and texture mapping for floors and walls.", "Developed a backend scraping service using Puppeteer with the Stealth Plugin to navigate complex e-commerce DOMs and extract high-quality product imagery and metadata while bypassing bot-detection.", "Implemented custom 3D transformation controls, allowing users to rotate, scale, and position AI-generated furniture within a coordinate-correct 3D space.", "Designed the application using Docker, ensuring a consistent environment for the Puppeteer-heavy backend and simplifying deployment to cloud platforms like Hugging Face or AWS."]
    },
    {
      "title": "Fashion Tracker",
      "images": [scraper1, scraper2, scraper3, scraper4, scraper5],
      "description": "Developed a high-performance web application designed to aggregate fashion product data from multiple sources, allowing users to track price history, filter items by brand/price, and subscribe to automated price-drop alerts. The system is fully automated using CI/CD workflows to ensure daily data freshness without manual intervention.",
      "tech": ["GitHub Actions", "Python", "Playwright", "MongoDB", "React", "Tailwind CSS", "Framer Motion", "Recharts", "Node.js", "Express", "Vercel"],
      "url": "https://fashion-tracker-prices.vercel.app/",
      "list": ["Engineered a Python scraper using Playwright for browser automation, designed to bypass dynamic content hurdles by waiting for specific DOM elements (e.g., price and title classes).", "Optimized data retrieval speeds by implementing a ThreadPoolExecutor with a multi-threaded architecture, processing URL chunks in parallel to reduce total scraping time by over 80%.", "Developed a Node.js/Express server that utilizes MongoDB Aggregation Pipelines to merge data from disparate collections into a single, searchable interface.", "Built an automated notification engine that cross-references newly scraped prices against user-subscribed brands, utilizing MongoDB’s $addToSet to manage unique user preferences and send emails.", "Integrated Recharts to transform raw price history into interactive Area Charts and utilized Framer Motion to build a responsive frontend"]
    },
    {
      "title": "Cross-platform dating app (MVP)",
      "images": [dating1, dating2, dating3, dating4, dating5, dating6, dating7, dating8],
      "description": "Developed a high-performance, cross-platform social networking application using Flutter and Dart, integrated with Firebase for real-time data management and user authentication. The app facilitates user discovery through interest-based matching and secure profile management.",
      "tech": ["Flutter", "Firebase", "Dart", "Cloudinary"],
      "url": "https://dating-app-project-f9164.web.app/",
      "list": ["Implemented a multi-provider authentication system using Firebase Auth, with traditional email/password flows to ensure a seamless onboarding experience.", "Engineered a discovery feed using Cloud Firestore snapshots to fetch and display nearby users, implementing custom logic to filter out blocked users and the current user's own profile for a clean UX.", "Developed a comprehensive profile system allowing users to upload images via ImagePicker and Cloudinary integration, manage professional bios, and select from a library of 40+ interest tags (e.g., Coding, Travel, Fitness) to improve matching accuracy.", "Built a robust 'Blocked Users' feature using Firestore sub-collections, enabling users to maintain control over their social circle and instantly unblock or report profiles through a reactive UI.", "Integrated Cloudinary APIs for optimized image hosting, handling binary data (Uint8List) for profile picture uploads to ensure high-speed delivery and storage efficiency.", "Designed an adaptive interface using Flutter’s Scaffold, Stack, and StreamBuilder widgets, ensuring consistent performance across both iOS and Android platforms."]
    },
    {
      "title": "Food reservation management app",
      "images": [leftovers],
      "description": "Developed a web application designed to reduce food waste in restaurants by facilitating the real-time reservation and redistribution of surplus food. The platform streamlines the connection between food donors and recipients through a secure verification system.",
      "tech": ["JavaScript", "React", "Firebase", "Cloudinary"],
      "url": "https://leftovers-6215b.web.app/",
      "list": ["Implemented a QR code generation and scanning system to verify food pick-ups. This ensures secure transactions between parties and provides a reliable audit trail for completed pick-ups.", "Engineered a reservation engine that manages item availability states, preventing double-booking and instantly updating the public feed when an item is claimed.", "Built a responsive frontend using React and TypeScript, integrated with a GraphQL backend to manage complex relationships between users, listings, and reservations.", "Leveraged Firebase for rapid deployment and real-time data syncing.", "Designed a mobile-first UI focused on accessibility, allowing users to list or reserve items in under three clicks."]
    },
    {
      "title": "Game developed from scratch",
      "images": [game],
      "description": "Developed an intelligent agent system for a game environment, focusing on autonomous navigation and tactical decision-making in a 2D/3D space. The project involved implementing core AI algorithms to simulate realistic behavior for non-player characters (NPCs).",
      "tech": ["GDScript"],
      "url": "https://github.com/adelinarf/Proyecto1-CI6450",
      "list": ["Implemented the A* Search Algorithm to enable agents to find optimal paths through complex tile-based or navigation-mesh environments while avoiding obstacles.", "Designed and integrated Finite State Machines (FSM) or Behavior Trees to manage agent states (e.g., Idle, Pursue, Evade, Search), ensuring smooth transitions based on environmental triggers.", "Developed steering behaviors (Seek, Flee, Arrival) to produce fluid, organic character movement rather than rigid path following.", "Optimized heuristic functions to reduce computational overhead, allowing multiple agents to navigate simultaneously without degrading frame rates.", "Integrated sensory systems for agents, allowing them to detect players or other objects within a specific line-of-sight or radius."]
    },
    {
      "title": "Console based Wordle",
      "images": [haskell],
      "description": "Developed a terminal-based implementation of the Wordle game using pure functional programming principles. This project focuses on high-quality code through immutability, strong typing, and efficient state management within the Haskell IO monad.",
      "tech": ["Haskell"],
      "url": "https://github.com/adelinarf/Wordle",
      "list": ["Implemented the core game engine as a set of pure functions, separating the game logic (word validation, letter-matching algorithms) from the side-effect-heavy I/O.", "Orchestrated the game loop using Recursion and the IO Monad, maintaining the game state (previous guesses, remaining attempts) without the use of mutable variables.", "Integrated strong static typing to ensure that only valid 5-letter words are processed, minimizing runtime errors through compile-time safety."]
    },
    {
      "title": "Language Interpreter",
      "images": [typescript],
      "description": "Implemented a custom language interpreter from the ground up using TypeScript and tsPEG. The project involves the full transformation pipeline of source code into executable logic, demonstrating deep knowledge of formal languages, grammars, and memory management.",
      "tech": ["TypeScript"],
      "url": "https://github.com/adelinarf/St-khos",
      "list": ["Developed a robust Scanner/Lexer to tokenize raw input strings, handling complex patterns, reserved keywords, and literals with efficient regular expressions or state-machine logic.", "Engineered a Parser to transform tokens into an Abstract Syntax Tree (AST), implementing operator precedence and handling nested grammatical structures.", "Implemented a hierarchical Symbol Table to manage variable scoping, ensuring proper value resolution and preventing memory leaks during execution.", "Built the core Interpreter that traverses the AST to execute logic in real-time, supporting features like arithmetic operations, control flow, and variable assignments."]
    },
    {
      "title": "Pacman game",
      "images": [assembly],
      "description": "Developed a fully functional retro-style Pac-Man game written entirely in Assembly language. This project involved direct manipulation of hardware registers, video memory, and system interrupts to create a real-time interactive environment.",
      "tech": ["Assembly"],
      "url": "https://github.com/adelinarf/PacmanAssembly",
      "list": ["Implemented the game’s data segment to efficiently store player coordinates, ghost states, and the game board grid using direct memory addressing.", "Implemented custom graphics routines to render the maze, characters, and pellets by writing pixel or character data directly to video memory", "Developed low-level logic to handle spatial collisions between Pac-Man, ghosts, and walls, utilizing bitwise operations and coordinate comparison for high-performance execution.", "Integrated with the system clock for frame-rate synchronization, ensuring consistent game speed across different CPU cycles.", "Designed modular procedures (PROCs) to handle distinct game states, such as 'Score Update', 'Ghost Movement', and 'Game Over' sequences, managing the stack manually for each call."]
    }
  ];

  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" style={{ width: '100%' }}>
      {projects.map((x, i) => (
        <Card2 key={i} modal={modal} {...x} technologies={x.tech} />
      ))}
    </SimpleGrid>
  )
}

function EducationCard({ title, text, thesis, explanation } : {title:string, text:string,thesis:string,explanation:string}) {
  return (
    <Card shadow="sm" padding="xl" withBorder style={{ overflow: 'hidden' }}>
      <Card.Section><Image src={"https://upload.wikimedia.org/wikipedia/commons/f/fb/Jardines_Universidad_Sim%C3%B3n_Bol%C3%ADvar.jpg"} h={200} w="100%" fit="cover" /></Card.Section>
      <Text fw={700} size="lg" mt="md">{title}</Text>
      <Text mt="md" size="xl" lh={1.2}>{text}</Text>
      <Text mt="xs" size="md" fw={700}>{thesis}</Text>
      <Text mt="xs" c="dimmed" size="sm">{explanation}</Text>
    </Card>
  );
}

function AboutMe({ title, text } : {title:string,text:string}) {
  const theme = useMantineTheme();
  return (
    <Card shadow="sm" padding="xl" withBorder style={{ overflow: 'hidden' }}>
      <Card.Section h={10} bg={theme.primaryColor} />
      <Text fw={700} size="lg" mt="xl">{title}</Text>
      <Text mt="xs" c="dimmed" size="md">{text}</Text>
      <Text mt="xs" c="dimmed" size="md"> <a href={`mailto:adelinafigueiraf@gmail.com`}>
      Contact me
    </a> </Text>
    </Card>
  );
}

function TimelineElement() {
  const experiences = [
    {"role" : "Frontend Developer", "year" : "Oct-Nov 2025", "description" : "Developed user-facing features using React Native, CSS and HTML. \n Worked with version control systems like Git to manage code changes, collaborate with team members, and maintain a clean and organized code base. \n Understood business requirements and translated them into technical requirements."},
    { "role":"Technical Communication & Freelance Writing", "year" : "Since 2018", "description" : "Developed strong research, analytical, and communication skills through diverse writing assignments. \n Managed multiple projects simultaneously, adhering to strict deadlines and client requirements. \n Cultivated an independent work ethic and strong self-discipline."}
    ];
  return (
    <Timeline active={1} bulletSize={40} lineWidth={2}>
      {experiences.map((x:Record<string, string>, i:number) => (
        <Timeline.Item key={i} bullet={<IconGitBranch size={20} />} title={x.role}>
          <Text size="sm" fw={700} mt={4}>{x.year}</Text>
          <Text size="sm" c="dimmed" mt={4} style={{ whiteSpace: 'pre-line' }}>{x.description}</Text>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}

function TechnologiesGrid({ title, tech }:{title:string,tech:Record<string, string>[]}) {
  return (
    <Box mb="xl" style={{ width: '100%', overflow: 'hidden' }}>
      <Text fw={700} mb="xs" size="lg">{title}</Text>
      <SimpleGrid cols={{ base: 3, xs: 4, sm: 6, md: 10 }} spacing="xs">
        {tech.map((x : Record<string, string>) => (
          <Card bg="gray.1" key={x.name} padding="sm" radius="md" withBorder style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image radius="md" h={{ base: 35, sm: 50 }} w="auto" fit="contain" src={x.url} fallbackSrc="https://placehold.co/60x60?text=Tech" />
            <Text color={"dark"} size="xs" fw={700} mt={4}>{x.name}</Text>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  )
}

function CarouselOfCourses() {
  const courses = [
    { "name": "Introduction to Cloud Development with HTML, CSS, and JavaScript by IBM", "logo": edx, "url": "https://courses.edx.org/certificates/cbf46d9cf1bf461ba41bc76d77dabc53" },
    { "name": "Ethics in AI and Big Data by The Linux Foundation", "logo": edx, "url": "https://courses.edx.org/certificates/065ac7f2ae084b8d8f422363635335ad" },
    { "name": "Business Considerations for 5G, IoT and AI by The Linux Foundation", "logo": edx, "url": "https://courses.edx.org/certificates/4dcfc9ff255444278cc06dbb6de34b37" },
    { "name": "AI for Everyone: Master the Basics by IBM", "logo": edx, "url": "https://courses.edx.org/certificates/8f92e11a361740b28ff8f56f47100adc" }
  ];
  return (
    <Box style={{ maxWidth: '100%', overflow: 'hidden' }}>
      <Carousel withIndicators height={400} slideGap="md">
        {courses.map((x:Record<string, string>, i:number) => (
          <Carousel.Slide key={i}>
            <Paper p="md" radius="md" withBorder h="100%">
              <Text fw={700} size="sm" h={50} lineClamp={2}>{x.name}</Text>
              <Space h="md" /><Image src={x.logo} height={150} fit="contain" w="100%" />
              <Space h="xl" /><Button color="dark" fullWidth href={x.url} component="a" target="_blank">See certification</Button>
            </Paper>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
}

// --- Main Layout ---

function Header() {
  const [opened, { toggle, close: closeNavbar }] = useDisclosure();
  const [openedModal, { open: openModal, close: closeModal }] = useDisclosure(false);
  interface Project {
    title: string;
    images: string[];
    description: string;
    technologies: string[];
    list: string[];
  }
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const scrollTo = (id:string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    closeNavbar();
  };

  const stack = [
    { "Frontend": [{ "name": "HTML", "url": html }, { "name": "CSS", "url": css }, { "name": "JavaScript", "url": javascript }, { "name": "React", "url": react }, { "name": "Angular", "url": angular }, { "name": "TypeScript", "url": typescript },{"name" : "Flutter","url":flutter}, { "name": "SASS", "url": sass }, { "name": "Tailwind", "url": tailwind }, { "name": "Bootstrap", "url": bootstrap }, {"name":"Streamlit", "url":streamlit}] },
    { "Backend": [{ "name": "Python", "url": python }, { "name": "Django", "url": django }, { "name": "Flask", "url": flask }, { "name": "Node.js", "url": nodejs },{"name":"Express","url":express}, { "name": "SQL", "url": sql }, { "name": "MongoDB", "url": mongodb }, { "name": "PostgreSQL", "url": postgresql }, { "name": "SQLite", "url": sqlite }, { "name": "SQLAlchemy", "url": sqalchemy }, { "name": "Neo4j", "url": neo4j }] },
    { "Full Stack Tools": [{ "name": "Git", "url": git }, { "name": "Firebase", "url": firebase }] },
    { "Other languages": [{ "name": "C#", "url": csharp }, { "name": "Haskell", "url": haskell }, { "name": "R", "url": rlanguage }, { "name": "Kotlin", "url": kotlin }, { "name": "Assembly", "url": assembly }, { "name": "Java", "url": java }, { "name": "C", "url": clanguage }] },
    { "LLM Tools": [{ "name": "Hugging Face", "url": huggingface }, { "name": "LangChain", "url": langchain }, { "name": "LangGraph", "url": langgraph }, { "name": "Milvus", "url": milvus }] },
    { "Testing": [{ "name": "Jest", "url": jest }, { "name": "Selenium", "url": selenium }, { "name": "Cucumber", "url": cucumber }, { "name": "Playwright", "url": playwright }] },
    {"Game Development Engines" : [{"name":"Godot", "url":godot}, {"name":"Unity","url":unity}]}
  ];

  const onDownload = () => {
    const link = document.createElement('a');
    link.href = './CV.pdf'; // Path relative to public folder
    link.download = 'Adelina_Figueira_Résume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AppShell 
      padding="md" 
      header={{ height: 60 }} 
      navbar={{ width: 280, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      style={{ overflowX: 'hidden', width: '100vw' }} 
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between" wrap="nowrap">
          <Group wrap="nowrap">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Text fw={700} size="sm">PORTFOLIO</Text>
          </Group>
          <Group visibleFrom="sm" gap="xs">
            <Button variant="subtle" size="xs" onClick={() => scrollTo('about')}>About</Button>
            <Button variant="subtle" size="xs" onClick={() => scrollTo('edu')}>Education</Button>
            <Button variant="subtle" size="xs" onClick={() => scrollTo('exp')}>Experience</Button>
            <Button variant="subtle" size="xs" onClick={() => scrollTo('tech')}>Technologies</Button>
            <Button variant="subtle" size="xs" onClick={() => scrollTo('projects')}>Projects</Button>
            <Button variant="subtle" size="xs" onClick={() => scrollTo('courses')}>Courses</Button>
            <Button variant="filled" size="xs" color="dark" leftSection={<IconDownload size={16}/>} component="a" onClick={onDownload}>Resume</Button>
            <ActionIcon variant="subtle" component="a" href="https://github.com/adelinarf" target="_blank" size="lg"><IconBrandGithub size={22} /></ActionIcon>
            <ActionIcon variant="subtle" component="a" href="https://www.linkedin.com/in/adelina-figueira-67335a185/" target="_blank" size="lg"><IconBrandLinkedin size={22} /></ActionIcon>
            <DarkModeToggle />
          </Group>
          <Group hiddenFrom="sm" gap="xs">
            <DarkModeToggle />
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Stack align="center" mb="lg">
          <Avatar size={80} radius={100} src="https://media.licdn.com/dms/image/v2/D4E03AQHPq_A-Vq-Mlw/profile-displayphoto-crop_800_800/B4EZrqUaqXIQAI-/0/1764867812512?e=1770249600&v=beta&t=ChOJMPPKgLKISEu5jkV-TgqAaOr3yM5uVnXnw-HqXOo" />
          <Text fw={700}>Adelina Figueira</Text>
        </Stack>
        <Divider mb="md" />
        <Stack gap="xs">
          <Button variant="light" fullWidth onClick={() => scrollTo('about')}>About</Button>
          <Button variant="light" fullWidth onClick={() => scrollTo('edu')}>Education</Button>
          <Button variant="light" fullWidth onClick={() => scrollTo('exp')}>Experience</Button>
          <Button variant="light" fullWidth onClick={() => scrollTo('tech')}>Technologies</Button>
          <Button variant="light" fullWidth onClick={() => scrollTo('projects')}>Projects</Button>
          <Button variant="light" fullWidth onClick={() => scrollTo('courses')}>Courses</Button>
          <Divider my="sm"  />
          <Group gap={5}><Button variant="subtle" component="a" href="https://github.com/adelinarf" target="_blank" leftSection={<IconBrandGithub size={20} />} >GitHub</Button>
          <Button variant="subtle" component="a" href="https://www.linkedin.com/in/adelina-figueira-67335a185/" target="_blank" leftSection={<IconBrandLinkedin size={20} />} >LinkedIn</Button>
          </Group>        
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
        {activeProject && (
          <Modal padding="xl" withinPortal={false}  opened={openedModal} onClose={closeModal} title={<Text fw={700} size="lg">{activeProject.title}</Text>} size="xl" fullScreen={isMobile}>
            <CarouselFor images={activeProject.images} height={isMobile ? 220 : 350} />
            <Space h="md" /><Text size="md">{activeProject.description}</Text><Space h="md" />
            <Group gap={5}>{activeProject.technologies.map((t:string) => <Badge key={t} color={colors[t as keyof typeof colors]} size="sm">{t}</Badge>)}</Group>
            <Space h="xl" />
            <List spacing="sm" icon={<ThemeIcon color="teal" size={24} radius="xl"><IconCircleCheck size={16} /></ThemeIcon>}>
              {activeProject.list.map((t:string, i:number) => <List.Item key={i}>{t}</List.Item>)}
            </List>
            <Space h="xl" />
          </Modal>
        )}
        <Stack gap={60} style={{ width: '100%' }}>
          <div id="about"><Title order={1}>About Me</Title><Space h="md" /><AboutMe title="Hi! I'm Adelina Figueira" text="I'm a Software Engineer and 2025 Computer Engineering Graduate specializing in AI, Knowledge Graphs, and Full-Stack Development. I also have an interest in game development, data science and IoT." /></div>
          <div id="edu"><Title order={1}>Education</Title><Space h="md" /><EducationCard title="Simón Bolívar University (Caracas, Venezuela)" text="Computer Engineering (2025)" thesis="Thesis: Construction of a knowledge graph for reasoning about code in Large Language Models" explanation="This work tried to solve the code search problem in GitHub repositories with Python code by creating knowledge graphs, and using the RAG method alongside an LLM to be able to find a proper response to the user's queries in natural language about the repository's code structure." /></div>
          <div id="exp"><Title order={1}>Work Experience</Title><Space h="md" /><TimelineElement /></div>
          <div id="tech"><Title order={1}>Technologies</Title><Space h="md" />{stack.map((item, i) => <TechnologiesGrid key={i} title={Object.keys(item)[0]} tech={Object.values(item)[0]} />)}</div>
          <div id="projects"><Title order={1}>Projects</Title><Space h="md" /><GridForProjects modal={(p:any) => { setActiveProject(p); openModal(); }} /></div>
          <div id="courses"><Title order={1}>Courses</Title><Space h="md" /><CarouselOfCourses /></div>
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}




export default function App() {
  return (
    <MantineProvider defaultColorScheme="dark" theme={{
      // Global fix for box sizing
      primaryColor: 'violet', // Must be a key from your 'colors' object
      fontFamily: 'Inter, sans-serif',
      defaultRadius: 'md',
      components: {
        Container: { defaultProps: { style: { maxWidth: '100%', overflow: 'hidden' } } },
      },
      colors: {
        'ocean-blue': [
          '#eef3ff', '#dce4f5', '#b9c7e2', '#94a8cf', 
          '#748dbf', '#5e7cb5', '#5274b1', '#43639d', 
          '#39588d', '#2d4477'
        ],
        dark: [
              '#d5d7e0', '#acaebf', '#8c8fa3', '#666980', '#4d4f66',
              '#34354a', '#2b2c3d', '#1d1e30', '#0c0d21', '#01010a',
            ],
      },
    }}>
      <style>{`* { box-sizing: border-box; } html, body { overflow-x: hidden; width: 100%; position: relative; }`}</style>
      <Header />
    </MantineProvider>
  );
}