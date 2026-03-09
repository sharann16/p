import React from 'react'

const SWI = () => {
    const code=`  public static void main(String[] args) {
       JFrame f = new JFrame("Swing App");
       JTextField t = new JTextField(15);
       JButton b = new JButton("Submit");
       JLabel l = new JLabel();
       JPanel p = new JPanel();
       p.add(new JLabel("Enter name:"));
       p.add(t);
       p.add(b);
       p.add(l);
       b.addActionListener(e -> l.setText("Hello " + t.getText()));
       f.add(p);
       f.setSize(350,150);
       f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
       f.setVisible(true);
   }}
`
  return (
    <div style={{ color: 'white' }}>
      <p style={{color:'black'}}>..</p>
        <pre style={{ fontSize: "12px", whiteSpace: "pre-wrap", }}>
        {code}
      </pre>
      
    </div>
  )
}

export default SWI
