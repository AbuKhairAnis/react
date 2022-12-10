import React,{useEffect} from 'react';
import ClockDisplay from '../shared/clock_display/ClockDisplay';
import useClock from './../../hooks/useClock';
import ClockActions from '../shared/clock_actions/ClockActions';

const LocalClock = ({ clock, updateClock }) => {
    const { date, timezone, offset } = useClock(clock.timezone, clock.offset);

    useEffect(() => {
        updateClock({
            date,
            timezone,
            offset,
        })
    }, [date])

    return (
        <div>
            {
                date && (<ClockDisplay date={date} title={clock.title} timezone={timezone} offset={offset} />)
            }
            <ClockActions local={true} clock={clock} updateClock ={updateClock}></ClockActions>
        </div>
    );
};

export default LocalClock;