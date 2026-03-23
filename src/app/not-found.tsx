export default function RootNotFound() {
  return (
    <html lang="en">
      <body className="font-sans antialiased flex min-h-screen items-center justify-center" style={{ backgroundColor: '#0A0A0B', color: '#F5F5F0' }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold">404</h1>
          <p className="mt-4" style={{ color: '#8A8A8E' }}>Page not found</p>
          <a href="/" className="mt-6 inline-block" style={{ color: '#E8A838' }}>
            Go home &rarr;
          </a>
        </div>
      </body>
    </html>
  );
}
