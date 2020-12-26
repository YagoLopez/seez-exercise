import style from '../public/styles/global.module.css'
import { Button } from '@rmwc/button'

export default function PaginationFooter({ paginationData }) {
  const {
    isFirstPage,
    isLastPage,
    goNextPrevPage,
    currentPage,
    totalPages,
    totalJokes,
  } = paginationData
  return (
    <>
      <div className={style.paginationCentered}>
        <div>
          {!isFirstPage && (
            <Button
              raised
              data-cy="prev-btn"
              className={style.paginationBtn}
              label="Prev Page"
              icon="keyboard_arrow_left"
              onClick={() => goNextPrevPage(-1)}
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
              onClick={() => goNextPrevPage(+1)}
              disabled={isLastPage}
              theme={['secondaryBg', 'onSecondary']}
            />
          )}
        </div>
        <div>
          <div data-cy="current-page" className={style.paginationFooter}>
            Current page: {currentPage}
          </div>
          <div data-cy="total-pages" className={style.paginationFooter}>
            Total pages: {totalPages}
          </div>
          <div data-cy="total-jokes" className={style.paginationFooter}>
            Total jokes: {totalJokes.length}
          </div>
        </div>
      </div>
    </>
  )
}
