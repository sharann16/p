import React from 'react'

const Visualization = () => {
    const code=`if (!require("ggplot2")) install.packages("ggplot2")
if (!require("dplyr")) install.packages("dplyr")

library(ggplot2)
library(dplyr)

heart_data <- data.frame(
age = c(44, 56, 63, 50, 47, 61, 57, 41, 66, 53),
gender = c("male", "male", "female", "female", "male",
"female", "male", "female", "male", "female"),
cholesterol = c(225, 245, 255, 235, 215, 265, 250, 205, 275, 230),
resting_bp = c(128, 138, 148, 133, 126, 142, 136, 122, 150, 130),
max_heart_rate = c(152, 142, 132, 147, 157, 137, 140, 162, 128, 150),
heart_disease = c("yes", "yes", "yes", "no", "no",
"yes", "yes", "no", "yes", "no")
)

print(heart_data)

ggplot(heart_data, aes(x = heart_disease, fill = heart_disease)) +
geom_bar() +
labs(title = "heart disease distribution",
x = "heart disease",
y = "count") +
theme_minimal()

ggplot(heart_data, aes(x = age, fill = heart_disease)) +
geom_histogram(binwidth = 5, alpha = 0.7) +
labs(title = "age distribution by heart disease",
x = "age",
y = "count") +
theme_minimal()

ggplot(heart_data, aes(x = heart_disease, y = max_heart_rate, fill = heart_disease)) +
geom_boxplot() +
labs(title = "max heart rate by heart disease status",
x = "heart disease",
y = "maximum heart rate") +
theme_minimal()

ggplot(heart_data, aes(x = gender, fill = heart_disease)) +
geom_bar(position = "dodge") +
labs(title = "gender wise heart disease risk",
x = "gender",
y = "count") +
theme_minimal()`
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

export default Visualization
