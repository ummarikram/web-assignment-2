import Head from 'next/head'
import Link from 'next/link';
import { useState } from 'react';

export default function Index() {

  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const handleSort = () => {

    setList([].concat(list).sort((a, b) => b.priority - a.priority))
  }

  const handleSubmit = () => {
    if (text != "") {
      setList([...list, {
        text: text,
        priority: 0
      }])
    }
  }

  const increasePriority = (i) => {

    const newList = list.map((value, index) => {
      if (index == i && value.priority < list.length - 1) {
        value.priority++;
      }

      return value
    })

    setList(newList);
  }

  const decreasePriority = (i) => {
    const newList = list.map((value, index) => {
      if (index == i && value.priority > 0) {
        value.priority--;
      }

      return value
    })

    setList(newList);
  }

  const handleRemove = (i) => {
    setList(list.filter((value, index) => index != i));
  }

  return (
    <>
      <Head>
        <title>Question #1</title>
        <meta name="description" content="Ummar Ikram" />
        <meta name="google-site-verification" content="rOtlkN26Shaj2eatcabyjYEgRQyb_Zlp1VX8tx8uW0A" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      </Head>

      <br></br>
      <h1 className='ml-8'>Question #1</h1>
      <br></br>
      <Link className='mr-8 float-right underline font-bold text-xl' href='/wishList'>Goto Question #2?</Link>

      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-transparent rounded shadow p-4 m-4 w-full">
          <div className="mb-4">
            <h1 className="text-black">Todo List</h1>
            <div className="flex mt-4">
              <input onChange={(e) => setText(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" />
              <button onClick={handleSubmit} className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">Enter</button>
            </div>
          </div>
          <div>

            {list.map((value, index) => {

              return (<div key={index} className="flex mb-4 items-center">

                <p className="w-full text-grey-darkest">{value.text}</p>

                <div className='flex flex-col mr-6'>

                  <svg onClick={() => increasePriority(index)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" /> </svg>

                  <h1 className='text-center'>{value.priority}</h1>

                  <svg onClick={() => decreasePriority(index)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" /> </svg>

                </div>


                <svg onClick={() => handleRemove(index)} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" /> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" /> </svg>

              </div>)
            })}



          </div>

          <button onClick={() => handleSort()} type="button" class="float-right focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Sort</button>
        </div>


      </div>
    </>
  );
}
