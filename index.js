var lines=7;
for (i=1;i<=7;i++){

    for (k=1;k<=(lines-i);k++){
        document.write("&nbsp");
    }
     for (j=1;j<=i;j++){
         document.write("* ");
     }
     document.write("<br>");
}