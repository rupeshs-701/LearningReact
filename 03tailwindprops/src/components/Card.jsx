 import React from "react";

function Card({username="Unknown",btntext})
{   console.log(username);
    return (
<> 

<a href="#" className="block max-w-sm p-6 bg-white border m-4 border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{username} and Company</h5>
<p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>
<button>{btntext || "Visit me "}</button>
</>

    )
}
export default Card