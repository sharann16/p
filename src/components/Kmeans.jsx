import React from 'react'

const Kmeans = () => {
    const data=`if (!require("ggplot2")) install.packages("ggplot2")
library(ggplot2)

set.seed(42)
n <- 100

cluster1 <- cbind(rnorm(n, mean = 0), rnorm(n, mean = 0))
cluster2 <- cbind(rnorm(n, mean = 5), rnorm(n, mean = 5))

data <- rbind(cluster1, cluster2)

data <- as.data.frame(data)
colnames(data) <- c("x", "y")

ggplot(data, aes(x = x, y = y)) + geom_point() +
  labs(title = "scatter plot of synthetic data") +
  theme_minimal()

kmeans_result <- kmeans(data, centers = 2)
print(kmeans_result)`
  return (
    <div>
 <div style={{ color: 'white' }}>
      <p style={{color:'black'}}>..</p>
      <pre style={{ fontSize: "12px", whiteSpace: "pre-wrap", }}>
        {data}
      </pre>
    </div>

      
    </div>
  )
}

export default Kmeans
