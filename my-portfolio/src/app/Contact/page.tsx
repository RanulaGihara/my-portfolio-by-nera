import { TextField, Button, Box } from '@mui/material'

export default function ContactPage() {
  return (
    <section className="max-w-xl mx-auto py-16">
      <h2 className="text-4xl font-bold mb-6 text-center">Get In Touch</h2>
      <Box component="form" className="space-y-4">
        <TextField fullWidth label="Name" />
        <TextField fullWidth label="Email" type="email" />
        <TextField fullWidth label="Message" multiline rows={4} />
        <Button variant="contained" color="primary" type="submit">Send Message</Button>
      </Box>
    </section>
  )
}
