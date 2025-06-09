// Arquivo: app/page.tsx (código final)

import Image from 'next/image';

export default function Home() {
  return (
    <main style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      padding: '2rem',
      color: 'white',
      maxWidth: '680px',
      margin: '0 auto'
    }}>

      {/* Seção do Header */}
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        {/* ... seu código do header ... */}
      </header>

      {/* Seção de Links */}
      <section style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {/* ... seus links ... */}
      </section>

      {/* Seção de Conteúdos */}
      <section style={{ width: '100%', marginTop: '3rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          Meus conteúdos
        </h2>
        
        <a 
          href="SEU_LINK_DO_EBOOK_AQUI" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '1rem',
            borderRadius: '8px',
            textDecoration: 'none',
            color: 'white'
          }}
        >
          <Image
            src="/ebook-cover.png" // Imagem do e-book na pasta `public`
            alt="Capa do e-book"
            width={64}
            height={64}
            style={{ borderRadius: '4px' }}
          />
          <div>
            <h3 style={{ margin: 0, fontSize: '1rem' }}>E-book Gratuito</h3>
            <p style={{ margin: '0.25rem 0 0', color: '#d1d5db', fontSize: '0.9rem' }}>
              Os 3 passos para criar um currículo com IA
            </p>
          </div>
        </a>
      </section>

    </main>
  );
}
