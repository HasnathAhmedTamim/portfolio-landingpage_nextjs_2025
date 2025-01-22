// app/api/projects/route.ts

type Project = {
  href: string;
  imageSrc: string;
  alt: string;
  title: string;
  client: string;
  work: string;
};

let projects: Project[] = [
  {
    href: "/project/brand-journey-improvements",
    imageSrc: "/p1.png",
    alt: "Brand Journey Improvements",
    title: "Brand Journey Improvements",
    client: "Organo",
    work: "Branding, Logo Design",
  },
  {
    href: "/project/brand-grouping",
    imageSrc: "/p2.png",
    alt: "Brand Grouping",
    title: "Brand Grouping",
    client: "FR",
    work: "Branding, Logo Design",
  },
  {
    href: "/project/website-redesign",
    imageSrc: "/p3.png",
    alt: "Website Redesign",
    title: "Website Redesign",
    client: "XYZ Corp",
    work: "Website Design, User Experience",
  },
  {
    href: "/project/product-branding",
    imageSrc: "/p4.png",
    alt: "Product Branding",
    title: "Product Branding",
    client: "Acme Co",
    work: "Product Packaging, Logo Design",
  },
  {
    href: "/project/mobile-app-development",
    imageSrc: "/lp3.png",
    alt: "Mobile App Development",
    title: "Mobile App Development",
    client: "TechNova",
    work: "Mobile App Design, UI/UX",
  },
  {
    href: "/project/e-commerce-platform",
    imageSrc: "/lp2.png",
    alt: "E-commerce Platform",
    title: "E-commerce Platform",
    client: "ShopEase",
    work: "E-commerce Design, Website Development",
  },
  // Add more projects here
];

// Fetch all projects (GET)
export async function GET() {
  return new Response(JSON.stringify(projects), {
    headers: { "Content-Type": "application/json" },
  });
}

// Add a new project (POST)
export async function POST(request: Request) {
  const newProject: Project = await request.json();
  // Generate href based on title, replacing spaces with hyphens
  newProject.href = `/project/${newProject.title
    .toLowerCase()
    .replace(/\s+/g, "-")}`;
  projects.push(newProject);

  return new Response(JSON.stringify(newProject), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}

// Update an existing project (PUT)
export async function PUT(request: Request) {
  const { href, title, client, work, imageSrc, alt }: Project =
    await request.json();

  const projectIndex = projects.findIndex((project) => project.href === href);

  if (projectIndex === -1) {
    return new Response("Project not found", { status: 404 });
  }

  const updatedProject = {
    ...projects[projectIndex],
    title,
    client,
    work,
    imageSrc,
    alt,
  };
  projects[projectIndex] = updatedProject;

  return new Response(JSON.stringify(updatedProject), {
    headers: { "Content-Type": "application/json" },
  });
}

// Delete a project (DELETE)
export async function DELETE(request: Request) {
  const { href }: { href: string } = await request.json();

  const projectIndex = projects.findIndex((project) => project.href === href);

  if (projectIndex === -1) {
    return new Response("Project not found", { status: 404 });
  }

  projects.splice(projectIndex, 1);
  return new Response("Project deleted", { status: 200 });
}
