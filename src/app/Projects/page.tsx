import { Grid, Typography, Box } from "@mui/material";
import ProjectCard from "@/components/projectCard";

const projects = [
  {
    title: "Awesome App",
    description: "Built with Next.js and Tailwind",
    link: "https://github.com/you/awesome-app",
  },
  {
    title: "Awesome App-2",
    description: "Built with Next.js and Tailwind",
    link: "https://github.com/you/awesome-app",
  },
  {
    title: "Awesome App-3",
    description: "Built with Next.js and Tailwind",
    link: "https://github.com/you/awesome-app",
  },
  {
    title: "Awesome App-4",
    description: "Built with Next.js and Tailwind",
    link: "https://github.com/you/awesome-app",
  },
];

export default function ProjectsPage() {
  return (
    <Box component="section" id="projects" py={8}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Projects
      </Typography>

      <Grid container spacing={4}>
        {projects.map((p) => (
          <Grid key={p.title} size={{ xs: 12, md: 4 }}>
            <ProjectCard {...p} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
