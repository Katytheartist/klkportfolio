import { FaGithub, FaLinkedin, FaGraduationCap } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#f1f1f1',
        position: 'relative',
        width: '100%',
        bottom: '0',
      }}
    >

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={process.env.PUBLIC_URL + '/KLKLogo.png'} 
          alt="logo"
          style={{ width: '40px', height: '40px', marginRight: '40px' }}
        />
        <p style={{ fontSize: '1.2rem', margin: 0 }}>
          Katy L. Kane © {new Date().getFullYear()}
        </p>
      </div>


      <div style={{ display: 'flex', gap: '20px', marginRight: '100px' }}>
        <a
          href="https://github.com/Katytheartist"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          style={{ fontSize: '2rem', color: '#333' }}
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/katylkane/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          style={{ fontSize: '2rem', color: '#0077b5' }}
        >
          <FaLinkedin />
        </a>
        <a
          href={`${process.env.PUBLIC_URL}/BTDiploma.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          title="Graduation Diploma"
          style={{ fontSize: '2rem', color: '#333' }}
        >
          <FaGraduationCap />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
