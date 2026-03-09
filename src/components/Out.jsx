import React from 'react'

const Out = () => {
    const data=`if (!require("dbscan")) install.packages("dbscan")
if (!require("outliers")) install.packages("outliers")

library(dbscan)
library(outliers)

data <- c(10, 12, 14, 12, 13, 15, 100, 14, 15, 13)

z_scores <- scale(data)
outliers_zscore <- data[abs(z_scores) > 1]
cat("z-score outlier:", outliers_zscore, "\n")

q1 <- quantile(data, 0.25)
q3 <- quantile(data, 0.75)

iqr_value <- IQR(data)

lower_bound <- q1 - 1.5 * iqr_value
upper_bound <- q3 + 1.5 * iqr_value

outliers_iqr <- data[data < lower_bound | data > upper_bound]
cat("iqr outlier:", outliers_iqr, "\n")

boxplot(data, main = "boxplot of data", horizontal = TRUE)

outliers_boxplot <- boxplot.stats(data)$out
cat("boxplot outlier:", outliers_boxplot, "\n")

plot(density(data), main = "density plot")
rug(data)

db <- dbscan(as.matrix(data), eps = 3, minPts = 2)
outliers_dbscan <- data[db$cluster == 0]
cat("dbscan outlier:", outliers_dbscan, "\n")`
  return (
    <div>
         <div style={{ color: 'white' }}>
      <p style={{color:'black'}}>..</p>
        <pre style={{ fontSize: '12px', whiteSpace: 'pre-wrap' }}>
        {data}
      </pre>
      
    </div>
      
    </div>
  )
}

export default Out
