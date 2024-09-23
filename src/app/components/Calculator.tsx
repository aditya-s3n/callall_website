import { NumericFormat } from 'react-number-format';

import "../css/calculator.css";
import "../css/landing.css";
import { useState } from 'react';

function Calculator() {
    const [housePrice, setHousePrice] = useState(0.0);
    const [commissionRate, setCommissionRate] = useState(0.0);
    const [totalLeads, setTotalLeads] = useState(0.0);
    const [leadConversion, setLeadConversion] = useState(0.0);

    const [totalCommission, setTotalCommission] = useState(0.0);
    const [leads, setLeads] = useState(0.0);
    const [gci, setGCI] = useState(0.0);

    function calculateCommission() {
        if (housePrice && commissionRate) {
            console.log(housePrice);
            console.log(commissionRate);
            console.log(housePrice * (commissionRate / 100));
            setTotalCommission(housePrice * (commissionRate / 100));
        }

        calculateGCI();
    }

    function calculateDeals() {
        if (totalLeads && leadConversion) {
            setLeads(totalLeads * (leadConversion / 100));
        }

        calculateGCI();
    }

    function calculateGCI() {
        setGCI(totalCommission * leads);
    }

    return (
        <div className='row my-5'>

            <div className='col mb-5'>
                <div className='mt-3'>
                    <p className='mb-1'>Average House Price</p>
                    <NumericFormat 
                        onValueChange={(value) => {
                            if (value.floatValue) {
                                setHousePrice(value.floatValue);
                            }
                         
                            calculateCommission();
                        }}
                         
                         prefix='$ ' className='w-50 p-2 input-format' placeholder='$ 0' thousandSeparator decimalScale={2} allowNegative={false} />
                </div>

                <div className='mt-3'>
                    <p className='mb-1'>Average Commission Rate</p>
                    <NumericFormat 
                    onValueChange={(value) => {
                        if (value.floatValue) {
                            console.log(value);
                            setCommissionRate(value.floatValue);
                        }

                        calculateCommission();
                    }} 
                    suffix=' %' className='w-50 p-2 input-format' thousandSeparator placeholder='0 %' allowNegative={false} />
                </div>

                <div className='mt-3'>
                    <p className='mb-1'>Total leads</p>
                    <NumericFormat  
                    onValueChange={(value) => {
                        if (value.floatValue) {
                            setTotalLeads(value.floatValue);
                        }

                        calculateDeals();
                    }}  
                    prefix='' className='w-50 p-2 input-format' placeholder='0' thousandSeparator allowNegative={false} />
                </div>

                <div className='mt-3'>
                    <p className='mb-1'>Lead Conversion Rate</p>
                    <NumericFormat 
                    onValueChange={(value) => {
                        if (value.floatValue) {
                            setLeadConversion(value.floatValue);
                        }

                        calculateDeals();
                    }} 
                    suffix=' %' className='w-50 p-2 input-format' thousandSeparator placeholder='0 %' allowNegative={false} />
                </div>
            </div>

            <div className='col d-flex m-0'>

                <div className='calc-container w-100 py-3'>
                    <p className='fs-4 py-3 border-bottom w-75 m-auto pt-4 fw-bold'>Your Results</p>
                    
                    <div className='d-flex justify-content-between w-75 m-auto mt-3'>
                        <p>Average House Price</p>
                        <p className='header-link nav-link'><span className='fs-5 fw-bold'>${housePrice.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span></p>
                    </div>
                    <div className='d-flex justify-content-between w-75 m-auto mt-1'>
                        <p>Average Commission Rate</p>
                        <p className='header-link nav-link'><span className='fs-5 fw-bold'>{commissionRate.toLocaleString()} %</span></p>
                    </div>
                    <div className='d-flex justify-content-between w-75 m-auto mt-1'>
                        <p>Average Commission per Deal</p>
                        <p className='header-link nav-link'><span className='fs-5 fw-bold'>$ {totalCommission.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span> / deal</p>
                    </div>
                    
                    <div className='d-flex justify-content-between w-75 m-auto mt-3'>
                        <p>Total Deals</p>
                        <p className='header-link nav-link'><span className='fs-5 fw-bold'>{totalLeads.toLocaleString()}</span></p>
                    </div>
                    <div className='d-flex justify-content-between w-75 m-auto mt-1'>
                        <p>Lead Conversion Rate</p>
                        <p className='header-link nav-link'><span className='fs-5 fw-bold'>{leadConversion.toLocaleString()} %</span></p>
                    </div>
                    <div className='d-flex justify-content-between w-75 m-auto mt-1'>
                        <p>Total Deals Per Year</p>
                        <p className='header-link nav-link'><span className='fs-5 fw-bold'>{leads.toLocaleString()}</span> deals / year</p>
                    </div>

                    <div className='d-flex justify-content-between w-75 m-auto border-top pb-4 pt-3 align-items-end gci-container'>
                        <p>Annual GCI</p>
                        <p className='fs-5 fw-bold'>${gci.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Calculator