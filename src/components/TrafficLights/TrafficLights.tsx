import './TrafficLights.css'
import { TrafficLight, Text, Size } from '../../in'

export type componenetsStatus = "ERROR" | "WARN" | "OK";

interface statusComponents {
    ComponentStatus: componenetsStatus;
    counter: number;
}

interface props {
    SDerivedStatusCounter: statusComponents[]
    size?: Size;
    className?: string;
}

const statusToColor = (status: componenetsStatus) => {
    switch (status) {
        case "ERROR":
            return "red";
        case "WARN":
            return 'orange';
        case 'OK':
            return 'green';
    }
}

const TrafficLights = ({ SDerivedStatusCounter, className, size="small" }: props) => {
    return (
        <div className={`trafficlights-container ${className}`} >
            {SDerivedStatusCounter.map(({ ComponentStatus, counter }) => {
                return (!!counter) && (
                    <div className='bit-traffic-lights'>
                        <TrafficLight
                            text={counter.toString()}
                            circleColor={statusToColor(ComponentStatus)}
                            size={size}
                        />

                    </div>
                )
            })}
        </div>
    )
}

export { TrafficLights }