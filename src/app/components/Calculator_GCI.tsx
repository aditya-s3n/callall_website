import { NumericFormat } from 'react-number-format';
import "../css/calculator.css";
import "../css/landing.css";
import { useState } from 'react';

function Calculator() {
    const [gciGoal, setGciGoal] = useState(100000);
    const [housePrice, setHousePrice] = useState(1000000);
    const [commissionRate, setCommissionRate] = useState(2.5);
    const [splitRate, setSplitRate] = useState(50);

    const [averageCommission, setAverageCommission] = useState(12500);
    const [totalDeals, setTotalDeals] = useState(8);
    const [doorKnocks, setDoorKnocks] = useState(1600);
    const [calls, setCalls] = useState(8000);
    const [sphereCalls, setSphereCalls] = useState(800);
    const [openHouses, setOpenHouses] = useState(40);

    const [selectedMethods, setSelectedMethods] = useState<{
        doorKnocks: boolean;
        calls: boolean;
        sphereCalls: boolean;
        openHouses: boolean;
    }>({
        doorKnocks: true,
        calls: false,
        sphereCalls: false,
        openHouses: false,
    });

    // Use keyof to restrict method to valid keys of selectedMethods
    function toggleMethod(method: keyof typeof selectedMethods) {
        setSelectedMethods((prev) => ({
            ...prev,
            [method]: !prev[method],
        }));
    }

    function calculateCommission(newGCIGoal: number, newHousePrice: number, newCommissionRate: number, newSplitRate: number) {
        const commissionPerDeal = (newHousePrice * (newCommissionRate / 100)) * ((100 - newSplitRate) / 100);
        setAverageCommission(commissionPerDeal);

        const requiredDeals = newGCIGoal / commissionPerDeal;
        setTotalDeals(Math.ceil(requiredDeals));

        // Update activities based on the number of required deals
        calculateActivities(requiredDeals);
    }

    function calculateActivities(requiredDeals: number) {
        const perDealActivities = {
            doorKnocks: 200,
            calls: 1000,
            sphereCalls: 100,
            openHouses: 5,
        };

        // Calculate total activities
        setDoorKnocks(Math.ceil(perDealActivities.doorKnocks * requiredDeals));
        setCalls(Math.ceil(perDealActivities.calls * requiredDeals));
        setSphereCalls(Math.ceil(perDealActivities.sphereCalls * requiredDeals));
        setOpenHouses(Math.ceil(perDealActivities.openHouses * requiredDeals));
    }

    return (
        <div className='row my-5 row-cols-1 row-cols-md-2'>

            <div className='col mb-5 text-center text-md-start'>
                <div className='mt-3'>
                    <p className='mb-1'>GCI Goal</p>
                    <NumericFormat
                        onValueChange={(value) => {
                            if (value.floatValue) {
                                setGciGoal(value.floatValue);
                                calculateCommission(value.floatValue, housePrice, commissionRate, splitRate);
                            }
                        }}
                        value={gciGoal}
                        prefix='$ ' className='w-50 p-2 input-format' placeholder='$ 0' thousandSeparator decimalScale={2} allowNegative={false} />
                </div>

                <div className='mt-3'>
                    <p className='mb-1'>Average House Price</p>
                    <NumericFormat
                        onValueChange={(value) => {
                            if (value.floatValue) {
                                setHousePrice(value.floatValue);
                                calculateCommission(gciGoal, value.floatValue, commissionRate, splitRate);
                            }
                        }}
                        value={housePrice}
                        prefix='$ ' className='w-50 p-2 input-format' placeholder='$ 0' thousandSeparator decimalScale={2} allowNegative={false} />
                </div>

                <div className='mt-3'>
                    <p className='mb-1'>Average Commission Rate</p>
                    <NumericFormat
                        onValueChange={(value) => {
                            if (value.floatValue && value.floatValue <= 100) {
                                setCommissionRate(value.floatValue);
                                calculateCommission(gciGoal, housePrice, value.floatValue, splitRate);
                            }
                        }}
                        value={commissionRate}
                        suffix=' %' className='w-50 p-2 input-format' thousandSeparator placeholder='0 %' allowNegative={false} />
                </div>

                <div className='mt-3'>
                    <p className='mb-1'>Team/Broker Split</p>
                    <NumericFormat
                        onValueChange={(value) => {
                            if (value.floatValue && value.floatValue <= 100) {
                                setSplitRate(value.floatValue);
                                calculateCommission(gciGoal, housePrice, commissionRate, value.floatValue);
                            }
                        }}
                        value={splitRate}
                        suffix=' %' className='w-50 p-2 input-format' thousandSeparator placeholder='0 %' allowNegative={false} />
                </div>
            </div>

            <div className='col d-flex m-0'>
                <div className='calc-container w-100 py-3 pb-5'>
                    <p className='fs-4 py-3 border-bottom w-75 m-auto pt-4 fw-bold text-light'>Your Results</p>

                    <div className='d-flex flex-column flex-md-row justify-content-between w-75 m-auto mt-1'>
                        <p className='text-light'>Avg Commission / Deal</p>
                        <p className='header-link nav-link'>
                            <span className='fs-5 fw-bold'>
                                $ {averageCommission.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                            </span> / deal
                        </p>
                    </div>

                    <div className='d-flex flex-column flex-md-row justify-content-between w-75 m-auto mt-1'>
                        <p className='text-light'>Total Deals Required</p>
                        <p className='header-link nav-link'>
                            <span className='fs-5 fw-bold'>
                                {totalDeals.toLocaleString()} deals
                            </span>
                        </p>
                    </div>
                        
                    <p className='fs-4 py-3 border-bottom w-75 m-auto pt-4 fw-bold text-light'>How to Achieve</p>
                    <div className='d-flex flex-column flex-md-row justify-content-between w-75 m-auto mt-2'>
                        <button type="button" className="btn choice-input col mx-2 active" onClick={() => toggleMethod('doorKnocks')} data-bs-toggle="button">Door Knocks</button>
                        <button type="button" className="btn choice-input col mx-2" onClick={() => toggleMethod('calls')} data-bs-toggle="button">Calls</button>
                    </div>
                    <div className='d-flex flex-column flex-md-row justify-content-between w-75 m-auto mt-2'>
                        <button type="button" className="btn choice-input col mx-2" onClick={() => toggleMethod('sphereCalls')} data-bs-toggle="button">Sphere Calls</button>
                        <button type="button" className="btn choice-input col mx-2" onClick={() => toggleMethod('openHouses')} data-bs-toggle="button">Open Houses</button>
                    </div>
                    {selectedMethods.doorKnocks && 
                        <div className='d-flex flex-column flex-md-row justify-content-between w-75 m-auto mt-3'>
                            <p className='text-light'>Door Knocks</p>
                            <p className='header-link nav-link'>
                                <span className='fs-5 fw-bold'>
                                    {doorKnocks.toLocaleString()} knocks
                                </span>
                            </p>
                        </div>
                    }
                    
                    
                    {selectedMethods.calls &&
                        <div className='d-flex flex-column flex-md-row justify-content-between w-75 m-auto mt-1'>
                            <p className='text-light'>Calls</p>
                            <p className='header-link nav-link'>
                                <span className='fs-5 fw-bold'>
                                    {calls.toLocaleString()} calls
                                </span>
                            </p>
                        </div>
                    }   
                    
                    {selectedMethods.sphereCalls &&
                        <div className='d-flex flex-column flex-md-row justify-content-between w-75 m-auto mt-1'>
                            <p className='text-light'>Sphere Calls</p>
                            <p className='header-link nav-link'>
                                <span className='fs-5 fw-bold'>
                                    {sphereCalls.toLocaleString()} sphere calls
                                </span>
                            </p>
                        </div>
                    }
                    
                    {selectedMethods.openHouses && 
                        <div className='d-flex flex-column flex-md-row justify-content-between w-75 m-auto mt-1'>
                            <p className='text-light'>Open Houses</p>
                            <p className='header-link nav-link'>
                                <span className='fs-5 fw-bold'>
                                    {openHouses.toLocaleString()} open houses
                                </span>
                            </p>
                        </div>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Calculator;
