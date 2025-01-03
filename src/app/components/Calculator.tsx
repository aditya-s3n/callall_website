import { NumericFormat } from 'react-number-format';

import "../css/calculator.css";
import "../css/landing.css";
import { useState } from 'react';

function Calculator() {
    const [housePrice, setHousePrice] = useState(816000);
    const [commissionRate, setCommissionRate] = useState(2.5);
    const [totalLeads, setTotalLeads] = useState(30000);
    const [leadConversion, setLeadConversion] = useState(0.1);

    const [totalCommission, setTotalCommission] = useState(20400);
    const [leads, setLeads] = useState(30);
    const [gci, setGCI] = useState(612000);

    function calculateCommission(newHousePrice: number, newCommissionRate: number) {
        if (newHousePrice && newCommissionRate) {
            const newCommission = newHousePrice * (newCommissionRate / 100);
            setTotalCommission(newCommission);
            calculateGCI(newCommission, leads);
        }
    }

    function calculateDeals(newTotalLeads: number, newLeadConversion: number) {
        if (newTotalLeads && newLeadConversion) {
            const newLead = newTotalLeads * (newLeadConversion / 100);
            setLeads(newLead);
            calculateGCI(totalCommission, newLead);
        }
    }

    function calculateGCI(newTotalComission: number, newLeads: number) {
        setGCI(newTotalComission * newLeads);
    }

    return (
        <div className='row my-5 row-cols-1 row-cols-md-2'>

            <div className='col mb-5 text-center text-md-start'>
                <div className='mt-3 '>
                    <p className='mb-1'>Average House Price</p>
                    <NumericFormat 
                        onValueChange={(value) => {
                            if (value.floatValue) {
                                setHousePrice(value.floatValue);
                                calculateCommission(value.floatValue, commissionRate);
                            }   
                        }}

                        value={housePrice}
                         
                         prefix='$ ' className='w-50 p-2 input-format' placeholder='$ 0' thousandSeparator decimalScale={2} allowNegative={false} />
                </div>

                <div className='mt-3'>
                    <p className='mb-1'>Average Commission Rate</p>
                    <NumericFormat 
                    onValueChange={(value) => {
                        if (value.floatValue) {
                            setCommissionRate(value.floatValue);
                            calculateCommission(housePrice, value.floatValue);
                        }
                    }} 
                    value={commissionRate}
                    suffix=' %' className='w-50 p-2 input-format' thousandSeparator placeholder='0 %' allowNegative={false} />
                </div>

                <div className='mt-3'>
                    <p className='mb-1'>Total leads</p>
                    <NumericFormat  
                    onValueChange={(value) => {
                        if (value.floatValue) {
                            setTotalLeads(value.floatValue);
                            calculateDeals(value.floatValue, leadConversion);
                        }
                    }}  
                    value={totalLeads}
                    prefix='' className='w-50 p-2 input-format' placeholder='0' thousandSeparator allowNegative={false} />
                </div>

                <div className='mt-3'>
                    <p className='mb-1'>Lead Conversion Rate</p>
                    <NumericFormat 
                    onValueChange={(value) => {
                        if (value.floatValue) {
                            setLeadConversion(value.floatValue);
                            calculateDeals(totalLeads, value.floatValue);
                        }
                    }} 
                    value={leadConversion}
                    suffix=' %' className='w-50 p-2 input-format' thousandSeparator placeholder='0 %' allowNegative={false} />
                </div>
            </div>

            <div className='col d-flex m-0'>

            <div className='calc-container w-100 py-3'>
                <p className='fs-4 py-3 border-bottom w-75 m-auto pt-4 fw-bold text-light'>Your Results</p>

                <div className='d-flex flex-column flex-md-row justify-content-between w-75 m-auto mt-3'>
                <p className='text-light'>Avg House Price</p>
                <p className='header-link nav-link'>
                    <span className='fs-5 fw-bold'>
                    ${housePrice.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                    </span>
                </p>
                </div>
                
                <div className='d-flex flex-column flex-md-row justify-content-between w-75 m-auto mt-1'>
                <p className='text-light'>Avg Commission Rate</p>
                <p className='header-link nav-link'>
                    <span className='fs-5 fw-bold'>
                    {commissionRate.toLocaleString()} %
                    </span>
                </p>
                </div>

                <div className='d-flex flex-column flex-md-row justify-content-between w-75 m-auto mt-1'>
                <p className='text-light'>Avg Commission / Deal</p>
                <p className='header-link nav-link'>
                    <span className='fs-5 fw-bold'>
                    $ {totalCommission.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                    </span> / deal
                </p>
                </div>

                <div className='d-flex flex-column flex-md-row justify-content-between w-75 m-auto mt-3'>
                <p className='text-light'>Total Leads</p>
                <p className='header-link nav-link'>
                    <span className='fs-5 fw-bold'>
                    {totalLeads.toLocaleString()}
                    </span>
                </p>
                </div>

                <div className='d-flex flex-column flex-md-row justify-content-between w-75 m-auto mt-1'>
                <p className='text-light'>Lead Conversion Rate</p>
                <p className='header-link nav-link'>
                    <span className='fs-5 fw-bold'>
                    {leadConversion.toLocaleString()} %
                    </span>
                </p>
                </div>

                <div className='d-flex flex-column flex-md-row justify-content-between w-75 m-auto mt-1'>
                <p className='text-light'>Total Leads / Year</p>
                <p className='header-link nav-link'>
                    <span className='fs-5 fw-bold'>
                    {leads.toLocaleString()}
                    </span> deals / year
                </p>
                </div>

                <div className='d-flex flex-column flex-md-row justify-content-between w-75 m-auto border-top pb-4 pt-3 align-items-center align-items-md-end gci-container'>                
                    <p className='text-light'>Annual GCI</p>
                    <p className='fs-5 fw-bold text-light'>
                        ${gci.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                    </p>
                </div>
            </div>

            </div>


        </div>
    )
}

export default Calculator