import styles from './listHeader.module.scss';

function ListHeader() {
  return (
    <div className={styles.listHeader}>
      <div className={styles.headerItem}>Parcel ID</div>
      <div className={styles.headerItem}>Property Address</div>
      <div className={styles.headerItem}>Township</div>
      <div className={styles.headerItem}>Land Use</div>
      <div className={styles.headerItem}>Property Class</div>
      <div className={styles.headerItem}>Living Units</div>
      <div className={styles.headerItem}>Land Area</div>
    </div>
  );
}

export default ListHeader;
