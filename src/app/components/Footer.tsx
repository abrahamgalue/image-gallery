import Link from 'next/link'

type Props = {
  topic: string
  page: string | undefined
  prevPage: string | null
  nextPage: string | null
  totalPages: number | undefined
}

export default function Footer({
  topic,
  page,
  prevPage,
  nextPage,
  totalPages,
}: Props) {
  if (!prevPage && !nextPage) return

  // mostrar el numero actual de pagina y el total que hay

  function PagesTotal() {
    if (page) {
      const currentPage = parseInt(page)
      const totalPagesNum = totalPages || 1
      const nextPageNum = currentPage + 1
      const prevPageNum = currentPage - 1

      const prevPageLink =
        prevPageNum > 0 ? `/results/${topic}/${prevPageNum}` : null
      const nextPageLink =
        nextPageNum <= totalPagesNum ? `/results/${topic}/${nextPageNum}` : null

      return (
        <span className='flex flex-row justify-between items-center gap-4'>
          {prevPageLink && (
            <Link
              href={prevPageLink}
              className='flex gap-2 items-center justify-center font-normal text-[#3f89f9] hover:bg-gray-100 p-2 rounded-sm transition-colors duration-300 ease'
            >
              <svg
                className='w-3 h-3 text-[#3f89f9]'
                aria-hidden='true'
                fill='none'
                viewBox='0 0 8 14'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13'
                />
              </svg>
              <span>Previous</span>
            </Link>
          )}
          <p className='font-normal text-[#858585]'>
            <span className='font-medium p-2 bg-gray-100 text-[#808080] rounded-sm'>
              {currentPage}
            </span>{' '}
            <span className='p-2'>of {totalPagesNum}</span>
          </p>
          {nextPageLink && (
            <Link
              href={nextPageLink}
              className='flex gap-2 items-center justify-center font-normal text-[#3f89f9] hover:bg-gray-100 p-2 rounded-sm transition-colors duration-300 ease'
            >
              <span>Next</span>
              <svg
                className='w-3 h-3 text-[#3f89f9]'
                aria-hidden='true'
                fill='none'
                viewBox='0 0 8 14'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1'
                />
              </svg>
            </Link>
          )}
        </span>
      )
    }
  }

  return (
    <footer className='flex flex-row justify-between items-center px-2 py-4 font-bold w-max mx-auto'>
      <PagesTotal />
    </footer>
  )
}
