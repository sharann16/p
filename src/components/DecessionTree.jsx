import React from 'react'

const DecessionTree = () => {
    const code=`if (!require("rpart")) install.packages("rpart")
if (!require("caret")) install.packages("caret")

library(rpart)
library(caret)

data(iris)
head(iris)

set.seed(123)
index <- createDataPartition(iris$Species, p = 0.8, list = FALSE)
train_data <- iris[index, ]
test_data <- iris[-index, ]

model <- rpart(Species ~ ., data = train_data, method = "class")

plot(model)
text(model, use.n = TRUE, all = TRUE, cex = 0.8)`
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

export default DecessionTree
