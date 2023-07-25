import React from 'react'
// shortcut: rfc

export default function Navbar() {
  return (
    <div className='sticky-top container'>

            <nav class=" navbar navbar-expand navbar-dark bg-dark " aria-label="Second navbar example">
                <div class="container-fluid">
                <a class="navbar-brand" href="/">Home</a>
                {/* <link to class="navbar-brand"="/about-us">Home</link> */}
                <a class="navbar-brand" href="/about-us">About-Us</a>
                <a class="navbar-brand" href="/Read/666">Informations</a>
                <a class="navbar-brand" href="/about-us">History</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarsExample02">
                    <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/"></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Link</a>
                    </li>
                    </ul>
                    <form role="search">
                    {/* <input class="form-control" type="search" placeholder="Search" aria-label="Search"> */}
                    </form>
                </div>
                </div>
            </nav>


    </div>
  )
}
