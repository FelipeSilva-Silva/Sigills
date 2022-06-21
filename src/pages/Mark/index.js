import Sidebar from '../../components/Navbar/Sidebar';



function Mark() {

    return (
        <div className='d-flex flex-row w-100'>
            <Sidebar />

            <div className='w-100'>

                <div className='w-100'>
                    <div className='d-flex flex-column w-100'>
                        <div className='d-flex col-lg-12 m-0 p-0 px-md-4'>
                            <div className='d-flex w-100 justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
                                <h2 style={{ color: 'black' }}>Metas</h2>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='d-flex flex-column'>
                    <div className="container-fluid p-5">
                        <div className="card" style={{ height: '73vh' }}>
                            <div className="card-body h-75 overflow-auto d-flex justify-content-center">
                                VOCÊ NÃO POSSUI METAS


                            </div>

                        </div>
                    </div>
                    

                </div>




            </div>
        </div>








    )

}

export default Mark;

