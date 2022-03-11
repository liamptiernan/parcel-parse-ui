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
            data = {line}
            key={i}
          />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
