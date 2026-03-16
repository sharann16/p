import React from 'react'

const Classification = () => {
    const code=`library(class)

view(iris)

train.indeces <- sample(1:nrow(iris), 100)
iris.train <- iris[train.indeces, ]
iris.test <- iris[-train.indeces, ]

results <- knn(train = subset(iris.train, select = -species),
               test = subset(iris.test, select = -species),
               cl = iris.train$species)

plot(results)
table(results, iris.test$species)`
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

export default Classification
