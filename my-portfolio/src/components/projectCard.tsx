// src/components/ProjectCard.tsx
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material'

export default function ProjectCard({ title, description, link }: any) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent>
        <Typography variant="h6" gutterBottom>{title}</Typography>
        <Typography variant="body2" color="textSecondary">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={link} target="_blank">View Code</Button>
      </CardActions>
    </Card>
  )
}
