import Sidebar from '../../components/Navbar/Sidebar';
import Cards from '../../components/Cards';


function Account() {

    return (
        <div className='d-flex w-100'>
            <Sidebar />

            <div className='w-100'>

                <div className='w-100'>
                    <div className='d-flex w-100'>
                        <div className='d-flex col-lg-12 m-0 p-0 px-md-4'>
                            <div className='d-flex w-100 justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
                                <h1 style={{ color: 'black' }}>Contas</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='d-flex flex-row w-100'>
                    <div className='p-4' style={{ width: '65vh' }}>
                        <Cards name={'Nubank'} />
                    </div>

                    <div className='p-4' style={{ width: '65vh' }}>
                        <Cards name={'Carteira'} />
                    </div>
                </div>

            </div>
        </div>

    )

}

export default Account;