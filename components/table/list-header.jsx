import styles from './listHeader.module.scss';

function ListHeader(props) {
  const teamName = props.team ? 'Video Title' : 'Team';
  return (
    <div className={styles.listHeader}>
      <div className={styles.headerItemTeam}>{teamName}</div>
      <div className={styles.headerItem}>Budget</div>
      <div className={styles.headerItem}>Spend</div>
      <div className={styles.headerItem}>Revenue</div>
      <div className={styles.headerItem}>Profit</div>
    </div>
  );
}

export default ListHeader;
