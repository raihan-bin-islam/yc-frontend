import React from 'react';
import styles from './profbook.module.scss'
import booksPath from '../../../public/assets/images/prof_yunus/path_books.svg'
import books from '../../../static/books.json'
import Link from 'next/link'

const ProfBooks = () => {
    const { profBookContainer, profBookHeader, profBookPath, profBookBody, booksPlaceholder, profFooter } = styles
    return (
        <section className={profBookContainer}>
            <div className='container-layout'>
                <div className={profBookPath}>
                    <img src={booksPath.src} alt='book-path' />
                </div>
                <div className={profBookHeader}>
                    <div>
                        <h2>BOOKS</h2>
                        <h5>By Professor Muhammad Yunus</h5>
                    </div>
                </div>
                <div className={profBookBody}>
                    {books.map((book, index) =>
                        <div className={booksPlaceholder} key={index}>
                            <img src={`/assets/images/prof_yunus/books/${book.photo}.jpg`} alt={`book-${index}`}></img>
                        </div>
                    )}
                </div>
                <div className={profFooter}>
                    <Link href='/books'>View All</Link>
                </div>
            </div>
        </section>
    );
};

export default ProfBooks;