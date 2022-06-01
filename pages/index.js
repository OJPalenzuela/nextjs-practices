
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <motion.div
          initial="hidden"
          animate="visible"
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

        <p
          onClick={() => {
            setShowMenu(!showMenu);
          }}
          className={styles.description}
        >
          Get started by editing <button>Drop</button>
        </p>

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
