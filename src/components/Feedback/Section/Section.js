import styles from './Section.module.scss';

function Section({ title, children }) {
  return (
    <>
      <h2 className={styles.section}>{title}</h2>
      {children}
    </>
  );
}

export default Section;
