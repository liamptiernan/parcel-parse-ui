import ListHeader from './list-header';
import Item from './item';
import styles from './item.module.scss';

function ItemList(props) {
  const { lines, team, totals } = props;

  return (
    <div className={styles.list}>
      <h2>{team}</h2>
      <ListHeader team={team} />
      {team && teamSum}
      <ul className={styles.listBody}>
        {lines.map((line, i) => (
          <Item
            title={line.name}
            budget={line.budget}
            spend={line.spend}
            revenue={line.revenue}
            profit={line.profit}
            external_id={line.external_id}
            key={i}
          />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
