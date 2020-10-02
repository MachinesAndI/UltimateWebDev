    function insert(num){
        
    document.form.textview.value=document.form.textview.value+num;
        
}
function insert2(num){
        
    document.form.textview.value=num;
        
}
function insert3(){
    var exp =  Math.log(document.form.textview.value);
     document.form.textview.value=exp/2.303;
}
function equal(){
    var exp= document.form.textview.value;
    if(exp)
        {
            document.form.textview.value= eval(exp)
        }
}
function clea(){
    document.form.textview.value = "";
}
function back(){
    var exp=  document.form.textview.value;
     document.form.textview.value = exp.substring(0,exp.length-1);
}
function chngsign(input){
    if(document.form.textview.value.substring(0,1)=="-")
        {
            document.form.textview.value=document.form.textview.value.substring(1,document.form.textview.value.length);
        }
    else
        document.form.textview.value="-"+document.form.textview.value;
}