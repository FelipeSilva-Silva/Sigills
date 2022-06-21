import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Navbar/Sidebar';
import CreditList from '../../components/CreditCard/List';

function Credit() {

    const [itemsList, setItemsList] = useState([]);

    useEffect(
        () => {
            async function loadData() {
                // try {
                //     let { data: cartoes, error } = await supabase
                //         .from('cartoes')
                //         .select("*")
                //         .eq('usuario', 1);

                //     if (error) {
                //         throw error;
                //     }

                //     if (cartoes) {
                //         setItemsList(cartoes);
                //     }
                // } catch (error) {
                //     alert("Erro ao carregar dados");
                //     console.log(error);
                // }
            }
            loadData();
        }
    );

    return (
        <div className='d-flex w-100'>
            <Sidebar />

            <div className='w-100'>
                <div className='w-100'>
                    <div className='d-flex w-100'>
                        <div className='d-flex col-lg-12 m-0 p-0 px-md-4'>
                            <div className='d-flex w-100 justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
                                <h1 style={{ color: 'black' }}>Cartões de Crédito</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <CreditList
                    itemsList={itemsList}
                    setItemsList={setItemsList}
                />
            </div>
        </div>

    )

}

export default Credit;