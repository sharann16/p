import React from 'react'

const Header = () => {
    const code =`PrintWriter out = response.getWriter();

Enumeration<String> headerNames = request.getHeaderNames();

out.println("<h2>Received HTTP Request Headers:</h2>");

while (headerNames.hasMoreElements()) {
    String headerName = headerNames.nextElement();
    String headerValue = request.getHeader(headerName);
    out.println("<p><b>" + headerName + ":</b> " + headerValue + "</p>");
}
`
  return (
    <div style={{ color: 'white' }}>
      <p style={{color:'black'}}>..</p>
        <pre style={{ fontSize: '12px', whiteSpace: 'pre-wrap' }}>
        {code}
      </pre>
      
    </div>
  )
}

export default Header
