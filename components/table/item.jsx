import styles from './item.module.scss';

function Item(props) {
  const { title, budget, spend, revenue, profit, isTotal } = props;

  let linkTag = (
    <a href={`/${title}`} className={styles.subItemTeam}>
      {title}
    </a>
  );

  if (props.external_id) {
    const url = `https://www.youtube.com/watch?v=${props.external_id}`;
    linkTag = (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.subItemTeam}
      >
        {title}
      </a>
    );
  }

  const itemClass = isTotal ? styles.listTotal : styles.listItem;

  return (
    <li className={itemClass}>
      {linkTag}
      <div className={styles.subItem}>{budget}</div>
      <div className={styles.subItem}>{spend}</div>
      <div className={styles.subItem}>{revenue}</div>
      <div className={styles.subItem}>{profit}</div>
    </li>
  );
}

export default Item;
