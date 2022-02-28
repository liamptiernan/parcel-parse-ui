import styles from './item.module.scss';

function Item(props) {
  const { parcelId, propertyAddress, township, landUse, landArea, propertyClass, livingUnits } = props;
  
  const url = () => {
    const searchQuery = `${propertyAddress} ${township} PA`;
    return `https://www.google.com/maps/search/${searchQuery}`
  }

  let mapLink = (
    <a
      href={url()}
      className={styles.subItemAddress}
      target="_blank"
      rel="noopener noreferrer"
    >
      {propertyAddress}
    </a>
  );

  // if (props.external_id) {
  //   const url = `https://www.youtube.com/watch?v=${props.external_id}`;
  //   linkTag = (
  //     <a
  //       href={url}
  //       target="_blank"
  //       rel="noopener noreferrer"
  //       className={styles.subItemTeam}
  //     >
  //       {title}
  //     </a>
  //   );
  // }

  return (
    <li className={styles.listItem}>
      <div className={styles.subItem}>{parcelId}</div>
      <div className={styles.subItem}>{mapLink}</div>
      <div className={styles.subItem}>{township}</div>
      <div className={styles.subItem}>{landUse}</div>
      <div className={styles.subItem}>{propertyClass}</div>
      <div className={styles.subItem}>{livingUnits}</div>
      <div className={styles.subItem}>{landArea}</div>
    </li>
  );
}

export default Item;
