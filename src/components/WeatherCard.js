import React from "react"

const WeatherCard = (props) => {
    const days = props.days.map(day => {
        return (
            <div className="col-lg-4 mb-lg-0 mb-4" key={day.date}>
                <div className="border p-4 rounded-3">
                    <div className="small text-secondary">{day.date}</div>
                    <div className="row align-items-center">
                        <div className="col-auto">
                            <img src={day.day.condition.icon} alt={day.day.condition.text} />
                        </div>
                        <div className="col">
                            <div className="mb-2">{day.day.condition.text}</div>
                            <div className="small">
                                <strong>Max:</strong> {day.day.maxtemp_c}
                            </div>
                            <div className="small">
                                <strong>Min:</strong> {day.day.mintemp_c}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="row">
            {days}
        </div>
    )
}

export default WeatherCard