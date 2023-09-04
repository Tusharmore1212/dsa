import javax.swing.*;
import java.awt.*;
import java.sql.*;
import java.awt.event.*;
class swingpro extends Frame implements ActionListener
{
    Label j1,j2;
    TextField t1,t2;
    Button b1;
    Connection con;
    PreparedStatement ps;
    swingpro()
    {  
        try
        {
            con = DriverManager.getConnection("jdbc:mysql://localhost:3306/practice","root","admin");
            if(con!=null)
            {

                System.out.println("connection ok");
            }
            else
            {
                System.out.println("connection failed");
            }
        }
        catch(Exception e)
        {
                            System.out.println(e);
        } 
        
        setLayout(new FlowLayout());
        this.setLayout(null);
        j1 = new Label("name");
        add(j1);
        j1.setBounds(10,30,90,30);
        j1.setFont(new java.awt.Font("Time new Roman",1,30));
        setBackground(new java.awt.Color(0, 0, 204));

        j2 = new Label("class");
        add(j2);
        j2.setBounds(10,60,90,30);

        t1 = new TextField();
        add(t1);
        t1.setBounds(120,30,90,30);

        t2 = new TextField();
        add(t2);
        t2.setBounds(120,60,90,30);

        b1 = new Button("save");
        add(b1);
        b1.setBounds(90,130,90,30);
        b1.addActionListener(this);
       // j1.setBackground(new java.awt.Color(0, 0, 204));

        setSize(600,600);
        setVisible(true);
        
    }
    public void actionPerformed(ActionEvent e)
    {
        if(e.getSource()==b1)
        {
            
            String a = t1.getText();
            String b = t2.getText();
            try
            {
                String sql = "insert into info values(?,?)";
                ps = con.prepareStatement(sql);
                ps.setString(1,a);
                ps.setString(2,b);
                int n = ps.executeUpdate();
                if(n!=0)
                {
                                    System.out.println("data inserted");

                }
            }
            catch(Exception ee)
            {
                                System.out.println(ee);

            }
        }
    }
    public static void main(String args[])
    {
        swingpro c = new swingpro();
    }
}