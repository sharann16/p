import React from 'react'

const Apriori = () => {
    const code=`if (!require("arules")) install.packages("arules")
if (!require("arulesViz")) install.packages("arulesViz")

library(arules)
library(arulesViz)

data("groceries")

rules <- apriori(groceries, parameter = list(support = 0.01, confidence = 0.5))

inspect(head(rules))

plot(head(rules, 10), method = "graph")`
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

export default Apriori
