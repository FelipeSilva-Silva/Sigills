import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Navbar/Sidebar';
import supabase from '../../services/Api'
import AccountList from '../../components/Account/List';

function Account() {

    const [itemsList, setItemsList] = useState([]);

    useEffect(
        () => {
            async function loadData() {
                try {
                    let { data: contas, error } = await supabase
                        .from('contas')
                        .select("*")
                        .eq('usuario', 1);

                    if (error) {
                        throw error;
                    }

                    if (contas) {
                        setItemsList(contas);
                    }
                } catch (error) {
                    alert("Erro ao carregar dados");
                    console.log(error);
                }
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
                                <h1 style={{ color: 'black' }}>Contas</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <AccountList itemsList={itemsList} />

            </div>
        </div>

    )

}

export default Account;