import styles from './item.module.scss';

function Item(props) {
  const { data } = props;
  
  const url = () => {
    const searchQuery = `${data.property_location} ${data.township} PA`;
    return `https://www.google.com/maps/search/${searchQuery}`
  }

  let mapLink = (
    <a
      href={url()}
      className={styles.subItemAddress}
      target="_blank"
      rel="noopener noreferrer"
    >
      {data.property_location}
    </a>
  );

  return (
    <li className={styles.listItem}>
      <div className={styles.subItem}>{data.parcel_id}</div>
      <div className={styles.subItem}>{mapLink}</div>
      <div className={styles.subItem}>{data.township}</div>
      <div className={styles.subItem}>{data.land_use}</div>
      <div className={styles.subItem}>{data.property_class}</div>
      <div className={styles.subItem}>{data.neighborhood_code}</div>
      <div className={styles.subItem}>{data.zoning}</div>
      <div className={styles.subItem}>{data.homestead_farmstead_status}</div>
      <div className={styles.subItem}>{data.legal_desc}</div>
      <div className={styles.subItem}>{data.owner}</div>
      <div className={styles.subItem}>{data.mailing_address}</div>
      <div className={styles.subItem}>{data.utilites}</div>
      <div className={styles.subItem}>{data.style}</div>
      <div className={styles.subItem}>{data.exterior_walls}</div>
      <div className={styles.subItem}>{data.fuel_type}</div>
      <div className={styles.subItem}>{data.heat_system}</div>
      <div className={styles.subItem}>{data.heat_ac_type}</div>
      <div className={styles.subItem}>{data.basement}</div>
      <div className={styles.subItem}>{data.amenity_1}</div>
      <div className={styles.subItem}>{data.amenity_2}</div>
      <div className={styles.subItem}>{data.amenity_3}</div>
      <div className={styles.subItem}>{data.amenity_4}</div>
      <div className={styles.subItem}>{data.living_units}</div>
      <div className={styles.subItem}>{data.land_area}</div>
      <div className={styles.subItem}>{data.year_built}</div>
      <div className={styles.subItem}>{data.year_remodeled}</div>
      <div className={styles.subItem}>{data.fireplaces}</div>
      <div className={styles.subItem}>{data.total_rooms}</div>
      <div className={styles.subItem}>{data.bedrooms}</div>
      <div className={styles.subItem}>{data.full_baths}</div>
      <div className={styles.subItem}>{data.half_baths}</div>
      <div className={styles.subItem}>{data.basement_garage_spaces}</div>
      <div className={styles.subItem}>{data.finished_basement_area}</div>
      <div className={styles.subItem}>{data.basement_rec_room_area}</div>
      <div className={styles.subItem}>{data.living_area}</div>
      <div className={styles.subItem}>{data.stories}</div>
    </li>
  );
}

export default Item;
