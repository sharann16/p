import React from 'react'

const Electricity = () => {
    const code =`electricity_data <- data.frame(
temperature = c(18, 24, 29, 33, 37, 26, 31, 36, 21, 28),
appliances = c(2, 4, 5, 7, 9, 5, 6, 8, 3, 4),
hoursused = c(3, 5, 6, 8, 9, 6, 7, 8, 4, 5),
consumption = c(80, 110, 135, 170, 205, 140, 155, 190, 95, 120)
)

print(electricity_data)

lr_model <- lm(consumption ~ temperature + appliances + hoursused,
data = electricity_data)

summary(lr_model)

new_data <- data.frame(
temperature = 34,
appliances = 6,
hoursused = 7
)

prediction <- predict(lr_model, new_data)

cat("predicted electricity consumption:", prediction)`
  return (
    <div>
      <div style={{ color: 'white' }}>
        <p style={{color:'black'}}>..</p>
        <pre style={{ fontSize: '12px', whiteSpace: 'pre-wrap' }}>
          {code}
        </pre>
      </div>
    </div>
  )
}

export default Electricity
