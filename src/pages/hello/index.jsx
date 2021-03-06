import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <motion.div
          whileHover={{
            scale: [0.9, 1.1, 1],
            rotate: [1, -1, 2],
          }}
        >
          <h1 className={styles.title}>
            Go to{' '}
            <Link href="/" passHref>
              <a>Home :D</a>
            </Link>
          </h1>
        </motion.div>
      </main>
    </div>
  );
}
