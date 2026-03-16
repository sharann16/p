import React from 'react'

const Purchase = () => {
    const code =`<!-- File: purchaseOrder.html (Body Section Only) -->

<body>

<h2>Purchase Order Form</h2>

<form action="processPurchaseOrder.jsp" method="post">

<fieldset>
<legend>Customer Details</legend>

Name: <input type="text" name="customerName" required><br>
Email: <input type="email" name="customerEmail" required><br>
Phone: <input type="tel" name="customerPhone" required><br>

</fieldset>

<fieldset>
<legend>Product Details</legend>

Product: <input type="text" name="productName" required><br>
Quantity: <input type="number" name="quantity" min="1" required><br>
Price/unit: <input type="number" name="pricePerUnit" step="0.01" required><br>

</fieldset>

<input type="submit" value="Submit Order">

</form>

<hr>

<!-- File: processPurchaseOrder.jsp (Body Section Only) -->

<h2>Purchase Order Details</h2>

<%
String cName = request.getParameter("customerName");
String cEmail = request.getParameter("customerEmail");
String cPhone = request.getParameter("customerPhone");
String pName = request.getParameter("productName");

int qty = 0; 
double price = 0;

try { qty = Integer.parseInt(request.getParameter("quantity")); } catch(Exception e){}
try { price = Double.parseDouble(request.getParameter("pricePerUnit")); } catch(Exception e){}

double total = qty * price;
%>

<fieldset>
<legend>Customer Details</legend>
<p><b>Name:</b> <%= cName %></p>
<p><b>Email:</b> <%= cEmail %></p>
<p><b>Phone:</b> <%= cPhone %></p>
</fieldset>

<fieldset>
<legend>Product Details</legend>
<p><b>Product Name:</b> <%= pName %></p>
<p><b>Quantity:</b> <%= qty %></p>
<p><b>Price per Unit:</b> Rs.<%= String.format("%.2f", price) %></p>
</fieldset>

<fieldset>
<legend>Order Summary</legend>
<p><b>Total Price:</b> Rs.<%= String.format("%.2f", total) %></p>
</fieldset>

<p><a href="purchaseOrder.html">Go Back to Purchase Form</a></p>

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

export default Purchase
