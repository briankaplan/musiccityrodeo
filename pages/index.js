import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <div className="gradient-overlay" />
      <main className="main">
        <div className="logoContainer">
          <div className="imageWrapper">
            <Image 
              src="/images/mcr_logo.png" 
              alt="Music City Rodeo Logo" 
              fill
              style={{
                objectFit: 'contain'
              }}
              priority
            />
          </div>
        </div>
        
        <div className="event-details">
          <h2 className="dates">May 29, 30, 31 2025</h2>
          <div className="location">
            <h3>Bridgestone Arena</h3>
            <h3>Nashville, TN</h3>
          </div>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(to bottom, #000000, #1a1a1a);
          overflow: hidden;
        }

        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.7) 100%);
          pointer-events: none;
        }

        .main {
          position: relative;
          padding: 2rem;
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          z-index: 1;
        }

        .logoContainer {
          margin-bottom: 3rem;
          width: 90%;
          max-width: 600px;
          height: 250px;
          position: relative;
          animation: fadeInScale 1.5s ease-out;
          filter: drop-shadow(0 0 30px rgba(255,0,0,0.2));
        }

        .imageWrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .event-details {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          animation: fadeIn 2s ease-out;
        }

        .dates {
          color: #ff3333;
          margin: 0;
          font-size: 2.2rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-shadow: 0 0 20px rgba(255,0,0,0.3);
        }

        .location {
          margin-top: 0.3rem;
        }

        .location h3 {
          color: #fff;
          margin: 0.2rem 0;
          font-size: 1.6rem;
          font-weight: 300;
          letter-spacing: 2px;
          text-shadow: 0 0 15px rgba(255,255,255,0.2);
        }

        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .dates {
            font-size: 1.8rem;
            letter-spacing: 1.5px;
          }
          .location h3 {
            font-size: 1.4rem;
            letter-spacing: 1.5px;
          }
          .logoContainer {
            height: 180px;
            margin-bottom: 2.5rem;
          }
        }

        @media (max-width: 480px) {
          .dates {
            font-size: 1.5rem;
            letter-spacing: 1px;
          }
          .location h3 {
            font-size: 1.2rem;
            letter-spacing: 1px;
          }
          .logoContainer {
            height: 130px;
            margin-bottom: 2rem;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: #000;
          color: #fff;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
} 