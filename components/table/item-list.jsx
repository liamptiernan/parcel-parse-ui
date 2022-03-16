import ListHeader from './list-header';
import Item from './item';
import styles from './item.module.scss';

function ItemList(props) {
  const { lines, tableIsLoading } = props;

  let tableBody = <div className={styles.tableLoading}>
    <span className="visually-hidden">Loading...</span>
  </div>
  
  if (!tableIsLoading) {
    tableBody = <ul className={styles.listBody}>
      {lines.map((line, i) => (
        <Item
          data = {line}
          key={i}
        />
      ))}
    </ul>
  }

  return (
    <div className={styles.list}>
      <ListHeader />
      {tableBody}
    </div>
  );
}

export default ItemList;
