import Head from 'next/head'
import { useState } from 'react';

export default function WishList() {

    const [list, setList] = useState([]);
    const [text, setText] = useState("");

    const handleSubmit = async () => {

        if (text != "") {

            const request = await fetch(`https://api.github.com/search/users?q=${text} in:name type:user`);
            const result = await request.json();

            if (result.total_count > 0) {
                const users = result.items.slice(0, 10).map(item => {
                    return {
                        name: item.login,
                        picture: item.avatar_url,
                        link: item.html_url
                    }
                })

                setList(users);
            }
        }
    }

    return (
        <>
            <Head>
                <title>Question #2</title>
                <meta name="description" content="Ummar Ikram" />
                <meta name="google-site-verification" content="rOtlkN26Shaj2eatcabyjYEgRQyb_Zlp1VX8tx8uW0A" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            </Head>

            <br></br>
            <h1 className='ml-8'>Question #2</h1>
            <br></br>
            <a className='mr-8 float-right underline font-bold text-xl' href='/' target="_blank">
                Goto Question #1?
            </a>

            <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
                <div className="bg-transparent rounded shadow p-4 m-4 w-full">
                    <div className="mb-4">
                        <h1 className="text-black">GitHub Search</h1>
                        <div className="flex mt-4">
                            <input onChange={(e) => setText(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Search User" />
                            <button onClick={handleSubmit} className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">Enter</button>
                        </div>
                    </div>
                    <div>

                        {list.map((value, index) => {

                            return (<div className="flex flex-col mb-4 items-center justify-center">

                                <img width={64} height={64} src={value.picture} />

                                <a href={value.link} target="_blank">
                                    {value.name}
                                </a>

                            </div>)
                        })}



                    </div>
                </div>
            </div>

        </>
    );
}
