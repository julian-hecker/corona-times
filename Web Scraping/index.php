<!-- Source used https://www.youtube.com/watch?v=hT0juFPWVPc -->
<?php
include_once('connection.php');
$SQL="SELECT * FROM Coronadb.tbl_Outbreak;";
$result=mysqli_query($conn,$SQL);
?>

<!DOCTYPE html>
<html> 
<style>
table{
    font-family: arial, sans-serif;
    border-collapse: collapse;

}
td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 4px;
}
tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
    <title>Corona Update From Database</title>
<body>
       
    <table style="width:100%" align="center" border="1px" style="width:600px; line-height:40px;">
        <tr>
            <th colspan="4"><h2>Corona Information</h2></th>
        </tr>
        <tr>
            <th>Country</th>
            <th>Infected</th>
            <th>Dead</th>
            <th>Continent</th>
            <th>Date</th>
        </tr>
        
    <?php
        while($rows=mysqli_fetch_assoc($result)){
    ?>
            <tr>
                <td><?php echo $rows['Country'] ?></td>
                <td><?php echo $rows['Infected'] ?></td>
                <td><?php echo $rows['Dead'] ?></td>
                <td><?php echo $rows['Continent']; ?></td>
                <td><?php echo $rows['Date'] ?></td>
            </tr>
    <?php
        }
    ?>
    </table>

</body> 
</html>