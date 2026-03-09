import React from 'react'

const Session = () => {
    const code=`<!-- File: login.jsp (Body Section Only) -->

<body>

<h2>Login</h2>

<form action="welcome.jsp" method="post">
<label for="username">Enter your name:</label>
<input type="text" id="username" name="username" required>
<button type="submit">Login</button>
</form>

<hr>

<!-- File: welcome.jsp (Body Section Only) -->

<%
String username = request.getParameter("username");

if (username != null && !username.isEmpty()) {
    session.setAttribute("username", username);
} else {
    username = (String) session.getAttribute("username");
}

if (username == null || username.isEmpty()) {
    response.sendRedirect("login.jsp");
    return;
}
%>

<h2>Welcome, <%= username %>!</h2>
<p>You are successfully logged in.</p>
<p><a href="logout.jsp">Logout</a></p>

<hr>

<!-- File: logout.jsp (Body Section Only) -->

<%
session.invalidate();
%>

<h2>You have successfully logged out!</h2>
<p><a href="login.jsp">Login Again</a></p>

</body>`
  return (
    <div style={{ color: 'white' }}>
      <p style={{color:'black'}}>..</p>
        <pre style={{ fontSize: '12px', whiteSpace: 'pre-wrap' }}>
        {code}
      </pre>
      
    </div>
  )
}

export default Session
