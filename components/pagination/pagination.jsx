import Pagination from 'react-bootstrap/Pagination';
import Stack from 'react-bootstrap/Stack';

import styles from './pagination.module.scss'

function PageSelect(props) {

  const changePage = (newPage) => {
    if (newPage < 1 || newPage > props.pageCount) {
      return;
    }
    props.setCurrentPage(newPage)
  }

  const buildPages = () => {
    /*
     * Build array of pagination buttons
     * If fewer than 5 pages, just display page numbers
     * If more than 5 pages, dynamically display next, prev, first and last page buttons
     */
    let pages = [];
  
    if (props.pageCount > 5) {
      const pageNext = <Pagination.Next onClick={e => changePage(props.currentPage+1)}/>;
      const pagePrev = <Pagination.Prev onClick={e => changePage(props.currentPage-1)}/>;
      const visiblePages = [];

      for (let i = props.currentPage - 1; i <= props.currentPage + 1; i++) {
        if (i === 0) { i = 1; }

        visiblePages.push(
          <Pagination.Item
            key={i}
            active={i === props.currentPage}
            onClick={e => changePage(i)}
          >
            {i}
          </Pagination.Item>
        )

        if (i === props.pageCount) { break; }
      }

      if (visiblePages.length < 3) {
        if (visiblePages[0].key === "1") {
          visiblePages.push(
            <Pagination.Item
              key={3}
              active={false}
              onClick={e => changePage(3)}
            >
              {3}
            </Pagination.Item>
          )
        } else if (Number(visiblePages[1].key) === props.pageCount) {
          visiblePages.unshift(
            <Pagination.Item
              key={props.pageCount - 2}
              active={false}
              onClick={e => changePage(props.pageCount - 2)}
            >
              {props.pageCount - 2}
            </Pagination.Item>
          )
        }
      }

      pages = pages.concat(visiblePages);

      if (Number(visiblePages[0].key) > 2) {
        pages.unshift(<Pagination.Ellipsis />);
      }

      if (Number(visiblePages[0].key) > 1) {
        pages.unshift(
          <Pagination.Item
            key={1}
            active={false}
            onClick={e => changePage(1)}
          >
            1
          </Pagination.Item>
        );
      }
      
      pages.unshift(pagePrev);

      if (Number(visiblePages[visiblePages.length - 1].key) < props.pageCount - 1) {
        pages.push(<Pagination.Ellipsis />);
      }

      if (Number(visiblePages[visiblePages.length - 1].key) < props.pageCount) {
        pages.push(
          <Pagination.Item
            key={props.pageCount}
            active={false}
            onClick={e => changePage(props.pageCount)}
          >
            {props.pageCount}
          </Pagination.Item>
        );
      }

      pages.push(pageNext);
    } else {
      for (let i = 1; i <= props.pageCount; i++) { 
        pages.push(
          <Pagination.Item
            key={i}
            active={i === props.currentPage}
            onClick={e => changePage(i)}
          >
            {i}
          </Pagination.Item>
        )
      }
    }

    return pages;
  }

  let pages = buildPages();  

  return (
    <Stack direction='horizontal' gap={1} className={styles.container}>
      <p className={styles.pageLabel}>Pages</p>
      <Pagination className='m-0' size='sm'>{pages}</Pagination>
    </Stack>
  )
}

export default PageSelect;
