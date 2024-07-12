import { Book } from '@/types'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const BookCard = ({book}:{book:Book}) => {
  return (
    <div className='flex gap-5 p-5 mb-10 shadow-md rounded'>
       <Image
                src={book.coverImage}
                alt={book.title}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: '12rem' }}
            />
      <div>
        <h2 className='line-clamp-2 text-xl font-bold text-primary-600 text-balance'>{book.title}</h2>
        <p className='font-bold text-primary-900 mt-1'>{book.author.name}</p>
        <Link href={`/books/${book._id}`} className='inline-block rounded border border-primary-500 py-1 px-2 mt-4 text-sm text-primary-500 font-medium hover:border-primary-100 hover:bg-primary-200 transition'>Read More</Link>
      </div>
    </div>
  )
}

export default BookCard