export default function Footer() {
  return (
    <footer className="bg-muted py-6 text-center text-sm text-muted-foreground border-t border-border">
      <div className="container px-4 md:px-6">
        <p>&copy; {new Date().getFullYear()} SAMVAAD. All rights reserved.</p>
        <p className="mt-1">Behtar Samaaj with Behtar Samajh</p>
      </div>
    </footer>
  )
}
