import Sidebar from '../../components/Navbar/Sidebar';
import Cards from '../../components/Cards';
import Graphic from '../../components/Graphic';

import './style.css'
function Dashboard() {

    return (
        <div className='d-flex flex-row w-100'>
            <Sidebar />

            <div className='w-100'>

                <div className='w-100'>
                    <div className='d-flex flex-column w-100'>
                        <div className='d-flex col-lg-12 m-0 p-0 px-md-4'>
                            <div className='d-flex w-100 justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
                                <h1 style={{color:'black'}}>Dashboard</h1>
                                Caledário
                            </div>
                        </div>
                    </div>
                </div>

                <div className='d-flex flex-row w-100'>
                    <div>
                        <div className='p-4' style={{ width: '65vh' }}>
                            <Cards name={'Entradas'} />
                        </div>

                        <div className='p-4' style={{ width: '65vh' }}>
                            <Cards name={'Saídas'} />
                        </div>

                        <div className='p-4' style={{ width: '65vh' }}>
                            <Cards name={'Contas'} />
                        </div>

                        <div className='p-4' style={{ width: '65vh' }}>
                            <Cards name={'Cartão de Crédito'} />

                        </div>
                    </div>

                    <div className='d-flex flex-column w-100' >
                        <div style={{ width: '100vh', height: '33vh', background: 'white', marginTop: '25px', borderRadius: '8px', justifyContent:'center' }}>

                            <Graphic />

                        </div>

                        <div style={{ width: '100vh', height: '33vh', background: 'white', marginTop: '25px', borderRadius: '8px' }}>

                            <Graphic style={{ width: '65VH', height: '26vh' }} />

                        </div>

                    </div>
                </div>
            </div>

        </div>

    )

}

export default Dashboard;