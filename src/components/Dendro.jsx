import React from 'react'

const Dendro = () => {
    const code=`if (!require("ggplot2")) install.packages("ggplot2")
library(ggplot2)

set.seed(42)
n <- 100

cluster1 <- cbind(rnorm(n, mean = 0), rnorm(n, mean = 0))
cluster2 <- cbind(rnorm(n, mean = 5), rnorm(n, mean = 5))

data <- rbind(cluster1, cluster2)
data <- as.data.frame(data)
colnames(data) <- c("x", "y")

ggplot(data, aes(x = x, y = y)) + geom_point() +
  labs(title = "synthetic data for hierarchical clustering") +
  theme_minimal()

dist_matrix <- dist(data, method = "euclidean")

hc <- hclust(dist_matrix, method = "ward.D2")

plot(hc, main = "dendrogram of hierarchical clustering", xlab = "", sub = "")`
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

export default Dendro
