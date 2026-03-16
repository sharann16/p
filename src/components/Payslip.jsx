import React from 'react'

const Payslip = () => {
    const code=`<!-- File: employeePaySlip.html (Body Section Only) -->

<body>

<h2>Employee Pay Slip Form</h2>

<form action="generatePaySlip.jsp" method="post">

<fieldset>
<legend>Employee Details</legend>

<input type="text" name="empName" placeholder="Employee Name" required><br><br>
<input type="text" name="empID" placeholder="Employee ID" required><br><br>
<input type="text" name="department" placeholder="Department" required>

</fieldset>

<fieldset>
<legend>Salary Details</legend>

<input type="number" name="basicSalary" placeholder="Basic Salary" step="0.01" required><br><br>
<input type="number" name="hra" placeholder="HRA" step="0.01" required><br><br>
<input type="number" name="otherAllowances" placeholder="Other Allowances" step="0.01" required><br><br>
<input type="number" name="deductions" placeholder="Deductions" step="0.01" required>

</fieldset>

<br>
<input type="submit" value="Generate Pay Slip">

</form>

<hr>

<!-- File: generatePaySlip.jsp (Body Section Only) -->

<h2>Employee Pay Slip</h2>

<%
String name = request.getParameter("empName");
String id = request.getParameter("empID");
String dept = request.getParameter("department");

double basic = Double.parseDouble(request.getParameter("basicSalary"));
double hra = Double.parseDouble(request.getParameter("hra"));
double other = Double.parseDouble(request.getParameter("otherAllowances"));
double ded = Double.parseDouble(request.getParameter("deductions"));

double gross = basic + hra + other;
double net = gross - ded;
%>

<fieldset>
<legend>Employee Details</legend>
<p>Name: <%= name %></p>
<p>ID: <%= id %></p>
<p>Department: <%= dept %></p>
</fieldset>

<fieldset>
<legend>Salary Details</legend>
<p>Basic: Rs. <%= basic %></p>
<p>HRA: Rs. <%= hra %></p>
<p>Other Allowances: Rs. <%= other %></p>
<p>Gross Salary: Rs. <%= gross %></p>
<p>Deductions: Rs. <%= ded %></p>
<p><strong>Net Salary: Rs. <%= net %></strong></p>
</fieldset>

<a href="employeePaySlip.html">Go Back</a>

</body>
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

export default Payslip
