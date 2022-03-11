import styles from './listHeader.module.scss';

function ListHeader() {
  return (
    <div className={styles.listHeader}>
      <div className={styles.subItem}>Parcel ID</div>
      <div className={styles.subItem}>Address</div>
      <div className={styles.subItem}>Township</div>
      <div className={styles.subItem}>Land Use</div>
      <div className={styles.subItem}>Property Class</div>
      <div className={styles.subItem}>Neighborhood Code</div>
      <div className={styles.subItem}>Zoning</div>
      <div className={styles.subItem}>Homestead Status</div>
      <div className={styles.subItem}>Legal Desc.</div>
      <div className={styles.subItem}>Owner</div>
      <div className={styles.subItem}>Mailing Address</div>
      <div className={styles.subItem}>Utilities</div>
      <div className={styles.subItem}>Style</div>
      <div className={styles.subItem}>Ext. Walls</div>
      <div className={styles.subItem}>Fuel Type</div>
      <div className={styles.subItem}>Heat System</div>
      <div className={styles.subItem}>Heat/AC Type</div>
      <div className={styles.subItem}>Basement</div>
      <div className={styles.subItem}>Amenity 1</div>
      <div className={styles.subItem}>Amenity 2</div>
      <div className={styles.subItem}>Amenity 3</div>
      <div className={styles.subItem}>Amenity 4</div>
      <div className={styles.subItem}>Living Units</div>
      <div className={styles.subItem}>Land Area</div>
      <div className={styles.subItem}>Year Built</div>
      <div className={styles.subItem}>Year Remodeled</div>
      <div className={styles.subItem}>Fireplaces</div>
      <div className={styles.subItem}>Total Rooms</div>
      <div className={styles.subItem}>Bedrooms</div>
      <div className={styles.subItem}>Full Baths</div>
      <div className={styles.subItem}>Half Baths</div>
      <div className={styles.subItem}>Basement Garage Spaces</div>
      <div className={styles.subItem}>Finished Basement Area</div>
      <div className={styles.subItem}>Basement Rec Room Area</div>
      <div className={styles.subItem}>Living Area</div>
      <div className={styles.subItem}>Stories</div>
    </div>
  );
}

export default ListHeader;
