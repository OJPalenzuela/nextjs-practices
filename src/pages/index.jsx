import styles from '@/styles/Home.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import useWindowDimensions from '@/hooks/useWindowDimensions';

export default function Home({ hola }) {
  const [showMenu, setShowMenu] = useState(false);
  const { width } = useWindowDimensions();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (width > 768 && !isDesktop) {
      setIsDesktop(true);
    } else if (width < 768 && isDesktop) {
      setIsDesktop(false);
    }
  }, [width]);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <motion.div
          initial="hidden"
          animate="visible"
          drag={'x'}
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
          variants={{
            hidden: {
              y: -100,
              opacity: 0,
            },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            },
          }}
        >
          <h1 className={styles.title}>
            Welcome to{' '}
            <Link href="/hello" passHref>
              <a>Next.js!</a>
            </Link>
          </h1>
        </motion.div>
        <h2>{isDesktop ? 'Desktop' : 'No Deskop :('}</h2>
        <p
          onClick={() => {
            setShowMenu(!showMenu);
          }}
          className={styles.description}
        >
          Get started by editing <button>Drop</button>
        </p>
        {hola}
        {showMenu && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                y: -200,
                opacity: 0,
              },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.2,
                },
              },
            }}
          >
            <ul>
              <li>Hello</li>
              <li>Hola</li>
              <li>Hi</li>
              <li>:D</li>
            </ul>
          </motion.div>
        )}
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {
      hola: undefined ?? null,
    },
  };
};
