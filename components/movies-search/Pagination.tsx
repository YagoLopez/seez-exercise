import { Button } from '@rmwc/button'
import { PaginationService } from '../../services/pagination.service'
import style from '../../public/styles/global.module.css'

export const Pagination = ({
  totalJokeList,
  pageNumber,
  pageSize: pageSize,
}) => {
  const isFirstPage = PaginationService.isFirstPage(pageNumber)
  const isLastPage = PaginationService.isLastPage(
    totalJokeList,
    pageNumber,
    pageSize
  )
  const goNextPage = PaginationService.goNextPage
  const goPreviousPage = PaginationService.goPreviousPage

  return (
    <div className={style.paginationCentered}>
      <div>
        {!isFirstPage && (
          <Button
            raised
            data-cy="prev-btn"
            className={style.paginationBtn}
            label="Prev Page"
            icon="keyboard_arrow_left"
            onClick={() => goPreviousPage(totalJokeList, pageNumber, pageSize)}
            disabled={isFirstPage}
            theme={['secondaryBg', 'onSecondary']}
          />
        )}
        {!isLastPage && (
          <Button
            raised
            data-cy="next-btn"
            className={style.paginationBtn}
            label="Next Page"
            trailingIcon="keyboard_arrow_right"
            onClick={() => goNextPage(totalJokeList, pageNumber, pageSize)}
            disabled={isLastPage}
            theme={['secondaryBg', 'onSecondary']}
          />
        )}
      </div>
      <div>
        <div data-cy="current-page" className={style.paginationFooter}>
          Current page: {pageNumber}
        </div>
        <div data-cy="total-pages" className={style.paginationFooter}>
          Total pages: {PaginationService.getNumberOfPages(totalJokeList)}
        </div>
        <div data-cy="total-jokes" className={style.paginationFooter}>
          Total jokes: {totalJokeList.length}
        </div>
      </div>
    </div>
  )
}
