// $(( ) => {
//     $("#btn1").click(( ) => {
//         var amt = $("#in1").val( );
//         var tip = amt * 0.20;
//         // Never leave a tip < $1.
//         if(tip < 1.00) {
//             tip = 1.00;
//         }
//         // Round tip amount to nearest cent.
//         tip = Math.floor(
//         Math.round(tip * 100.0)) / 100.0;
//         $("#out1").val("$" + tip);
//     });
// });
(function() {  
    var btn=document.getElementById("btn");
    btn.addEventListener('click',()=>{
        var amt=document.getElementById('in1').value;
        var tip=amt*0.20;
        if(tip<1.00){
            tip=1.00;
        }
        tip=Math.floor(Math.floor(tip*100.0)) / 100.0;
        document.getElementById('out1').value("$"+tip);

    })
})();  
