import ListHeader from './list-header';
import Item from './item';
import styles from './item.module.scss';

function ItemList(props) {
  const { lines } = props;

  return (
    <div className={styles.list}>
      <ListHeader />
      <ul className={styles.listBody}>
        {lines.map((line, i) => (
          <Item
            parcelId={line.parcel_id}
            propertyAddress={line.property_location}
            township={line.township}
            landUse={line.land_use}
            landArea={line.land_area}
            propertyClass={line.property_class}
            livingUnits={line.living_units}
            key={i}
          />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
