import React from 'react'

const Formdate = () => {
    const code =`    <h2>Enter Your Information</h2>
    <form action="FormHandlerServlet" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br><br>

        <input type="submit" value="Submit">
    </form>

    response.setContentType("text/html");
       String name = request.getParameter("name");
       String email = request.getParameter("email");
       PrintWriter out = response.getWriter();
       out.println("<html>");
       out.println("<head><title>Form Output</title></head>");
       out.println("<body>");
       out.println("<h2>Form Submitted Successfully!</h2>");
       out.println("<p><b>Name:</b> " + name + "</p>");
       out.println("<p><b>Email:</b> " + email + "</p>");
       out.println("</body>");
       out.println("</html>");

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

export default Formdate
